<script setup lang="ts">
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
</script>

<template>
    <div class="Article">
        <div class="title">看完这篇文章，你就会知道 Go 中 Buffer 到底有什么用</div>

        <!-- 文章内容 -->
        <div class="content">
            <!-- 文章介绍 -->
            <p class="introduce">
                作为一种常见的数据结构，缓冲区（Buffer）在计算机科学中有着广泛的应用。Go 语言标准库中提供了一个名为 bytes.Buffer 的缓冲区类型，它可以方便地进行字符串操作、IO
                操作、二进制数据处理等。本篇博客将详细介绍 Go 中 Buffer 的用法，从多个方面介绍其特性和应用场景。
            </p>

            <h2>1. Buffer 是什么？</h2>

            <p>在计算机科学中，缓冲区（Buffer）是一种数据结构，它用于临时存储数据，以便稍后进行处理。在 Go 语言中，bytes.Buffer 是一个预定义的类型，用于存储和操作字节序列。bytes.Buffer
                类型提供了很多有用的方法，例如：读写字节、字符串、整数和浮点数等。</p>

            <div class="pre">
                <highlightjs autodetect code="const list = [1, 2, 3, 4, 5]" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/public.scss";

.Article {
    padding: 30px;
    line-height: 35px;
    background-color: #fff;
    @include container;

    // 文章标题
    .title {
        color: #333;
        padding-bottom: 20px;
        border-bottom: 1px solid #f3f3f3;
        font-size: 25px;
        font-weight: 700;
        text-align: center;
    }

    // 文章内容
    .content {
        color: #555;

        p {
            margin: 10px 0;
        }

        h2 {
            font-size: 20px;
            margin: 20px 0 10px;
            color: #333;
        }
    }
}
</style>
