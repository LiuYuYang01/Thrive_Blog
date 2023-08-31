<script setup lang="ts">
import { Link, Cate } from '@/types/Link'
const linkData = ref<Cate[]>([
    {
        title: "技术类",
        list: [
            {
                id: 1,
                title: "Thrive",
                description: "记录一个架构师的崛起",
                email: "3311118881@qq.com",
                image: "https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640",
                url: "/",
            }, {
                id: 1,
                title: "Thrive",
                description: "记录一个架构师的崛起",
                email: "3311118881@qq.com",
                image: "https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640",
                url: "/",
            }, {
                id: 1,
                title: "Thrive",
                description: "记录一个架构师的崛起",
                email: "3311118881@qq.com",
                image: "https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640",
                url: "/",
            }, {
                id: 1,
                title: "Thrive",
                description: "记录一个架构师的崛起",
                email: "3311118881@qq.com",
                image: "https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640",
                url: "/",
            }, {
                id: 1,
                title: "Thrive",
                description: "记录一个架构师的崛起",
                email: "3311118881@qq.com",
                image: "https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640",
                url: "/",
            }, {
                id: 1,
                title: "Thrive",
                description: "记录一个架构师的崛起",
                email: "3311118881@qq.com",
                image: "https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640",
                url: "/",
            }
        ]
    }
])
</script>

<template>
    <div class="swiper">
        <Swiper src="https://t3.picb.cc/2023/08/04/ITN4rM.jpeg" :Ripple="true">
            <div class="title">一个人的寂寞, 一群人的狂欢!</div>
        </Swiper>
    </div>

    <!-- 朋友圈 -->
    <div class="Friend">
        <div class="cate" v-for="{ title, list } in linkData" :key="title">
            <div class="title">{{ title }}</div>

            <div class="list">
                <div class="item" v-for="item in list" :key="item.id">
                    <img :src="item.image" alt="">

                    <div class="info">
                        <div class="name">{{ item.title }}</div>
                        <div class="description">{{ item.description }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/public.scss";

.swiper {
    :deep .Swiper {
        background-position: center top;
    }

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.2);
        width: 100%;
        height: 100%;
        padding-bottom: 60px;
        color: #fff;
        font-size: 40px;
        text-shadow: 0 0.1875rem 0.5rem #1c1f21;
    }
}

.Friend {
    width: $w;
    padding: 30px;
    margin: 50px auto;
    background-color: #fff;
    @include container;

    .cate {
        .title {
            font-size: 30px;
            padding-bottom: 20px;
            border-bottom: 1px dotted #eee;
        }

        .list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 25px;

            .item {
                display: flex;
                align-items: center;
                width: 270px;
                height: 80px;
                border: 1px solid #eee;
                border-radius: 5px;

                img {
                    width: 60px;
                    height: 60px;
                    margin-right: 15px;
                    border-radius: 50%;
                }

                .info {
                    .name {}

                    .description {}
                }
            }
        }
    }
}
</style>
