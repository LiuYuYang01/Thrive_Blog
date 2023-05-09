<script setup lang="ts">

</script>

<template>
  <button>沉浸式阅读</button>

  <!-- :modules="['Author']" 设置只显示哪些模块 -->
  <!-- :isModules="false" 是否开启沉浸模式 -->
  <Frame :modules="['Author']" :isModules="false">
    <Article />
  </Frame>
</template>

<style scoped lang="scss">
.main {
  margin-top: 60px;
}
</style>
