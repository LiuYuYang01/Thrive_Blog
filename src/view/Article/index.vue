<script setup lang="ts">

</script>

<template>
  <button>沉浸式阅读</button>
  
  <Frame :modules="['Author']">
    <Article />
  </Frame>
</template>

<style scoped lang="scss">
.main {
  margin-top: 60px;
}
</style>
