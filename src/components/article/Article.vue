<script setup lang="ts">
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import { onMounted, ref } from 'vue';
import axios from 'axios';

const code = ref("const buf bytes.Buffer;\nbuf.WriteString('Hello, World!')\nfmt.Println(buf.String())")
const content = ref("")

axios({
    url: "https://mock.apifox.cn/m1/2561526-0-default/api/code"
}).then(res=>{
    console.log(res);
    content.value = res.data.content
})
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

    ::v-deep .hljs {
        font-family: 'Consolas';
    }
}
</style>
