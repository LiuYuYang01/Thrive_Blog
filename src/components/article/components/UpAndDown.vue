<script setup lang="ts">

</script>

<template>
    <div class="UpAndDown">
        <a href="javascript:;">
            <p>上一篇</p>
            <p>20个你从未想过的 ChatGPT 有趣用途</p>
        </a>

        <a href="javascript:;">
            <p>下一篇</p>
            <p>如何查看 Python 项目中所依赖的包</p>
        </a>
    </div>
</template>

<style scoped lang="scss">
.UpAndDown {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    a {
        width: 100%;
        padding: 10px 0;
        margin: 0 10px;
        border: 1px solid #eee;
        border-radius: $round;
        transition: all $move;

        &:hover {
            border: 1px solid $color;
            background-color: #f8fbff;
        }

        &:hover p:first-child {
            color: $color;
        }
    }

    p {
        text-align: center;
        transition: color $move;
    }

    p:first-child {
        font-size: 20px;
    }
}
</style>
