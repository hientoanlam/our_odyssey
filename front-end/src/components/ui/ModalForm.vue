<template>
    <div 
    class="p-6 rounded bg-gradient-to-br to-transparent border backdrop-blur-lg"
    :class="[`from-${color}/40`, `border-${color}`]" 
    >
        <div class="flex flex-row justify-between items-center mb-6">
            <div>
                <CloseButton @click="$emit('close')"></CloseButton>
            </div>
            <div class="text-white text-center font-bold text-l">{{ title }}</div>
            <div>
                <CloseButton @click="$emit('close')" :show="is_shown"></CloseButton>
            </div>
        </div>
        <div class="overflow-y-scroll max-h-72 mb-6">
            <pre class="whitespace-pre-line text-white text-justify text-base">
            {{msg}}
            </pre>
        </div>
    </div>
</template>

<script setup>
    import CloseButton from "@/components/ui/CloseButton.vue"
    defineProps({
        is_shown: {type: Boolean, default: false},
        msg: {type: String, default: "meo meo"},
        title: String,
        color: {type: String, default: 'white'}
    })

</script>

<style scoped>
</style>