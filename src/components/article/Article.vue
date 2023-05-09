<script setup lang="ts">
import hljs from 'highlight.js'
import "highlight.js/styles/vs2015.css"
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { ref } from 'vue';
import axios from 'axios';

const content = ref("")

// 获取文章的数据
const getContent = async () => {
    const { data } = await axios("https://mock.apifox.cn/m1/2561526-0-default/api/code")

    content.value = data.content

    // 代码高亮
    hljs.highlightAll()
}
getContent()
getContent()
</script>

<template>
    <div class="Article" v-html="content"></div>
</template>

<style scoped lang="scss">
@import "@/styles/public.scss";

.Article {
    padding: 30px;
    line-height: 2.3;
    background-color: #fff;
    font-family: "宋体";
    @include container;

    // 文章标题
    .title {
        color: #333;
        padding-bottom: 20px;
        border-bottom: 1px solid #f3f3f3;
        font-size: 25px;
        font-weight: 700;
        text-align: center;
    }

    // 设置代码框样式
    ::v-deep pre {
        margin: 10px 0;
        border-radius: 5px;
        overflow: hidden;
        line-height: normal;
    }

    ::v-deep p code {
        padding: 2px 5px;
        border-radius: 3px;
        color: $color;
        font-family: "Consolas";
        background-color: #fafafa;
    }

    // 设置代码字体
    ::v-deep .hljs {
        font-family: 'Consolas';
    }

    // 设置标题样式
    ::v-deep h1,
    ::v-deep h2,
    ::v-deep h3,
    ::v-deep h4,
    ::v-deep h5,
    ::v-deep h6 {
        font-family: "";
        margin: 20px 0 10px;
    }

    ::v-deep h1 {
        margin-bottom: 20px;
    }
}</style>
