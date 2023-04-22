<script setup lang='ts'>
import { ref } from 'vue'
const qq = ref<number>(3311118881)
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
    </div>
</template>

<style scoped lang="scss">
.author {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    background: url("@/assets/img/avatar_bg.jpg");
    background-size: cover;
    width: 100%;

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

        img {
            width: 90%;
            height: 90%;
            border-radius: 50%;
        }
    }

    // 作者介绍
    .info{
        h3{
            margin: 15px;
            color: #4c4948;
            text-align: center;
        }

        p{
            color: #666;
        }
    }
}
</style>