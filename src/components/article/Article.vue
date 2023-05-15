<script setup lang="ts">
import { ref } from 'vue';
import Status from '@/types/Status';

// Highlight代码高亮
import hljs from 'highlight.js'
import "highlight.js/styles/vs2015.css"

// Wangeditor编辑器样式
import '@wangeditor/editor/dist/css/style.css'

// 复制文本自动生成版权信息
import "@/util/createCopyright"

// 引入文章API接口
import { getArticleAPI } from "@/api/Article"
import { Article } from '@/types/Article'

const emit = defineEmits<{ (e: "updateImmerse"): () => void }>()

// 文章内容
const content = ref("")
const getArticleData = ref<Article>({
    title: "", //标题
    sketch: "", //简述
    content: "", //文章内容
    view: 0, //浏览量
    cate: "", //分类
    commentCount: 0, //评论数量
    tag: "", //标签
    createTime: "", //创建时间
    updateTime: "", //更改时间
    cover: "", //封面
})

const loading = ref<Status>("idle")

// 获取文章的数据
const getContent = async () => {
    try {
        loading.value = "loading"

        // const { data } = await axios("https://mock.apifox.cn/m1/2561526-0-default/api/article/100")
        // content.value = data.content

        const { data } = await getArticleAPI(100)
        getArticleData.value = data

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

// 这里必须调用两次这个函数，不然代码不高亮，暂时只能这样解决
getContent()
getContent()

// 生成文章目录
function createDirectory() {
    let index = 0;

    // 获取content下的所有标签
    let doms: any = document.querySelectorAll(".content h1,.content h2,.content h3")

    if (doms) {
        // 转换为真数组
        doms = Array.from(doms)

        doms.forEach((item: HTMLElement) => {
            // 给所有有内容的值设置自定义属性
            if (item.innerHTML) {
                item.setAttribute("id", String(++index))
            }

            // 如果是H3就设置二级目录的标识
            if (item.tagName === "H3") {
                item.setAttribute("two", "yes")
            }
        });
    }
}
</script>

<template>
    <!-- 数据加载动画 -->
    <Loading v-if="loading === 'loading'" style=" margin-top: 110px;" />

    <div class="Article" v-else>
        <!-- 专注模式按钮 -->
        <div class="focus" @click="emit('updateImmerse')">
            <iconpark-icon name="book-open"></iconpark-icon>
            <span>沉浸式</span>
        </div>

        <!-- 文章标题 -->
        <div class="title">
            <h1>{{ getArticleData.title }}</h1>

            <!-- 文章信息 -->
            <div class="info">
                <!-- 文章创建时间 -->
                <span>
                    <iconpark-icon name="alarm-clock" /> {{ getArticleData.createTime }}
                </span>

                <!-- 文章浏览量 -->
                <span>
                    <iconpark-icon name="fire" /> {{ getArticleData.view }}
                </span>

                <!-- 文章所在的标签 -->
                <span>
                    <iconpark-icon name="tag-one" /> {{ getArticleData.cate }}
                </span>

                <!-- 文章评论数量 -->
                <span>
                    <iconpark-icon name="comment" /> 评论：{{ getArticleData.commentCount }}
                </span>
            </div>
        </div>

        <!-- 文章内容 -->
        <div class="content" v-html="getArticleData.content"></div>

        <!-- 文章标签 -->
        <Tag />

        <!-- 版权信息 -->
        <Copyright />

        <!-- 上下篇 -->
        <UpAndDown />
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
        border-bottom: 1px solid #f3f3f3;
        font-weight: 700;
        font-family: "";
        text-align: center;

        // 文章信息
        .info {
            font-size: 12px;
            font-weight: 400;

            span {
                display: inline-block;
                margin: 0 10px;

                iconpark-icon {
                    padding: 3px;
                    border-radius: 50%;
                    color: #fff;
                }

                &:nth-child(1) iconpark-icon {
                    background-color: #539dfd;
                }

                &:nth-child(2) iconpark-icon {
                    background-color: #eb373a;
                }

                &:nth-child(3) iconpark-icon {
                    background-color: #f5a630;
                }

                &:nth-child(4) iconpark-icon {
                    background-color: #b335ec;
                }
            }
        }
    }

    // 文章内容
    .content {
        font-size: 15px;
        color: #333;

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
            // a标签锚点跳转距离顶部的距离
            scroll-margin-top: 80px;
            color: #000;
        }

        :deep(h1) {
            margin-bottom: 20px;
            font-size: 28px;
        }

        :deep(h2) {
            position: relative;
            padding-bottom: 5px;
            margin-bottom: 25px;
            border-bottom: 1px dashed #ddd;
        }

        :deep(h2::before) {
            content: "";
            position: absolute;
            bottom: 20px;
            width: 7%;
            height: 10px;
            background-color: $color;
            opacity: 0.4;
        }

        :deep(h3::before) {
            content: "#";
            color: $color;
            padding-right: 10px;
            font-size: 25px;
            vertical-align: middle;
        }

        // 文章摘要样式
        :deep(blockquote) {
            padding: 20px;
            border-radius: $round;
            background: #fafafa;
        }
    }
}
</style>
