<script setup lang="ts">
import { useMessage, useNotification } from 'naive-ui'

// 消息组件
window.$Message = useMessage()
// 通知组件
window.$Notification = useNotification()
</script>

<template></template>

<style scoped lang="scss"></style>
