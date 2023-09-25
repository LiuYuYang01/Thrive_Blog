<script setup lang="ts">

</script>

<template>
    <el-pagination background layout="pager" :page-size="10" :total="100" class="pagination" />
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
