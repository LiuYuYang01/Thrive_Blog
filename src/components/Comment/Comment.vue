<script setup lang="ts">

</script>

<template>
    <div class="Comment">
        <div class="title"></div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
</template>

<style scoped lang="scss">
.Comment {
    margin-top: 100px;

    .title {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #f7f7f7;

        &::after {
            content: "评论区";
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            width: 180px;
            background-color: #fff;
            text-align: center;
            font-size: 24px;
        }
    }

    textarea {
        width: 100%;
        padding: 20px;
        margin-top: 40px;
        border: 1px solid #eee;
        border-radius: 5px;
        box-sizing: border-box;
        outline: none;
    }
}
</style>
