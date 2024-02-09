<script setup lang="ts">
const props = defineProps<{ paginate: Paginate<any[]> }>()
const emit = defineEmits<{ (e: "update:modelValue", page: Page): void }>()

const change = (page: number) => emit("update:modelValue", { page, size: props.paginate.size })
</script>

<template>
    <el-pagination background layout="pager" @current-change="change" :page-size="paginate.size" :total="paginate.total"
        class="pagination" />
</template>

<style scoped lang="scss">
.pagination {
    display: flex;
    justify-content: center;
    margin: 25px 0;

    :deep(.el-pager) {
        li {
            padding: 15px;
            border-radius: 10px;
            color: #333;
            background-color: transparent;
            transition: color $move;

            &:hover {
                color: $color;
            }
        }
    }

    :deep(.el-pager) {
        .el-icon {
            box-sizing: content-box;
            padding: 4px 10px;
        }
    }
}
</style>
