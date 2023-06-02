<script setup lang="ts">
import { ref } from 'vue';

// 是否开启沉浸模式
const isImmerse = ref(false)
const update = () => {
  isImmerse.value = !isImmerse.value
}
</script>

<template>
  <!-- 取消波浪、打字机效果 -->
  <Swiper src="http://static.liuyuyang.net/images/63adb5eb87f9b.jpg" :isRipple="true" :isTyping="true"></Swiper>

  <!-- :modules="['Author']" 设置只显示哪些模块 -->
  <!-- :isModules="false" 是否开启沉浸模式 -->
  <Frame :modules="['Author', 'Directory']" :isImmerse="isImmerse">
    <Article @updateImmerse="update" />
  </Frame>
</template>

<style scoped lang="scss">
.main {
  margin-top: -250px;
}
</style>
