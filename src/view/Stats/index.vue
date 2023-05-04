<script setup lang="ts">
import Layout from './components/Layout.vue'
import Active from './components/Active.vue'
import Radar from './components/Radar.vue'
import Line from './components/Line.vue'
import Pie from './components/Pie.vue'
</script>

<template>
  <div class="container">
    <Layout>
      <img src="@/assets/svg/other/active.svg" alt="">

      <span> 作者活跃度</span>

      <!-- 活跃图 -->
      <Active />
    </Layout>

    <Layout>
      <img src="@/assets/svg/other/Stats.svg" alt="">

      <span> 数据统计</span>

      <!-- 统计 -->
      <div class="stats" style="margin-top: 30px">
        <Pie />
        <Radar />
        <Line />
      </div>
    </Layout>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin-top: 100px;
  
  .stats{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 30px;

    div{
      width: 50% !important;
    }
  }

  img {
    width: 50px;
    height: 50px;
    vertical-align: bottom;
  }
}
</style>
