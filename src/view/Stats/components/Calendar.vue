<script setup lang="ts">
import { ref } from 'vue'
import { ActivityCalendar } from 'vue-activity-calendar'
import 'vue-activity-calendar/style.css'
import type { Calendar } from '@/types/Stats'
import { getCalendarAPI } from '@/api/Stats'

// 动态日历数据
let calendarList = ref<Calendar[]>([]);

// 选择的年份
const year = ref<number>(2023)
// 当前年份
const thisYear = new Date().getFullYear()

// 获取当前年份活跃图的数据
const getCalendar = async (n: number) => {
    try {
        const { data } = await getCalendarAPI()
        console.log(data[n], 678);

        year.value = n
        calendarList.value = data[n]
    } catch (error) {
        console.log("在 Stats 文件中捕获到错误：", error);
    }
}
getCalendar(thisYear)

// 颜色值
const colorsList: string[] = ["#f5f5f5", "#b0cff9", "#7cb4fd", "#539dfd"]

// 合并两个类型Calendar += { index: number }
const activeEvent = (e: Calendar & { index: number }) => {
    // 点击哪个单元格就获取哪个的时间
    console.log(e);
}
</script>

<template>
    <!-- 站点活跃图组件 -->
    <div class="active">
        <ActivityCalendar :data="calendarList" :width="55" :height="7" :cellLength="15" :cellInterval="10"
            :cellBorderRadius="4" :fontSize="12" :colors="colorsList" :showWeekDayFlag="false" :clickEvent="activeEvent"
            endDate="2022-12-30" />

        <!-- 选项 -->
        <div class="options">
            <a href="javascript:;" :class="year === 2021 ? 'active' : ''" @click="getCalendar(2021)">2021</a>
            <a href="javascript:;" :class="year === 2022 ? 'active' : ''" @click="getCalendar(2022)">2022</a>
            <a href="javascript:;" :class="year === 2023 ? 'active' : ''" @click="getCalendar(2023)">2023</a>
        </div>
    </div>

    <!-- endDate：截止日期有个BUG，截止在2023相当于2022 -->
</template>

<style scoped lang="scss">
.active {
    .activityCalendar {
        margin: 0 auto;
        margin-top: 20px;
    }

    .options {
        a {
            font-size: 16px;
            color: #333;
            padding: 5px 10px;
            margin: 0 5px;
            border-radius: 20px;
        }

        .active {
            color: #fff;
            background-color: $color;
        }
    }
}
</style>
