<script setup lang='ts'>

</script>

<template>
    <div class="LoadMore">加载更多</div>
</template>

<style scoped lang='scss'>
.LoadMore {
    width: 340px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin: 15px 0 0 300px;
    border: 1px solid #f0f0f0;
    border-radius: $round;
    background-color: #fff;
    box-shadow: $boxShadow;
    transition: all $move;
    cursor: pointer;

    &:hover {
        color: #fff;
        background-color: $assistColor;
    }
}
</style>