<script setup lang="ts">

</script>

<template>
    <div class="randomArticle">
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
.randomArticle {
    padding: 15px;
    margin-bottom: 20px;
    background-color: #fff;
    @include container;
    // 文章模块标题
    @include titleRight;

    // 文章模块标题
    .title {
        padding-bottom: 10px;

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
                transition: all $move;

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
