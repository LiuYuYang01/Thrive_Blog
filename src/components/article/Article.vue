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
    line-height: 35px;
    background-color: #fff;
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

    // 文章内容
    .content {
        color: #555;

        p {
            margin: 10px 0;
        }

        h2 {
            font-size: 20px;
            margin: 20px 0 10px;
            color: #333;
        }
    }
}

.pre {
    border-radius: 5px;
    overflow: hidden;
}

.hljs,
.language-javascript .hljs {
    font-family: 'Consolas';
}
</style>
