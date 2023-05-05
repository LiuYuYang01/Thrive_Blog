<script setup lang="ts">

</script>

<template>
    <div class="RandomArticle">
        <div class="title">
            随机文章
        </div>

        <!-- 文章列表 -->
        <div class="list">
            <div class="item">
                <RouterLink to="path">
                    <iconpark-icon name="right" />
                    2022年的 React 生态
                </RouterLink>
            </div>

            <div class="item">
                <RouterLink to="path">
                    <iconpark-icon name="right" />
                    2022年的 React 生态
                </RouterLink>
            </div>

            <div class="item">
                <RouterLink to="path">
                    <iconpark-icon name="right" />
                    2022年的 React 生态
                </RouterLink>
            </div>

            <div class="item">
                <RouterLink to="path">
                    <iconpark-icon name="right" />
                    2022年的 React 生态
                </RouterLink>
            </div>
            
            <div class="item">
                <RouterLink to="path">
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

    // 标题
    .title {
        font-size: 20px;
    }

    // 文章列表
    .list {
        .item {
            line-height: 40px;
            color: #666;
            font-size: 14px;
        }
    }
}
</style>
