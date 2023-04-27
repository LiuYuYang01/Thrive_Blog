<script setup lang="ts">
import Calendar from './components/Calendar.vue'
import Stats from './components/Stats.vue'
</script>

<template>
  <div class="container">
    <Calendar />
    <Stats/>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin-top: 100px;
}
</style>
