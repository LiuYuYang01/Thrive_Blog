<script setup lang='ts'>
const { Ripple = false } = defineProps<{ src: string, Ripple?: boolean, data?: string[] }>()

onMounted(() => {
    const TypedCursor = document.querySelector(".typed-cursor") as HTMLElement
    if (!TypedCursor) return
    TypedCursor.style.display = "none"
})
</script>

<template>
    <div class="Swiper" :style="{ backgroundImage: `url(${src})` }">
        <!-- 遮罩层 -->
        <div class="mark">
            <!-- 引入打字机组件 -->
            <Typewriter :data="data!">
                <span id="typed"></span>
            </Typewriter>

            <slot></slot>
        </div>
    </div>

    <!-- 波浪 -->
    <div class="ripple" v-if="!Ripple">
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
    background: url("") center;
    background-size: cover;

    // 背景渐变
    &::after {
        content: "";
        width: 100%;
        height: 20%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: linear-gradient(to top, #fff, transparent);
    }

    // 遮罩层
    .mark {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.15);
    }

    // 定制打字机效果样式
    #typed {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%);
        width: 80%;
        text-align: center;
        color: #fff;
        font-size: 30px;
        text-shadow: 0 0.1875rem 0.3125rem #1c1f21;
    }
}
</style>