<script setup lang="ts">
import { ref } from 'vue';

const list = ref()
</script>

<template>
    <div class="HotArticle">
        <h3 class="title">
            <img src="@/assets/svg/other/fire.svg" alt=""> 热门文章
        </h3>

        <!-- 文章列表 -->
        <div class="list">
            <div class="item">
                <a href="javascript:;">
                    <h4>20个你从未想过的 ChatGPT 有趣用途</h4>
                </a>

                <span>1</span>
            </div>

            <div class="item">
                <a href="javascript:;">
                    <h4>20个你从未想过的 ChatGPT 有趣用途</h4>
                </a>

                <span>2</span>
            </div>

            <div class="item">
                <a href="javascript:;">
                    <h4>20个你从未想过的 ChatGPT 有趣用途</h4>
                </a>

                <span>3</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/public.scss";

.HotArticle {
    padding: 15px;
    margin-top: 20px;
    background-color: #fff;
    @include container;

    // 文章模块标题
    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
        font-size: 17px;
        font-weight: 400;
        color: #333;

        img{
            width: 30px;
            height: 20px;
        }
    }

    // 文章列表
    .list {
        padding-top: 10px;

        .item {
            position: relative;
            height: 130px;
            margin-bottom: 10px;
            border-radius: $round;
            background: url("https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ab6d654bb3747a2af609d15b8fb387e~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp") no-repeat;
            background-size: 100%;
            transform: scale(1);
            transition: background-size $move;

            // 阴影
            &::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 50px;
                background-image: linear-gradient(transparent, #000);
                opacity: 0;
                transition: opacity $move;
            }

            // 鼠标经过效果
            &:hover {
                background-size: 105%;

                &::after {
                    opacity: 1;
                }
            }

            a {
                display: inline-block;
                width: 100%;
                height: 100%;
            }

            // 文章标题
            h4 {
                position: absolute;
                bottom: 10px;
                width: 95%;
                padding: 0 10px;
                color: #fff;
                font-size: 15px;
                font-weight: 400;
                z-index: 1;

                // 文本溢出隐藏
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            // 排名
            span {
                position: absolute;
                top: 10px;
                left: -20px;
                width: 30px;
                height: 25px;
                padding-left: 7px;
                color: #fff;
                font-weight: 900;
                border-top-right-radius: 50%;
                border-bottom-right-radius: 50%;
                background-color: #f83356;
                box-sizing: border-box;

                &::after {
                    content: "";
                    position: absolute;
                    bottom: -5px;
                    left: 0px;
                    width: 0;
                    height: 0;
                    border: 5px solid;
                    border-color: transparent transparent transparent #f83356;
                }
            }
        }

        .item:nth-of-type(2) span {
            background-color: #faa527;

            &::after {
                border-color: transparent transparent transparent #faa527;
            }
        }

        .item:nth-of-type(3) span {
            background-color: #3c83fd;

            &::after {
                border-color: transparent transparent transparent #3c83fd;
            }
        }

        .item:last-of-type {
            margin-bottom: 0;
        }
    }
}
</style>
