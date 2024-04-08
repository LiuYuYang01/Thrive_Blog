<script setup lang="ts">
// 复制文本自动生成版权信息
import "@/utils/CreateCopyright";
import { svg } from '@/utils'

// 引入文章API接口
import { getArticleAPI } from "@/api/Article";

// 随机预览图
import { randomImage } from "@/utils/RandomImage";

const emit = defineEmits<{ (e: "update:modelValue", value: Info): void }>();

const route = useRoute();

// 文章内容
const articleData = ref<Article>({
    title: "", //标题
    description: "", //简述
    content: "", //文章内容
    view: 0, //浏览量
    cate: [], //分类
    comment: 0, //评论数量
    tag: "", //标签
    cover: "", //封面
    createtime: "", //创建时间
    prev: null,
    next: null
});

const loading = ref(true);

// 获取文章的数据
const getContentData = async () => {
    const { data } = await getArticleAPI(+route.params.id);
    articleData.value = data;

    // 如果有文章封面就显示，没有就显示默认的
    if (data.cover) {
        emit("update:modelValue", data);
    } else {
        emit("update:modelValue", { ...data, cover: randomImage() });
    }
};
getContentData();

// 生成文章目录
function createDirectory() {
    let index = 0;

    // 获取content下的所有标题
    let doms: any = document.querySelectorAll(".content h2,.content h3");

    if (doms) {
        // 转换为真数组
        doms = Array.from(doms);

        doms.forEach((item: HTMLElement) => {
            // 给所有有内容的值设置自定义属性
            // 如果是H2就设置一级目录的标识
            if (item.innerHTML && item.tagName === "H2") {
                item.setAttribute("id", String(++index));
            }

            // 如果是H2就设置二级目录的标识
            if (item.innerHTML && item.tagName === "H3") {
                item.setAttribute("two", "yes");
            }
        });
    }
}

// 生成文章目录
// onMounted(() => createDirectory())

watch(() => route.params, async () => {
    await getContentData()
    await createDirectory()
}, { immediate: true })
</script>

<template>
    <div class="article">
        <!-- 文章加载效果 -->
        <div v-loading="loading" :element-loading-svg="svg" element-loading-svg-view-box="-10, -10, 50, 50" class="loading"
            v-if="!articleData.content"></div>

        <!-- 文章内容 -->
        <v-md-preview :text="articleData.content" class="content" v-else></v-md-preview>

        <!-- 文章标签 -->
        <Tag :tags="articleData.tag" v-if="articleData.tag" />

        <!-- 版权信息 -->
        <Copyright />

        <!-- 上下篇 -->
        <UpAndDown :prev="articleData.prev!" :next="articleData.next!" />

        <!-- 评论框 -->
        <Comment />
    </div>
</template>

<style scoped lang="scss">
.article {
    overflow: hidden;
    position: relative;
    padding: 30px;
    // padding-top: 0;
    line-height: 2.3;
    background-color: #fff;
    @include container;

    // 加载效果
    .loading {
        width: 80%;
        height: 100px;
        margin: 0 auto;
    }

    // 文章内容
    .content {
        font-size: 15px;
        transition: color $move;

        :deep(.github-markdown-body) {
            padding: 0;
        }

        // 图片
        :deep(img) {
            display: block;
            width: 65%;
            margin: 0 auto;
            border-radius: $round;
        }

        // 超链接
        :deep(p a) {
            display: inline-block;
            border-radius: 5px;
            padding: 0 5px;
            color: $color;
            transition: all $move;

            &:hover {
                color: #fff;
                background-color: $color;
            }
        }

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
            transition: background-color $move;
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
            // a标签锚点跳转距离顶部的距离
            scroll-margin-top: 80px;
            transition: color $move;
        }

        :deep(h1) {
            padding-bottom: 20px;
            border-bottom: 1px dashed $underBorderColor;
            font-weight: 700;
            text-align: center;
            transition: border-bottom $move;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        :deep(h2) {
            position: relative;
            padding-left: 20px;
            border-bottom: none;
            font-size: 22px;
        }

        :deep(h2::before) {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-60%);
            width: 5px;
            height: 70%;
            border-radius: $round;
            background-color: $color;
        }

        :deep(h3) {
            display: inline-block;
            position: relative;
            margin: 10px 0;
            transition: border-bottom $move;
        }

        :deep(h3::before) {
            content: "";
            position: absolute;
            bottom: 5px;
            width: 80%;
            height: 35%;
            border-radius: $round;
            background-color: $color;
            opacity: 0.4;
        }

        :deep(h4) {
            display: flex;
            align-items: center;
        }

        :deep(h4::before) {
            content: "#";
            color: $color;
            padding-right: 5px;
            font-size: 25px;
            vertical-align: middle;
        }

        // 文章摘要样式
        :deep(blockquote) {
            padding: 20px;
            border-radius: $round;
            background-color: #fafafa;
            transition: background-color $move;
        }

        :deep(strong) {
            color: #333;
        }
    }
}
</style>@/utils/CreateCopyright@/utils/RandomImage