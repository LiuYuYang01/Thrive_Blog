<script setup lang="ts">

</script>

<template>
    <el-pagination background layout="pager" :page-size="5" :total="100" class="pagination" />
</template>

<style scoped lang="scss">
.pagination {
    display: flex;
    justify-content: center;
    margin-top: 40px;

    :deep .el-pager li {
        padding: 20px;
        border-radius: 10px;
        background-color: transparent;
    }

    :deep .el-pager .el-icon {
        box-sizing: content-box;
        padding: 4px 10px;
    }
}
</style>
