<script setup lang='ts'>
// 引入时间插件
import moment from 'moment';
// 随机预览图
import { randomImage } from '@/util/RandomImage'

const props = defineProps<{ data: Paginate<Article[]> }>()
const emit = defineEmits<{ (e: "get", params: Page): void }>()

const paginate = ref<Page>(props.data)

watch(paginate, p => {
    if (props.data) emit("get", { page: p.page, size: p.size })
}, { immediate: true })
</script>

<template>
    <div class="classics" v-if="data">
        <!-- 文章列表 -->
        <div class="item" v-for="item, index in data.result">
            <!-- 文章封面 -->
            <div class="cover" :style="{ backgroundImage: `url(${item.cover || randomImage()})` }" v-if="index % 2 === 0">
            </div>

            <!-- 文章信息 -->
            <div class="info">
                <RouterLink :to="`/article/${item.id}`">
                    <!-- 文章标题 -->
                    <h3>{{ item.title }}</h3>

                    <!-- 文章摘要 -->
                    <p>{{ item.description }}</p>

                    <div class="fun" v-if="index % 2 === 0">
                        <span><iconpark-icon name="alarm-clock" /> {{ moment(item.createtime).format('YYYY-MM-DD HH:mm')
                        }}</span>
                        <span><iconpark-icon name="fire" /> {{ item.view }}</span>
                        <span><iconpark-icon name="tag-one" /> {{ (item.cate![0] as Cate).name }}</span>
                    </div>

                    <div class="fun" style="text-align: start;" v-else>
                        <span style="padding-left: 0;"><iconpark-icon name="alarm-clock" /> {{
                            moment(item.createtime).format('YYYY-MM-DD HH:mm') }}</span>
                        <span><iconpark-icon name="fire" /> {{ item.view }}</span>
                        <span><iconpark-icon name="tag-one" /> {{ item.cate[0].name }}</span>
                    </div>
                </RouterLink>
            </div>

            <div class="bg" :style="{ backgroundImage: `url(${item.cover || randomImage()})` }"></div>

            <div class="cover" style="clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);"
                :style="{ backgroundImage: `url(${item.cover || randomImage()})` }" v-if="index % 2 !== 0"></div>
        </div>

        <!-- 空状态 -->
        <Empty info="暂无文章" v-if="!data.total"></Empty>
    </div>

    <!-- 当文章数量超过5个时才会显示分页 -->
    <Pagination v-model="paginate" :paginate="data" v-if="data && data.total >= 5" />
</template>

<style scoped lang="scss">
.classics {

    // 文章列表
    .item {
        position: relative;
        overflow: hidden;
        display: flex;
        height: 230px;
        margin-bottom: 15px;
        background-color: #333;
        @include container;

        // 文章封面
        .cover {
            position: relative;
            width: 45%;
            background: url("https://liuyuyang.net/usr/uploads/2023/04/1258239203.jpeg") no-repeat center;
            background-size: cover;
            transition: all $move;
            transform: scale(1);
            clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
            z-index: 1;

            &:hover {
                transform: scale(1.2);
                transition: all $move;
            }
        }

        // 文章信息
        .info {
            position: relative;
            width: 65%;
            padding: 20px 40px;
            z-index: 2;
            font-family: LXGWWenKai !important;

            a {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;

                // 文章标题
                h3 {
                    position: relative;
                    width: 100%;
                    padding-top: 10px;
                    padding-bottom: 20px;
                    color: #fff;
                    font-size: 25px;

                    // 防止超长文本 溢出
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                // 文章简述
                p {
                    color: #dfdfdf;
                    font-size: 15px;
                    line-height: 30px;
                    text-indent: 2em;

                    // 多行文本溢出
                    display: -webkit-box !important;
                    overflow: hidden;
                    word-break: break-all;
                    text-overflow: ellipsis;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                }

                .fun {
                    padding-top: 20px;
                    text-align: end;

                    span {
                        padding-left: 30px;
                        font-size: 12px;
                        color: #ffffff;

                        iconpark-icon {
                            padding: 4px;
                            margin-top: -2px;
                            margin-right: 3px;
                            color: #fff;
                            border-radius: 50%;
                            vertical-align: middle;
                        }

                        &:nth-child(1) iconpark-icon {
                            background-color: #539dfd;
                        }

                        &:nth-child(2) iconpark-icon {
                            margin-right: 0;
                            background-color: #eb373a;
                        }

                        &:nth-child(3) iconpark-icon {
                            background-color: #f5a630;
                        }
                    }
                }
            }
        }

        // 背景虚化
        .friend_bg {
            position: absolute;
            width: 100%;
            height: 250px;
            background-position-x: center;
            background-position-y: center;
            background-size: cover;
            filter: blur(2.5rem) brightness(0.6);
        }
    }

    // 最后一个文章取消下边距
    & .item:last-of-type {
        margin-bottom: 0;
    }
}
</style>