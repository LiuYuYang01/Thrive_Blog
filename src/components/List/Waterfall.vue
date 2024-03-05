<script setup lang='ts'>
// 引入时间插件
import moment from 'moment';
// 随机预览图
import { randomImage } from '@/utils/RandomImage'

const props = defineProps<{ data: Paginate<Article[]> }>()
const emit = defineEmits<{ (e: "get", params: Page): void }>()

const paginate = ref<Page>(props.data)

watch(paginate, p => {
    if (props.data) emit("get", { page: p.page, size: p.size })
}, { immediate: true })

const load = () => {
    if (props.data) emit("get", { page: props.data.page += 1, size: props.data.size })
}
</script>

<template>
    <div class="waterfall" v-if="data" v-infinite-scroll="load" :infinite-scroll-delay="1000">
        <masonry :cols="4" :gutter="30">
            <div class="item" v-for="item, index in data.result">
                <RouterLink :to="`/article/${item.id}`">
                    <div class="cover">
                        <img :src="item.cover ? item.cover : randomImage()" alt="">
                    </div>

                    <!-- 文章信息 -->
                    <div class="info">
                        <!-- 文章标题 -->
                        <h3>{{ item.title }}</h3>

                        <!-- 文章摘要 -->
                        <p>{{ item.description }}</p>

                        <span>🏷️ {{ item.cate[0].name }}</span>
                    </div>
                </RouterLink>
            </div>
        </masonry>
    </div>
</template>

<style scoped lang="scss">
.waterfall {
    .item {
        overflow: hidden;
        width: 230px;
        margin-bottom: 10px;
        background-color: #fff;
        border-radius: 10px;
        @include container;

        .cover img {
            width: 100%;
            transition: transform 1s;
        }

        &:hover {
            .info h3 {
                color: $color;
            }

            .cover img {
                transform: scale(1.1);
            }
        }

        .info {
            padding: 0 10px;
            margin-top: 15px;

            h3 {
                font-size: 16px;
                transition: color $move;

                display: -webkit-box !important;
                overflow: hidden;
                word-break: break-all;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }

            p {
                font-size: 13px;
                color: #6d6d6d;
                margin: 10px 0;

                display: -webkit-box !important;
                overflow: hidden;
                word-break: break-all;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
            }

            span {
                display: inline-block;
                width: 100%;
                text-align: end;
                color: #666;
                font-size: 12px;
                padding-bottom: 10px;
            }
        }
    }
}
</style>
