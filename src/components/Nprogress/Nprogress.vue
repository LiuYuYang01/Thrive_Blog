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
        showSpinner: false,
        parent: '.nprogress-container',
        easing: 'ease',
        speed: 500,
        trickleSpeed: 200,
        minimum: 0.1,
        barColor: "#ff0000"
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

.nprogress-bar {
    height: 100%;
    background-color: blue;
}
</style>
  