<script setup lang="ts">
defineProps<{ info: string }>()
</script>

<template>
    <!-- 空状态 -->
    <div class="empty">
        <img src="@/assets/svg/other/empty.svg" alt="">
        <div class="info">{{ info }}</div>
    </div>
</template>

<style scoped lang="scss">
.empty {
    width: 200px;
    margin: 0 auto;

    .info {
        padding-top: 20px;
        text-align: center;
        color: #333;
    }
}
</style>
