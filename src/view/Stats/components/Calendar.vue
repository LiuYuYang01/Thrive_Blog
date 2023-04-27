<script setup lang="ts">
import { ref } from 'vue'
import { ActivityCalendar } from 'vue-activity-calendar'
import 'vue-activity-calendar/style.css'
import type { Calendar } from '@/types/Stats'
import { getCalendarAPI } from '@/api/Stats'

// 动态日历数据
let calendarList = ref<Calendar[]>([]);

// 获取动态日历的数据
const getCalendar = async () => {
    try {
        const { data } = await getCalendarAPI()

        calendarList.value = data

        console.log(calendarList, 888);

    } catch (error) {
        console.log("在 Stats 文件中捕获到错误：", error);
    }
}
getCalendar()

// 动态日历颜色值
const colorsList: string[] = ["#f5f5f5", "#b0cff9", "#7cb4fd", "#539dfd"]

// 合并两个类型Calendar += { index: number }
const activeEvent = (e: Calendar & { index: number }) => {
    // 点击哪个单元格就获取哪个的时间
    console.log(e);
}
</script>

<template>
    <!-- 动态日历 -->
    <div class="calendar">
        <h1 class="title">📆 动态日历</h1>

        <!-- 动态日历组件 -->
        <ActivityCalendar :data="calendarList" :width="40" :height="7" :cellLength="20" :cellInterval="10"
            :cellBorderRadius="4" :fontSize="12" :colors="colorsList" endDate="2023-04-27" :showWeekDayFlag="false" :clickEvent="activeEvent" />
    </div>
</template>

<style scoped lang="scss">
.calendar {
    width: $w;
    margin: 0 auto;
    border-radius: $round;
    border: 1px solid #f0f0f0;
    background-color: #fff;
    transition: all $move;

    &:hover{
        box-shadow: $boxShadow;
    }

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
