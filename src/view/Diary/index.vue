<script setup lang="ts">
import { MoreFilled } from '@element-plus/icons-vue'

const activities = [
  {
    content: 'Custom icon',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
    icon: MoreFilled,
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: 'Custom size',
    timestamp: '2018-04-03 20:46',
    size: 'large',
  },
  {
    content: 'Custom hollow',
    timestamp: '2018-04-03 20:46',
    type: 'primary',
    hollow: true,
  },
  {
    content: 'Default node',
    timestamp: '2018-04-03 20:46',
  },
]
</script>

<template>
  <Swiper :data="['记录点点滴滴']" src="https://t3.picb.cc/2023/08/04/ITN4rM.jpeg"></Swiper>

  <el-timeline>
    <el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon" :type="activity.type"
      :color="activity.color" :size="activity.size" :hollow="activity.hollow" :timestamp="activity.timestamp">
      {{ activity.content }}
    </el-timeline-item>
  </el-timeline>
</template>

<style scoped lang="scss">
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  padding-bottom: 60px;
  color: #fff;
  font-size: 40px;
  text-shadow: 0 0.1875rem 0.5rem #1c1f21;
}
</style>
