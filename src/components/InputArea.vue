<template>
    <div class="input-area">
        <div class="inner">
            <div class="controls">
                <div class="title">Input text here</div>
                <div class="btns">
                    <div class="btn" @click="onConfigurationClick">Configuration</div>
                    <!-- <div class="btn"></div> -->
                </div>
            </div>
            <div class="main-input">
                <div class="main-input-content">
                    <textarea name="content" id="content" placeholder="Place input text" v-model="content">

                    </textarea>
                </div>

            </div>
            <div class="generate-btn-box">
                <div class="generate-btn hvr-grow-rotate" @click="onGenerateBtnClicked"
                    :class="{ inactive: content.length == 0 }">
                    Generate!
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import useEmitter from '../uses/useEmitter'


const content = ref('')
const globalEmitter = useEmitter()
const emit = defineEmits(['generate'])

const onConfigurationClick = () => {
    globalEmitter.emit('open-param-panel')
}

const onGenerateBtnClicked = () => {
    if (content.value === '') {
        alert('Please input some text then generate')
    }
    emit('generate', content.value)
}

</script>
<style lang="scss" scoped>
.input-area {
    min-width: 300px;
    width: 40%;
    max-width: 600px;

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

        >* {
            width: 100%;
        }

        .controls {
            padding: 20px 20px;
            box-sizing: border-box;
            display: flex;
            flex-flow: nowrap row;
            justify-content: space-between;
            align-items: center;
            background-color: #1f2937;
            color: white;
            box-shadow: 0 2px 4px 1px rgba(0, 0, 0, .1);
            user-select: none;

            .title {
                font-size: larger;
                font-weight: bold;
                // text-transform:uppercase;
            }

            .btns {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-flow: row-reverse;

                .btn {
                    cursor: pointer;
                    position: relative;
                    margin-left: 12px;
                    font-weight: bold;
                    font-size: medium;
                    // padding-bottom: 2px;
                    // border-bottom: 1px solid white;

                    &::after {
                        content: '';
                        position: absolute;
                        bottom: -4px;
                        width: 100%;
                        left: 0;
                        right: 0;
                        background-color: white;
                        height: 1px;
                        opacity: 0;
                    }

                    &:hover {
                        &::after {
                            opacity: 1;
                        }
                    }
                }
            }
        }

        .main-input {
            flex: 1;
            padding: 20px;
            box-sizing: border-box;

            .main-input-content {
                height: 100%;
                border: 1px solid rgba(0, 0, 0, .1);
                padding: 2px;
                box-sizing: border-box;

                #content {
                    width: 100%;
                    height: 100%;
                    -webkit-box-sizing: border-box;
                    /* Safari/Chrome, other WebKit */
                    -moz-box-sizing: border-box;
                    /* Firefox, other Gecko */
                    box-sizing: border-box;
                    /* Opera/IE 8+ */
                    border: none;
                    overflow: auto;
                    resize: none;
                    outline: none;
                    color: #1f2937;
                    line-height: 1.5;
                }
            }
        }

        .generate-btn-box {
            padding: 0px 20px;
            padding-bottom: 20px;
            // background-color: black;
            box-sizing: border-box;

            .generate-btn {
                width: 80%;
                color: white;
                padding: 20px 20px;
                box-sizing: border-box;
                border-radius: 16px;
                cursor: pointer;
                box-shadow: 0 2px 4px 1px rgba(0, 0, 0, .1);
                ;

                background-color: #5046e4;
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