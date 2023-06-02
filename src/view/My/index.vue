<script setup lang="ts">
// 引入用户信息
import useUserStore from '@/stores/Author'
import { storeToRefs } from 'pinia';

const Store = useUserStore()
const { authorInfo } = storeToRefs(Store)

Store.getAuthor()
</script>

<template>
  <div class="my">
    <div class="header">
      <div class="info">
        <!-- 介绍 -->
        <div class="introduce"></div>

        <!-- 头像 -->
        <div class="avatar">
          <img :src="authorInfo.avatar" alt="">
        </div>
      </div>
    </div>
  </div>
  {{ authorInfo }}
</template>

<style scoped lang="scss">
.my {
  margin-top: 60px;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 600px;
    background: url("@/assets/img/bg.png") no-repeat center;
    background-size: 100%;
  }
}
</style>
