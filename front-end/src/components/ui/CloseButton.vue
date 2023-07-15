<template>
    <SvgIcon
    v-show="show"
    class="close-btn"
    size="24"
    type="mdi"
    :path="mdiWindowClose"
    ></SvgIcon>
</template>

<script setup>
    import { mdiWindowClose } from '@mdi/js';
    import SvgIcon from "@jamescoyle/vue-icon";
    defineProps({
        show: {type: Boolean, default: false}
    })
</script>

<style scoped>

</style>
