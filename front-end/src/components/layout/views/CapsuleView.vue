<template>
  <div class="top-0 grid grid-cols-12 w-full gap-x-6 bg-black/90 absolute">
      <div class="col-span-3"></div>
      <div class="col-span-6 flex flex-col justify-center items-center h-screen">
        <TransitionGroup name="fadeT">
          <Capsule 
            @dblclick="dbClickHandler" 
            :color="color" 
            :style="`z-index: 20;`"
            :class="{
            'cursor-pointer hover:drop-shadow-[0.5rem_0.5rem_1rem_rgba(255,255,255,0.3)] transition duration-300': is_correct
            }"
          />
          <div v-if="!is_correct">
            <div class="text-center text-base text-white mt-12 mb-2">enter passcode</div>
            <input 
            type="password" 
            class="p-1 pl-4 text-white rounded-full outline-none bg-white/0 bg-gradient-to-br border backdrop-blur-lg"
            @keyup.enter="signIn" 
            v-model="passInput"
            :class="{'shake from-red/40 border-red': animated && !is_correct, 'from-white/40 border-white': !animated}"
            :disabled="animated"
            @copy="preventCopy"
            >
          </div>
          <div v-else 
          class="text-center text-base text-white mt-12 mb-2"
          style="transition-delay: 1s"
          >double-click the capsule to read the message</div>
        </TransitionGroup>
      </div>
      <div class="col-span-2"></div>
      <div class="col-span-1 flex justify-center items-center">
        <CloseButton class="absolute top-[5%]" @click="closeHandler" :show="true"></CloseButton>
      </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
  import CloseButton from "@/components/ui/CloseButton.vue"
  import Capsule from '@/components/ui/Capsule.vue'
  
  const animated = ref(false);
  const passInput = ref('');
  const is_correct = ref(false);
  const dbClickHandler = () => {
    if (is_correct.value === true) {
      closeHandler();
      emit('capsule-dblclicked');
    }
  }

  const signIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(getAuth(), 'lhtoan20@apcs.vn', passInput.value);
      is_correct.value = true;
    } catch (error) {
      console.error(error);
      animated.value = true;
      setTimeout(() => {
        animated.value = false;
      }, 1000);
    }
  };

  const preventCopy = (event) => {
    event.preventDefault();
  };

  const emit = defineEmits(['close', 'capsule-dblclicked']);
  const closeHandler = () => { // Assign this.$emit to a variable
    emit('close'); // Emit 'close' event
  };
  defineProps({
    color: {type: String, default: 'blue'},
  })
</script>

<style scoped>
.fadeT-move,
.fadeT-enter-active,
.fadeT-leave-active {
  transition: transform 2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s;
}

.fadeT-enter-from,
.fadeT-leave-to {
  opacity: 0;
}

.fadeT-leave-active {
  position: absolute;
}
</style>