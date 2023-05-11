<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const doms = ref<any>([]);
const content = ref("")

// 获取文章的数据
const getContent = async () => {
    try {
        const { data } = await axios("https://mock.apifox.cn/m1/2561526-0-default/api/code")
        content.value = data.content

        doms.value = document.querySelectorAll(".content h1,.content h2,.content h3")
    } catch (error) {
        console.log(error);
    }
}
getContent()
getContent()
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
                <li v-for="item in doms" :key="item">
                    <a :href="`#${item.id}`" :style="{ paddingLeft: item.getAttribute('two') ? '50px' : '' }">{{
                        item.innerHTML }}</a>
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
