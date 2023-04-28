<script setup lang="ts">

</script>

<template>
    <div class="articleSidebar">
        <h3 class="title">
            <iconpark-icon name="like" class="like"></iconpark-icon> 随机推荐
        </h3>

        <!-- 文章列表 -->
        <div class="list">
            <div class="item">
                <a href="javascript:;">
                    <h4>20个你从未想过的 ChatGPT 有趣用途</h4>
                </a>
            </div>

            <div class="item">
                <a href="javascript:;">
                    <h4>20个你从未想过的 ChatGPT 有趣用途</h4>
                </a>
            </div>

            <div class="item">
                <a href="javascript:;">
                    <h4>20个你从未想过的 ChatGPT 有趣用途</h4>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/public.scss";

.articleSidebar {
    padding: 15px;
    margin-top: 20px;
    background-color: #fff;
    font-family: $fontStyA;
    @include container;

    // 文章模块标题
    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
        font-size: 17px;
        font-weight: 700;
        color: #333;

        .like {
            font-size: 18px;
            padding-right: 5px;
        }
    }

    // 文章列表
    .list {
        padding-top: 10px;

        .item {
            overflow: hidden;
            position: relative;
            height: 130px;
            margin-bottom: 10px;
            border-radius: $round;
            background: url("https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ab6d654bb3747a2af609d15b8fb387e~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp") no-repeat;
            background-size: 100%;
            transform: scale(1);
            transition: background-size $move;

            // 阴影
            &::after {
                content: "";
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 50px;
                background-image: linear-gradient(transparent, #000);
                opacity: 0;
                transition: opacity $move;
            }

            // 鼠标经过效果
            &:hover {
                background-size: 105%;

                &::after {
                    opacity: 1;
                }
            }

            a {
                display: inline-block;
                width: 100%;
                height: 100%;
            }

            // 文章标题
            h4 {
                position: absolute;
                bottom: 10px;
                width: 95%;
                padding: 0 10px;
                color: #fff;
                font-size: 15px;
                font-weight: 400;
                z-index: 1;

                // 文本溢出隐藏
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        .item:last-of-type{
            margin-bottom: 0;
        }
    }
}
</style>
