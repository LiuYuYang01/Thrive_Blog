<script setup lang='ts'>

</script>

<template>
    <div class="main">
        <div class="left">文章列表</div>
        <div class="right">
            <Author></Author>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/global.scss";

.main {
    display: flex;
    justify-content: space-between;
    width: $w;
    padding: 20px;
    margin: 0 auto;

    .left {
        width: 75%;
        height: 500px;
        background-color: #fff;
        border: 1px solid #f0f0f0;
        transition: all 0.3s;


        &:hover {
            box-shadow: 0 2px 8px rgba(186, 186, 186, 0.15);
        }
    }

    .right {
        width: 23%;
        background-color: #fff;
        border: 1px solid #f0f0f0;
        transition: all 0.3s;

        &:hover {
            box-shadow: 0 2px 8px rgba(186, 186, 186, 0.15);
        }
    }
}
</style>