<template>
    <div class="nprogress-container">
        <div class="nprogress-bar" ref="bar"></div>
    </div>
</template>
  
<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const router = useRouter()

onMounted(() => {
    NProgress.configure({
        //指定进度条的父容器
        parent: '.nprogress-container',
        // 动画方式
        easing: 'ease',
        showSpinner: false,
        // 递增进度条的速度
        speed: 500,
        // 自动递增间隔
        trickleSpeed: 200,
        // 更改启动时使用的最小百分比
        minimum: 0.1,
    });

    router.beforeEach((to, from, next) => {
        NProgress.start();
        next();
    });

    router.afterEach(() => {
        NProgress.done(true);
    });
})
</script>
  
<style scoped lang="scss">
.nprogress-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    z-index: 9999;
}

::v-deep #nprogress .bar {
    background-color: $color;
}
</style>
  