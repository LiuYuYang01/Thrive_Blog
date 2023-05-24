<script setup lang='ts'>

</script>

<template>
  <!-- 消息组件 -->
  <n-message-provider>
    <!-- 通知组件 -->
    <n-notification-provider>
      <Naive />
    </n-notification-provider>
  </n-message-provider>

  <!-- 必须每个组件都要重新封装吗？ -->

  <!-- 进度条组件 -->
  <Nprogress />

  <!-- 视图组件 -->
  <RouterView />

  <!-- 编辑器组件 -->
  <!-- <Editor /> -->
</template>

<style scoped></style>