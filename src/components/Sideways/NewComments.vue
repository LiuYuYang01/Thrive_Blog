<script setup lang="ts">
import { getCommentListAPI } from '@/api/Comment'
import moment from 'moment';

const list = ref<Comment[]>()

const getCommentData = async () => {
    const { data } = await getCommentListAPI()

    // 根据评论时间进行排序并且只保留5个数据
    // const list = data && data.sort((a, b) => {
    //     const timeA = new Date(a.date!).getTime();
    //     const timeB = new Date(b.date!).getTime();

    //     return timeB - timeA;
    // }).slice(0, 5);

    // commentList.value = list;
    list.value = data.result;
}
getCommentData()
</script>

<template>
    <div class="newComments">
        <div class="title">
            <img src="@/assets/svg/other/comments.svg" alt=""> 最新评论
        </div>

        <!-- 评论列表 -->
        <div class="list">
            <a href="javascript:;" class="item" v-for="item in list" :key="item.id">
                <!-- 头像 -->
                <img :src="item.avatar" v-image class="avatar">
                <!-- 内容 -->
                <div class="content">
                    <!-- 评论信息 -->
                    <div class="info">{{ item.content }}</div>
                    <!-- 评论时间 -->
                    <div class="time">{{ moment(item.createtime).format('YYYY-MM-DD HH:mm') }}</div>
                </div>
            </a>
        </div>
    </div>
</template>

<style scoped lang="scss">
.newComments {
    padding: 15px;
    margin-bottom: 20px;
    background-color: #fff;
    @include container;

    // 文章模块标题
    @include titleRight;

    .title {
        img {
            width: 33px;
            height: 23px;
        }
    }

    .list {
        margin-top: 10px;

        .item {
            display: flex;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid $underBorderColor;
            transition: border-bottom $move;

            // 最后一个评论取消下边框
            &:last-of-type {
                border-bottom: none;
            }

            // 评论者头像
            .avatar {
                width: 45px;
                height: 45px;
                border-radius: 50%;
                margin-right: 10px;
                transition: all $move;
            }

            .content {
                display: flex;
                flex-direction: column;
                justify-content: center;

                // 评论信息
                .info {
                    width: 190px;
                    font-size: 15px;
                    color: $textColor;
                    transition: color $move;

                    // 文本溢出省略
                    display: -webkit-box !important;
                    overflow: hidden;
                    word-break: break-all;
                    text-overflow: ellipsis;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                }

                // 评论时间
                .time {
                    padding-top: 10px;
                    font-size: 13px;
                    color: #666;
                    transition: color $move;
                }
            }

            // 鼠标经过评论列表样式
            &:hover {

                // 颜色高亮
                .info {
                    color: $color;
                }

                // 头像缩放
                .avatar {
                    transform: scale(1.1);
                }
            }
        }
    }
}
</style>
