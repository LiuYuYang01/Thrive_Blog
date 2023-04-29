<script setup lang="ts">
import Layout from './components/Layout.vue'
import Calendar from './components/Calendar.vue'
</script>

<template>
  <div class="container">
    <Layout>
      <img src="@/assets/svg/other/active.svg" alt="">

      <span> 作者活跃度</span>

      <!-- 活跃图 -->
      <Calendar/>
    </Layout>

    <Layout>
      <img src="@/assets/svg/other/Stats.svg" alt="">

      <span> 数据统计</span>
    </Layout>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin-top: 100px;
}

img {
  width: 50px;
  height: 50px;
  vertical-align: bottom;
}
</style>
