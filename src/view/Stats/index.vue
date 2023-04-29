<script setup lang="ts">
import Calendar from './components/Calendar.vue'
import Stats from './components/Stats.vue'
import Layout from './components/Layout.vue'
</script>

<template>
  <div class="container">
    <Layout>
      <Calendar />
    </Layout>

    <!-- <Layout>
      <Calendar />
    </Layout> -->
  </div>
</template>

<style scoped lang="scss">
.container {
  margin-top: 100px;
}
</style>
