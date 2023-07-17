<template>
    <div class="top-0 absolute grid grid-cols-12 w-full gap-x-6 bg-black/90" :style="`z-index: 15`">
        <div class="col-span-3"></div>
        <div class="col-span-6 flex flex-col justify-center items-center h-screen w-full">
            <div :class="{'hover:drop-shadow-[0.5rem_0.5rem_2rem_rgba(255,255,255,0.3)] transition duration-500 cursor-pointer': !is_shown}">
                <ModalForm
                :is_shown="is_shown"
                @close="$emit('close')"
                @dblclick="$emit('close', capKey)"
                :color="color"
                :title="title"
                :msg="msg"
                class="w-auto"
                ></ModalForm>
            </div>
            <div v-show="!is_shown" class="absolute text-white/70 self-center bottom-8">double-click the message to claim it</div>
            <!--
                <div
            v-show="!is_shown" 
            class="p-3 rounded-full mt-4 font-bold w-[15%] text-center text-white text-base bg-gradient-to-br to-transparent border-2 border-white backdrop-blur-lg cursor-pointer transition duration-300"
            :class="[`hover:from-${color}`, `hover:border-${color}`]"
            >
                CLAIM
            </div>
            -->
        </div>
        <div class="col-span-3"></div>
    </div>
</template>

<script setup>
    import ModalForm from "@/components/ui/ModalForm.vue"
    defineProps({
        is_shown: {type: Boolean, default: false},
        msg: {type: String, default: "meo meo"},
        title: String,
        color: {type: String, default: 'white'},
        capKey: {type: String, default: ''}
    })
</script>

<style scoped>
</style>
