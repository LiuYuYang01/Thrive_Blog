<script setup lang='ts'>
import { useConfigStore } from '@/stores'
const store = useConfigStore()
</script>

<template>
  <div class="footer">
    <p class="info">{{ store.web.footer }}</p>
  </div>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  background-color: #fff;
  transition: all $move;

  .info {
    width: 600px;
    line-height: 25px;
    padding: 40px;
    padding-left: 20%;
    font-size: 14px;
    color: #333;
    transition: color $move;
  }
}
</style>