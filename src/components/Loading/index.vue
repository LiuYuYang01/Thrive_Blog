<script setup lang="ts">
const props = defineProps<{ modelValue: boolean }>()
</script>

<template>
    <div class="th_mask" v-if="modelValue">
        {{ modelValue }}
        <div class="th_loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <p class="th_text" style="top: 55%; font-size: 30px;">加载中，请稍后~</p>
    </div>
</template>

<style>
/* 路由进度条颜色 */
#nprogress .bar {
    height: 5px;
    background: #727cf5;
    box-shadow: 0px 22px 15px -3px rgba(121, 122, 243, 0.1);
    z-index: 99999;
}

.th_mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background-color: rgb(255, 255, 255, 1);
    z-index: 99998;
}

.th_loading,
.th_loading>div,
.th_text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    box-sizing: border-box;
    z-index: 99997;
}

.th_loading {
    display: block;
    font-size: 0;
    color: #727cf5;
    transform: translateY(-200%);
}

.th_loading.la-dark {
    color: #333;
}

.th_loading>div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
}

.th_loading {
    width: 40px;
    height: 40px;
}

.th_loading>div {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 0;
    opacity: 0;
    animation: ball-8bits 1s 0s ease infinite;
}

.th_loading>div:nth-child(1) {
    animation-delay: -0.9375s;
}

.th_loading>div:nth-child(2) {
    animation-delay: -0.875s;
}

.th_loading>div:nth-child(3) {
    animation-delay: -0.8125s;
}

.th_loading>div:nth-child(4) {
    animation-delay: -0.75s;
}

.th_loading>div:nth-child(5) {
    animation-delay: -0.6875s;
}

.th_loading>div:nth-child(6) {
    animation-delay: -0.625s;
}

.th_loading>div:nth-child(7) {
    animation-delay: -0.5625s;
}

.th_loading>div:nth-child(8) {
    animation-delay: -0.5s;
}

.th_loading>div:nth-child(9) {
    animation-delay: -0.4375s;
}

.th_loading>div:nth-child(10) {
    animation-delay: -0.375s;
}

.th_loading>div:nth-child(11) {
    animation-delay: -0.3125s;
}

.th_loading>div:nth-child(12) {
    animation-delay: -0.25s;
}

.th_loading>div:nth-child(13) {
    animation-delay: -0.1875s;
}

.th_loading>div:nth-child(14) {
    animation-delay: -0.125s;
}

.th_loading>div:nth-child(15) {
    animation-delay: -0.0625s;
}

.th_loading>div:nth-child(16) {
    animation-delay: 0s;
}

.th_loading>div:nth-child(1) {
    top: -100%;
    left: 0;
}

.th_loading>div:nth-child(2) {
    top: -100%;
    left: 33.3333333333%;
}

.th_loading>div:nth-child(3) {
    top: -66.6666666667%;
    left: 66.6666666667%;
}

.th_loading>div:nth-child(4) {
    top: -33.3333333333%;
    left: 100%;
}

.th_loading>div:nth-child(5) {
    top: 0;
    left: 100%;
}

.th_loading>div:nth-child(6) {
    top: 33.3333333333%;
    left: 100%;
}

.th_loading>div:nth-child(7) {
    top: 66.6666666667%;
    left: 66.6666666667%;
}

.th_loading>div:nth-child(8) {
    top: 100%;
    left: 33.3333333333%;
}

.th_loading>div:nth-child(9) {
    top: 100%;
    left: 0;
}

.th_loading>div:nth-child(10) {
    top: 100%;
    left: -33.3333333333%;
}

.th_loading>div:nth-child(11) {
    top: 66.6666666667%;
    left: -66.6666666667%;
}

.th_loading>div:nth-child(12) {
    top: 33.3333333333%;
    left: -100%;
}

.th_loading>div:nth-child(13) {
    top: 0;
    left: -100%;
}

.th_loading>div:nth-child(14) {
    top: -33.3333333333%;
    left: -100%;
}

.th_loading>div:nth-child(15) {
    top: -66.6666666667%;
    left: -66.6666666667%;
}

.th_loading>div:nth-child(16) {
    top: -100%;
    left: -33.3333333333%;
}

@keyframes ball-8bits {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 1;
    }

    51% {
        opacity: 0;
    }
}
</style>