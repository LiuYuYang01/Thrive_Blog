<script setup lang='ts'>
import useUserStore from "@/stores/Author";

const store = useUserStore();
store.getAuthor();

import { useConfigStore } from '@/stores'

// 获取作者信息
const { authorInfo } = storeToRefs(store);

// 作者背景
import avatar_bg from "@/assets/img/avatar_bg.jpg";

// 社交账号
const socializing = ref<Social[]>([]);

onMounted(async ()=>{
    await useConfigStore().getLayoutData()
    socializing.value = useConfigStore().web.social
})

// 动态获取图片路径
const getIcon = (src: string) => {
    return new URL(`../../assets/svg/socializing/${src}.svg`, import.meta.url).href;
};
</script>

<template>
    <div class="author" :style="avatar_bg">
        <!-- 作者头像 -->
        <div class="avatar">
            <img :src="authorInfo.avatar" v-avatar alt="">
        </div>

        <!-- 作者介绍 -->
        <div class="info">
            <h3>{{ authorInfo.name }}</h3>
            <p>{{ authorInfo.info }}</p>
        </div>

        <!-- 社交账号 -->
        <div class="socializing">
            <div class="title"></div>

            <div class="list">
                <a :href="item.url" target="_blank" v-for="item, index in socializing" :key="index">
                    <img :src="getIcon(item.name)" v-avatar :title="item.name">
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.author {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    background: url("@/assets/img/avatar_bg.jpg") no-repeat;
    background-size: 100% 35%;
    background-color: #fff;
    width: 100%;
    height: 350px;
    margin-bottom: 20px;
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
            color: #333;
            text-align: center;
            transition: color $move;
        }

        p {
            width: 90%;
            margin: 0 auto;
            color: #686868;
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
            background-color: $underBorderColor;
            transition: background-color $move;

            &::after {
                content: "社交账号";
                position: absolute;
                top: -10px;
                left: 50%;
                transform: translateX(-50%);
                width: 110px;
                color: #666;
                background-color: #fff;
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