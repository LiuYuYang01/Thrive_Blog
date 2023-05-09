<script setup lang="ts">
import { ref } from 'vue';

const isImmerse = ref(false)
const update = () => {
  isImmerse.value = !isImmerse.value
}
</script>

<template>
  <!-- :modules="['Author']" 设置只显示哪些模块 -->
  <!-- :isModules="false" 是否开启沉浸模式 -->
  <Frame :modules="['Author']" :isImmerse="isImmerse">
    <Article @updateImmerse="update" />
  </Frame>
</template>

<style scoped lang="scss">
.main {
  margin-top: 60px;
}
</style>
