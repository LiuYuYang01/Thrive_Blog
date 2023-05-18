<script setup lang="ts">
import { ref } from 'vue';
import { getEmoteListAPI } from '@/api/Emote'
import { Emote } from '@/types/Emote'

// 表情包存放的地址
const url = "https://static.liuyuyang.net/emote/"

// 表情框是否显示
const isEmote = ref<boolean>(false)

// 表情框显示隐藏切换
const toEmote = () => {
    isEmote.value = !isEmote.value
}

// 表情包列表
const EmoteList = ref<Emote[]>({
    id: 0,
    name: "",
    cove: "",
    list: []
})

// 获取表情包列表
const getEmoteList = async () => {
    const { data } = await getEmoteListAPI()
    console.log(data);

    EmoteList.value = data
    console.log(EmoteList.value);

}
getEmoteList()
</script>

<template>
    <div class="Comment">
        <div class="title"></div>

        <!-- 评论框 -->
        <div class="frame">
            <textarea name="" id="" cols="30" rows="7" placeholder="不断进取，创造无限可能🎉"></textarea>

            <!-- 表情按钮 -->
            <img src="@/assets/svg/other/emote.svg" class="btn" @click="toEmote" />
        </div>

        <!-- 表情框 -->
        <div class="emote" v-show="isEmote">
            <!-- 表情列表 -->
            <div class="list"></div>

            <!-- 分组选项 -->
            <div class="tab">
                <div v-for="item in EmoteList" :key="item.id" class="item">
                    <img :src="item.cove" alt="" :title="item.name">
                </div>
            </div>
        </div>

        <!-- 表单项 -->
        <input type="text" class="ipt" style="width: 200px;" placeholder="显示名称 *">
        <input type="text" class="ipt" placeholder="电子邮箱 *">
        <input type="text" class="ipt" style="width: 314px;" placeholder="你的站点（选填） *">

        <!-- 发布评论 -->
        <div class="post">
            <a href="javascript:;">发布</a>
        </div>
    </div>
</template>

<style scoped lang="scss">
// 封装表单样式
@mixin form {
    border: 1px solid #eee;
    border-radius: 5px;
    box-sizing: border-box;
    transition: all $move;
    outline: none;

    &:focus {
        border: 1px solid $color;
        box-shadow: 0 10px 20px 1px rgb(83, 157, 253, .1);
    }
}

.Comment {
    margin-top: 100px;

    // 评论标题
    .title {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #f7f7f7;

        &::after {
            content: "一针见血 🎉";
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            width: 180px;
            background-color: #fff;
            text-align: center;
            font-size: 24px;
        }
    }

    // 评论框
    .frame {
        position: relative;

        // 内容框
        textarea {
            width: 100%;
            padding: 20px;
            margin-top: 40px;

            @include form;
        }

        // 表情按钮
        .btn {
            position: absolute;
            bottom: 10px;
            left: 0px;
            width: 35px;
            height: 35px;
            padding: 15px;
            cursor: pointer;
        }
    }

    // 表情框
    .emote {
        position: absolute;
        width: 500px;
        height: 220px;
        border-radius: 5px;
        border: 1px solid #f0f0f0;
        background-color: #fff;

        // 表情列表
        .list {
            height: 80%;
        }

        // 表情包分组
        .tab {
            display: flex;
            height: 20%;
            background-color: #f7f9fe;

            .item {
                transition: background-color $move;

                &:hover {
                    background-color: #f1f3f8;
                }

                img {
                    width: 30px;
                    height: 30px;
                    padding: 5px 15px;
                    cursor: pointer;
                }
            }
        }
    }

    // 表单项
    .ipt {
        width: 250px;
        height: 32px;
        padding-left: 15px;
        margin-right: 20px;

        @include form;

        &:last-of-type {
            margin-right: 0;
        }
    }

    // 发布评论
    .post {
        height: 35px;
        margin-top: 15px;
        margin-bottom: 200px;
        border-radius: $round;
        background-color: $color;
        text-align: center;

        a {
            display: inline-block;
            width: 100%;
            height: 100%;
            color: #fff;
        }

        &:active {
            background-color: #2682fb;
        }
    }
}
</style>
