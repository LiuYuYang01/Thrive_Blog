<script setup lang="ts">
// import { onMounted } from 'vue';

// onMounted(() => {
//     console.log(document.querySelectorAll("p"));
// })
</script>

<template>
    <div class="Directory">
        <div class="title">
            <img src="@/assets/svg/other/Directory.svg" alt="">
            <span>文章目录</span>
        </div>

        <!-- 文章目录 -->
        <div class="list">
            <ul class="one">
                <li>
                    <a href="#h2-0">更新日志</a>
                </li>

                <li>
                    <a href="#h2-1">支持功能</a>

                    <ul class="two">
                        <li>
                            <a href="#h2-1-2">输出优化</a>
                        </li>

                        <li>
                            <a href="#h2-1-3">函数禁用</a>
                        </li>

                        <li>
                            <a href="#h2-1-4">功能开关</a>
                        </li>

                        <li>
                            <a href="javascript:;">优化加速</a>
                        </li>

                        <li>
                            <a href="javascript:;">功能增强</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="#h2-4">使用说明</a>
                </li>

                <li>
                    <a href="javascript:;">下载地址</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/public.scss";

.Directory {
    padding: 20px 0;
    margin-top: 20px;
    background-color: #fff;
    @include container;

    // 文章模块标题
    @include titleRight;

    .title {
        img {
            width: 40px;
            height: 30px;
        }
    }

    // 目录
    .list {
        margin-top: 10px;

        li {
            padding: 0 10px;

            a {
                display: inline-block;
                width: 88%;
                padding: 10px;
                padding-left: 20px;
                transition: all $move;

                &:hover {
                    color: $color;
                    background-color: #f7f9fa;
                }
            }
        }

        // 二级目录
        .two>li a {
            font-size: 15px;
            padding-left: 30px;
        }
    }
}
</style>
