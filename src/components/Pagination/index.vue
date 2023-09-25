<script setup lang="ts">
const props = defineProps<{ size: number, total: number }>()
const emit = defineEmits<{ (e: "update:modelValue", page: number): void }>()

const change = (value: number) => emit("update:modelValue", value)
</script>

<template>
    <el-pagination background layout="pager" @current-change="change" :page-size="size" :total="total" class="pagination" />
</template>

<style scoped lang="scss">
.pagination {
    display: flex;
    justify-content: center;
    margin: 25px 0;

    :deep .el-pager li {
        padding: 15px;
        border-radius: 10px;
        color: $textColor;
        background-color: transparent;
    }

    :deep .el-pager .el-icon {
        box-sizing: content-box;
        padding: 4px 10px;
    }
}
</style>
