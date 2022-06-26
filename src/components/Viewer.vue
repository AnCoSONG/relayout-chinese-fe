<template>
    <!-- 展示渲染效果 -->
    <div class="viewer">
        <div class="inner">
            <div class="content box" v-if="result != ''" v-html="cleanResult" :style="{
                '--jieba-v-wght': jiebaVWght
            }">
            </div>
            <div class="no-content box" v-else>
                <img :src="emptySvg" alt="none" class="image" />
                <div class="message"> Input some text and click "generate!"</div>
            </div>
            <div class="btns">
                <div class="btn hvr-grow-rotate" :class="{inactive: result.length == 0}" @click="clearResult">Clear</div>
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { computed, ref } from 'vue';
import emptySvg from '../assets/empty.svg'
import Dompurify from 'dompurify'
const result = ref('')
const jiebaVWght = ref(900)
const cleanResult = computed(() => {
    return Dompurify.sanitize(result.value)
})

const setResult = (content: string) => {
    result.value = content
}
const clearResult = () => {
    result.value = ''
}
defineExpose({
    setResult
})
</script>
<style lang="scss">
.viewer {
    flex: 1;
    min-width: 600px;
    width: 100%;

    .inner {
        width: 100%;
        height: 100%;
        background-color: white;
        display: flex;
        flex-flow: nowrap column;
        justify-content: space-between;
        align-items: center;
        border-radius: 16px;
        box-shadow: 0 0 16px 4px rgba(0, 0, 0, .1);
        overflow: hidden;
        padding: 20px 40px;
        box-sizing: border-box;

        .box {
            // border: 2px dotted #dadada;
            // border: 2px dashed rgba(0, 0, 0, .1);
            width: 100%;
            height: 100%;
            border-radius: 8px;
            margin-bottom: 10px;

            &.content {
                position: relative;
                display: block;
                text-align: left;
                overflow: auto;
                line-height: 1.5;
                text-indent: 2em;

                article {
                    // line-height: 1.3;

                    p {
                        text-indent: 2em;
                        text-align: unset;

                        // 定义好各种词的属性

                        span {
                            display: inline-block;
                            &.jieba-v {
                                font-variation-settings: "wght" var(--jieba-v-wght);
                            }
                        }
                    }
                }
            }

            &.no-content {
                display: flex;
                flex-flow: nowrap column;
                justify-content: center;
                align-items: center;

                .image {
                    width: 20%;
                    // height: 20%;
                    display: block;
                    margin-bottom: 40px;
                }

                .message {
                    color: #aaa;
                    font-weight: bold;
                    // font-size: large
                }
            }

        }

        .btns {
            padding: 0px 20px;
            padding-bottom: 0px;
            display: flex;
            flex-flow: nowrap row;
            align-items: center;
            justify-content: center;
            width: 100%;

            .btn {
                width: 40%;
                min-width: 100px;
                max-width: 600px;
                color: white;
                padding: 20px 20px;
                box-sizing: border-box;
                border-radius: 16px;
                cursor: pointer;
                box-shadow: 0 2px 4px 1px rgba(0, 0, 0, .1);
                background-color: #4b413b;
                font-weight: bold;

                &.inactive {
                    background-color: #c1c1c1;
                    pointer-events: none;
                }
            }
        }


    }
}
</style>