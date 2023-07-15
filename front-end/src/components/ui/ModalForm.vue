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
            “luminaelixir” combines “lumina” (light) and “elixir” (magical potion) to represent a potent source of light, positivity, and healing. It means that I want to provide something for you to be happy and shiny.
            
            This bottle contains a lot of capsules prepared by me. Whenever you are in a bad mood, please feel free to pick up one capsule to read my uplifting message.
            
            I am not sure that you will be better after reading the message, but keep in mind that I will always be by your side.
            </pre>
        </div>
    </div>
</template>

<script setup>
    import CloseButton from "@/components/ui/CloseButton.vue"
    defineProps({
        is_shown: {type: Boolean, default: false},
        msg: String,
        title: String,
        color: {type: String, default: 'white'}
    })
</script>

<style scoped>

</style>