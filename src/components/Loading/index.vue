<script setup lang="ts">
const props = defineProps<{ loading: boolean }>()
</script>

<template>
  <div class="Loading" v-if="loading">
    <img src="@/assets/svg/other/loading.svg" alt="">
  </div>
</template>

<style scoped lang="scss">
.Loading {
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 9999;
}
</style>
