<script setup lang="ts">
import { randomImage } from '@/util/randomImage'
import { getArticleListAPI } from '@/api/Article'
import { Article } from '@/types/Article';

const loading = ref(false)
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `

const ArticleList = ref<Article[]>([]);

const getArticleData = async () => {
    loading.value = true;

    const { data } = await getArticleListAPI();
    const generatedNumbers: number[] = [];

    // 随机生成不重复的数
    function getRandom(min: number, max: number) {
        let randomNum = Math.floor(Math.random() * (max - min + 1) + min);

        while (generatedNumbers.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * (max - min + 1) + min);
        }

        generatedNumbers.push(randomNum);
        return randomNum;
    }

    for (let i = 1; i <= 4; i++) {
        const randomIndex = getRandom(0, data.length - 1);
        ArticleList.value?.push(data[randomIndex]);
    }

    loading.value = false;
};

getArticleData();
</script>

<template>
    <div class="HotArticle">
        <h3 class="title">
            <img src="@/assets/svg/other/fire.svg" alt=""> 随机推荐
        </h3>

        <!-- 文章列表 -->
        <div class="list" v-loading="loading" element-loading-text="Loading..." :element-loading-spinner="svg"
            element-loading-svg-view-box="-10, -10, 50, 50">
            <div class="item" :style="{ backgroundImage: `url(${item.cover || randomImage()})` }"
                v-for="item, index in ArticleList">
                <a href="javascript:;">
                    <h4>{{ item.title }}</h4>
                </a>

                <span>{{ index + 1 }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/public.scss";

.HotArticle {
    padding: 15px;
    margin-top: 20px;
    background-color: $boxColor;
    @include container;

    // 文章模块标题
    @include titleRight;

    // 文章列表
    .list {
        padding-top: 10px;
        min-height: 120px;

        .item {
            position: relative;
            height: 130px;
            margin-bottom: 10px;
            border-radius: $round;
            background: url("https://liuyuyang.net/usr/uploads/2023/06/1705766133.jpg") center no-repeat;
            background-size: 100%;
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
                transition: opacity $move;
            }

            // 鼠标经过效果
            &:hover {
                background-size: 105%;
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

        .item:nth-of-type(4) span {
            background-color: #56c357;

            &::after {
                border-color: transparent transparent transparent #56c357;
            }
        }

        .item:last-of-type {
            margin-bottom: 0;
        }
    }
}
</style>
