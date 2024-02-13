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
    background-color: #fff;
    @include container;
    cursor: pointer;

    &:hover {
        color: #fff;
        background-color: $assistColor;
    }
}
</style>