<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import Status from '@/types/Status';

import hljs from 'highlight.js'
import "highlight.js/styles/vs2015.css"
import '@wangeditor/editor/dist/css/style.css' // 引入 css

const emit = defineEmits<{ (e: "updateImmerse"): () => void }>()

// 文章内容
const content = ref("")

const loading = ref<Status>("idle")

// 获取文章的数据
const getContent = async () => {
    try {
        loading.value = "loading"

        const { data } = await axios("https://mock.apifox.cn/m1/2561526-0-default/api/code")
        content.value = data.content

        loading.value = "success"

        // 代码高亮
        hljs.highlightAll()

        createDirectory()
    } catch (error) {
        loading.value = "error"
        console.log(error);
    }
}
getContent()
getContent()

// 生成目录
function createDirectory() {
    const Directory: any = []

    // 获取content下的所有标签
    let doms: any = document.querySelector(".content")?.children!

    if (doms) {
        // 转换为真数组
        doms = Array.from(doms)

        doms.forEach((item: HTMLElement) => {
            // 获取当前标签的名称
            const name: string = item.tagName

            // 拿到标题标签
            if (name === "H2" || name === "H3") {
                // 必须有内容
                if (item.innerHTML) {
                    Directory.push(item)
                }
            }
        });
    }

    if (Directory.length) {
        for (let i = 0; i < Directory.length; i++) {
            // console.log(Directory[i]);

            if (Directory[i].tagName === "H2") {
                (<HTMLElement>Directory[i]).setAttribute("id", `h2-${i + 1}`)
            }

            if (Directory[i].tagName === "H3") {
                // const k = i === Directory.length - 1 ? i : i + 1
                // console.log(Directory[k]);

                if (Directory[i - 1].tagName === "H2") {
                    const h2id = Directory[i - 1].getAttribute("id")
                    Directory[i].setAttribute("id", `${h2id}-${i + 1}`)
                } else {
                    const h3id = Directory[i - 1].getAttribute("id")
                    if (h3id) {
                        //    h3id =  h3id[h3id.length-1]
                        const arr = h3id.split("-")
                        arr[2]++

                        Directory[i].setAttribute("id", arr.join("-"))
                    }

                }
            }
        }
    }

    console.log(Directory);

}
</script>

<template>
    <!-- 数据加载动画 -->
    <Loading v-if="loading === 'loading'" style =" margin-top: 110px;" />

    <div class="Article" v-else>
        <!-- 专注模式按钮 -->
        <div class="focus" @click="emit('updateImmerse')">
            <iconpark-icon name="book-open"></iconpark-icon>
            <span>沉浸式</span>
        </div>

        <h1 class="title">Go 中 Buffer 到底有什么用？</h1>

        <!-- 文章内容 -->
        <!-- <div class="content" v-html="content"></div> -->
        <div class="content">
            <h2>测试一级标题1</h2>
            <p><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
            <h3>测试二级标题1</h3>
            <p><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
            <h3>测试二级标题2</h3>
            <p><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
            <h3>测试二级标题3</h3>
            <p><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
            <h1>测试一级标题2</h1>
            <p><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
            <h1>测试一级标题3</h1>
            <p><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
            <h3>测试二级标题1</h3>
            <p><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
            <h3>测试二级标题2</h3>
            <p><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
            <h3>测试二级标题3</h3>
            <p><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
            <h1>测试一级标题4</h1>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/public.scss";

.Article {
    overflow: hidden;
    position: relative;
    padding: 30px;
    padding-top: 0;
    line-height: 2.3;
    background-color: #fff;
    font-family: "宋体";
    @include container;

    // 右侧背景
    &::after {
        content: "";
        width: 110px;
        height: 210px;
        background-color: $color;
        position: absolute;
        top: -110px;
        right: -20px;
        transform: rotate(135deg);
    }

    // 专注模式按钮样式
    .focus {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: -22px;
        right: -23px;
        padding: 30px;
        cursor: pointer;
        z-index: 2;

        iconpark-icon {
            font-size: 30px;
            color: #fff;
        }

        span {
            color: #fff;
            font-size: 12px;
        }
    }

    // 文章标题
    .title {
        padding: 20px 0;
        margin-bottom: 20px;
        color: #333;
        border-bottom: 1px solid #f3f3f3;
        font-weight: 700;
        font-family: "";
        text-align: center;
    }

    // 文章内容
    .content {

        // 设置代码框样式
        :deep(pre) {
            margin: 10px 0;
            border-radius: 5px;
            overflow: hidden;
            line-height: normal;
        }

        // 行内代码样式
        :deep(p code) {
            padding: 2px 5px;
            border-radius: 3px;
            color: $color;
            font-family: "Consolas";
            background-color: #fafafa;
        }

        // 设置代码字体
        :deep(.hljs) {
            font-family: 'Consolas';
        }

        // 设置标题样式
        :deep(h1),
        :deep(h2),
        :deep(h3),
        :deep(h4),
        :deep(h5),
        :deep(h6) {
            font-family: "";
            margin: 20px 0 10px;
        }

        :deep(h1) {
            margin-bottom: 20px;
            font-size: 28px;
        }
    }
}
</style>
