<script setup lang='ts'>

</script>

<template>
    <div class="Swiper">
        <!-- 引入打字机组件 -->
        <Typewriter>
            <span id="typed"></span>
        </Typewriter>
    </div>

    <!-- 波浪 -->
    <div class="ripple">
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
            </defs>

            <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7"></use>
                <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"></use>
                <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"></use>
                <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff"></use>
            </g>
        </svg>
    </div>
</template>

<style scoped lang="scss">
@import './ripple.scss';

.Swiper {
    position: relative;
    height: 500px;
    background: url("/src/assets/img/t01d6f5fd3610da0a08.jpg") center;
    background-size: cover;
}

// 定制打字机效果样式
#typed {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%);
    color: #fff;
    font-size: 30px;
    font-family: Alimama ShuHeiTi, -apple-system, BlinkMacSystemFont;
    text-shadow: 0 0.1875rem 0.3125rem #1c1f21;
}
</style>