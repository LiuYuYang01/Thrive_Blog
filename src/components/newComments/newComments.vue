<script setup lang="ts">

</script>

<template>
    <div class="newComments">
        <div class="title">
            <img src="@/assets/svg/other/comments.svg" alt=""> 最新评论
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/public.scss";

.newComments {
    height: 300px;
    padding: 15px;
    margin-top: 20px;
    background-color: #fff;
    @include container;

    // 文章模块标题
    @include titleRight;
}
</style>
