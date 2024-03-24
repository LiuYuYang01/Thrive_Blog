<script setup lang="ts">
import Layout from './components/Layout.vue'
import Active from './components/Active.vue'
import Radar from './components/Radar.vue'
import Line from './components/Line.vue'
import Pie from './components/Pie.vue'
import Bar from './components/Bar.vue'

const centerDialogVisible = ref(true)
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
        <Bar />
      </div>
    </Layout>
  </div>

  <el-dialog v-model="centerDialogVisible" title="提示" width="30%" center>
    <span style="font-size: 30px;">等待开发，敬请期待！</span>

    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">好的</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
.container {
  margin-top: 100px;

  .stats {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 30px;

    div {
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
