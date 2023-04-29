<script setup lang="ts">
</script>

<template>
    <div class="layout">
        <h1 class="title">
            <slot></slot>
        </h1>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/public.scss";

.layout {
    width: $w;
    margin: 0 auto;
    margin-bottom: 20px;
    background-color: #fff;
    @include container;

    // 标题
    .title {
        padding: 30px 0;
        text-align: center;
        color: #666;
        font-family: LongZhuTi;
        font-weight: 100;

        img {
            width: 50px;
            height: 50px;
            vertical-align: bottom;
        }
    }
}
</style>
