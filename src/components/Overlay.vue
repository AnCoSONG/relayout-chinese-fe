<template>
    <div class="global-overlay" :class="{ active: toggle }" @click="onOverlayClick"></div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import useEmitter from '../uses/useEmitter';
const toggle = ref(false)
const globalEmitter = useEmitter()
globalEmitter.on('open-param-panel', () => {
    toggle.value = true
})
globalEmitter.on('deactivate-overlay', () => {
    toggle.value = false
})

const onOverlayClick = () => {
    toggle.value = false
    globalEmitter.emit('close-param-panel')
}

</script>
<style lang="scss" scoped>
.global-overlay {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: transparent;
    z-index: 0;
    transition: all 0.5s ease-in-out;

    &.active {
        background-color: rgba(0, 0, 0, .6);
        z-index: 5;
    }
}
</style>