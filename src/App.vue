<script setup lang='ts'>

</script>

<template>
  <!-- 消息组件 -->
  <n-message-provider>
    <Message />
  </n-message-provider>

  <!-- 进度条组件 -->
  <Nprogress />

  <!-- 视图组件 -->
  <RouterView />

  <!-- 编辑器组件 -->
  <!-- <Editor /> -->
</template>

<style scoped></style>