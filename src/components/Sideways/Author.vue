<script setup lang='ts'>
import useUserStore from '@/stores/Author'

const Store = useUserStore()
Store.getAuthor()

// 获取作者信息
const { authorInfo } = storeToRefs(Store)

// 社交账号
const socializing = [
    {
        "name": "GitHub",
        "url": "https://github.com/LiuYuYang01?tab=overview&from=2023-04-01&to=2023-04-26"
    },
    {
        "name": "Gitee",
        "url": "https://gitee.com/liu_yu_yang666"
    },
    {
        "name": "Juejin",
        "url": "https://juejin.cn/user/3083456627092078/posts"
    },
    {
        "name": "CSDN",
        "url": "https://blog.csdn.net/haodian666?type=blog"
    },
    {
        "name": "QQ",
        "url": "http://wpa.qq.com/msgrd?v=3&uin=3311118881&site=qq&menu=yes"
    }
]
</script>

<template>
    <!-- 有背景就显示自己的背景，否则显示默认背景 -->
    <div class="author"
        :style="{ backgroundImage: `url(${authorInfo.background ? authorInfo.background : '/src/assets/img/avatar_bg.jpg'})` }">
        <!-- 作者头像 -->
        <div class="avatar">
            <img :src="authorInfo.avatar" alt="">
        </div>

        <!-- 作者介绍 -->
        <div class="info">
            <h3>{{ authorInfo.name }}</h3>
            <p>{{ authorInfo.introduce }}</p>
        </div>

        <!-- 社交账号 -->
        <div class="socializing">
            <div class="title"></div>

            <div class="list">
                <a :href="item.url" target="_blank" v-for="item, index in socializing" :key="index">
                    <img :src="`/src/assets/svg/socializing/${item.name}.svg`" :title="item.name">
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/public.scss";

.author {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    background: url("/src/assets/img/avatar_bg.jpg") no-repeat;
    background-size: 100% 35%;
    width: 100%;
    height: 325px;
    background-color: $boxColor;
    @include container;

    // 作者头像
    .avatar {
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0 2px 8px rgba(100, 100, 100, 0.15);

        &:hover img {
            // transform: rotate();
            transform: scale(1.2);
        }

        img {
            width: 90%;
            height: 90%;
            border-radius: 50%;
            transition: transform $move;
        }
    }

    // 作者介绍
    .info {
        h3 {
            margin: 15px;
            color: $textColor;
            text-align: center;
            transition: color $move;
        }

        p {
            color: $contentColor;
            transition: color $move;
        }
    }

    // 社交账号
    .socializing {
        width: 100%;
        padding-top: 30px;

        .title {
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #eee;

            &::after {
                content: "社交账号";
                position: absolute;
                top: -10px;
                left: 50%;
                transform: translateX(-50%);
                width: 110px;
                color: $contentColor;
                background-color: $boxColor;
                text-align: center;
                font-size: 14px;
                transition: all $move;
            }
        }

        .list {
            display: flex;
            justify-content: space-between;
            width: 70%;
            padding-top: 25px;
            margin: 0 auto;

            a {
                img {
                    width: 23px;
                    height: 23px;
                }
            }
        }
    }
}
</style>