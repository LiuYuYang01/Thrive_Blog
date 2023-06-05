<script setup lang="ts">

</script>

<template>
    <div class="ToolBar">
        <iconpark-icon name="sun" class="item" style="color: #f5a630;" />
        <iconpark-icon name="dark-mode-9dj2acj3" class="item" style="color: #62acf9;" />
        <img src="@/assets/svg/other/custom.svg" alt="" class="item" />
        <iconpark-icon name="to-top-one" class="item" />
    </div>
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
    @include container;

    .item {
        padding: 10px;
        font-size: 25px;
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
</style>
