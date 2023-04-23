<script setup lang='ts'>

</script>

<template>
    <div class="main">
        <div class="left">
            <listStyle1></listStyle1>
        </div>

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
    }

    .right {
        overflow: hidden;
        width: 23%;
        border-radius: $round;
        border: 1px solid #f0f0f0;
        background-color: #fff;
        transition: all 0.3s;

        &:hover {
            box-shadow: $boxShadow;
        }
    }
}
</style>