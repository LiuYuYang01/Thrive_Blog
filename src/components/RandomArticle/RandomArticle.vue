<script setup lang="ts">

</script>

<template>
    <div class="RandomArticle">
        <div class="title">
            <img src="@/assets/svg/other/article.svg" alt="">
            <span> 随机文章</span>
        </div>

        <!-- 文章列表 -->
        <div class="list">
            <div class="item">
                <RouterLink to="">
                    <iconpark-icon name="right" />
                    2022年的 React 生态
                </RouterLink>
            </div>

            <div class="item">
                <RouterLink to="">
                    <iconpark-icon name="right" />
                    2022年的 React 生态
                </RouterLink>
            </div>

            <div class="item">
                <RouterLink to="">
                    <iconpark-icon name="right" />
                    2022年的 React 生态
                </RouterLink>
            </div>

            <div class="item">
                <RouterLink to="">
                    <iconpark-icon name="right" />
                    2022年的 React 生态
                </RouterLink>
            </div>

            <div class="item">
                <RouterLink to="">
                    <iconpark-icon name="right" />
                    2022年的 React 生态
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/public.scss";

.RandomArticle {
    @include container;
    padding: 15px;
    margin-top: 20px;
    background-color: #fff;

    // 文章模块标题
    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
        font-size: 17px;
        font-weight: 400;
        color: #333;

        img {
            width: 30px;
            height: 20px;
        }
    }

    // 文章列表
    .list {
        .item {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            a {
                display: flex;
                align-items: center;
                padding: 10px 0;
                color: #666;
                font-size: 14px;
                transition: padding $move;

                iconpark-icon {
                    font-size: 18px;
                    padding-right: 3px;
                }
            }

            &:hover a{
                color: $color;
                padding-left: 10px;
                transition: all $move;
            }

            &:hover iconpark-icon{
                padding-right: 5px;
            }
        }
    }
}
</style>
