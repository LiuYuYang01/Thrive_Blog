<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { ElNotification } from 'element-plus';

// 简化写法
const $css = document.documentElement.style

// 白天黑夜切换
const isEffect = ref<boolean>(false)

// 双色主题效果
const Theme = reactive({
    Light: {
        BoxColor: "#fff"
    },
    Dark: {
        BoxColor: "#1d1f20"
    }
})

watch(isEffect, n => {
    if (n) {
        // 黑夜模式
        console.log("黑夜");
        $css.setProperty("--BoxColor", Theme.Dark.BoxColor)
    } else {
        // 白天模式
        console.log("白天");
        $css.setProperty("--BoxColor", Theme.Light.BoxColor)
    }
})






// 颜色弹出框
const topicDialog = ref(false)

// 自定义主题颜色
const localColor = localStorage.getItem("topicColor")
const color = ref(localColor || "#539dfd")

$css.setProperty("--color", color.value)

// 更新主题色
const updateColor = () => {
    topicDialog.value = false

    // 更改css变量--color的值
    $css.setProperty("--color", color.value)

    // 将主题色存储在本地
    localStorage.setItem("topicColor", color.value)

    ElNotification({
        title: '通知',
        message: '更改主题色成功',
        type: 'success',
    })
}
</script>

<template>
    <div class="ToolBar">
        <!-- 黑夜 -->
        <iconpark-icon name="sun" class="item" style="color: #f5a630;" @click="isEffect = !isEffect" v-if="isEffect" />

        <!-- 白天 -->
        <iconpark-icon name="dark-mode-9dj2acj3" class="item" style="color: #62acf9;" @click="isEffect = !isEffect" v-else />

        <!-- 个性化 -->
        <img src="@/assets/svg/other/custom.svg" alt="" class="item" @click="topicDialog = true" />

        <!-- 返回顶部 -->
        <img src="@/assets/svg/other/top.svg" alt="" class="item" />

        <!-- 返回顶部核心代码 -->
        <el-backtop :right="85" :bottom="155" style="z-index: 999;">
            <img src="@/assets/svg/other/top.svg" alt="" style="width: 30px;" />
        </el-backtop>
    </div>

    <!-- 弹出框：自定义颜色 -->
    <el-dialog v-model="topicDialog" title="Tips" width="30%">
        <!-- 自定义头部标题 -->
        <template #header style="display: flex; align-items: center;">
            <img src="@/assets/svg/other/custom.svg" style="width: 30px; margin-right: 10px;" />
            <span>不止一种色彩！</span>
        </template>

        <!-- 颜色列表 -->
        <div class="list">
            <div class="item" style="backgroundColor: #539DFD;" @click="color = '#539DFD'"></div>
            <div class="item" style="backgroundColor: #42b983;" @click="color = '#42b983'"></div>
            <div class="item" style="backgroundColor: #727cf5;" @click="color = '#727cf5'"></div>
            <div class="item" style="backgroundColor: #fa6946;" @click="color = '#fa6946'"></div>
            <div class="item" style="backgroundColor: #fab64f;" @click="color = '#fab64f'"></div>
            <div class="item" style="backgroundColor: #44b6a0;" @click="color = '#44b6a0'"></div>
            <div class="item" style="backgroundColor: #30362f;" @click="color = '#30362f'"></div>
            <div class="item" style="backgroundColor: #dc382f;" @click="color = '#dc382f'"></div>
            <div class="item" style="backgroundColor: #a18acd;" @click="color = '#a18acd'"></div>
        </div>

        <!-- 自定义颜色 -->
        <div style="margin: 30px 10px -10px;">
            <span>自定义主题色：</span>
            <el-color-picker v-model="color" />
        </div>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="topicDialog = false">取消更改</el-button>

                <el-button type="primary" @click="updateColor">更改色彩</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<style scoped lang="scss">
@import "@/styles/public.scss";

.ToolBar {
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 80px;
    bottom: 150px;
    width: 50px;
    background-color: #fff;
    user-select: none;
    z-index: 999;
    @include container;

    .item {
        padding: 10px;
        font-size: 30px;
        border-bottom: 1px solid #f7f4f4;
        transition: background-color $move;
        cursor: pointer;

        &:hover {
            background-color: #fbfbfb;
        }

        &:last-child {
            border-bottom: none;
        }
    }
}

.list {
    display: flex;
    justify-content: center;

    .item {
        width: 30px;
        height: 30px;
        margin-right: 20px;
        border-radius: $round;
        cursor: pointer;
    }
}

// 自定义element-plus 弹框样式
.dialog-footer button:first-child {
    margin-right: 10px;
}

.dialog-footer button {
    padding: 10px;
}

// 自定义颜色的宽度
:deep .el-color-picker__trigger {
    width: 330px;
}
</style>
