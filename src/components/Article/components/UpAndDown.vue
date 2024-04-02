<script setup lang="ts">
const props = defineProps<{ prev: Article, next: Article }>()

const route = useRoute()
</script>

<template>
    <div class="upAndDown">
        <RouterLink :to="`/article/${next ? props.next?.id : route.params.id}`">
            <p>上一篇</p>
            <p>{{ next ? next?.title : '没有下一篇文章了~' }}</p>
        </RouterLink>

        <RouterLink :to="`/article/${prev ? props.prev?.id : route.params.id}`">
            <p>下一篇</p>
            <p>{{ prev ? prev?.title : '没有上一篇文章了~' }}</p>
        </RouterLink>
    </div>
</template>

<style scoped lang="scss">
.upAndDown {
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
