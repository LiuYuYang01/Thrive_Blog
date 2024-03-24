<script setup lang="ts">
const centerDialogVisible = ref(true)
</script>

<template>
    <el-dialog v-model="centerDialogVisible" title="提示" width="30%" center>
        <span style="font-size: 30px;">等待开发，敬请期待！</span>

        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="centerDialogVisible = false">好的</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<style scoped lang="scss"></style>
