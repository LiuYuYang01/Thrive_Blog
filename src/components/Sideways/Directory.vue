<script setup lang="ts">
import { getArticleAPI } from '@/api/Article';
import { ref } from 'vue'

const doms = ref<any>([]);

// 获取文章的数据
const getContent = async () => {
    try {
        await getArticleAPI(100)

        // 转换为真数组
        doms.value = Array.from(document.querySelectorAll(".content h1,.content h2,.content h3"))

        // 去除为空的标题
        doms.value = doms.value.filter((item: HTMLElement) => { if (item.innerHTML) return item })
    } catch (error) {
        console.log(error);
    }
}

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
                    <!-- 查看有没有item.getAttribute('two')，有就是二级目录，没有就是一级目录 -->
                    <a :href="`#${item.id}`" :style="{ paddingLeft: item.getAttribute('two') ? '30px' : '' }">{{
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
                width: 100%;
                padding: 10px;
                padding-left: 10px;
                transition: all 0.3s;

                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                box-sizing: border-box;

                &:hover {
                    color: $color;
                    background-color: #f7f9fa;
                }
            }
        }

        // 二级目录
        .two>li a {
            font-size: 15px;
        }
    }
}
</style>
