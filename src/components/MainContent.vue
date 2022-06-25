<template>
    <div class="main-content">
        <InputArea @generate="onGenerate"/>
        <Viewer ref="viewer" />
    </div>
</template>
<script setup lang='ts'>
import InputArea from './InputArea.vue';
import Viewer from './Viewer.vue';
import { analyze } from '../api';
import { ref } from 'vue';
const viewer = ref()
const onGenerate = async (content: string) => {
    const r = await analyze(content.split('\n')).catch(err => {
        console.error(err)
        alert('错误')
        return null;
    })
    if (r) {
        viewer.value.setResult(r.data)
    }
}
</script>
<style lang="scss" scoped>
.main-content {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;

    >* {
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
    }
}
</style>