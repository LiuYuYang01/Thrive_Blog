<script setup lang="ts">
import { ActivityCalendar } from 'vue-activity-calendar'
import 'vue-activity-calendar/style.css'
import { getActiveAPI } from '@/api/Stats'

// 动态活跃度数据
let ActiveList = ref<Active>({});

// 当前年份
const thisYear = new Date().getFullYear() + ""

// 选择的年份
const year = ref<string>(thisYear)

// 获取所有年份
const yearList = ref<string[]>([])

// 获取当前年份活跃图的数据
const getActiveList = async () => {
    try {
        const { data } = await getActiveAPI()

        // 获取所有年份
        yearList.value = Object.keys(data)

        ActiveList.value = data
    } catch (error) {
        console.log("Active：", error);
    }
}
getActiveList()

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
        <ActivityCalendar :data="ActiveList[year]" :width="55" :height="7" :cellLength="15" :cellInterval="10"
            :cellBorderRadius="4" :fontSize="12" :colors="colorsList" :showWeekDayFlag="false" :clickEvent="activeEvent"
            endDate="2022-12-30" />

        <!-- 选择年份 -->
        <div class="options">
            <a href="javascript:;" :class="year === item ? 'active' : ''" @click="year = item"
                v-for="item, index in yearList" :key="index">{{ item }}</a>
        </div>
    </div>
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
