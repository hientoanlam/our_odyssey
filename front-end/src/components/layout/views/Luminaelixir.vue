<template>
  <div class="text-center title text-xl text-white font-bold my-12 ml-6 tracking-1">luminaelixir</div>
  <div class="grid grid-cols-12 gap-x-6">
        <div class="col-span-4">
        </div>
        <div class="col-span-4 flex justify-center">
          <div class="flex items-center relative" id="jar">
            <img src="@/assets/images/jar.svg" class="w-full h-full"/>
            <div class="flex w-full h-full flex justify-center items-center">
              <CapsuleContainer
              @capsule-clicked="handleCapsuleClicked"
              />
            </div>
          </div>
        </div>
        <div class="col-span-3"></div>
        <div class="col-span-1 flex justify-center items-center">
          <SvgIcon
            class="absolute hover:text-red cursor-pointer transition duration-300 bottom-6 text-white z-1"
            size="24"
            type="mdi"
            :path= "mdiHelpCircle"
            @click="showModalForm = true"
          ></SvgIcon>
      </div>
  </div>
  <Transition name="fade">
    <CapsuleView 
    v-if="showCapsule" 
    @close="showCapsule = false"
    @capsule-dblclicked = "showCapsuleMessage = true"
    :color="selectedCapsuleColor"
    :style="`z-index: 15`"
    ></CapsuleView>
  </Transition>
  <Transition name="fade">
    <ModalView 
      v-if="showModalForm" 
      :is_shown="true"
      @close="showModalForm = false" 
      title="information"
    ></ModalView>
  </Transition>
  <Transition name="message">
    <ModalView 
      v-if="showCapsuleMessage" 
      :is_shown="false"
      :color="'neon-' + selectedCapsuleColor"
      @close="showCapsuleMessage = false" 
      title="for you only"
      class="select-none"
    ></ModalView>
  </Transition>
</template>

<script setup>
  import { ref } from 'vue'
  import { mdiHelpCircle } from '@mdi/js'
  import SvgIcon from "@jamescoyle/vue-icon"
  import ModalView from "@/components/layout/views/ModalView.vue"
  import CapsuleView from "@/components/layout/views/CapsuleView.vue"
  import CapsuleContainer from "@/components/layout/views/CapsuleContainer.vue"

  const showModalForm = ref(false);
  const showCapsuleMessage = ref(false);
  const showCapsule = ref(false);
  const selectedCapsuleColor = ref("blue");

  const handleCapsuleClicked = (_, color) => {
    showCapsule.value = true;
    selectedCapsuleColor.value = color;
  };
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .message-enter-active {
    transition: opacity 0.5s ease;
  }
  .message-enter-from,
  .message-leave-to {
    opacity: 0
  }

  .message-leave-from {
    opacity: 1;
  }
  .message-leave-active {
    transition: opacity 2.5s ease-in-out, background-color 0.5s ease-in-out;
    background-color: var(--white);
  }

  @keyframes flash {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
