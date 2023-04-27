<script setup lang="ts">
import { ActivityCalendar } from 'vue-activity-calendar'
import 'vue-activity-calendar/style.css'
import type { Calendar } from '@/types/Calendar'

// 动态日历的数据
const actives: Calendar[] = [
  { date: "2022-09-12", count: 5 },
  { date: "2022-09-13", count: 5 },
  { date: "2022-09-14", count: 5 },
  { date: "2022-09-15", count: 5 },
  { date: "2022-09-16", count: 5 },
  { date: "2022-09-17", count: 5 },
  { date: "2022-09-18", count: 5 },
  { date: "2022-09-25", count: 5 },
  { date: "2022-10-02", count: 5 },
  { date: "2022-10-09", count: 5 },
  { date: "2022-10-16", count: 5 },
  { date: "2022-10-15", count: 5 },
  { date: "2022-10-14", count: 5 },
  { date: "2022-10-13", count: 5 },
  { date: "2022-10-06", count: 5 },
  { date: "2022-09-29", count: 5 },
  { date: "2022-09-22", count: 5 },


  { date: "2022-10-24", count: 5 },
  { date: "2022-10-25", count: 5 },
  { date: "2022-10-26", count: 5 },
  { date: "2022-10-27", count: 5 },
  { date: "2022-10-28", count: 5 },
  { date: "2022-10-29", count: 5 },
  { date: "2022-10-30", count: 5 },
  { date: "2022-11-06", count: 5 },
  { date: "2022-11-13", count: 5 },
  { date: "2022-11-20", count: 5 },
  { date: "2022-11-27", count: 5 },
  { date: "2022-11-26", count: 5 },
  { date: "2022-11-25", count: 5 },
  { date: "2022-11-24", count: 5 },
  { date: "2022-11-17", count: 5 },
  { date: "2022-11-10", count: 5 },
  { date: "2022-11-03", count: 5 },


  { date: "2022-12-05", count: 5 },
  { date: "2022-12-06", count: 5 },
  { date: "2022-12-07", count: 5 },
  { date: "2022-12-08", count: 5 },
  { date: "2022-12-09", count: 5 },
  { date: "2022-12-10", count: 5 },
  { date: "2022-12-11", count: 5 },
  { date: "2022-12-18", count: 5 },
  { date: "2022-12-25", count: 5 },
  { date: "2023-01-01", count: 5 },
  { date: "2023-01-08", count: 5 },
  { date: "2023-01-07", count: 5 },
  { date: "2023-01-06", count: 5 },
  { date: "2023-01-05", count: 5 },
  { date: "2022-12-29", count: 5 },
  { date: "2022-12-22", count: 5 },
  { date: "2022-12-15", count: 5 },
  { date: "2022-12-08", count: 5 },


  { date: "2023-01-23", count: 5 },
  { date: "2023-01-24", count: 5 },
  { date: "2023-01-25", count: 5 },
  { date: "2023-01-26", count: 5 },
  { date: "2023-01-30", count: 5 },
  { date: "2023-01-31", count: 5 },
  { date: "2023-02-01", count: 5 },
  { date: "2023-02-02", count: 5 },
  { date: "2023-02-04", count: 5 },
  { date: "2023-02-05", count: 5 },
  { date: "2023-01-28", count: 5 },
  { date: "2023-01-29", count: 5 },
]

// 动态日历颜色值
const colorsList: string[] = ["#f5f5f5", "#b0cff9", "#7cb4fd", "#539dfd"]

// 合并两个类型Calendar += { index: number }
const activeEvent = (e: Calendar & { index: number }) => {
  // 点击哪个单元格就获取哪个的时间
  console.log(e);
}
</script>

<template>
  <div>Hello</div>

  <!-- 动态日历 -->
  <div class="calendar">
    <h1 class="title">📆 动态日历</h1>

    <ActivityCalendar :data="actives" :width="40" :height="7" :cellLength="20" :cellInterval="10" :cellBorderRadius="4"
      :fontSize="12" :colors="colorsList" endDate="2023-04-27" :clickEvent="activeEvent" />
  </div>
</template>

<style scoped lang="scss">
.calendar {
  margin-top: 100px;
  background-color: #fff;

  // 标题
  .title {
    padding: 30px 0;
    text-align: center;
    color: $color;
  }

  // 日历居中
  .activityCalendar {
    margin: 0 auto;
  }
}
</style>
