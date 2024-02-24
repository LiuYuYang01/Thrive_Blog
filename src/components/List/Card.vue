<script setup lang="ts">
// 引入时间插件
import moment from 'moment';
// 随机预览图
import { randomImage } from '@/util/RandomImage'

const props = defineProps<{ data: Paginate<Article[]> }>()
const emit = defineEmits<{ (e: "get", params: Page): void }>()

const paginate = ref<Page>(props.data)

watch(paginate, p => {
    if (props.data) emit("get", { page: p.page, size: p.size })
}, { immediate: true })
</script>

<template>
  <h1>Hello</h1>
</template>

<style scoped lang="scss">
</style>
