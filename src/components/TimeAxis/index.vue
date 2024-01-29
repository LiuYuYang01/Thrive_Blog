<script setup lang="ts">
const Diarys = [
    {
        content: 'Event start',
        date: '2018-04-15',
        color: "#49b984"
    },
    {
        content: 'Approved',
        date: '2018-04-13',
    },
    {
        content: 'Success',
        date: '2018-04-11',
        color: "#ff6b6b"
    }
]
</script>

<template>
    <div class="TimeAxis">
        <el-timeline>
            <el-timeline-item v-for="(item, index) in Diarys" :key="index" :color="item.color" :timestamp="item.date"
                size="large">
                {{ item.content }}
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<style scoped lang="scss">
.TimeAxis {
    display: flex;
    justify-content: center;
    width: 450px;
    margin: 50px auto 0;

    :deep(.el-timeline-item) {
        padding: 30px 10px;
    }

    :deep(.el-timeline-item__tail) {
        left: 6px;
        border-left: 4px solid var(--el-timeline-node-color);
    }

    :deep(.el-timeline-item__node--large) {
        width: 20px;
        height: 20px;
    }

    :deep(.el-timeline-item__wrapper) {
        padding-left: 38px;
    }
}
</style>
