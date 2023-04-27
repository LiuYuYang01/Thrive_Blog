<script setup lang="ts">

</script>

<template>
    <div class="stats">
        <h1 class="title">📆 数据统计</h1>
    </div>
</template>

<style scoped lang="scss">
@import '@/styles/public.scss';

.stats {
    width: $w;
    height: 300px;
    margin: 0 auto;
    margin-top: 20px;
    background-color: #fff;
    @include container;

    // 标题
    .title {
        padding: 30px 0;
        text-align: center;
        color: $color;
    }
}
</style>
