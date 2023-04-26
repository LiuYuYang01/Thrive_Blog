<script setup lang='ts'>
import { ref } from 'vue'
const qq = ref<number>(3311118881)
const userInfo = {
    author: "YuYang",
    qq: 3311118881,
    introduce: "不断进取，创造无限可能🎉",
    socializing: [
        {
            name: "GitHub",
            url: "https://github.com/LiuYuYang01?tab=overview&from=2023-04-01&to=2023-04-26"
        },
        {
            name: "Gitee",
            url: "https://gitee.com/liu_yu_yang666"
        },
        {
            name: "Juejin",
            url: "https://juejin.cn/user/3083456627092078/posts"
        },
        {
            name: "CSDN",
            url: "https://blog.csdn.net/haodian666?type=blog"
        },
        {
            name: "QQ",
            url: ""
        }
    ]
}
</script>

<template>
    <div class="author">
        <!-- 作者头像 -->
        <div class="avatar">
            <img :src="`http://q.qlogo.cn/headimg_dl?dst_uin=${qq}&spec=640&img_type=jpg`" alt="">
        </div>

        <!-- 作者介绍 -->
        <div class="info">
            <h3>YuYang</h3>
            <p>不断进取，创造无限可能🎉</p>
        </div>

        <!-- 社交账号 -->
        <div class="socializing">
            <a :href="item.url" target="_blank" v-for="item, index in userInfo.socializing" :key="index">
                <img :src="`/src/assets/svg/socializing/${item.name}.svg`">
            </a>
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
    background: url(/src/assets/img/avatar_bg.jpg);
    background-size: cover;
    width: 100%;
    height: 300px;
    border: 1px solid #f0f0f0;
    border-radius: $round;
    background-color: #fff;
    transition: all 0.3s;

    &:hover {
        box-shadow: $boxShadow;
    }

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
            color: #4c4948;
            text-align: center;
        }

        p {
            color: #666;
        }
    }

    // 社交账号
    .socializing {
        display: flex;
        width: 70%;
        justify-content: space-between;
        padding-top: 20px;

        a {
            img {
                width: 23px;
                height: 23px;
            }
        }
    }
}
</style>