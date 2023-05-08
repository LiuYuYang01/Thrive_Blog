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
                    <div class="info">测试评论内容测试评论内容</div>
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
                    <div class="info">测试评论内容测试评论内容</div>
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
                    <div class="info">测试评论内容测试评论内容</div>
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
                    <div class="info">测试评论内容测试评论内容</div>
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
                    <div class="info">测试评论内容测试评论内容</div>
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

            // 评论者头像
            .avatar {
                width: 45px;
                height: 45px;
                border-radius: 50%;
                margin-right: 10px;
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

            &:hover .info {
                color: $color;
            }
        }
    }
}
</style>
