<script setup lang="ts">
import { svg } from '@/utils'
import { getArticleAPI } from '@/api/Article';

const router = useRouter()

const loading = ref(true)

const doms = ref<any>([]);

// 获取文章的数据
const getContent = async () => {
    if (!+router.currentRoute.value.params.id as boolean) return

    loading.value = true
    await getArticleAPI(+router.currentRoute.value.params.id as number)

    // 转换为真数组
    doms.value = Array.from(document.querySelectorAll(".content h1,.content h2,.content h3"))

    // 去除为空的标题
    doms.value = doms.value.filter((item: HTMLElement) => { if (item.innerHTML) return item })
    loading.value = false
}

getContent()
</script>

<template>
    <div class="directory" style="display: none;">
        <div class="title">
            <img src="@/assets/svg/other/directory.svg" alt="">

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

            <!-- 加载效果 -->
            <div class="loading" v-loading="loading" :element-loading-svg="svg" v-if="loading"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.directory {
    padding: 20px 0;
    margin-top: 20px;
    background-color: #fff;
    @include container;

    // 文章模块标题
    @include titleRight;

    .title {
        color: $textColor;
        transition: all $move;

        img {
            width: 40px;
            height: 30px;
        }
    }

    // 目录
    .list {
        overflow: auto;
        margin-top: 10px;
        height: 560px;

        .loading {
            height: 200px;
        }

        li {
            padding: 0 10px;

            a {
                display: inline-block;
                width: 100%;
                padding: 10px;
                padding-left: 10px;
                color: $textColor;
                transition: all $move;

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
