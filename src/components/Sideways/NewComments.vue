<script setup lang="ts">

</script>

<template>
    <div class="newComments">
        <div class="title">
            <img src="@/assets/svg/other/comments.svg" alt=""> 最新评论
        </div>

        <!-- 评论列表 -->
        <div class="list">
            <a href="javascript:;" class="item">
                <!-- 头像 -->
                <img src="http://q.qlogo.cn/headimg_dl?dst_uin=3311118881&spec=640&img_type=jpg" alt="" class="avatar">
                <!-- 内容 -->
                <div class="content">
                    <!-- 评论信息 -->
                    <div class="info">真的很喜欢这个网站的风格</div>
                    <!-- 评论时间 -->
                    <div class="time">2023-05-08</div>
                </div>
            </a>

            <a href="javascript:;" class="item">
                <!-- 头像 -->
                <img src="http://q.qlogo.cn/headimg_dl?dst_uin=3311118881&spec=640&img_type=jpg" alt="" class="avatar">
                <!-- 内容 -->
                <div class="content">
                    <!-- 评论信息 -->
                    <div class="info">你好，该网站开源吗</div>
                    <!-- 评论时间 -->
                    <div class="time">2023-05-08</div>
                </div>
            </a>

            <a href="javascript:;" class="item">
                <!-- 头像 -->
                <img src="http://q.qlogo.cn/headimg_dl?dst_uin=3311118881&spec=640&img_type=jpg" alt="" class="avatar">
                <!-- 内容 -->
                <div class="content">
                    <!-- 评论信息 -->
                    <div class="info">加油</div>
                    <!-- 评论时间 -->
                    <div class="time">2023-05-08</div>
                </div>
            </a>

            <a href="javascript:;" class="item">
                <!-- 头像 -->
                <img src="http://q.qlogo.cn/headimg_dl?dst_uin=3311118881&spec=640&img_type=jpg" alt="" class="avatar">
                <!-- 内容 -->
                <div class="content">
                    <!-- 评论信息 -->
                    <div class="info">网站的设计非常精美，很喜欢</div>
                    <!-- 评论时间 -->
                    <div class="time">2023-05-08</div>
                </div>
            </a>

            <a href="javascript:;" class="item">
                <!-- 头像 -->
                <img src="http://q.qlogo.cn/headimg_dl?dst_uin=3311118881&spec=640&img_type=jpg" alt="" class="avatar">
                <!-- 内容 -->
                <div class="content">
                    <!-- 评论信息 -->
                    <div class="info">非常Nice！</div>
                    <!-- 评论时间 -->
                    <div class="time">2023-05-08</div>
                </div>
            </a>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/public.scss";

.newComments {
    padding: 15px;
    margin-top: 20px;
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
            padding: 10px 0;
            border-bottom: 1px solid #fbfafa;

            // 最后一个评论取消下边框
            &:last-of-type{
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
                    color: #333;
                    transition: color $move;

                    // 文本溢出省略
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                // 评论时间
                .time {
                    padding-top: 10px;
                    font-size: 13px;
                    color: #666;
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
