<script setup lang="ts">
const props = defineProps<{ tags: string }>()

const list = (str: string) => {
    return str.split(",")
}
</script>

<template>
    <div class="Tag">
        <img src="@/assets/svg/other/tag.svg" alt="">

        <!-- 标签列表 -->
        <div class="list">
            <a href="javascript:;" v-for="item in list(tags)" :key="item">{{ item }}</a>
        </div>
    </div>
</template>

<style scoped lang="scss">
.Tag {
    display: flex;
    align-items: center;
    margin: 30px 0;

    img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }

    // 标签列表
    .list {
        font-size: 12px;

        a {
            padding: 2px 6px;
            margin: 0 5px;
            border-radius: 20px;
            color: #666;
            background-color: #faf9f9;

            &:nth-child(1) {
                color: #0d6efd;
                background-color: rgba(13, 110, 253, .1);
            }

            &:nth-child(2) {
                color: #6610f2;
                background-color: rgba(102, 16, 242, .1);
            }

            &:nth-child(3) {
                color: #20c997;
                background-color: rgba(32, 201, 151, .1);
            }

            &:nth-child(4) {
                color: #dc3545;
                background-color: rgba(220, 53, 69, .1);
            }

            &:nth-child(5) {
                color: #fd7e14;
                background-color: rgba(253, 126, 20, .1);
            }
        }
    }
}
</style>
