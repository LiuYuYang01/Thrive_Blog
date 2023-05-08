<script setup lang="ts">

</script>

<template>
    <div class="Article">
        <h1 class="title">看完这篇文章，你就会知道 Go 中 Buffer 到底有什么用</h1>

        <!-- 文章内容 -->
        <div class="content">
            <!-- 文章介绍 -->
            <p class="introduce">
                作为一种常见的数据结构，缓冲区（Buffer）在计算机科学中有着广泛的应用。Go 语言标准库中提供了一个名为 bytes.Buffer 的缓冲区类型，它可以方便地进行字符串操作、IO
                操作、二进制数据处理等。本篇博客将详细介绍 Go 中 Buffer 的用法，从多个方面介绍其特性和应用场景。
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/public.scss";

.Article {
    height: 500px;
    padding: 30px;
    line-height: 35px;
    background-color: #fff;
    @include container;

    // 文章标题
    .title {
        font-size: 25px;
        text-align: center;
        color: #333;
    }

    // 文章内容
    .content {
        p {
            margin: 10px 0;
        }
    }
}
</style>
