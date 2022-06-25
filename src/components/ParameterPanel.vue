<template>
    <div class="parameter-panel" :class="{ active: toggle }">
        <div class="content" @click="closePanel">
            <!-- 定义内容 -->
            Parameter Panel
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import useEmitter from '../uses/useEmitter';
const globalEmitter = useEmitter()
const toggle = ref(false)
const closePanel = () => {
    toggle.value = false
    globalEmitter.emit('deactivate-overlay')
}
globalEmitter.on('open-param-panel', () => {
    toggle.value = true;
})
globalEmitter.on('close-param-panel', () => {
    toggle.value = false
})
</script>
<style lang="scss" scoped>
.parameter-panel {
    position: absolute;
    z-index: 10;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 30%;
    min-width: 400px;
    max-width: 600px;
    left: 0;
    background-color: white;
    transform: translate(-100%);
    transition: all 0.5s ease-in-out;

    &.active {
        transform: translate(0);
    }

    .content {
        height: 100%;
        // width: 50%;
        // background-color: black;
    }
}
</style>