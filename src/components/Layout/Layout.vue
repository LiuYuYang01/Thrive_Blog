<script setup lang='ts'>
// 引入五彩纸屑
import './confetti'
</script>

<template>
  <Header />
  <RouterView />
  <Footer />

  <!-- 消息组件 -->
  <n-message-provider>
    <!-- 通知组件 -->
    <n-notification-provider>
      <Naive />
    </n-notification-provider>
  </n-message-provider>
</template>

<style scoped></style>