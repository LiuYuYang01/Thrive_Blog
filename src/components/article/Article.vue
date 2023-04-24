<script setup lang='ts'>
// 引入五彩纸屑
import confetti from 'canvas-confetti';

const btn = () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
</script>

<template>
    <canvas width="100px" height="100px"></canvas>

    <button @click="btn">按钮</button>

    <div class="main">
        <div class="left">
            <listStyle1></listStyle1>
        </div>

        <div class="right">
            <Author></Author>
        </div>

        <LoadMore></LoadMore>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/global.scss";

.main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: $w;
    padding: 20px;
    margin: 0 auto;

    .left {
        width: 75%;
    }

    .right {
        overflow: hidden;
        width: 23%;
        border-radius: $round;
        // border: 1px solid #f0f0f0;
        // background-color: #fff;
        // transition: all 0.3s;

        // &:hover {
        //     box-shadow: $boxShadow;
        // }
    }
}
</style>