<script setup lang="ts">

</script>

<template>
    <div class="Comment">
        <div class="title"></div>

        <!-- 评论框 -->
        <textarea name="" id="" cols="30" rows="7" placeholder="不断进取，创造无限可能🎉" class="box"></textarea>
        <!-- 表情按钮 -->
        <img src="@/assets/svg/other/emote.svg" class="emote" />

        <!-- 表单项 -->
        <input type="text" class="ipt" style="width: 200px;" placeholder="显示名称 *">
        <input type="text" class="ipt" placeholder="电子邮箱 *">
        <input type="text" class="ipt" style="width: 314px;" placeholder="你的站点（选填） *">

        <!-- 发布评论 -->
        <div class="post">
            <a href="javascript:;">发布</a>
        </div>
    </div>
</template>

<style scoped lang="scss">
// 封装表单样式
@mixin form {
    border: 1px solid #eee;
    border-radius: 5px;
    box-sizing: border-box;
    transition: all $move;
    outline: none;

    &:focus {
        border: 1px solid $color;
        box-shadow: 0 10px 20px 1px rgb(83, 157, 253, .1);
    }
}

.Comment {
    position: relative;
    margin-top: 100px;

    // 评论标题
    .title {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #f7f7f7;

        &::after {
            content: "一针见血 🎉";
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

    // 表情按钮
    .emote {
        position: absolute;
        bottom: 95px;
        left: 0px;
        width: 35px;
        height: 35px;
        padding: 15px;
        cursor: pointer;
    }

    // 评论框
    .box {
        width: 100%;
        padding: 20px;
        margin-top: 40px;

        @include form;
    }

    // 表单项
    .ipt {
        width: 250px;
        height: 32px;
        padding-left: 15px;
        margin-right: 20px;

        @include form;

        &:last-of-type {
            margin-right: 0;
        }
    }

    // 发布评论
    .post {
        height: 35px;
        margin-top: 15px;
        border-radius: $round;
        background-color: $color;
        text-align: center;

        a {
            display: inline-block;
            width: 100%;
            height: 100%;
            color: #fff;
        }

        &:active {
            background-color: #2682fb;
        }
    }
}
</style>
