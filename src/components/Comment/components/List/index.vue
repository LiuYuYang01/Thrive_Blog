<script setup lang="ts">
import { ref } from 'vue';
import { Comment } from '@/types/Comment'
import { getCommentListAPI } from '@/api/Comment'
// 引入时间插件
import moment from 'moment';

const route = useRoute()

const CommentsList = ref<Comment[]>([])
CommentsList.value = []

// 获取评论列表数据
async function getCommentData() {
  let { data } = await getCommentListAPI()

  // 筛选当前评论下的二级评论
  data.forEach(i => {
    i.children = [];

    data.forEach(j => {
      if (i.id === j.rid) {
        i.children?.push(j)
      }
    })
  })

  // 过滤出当前文章的评论
  const currentArticle = data.filter(item => item.aid + "" === route.params.id as string)

  // 转换二级评论
  CommentsList.value = currentArticle;
}
getCommentData()
</script>

<template>
  <ul class="list">
    <li class="item" v-for="one in CommentsList" :key="one.id">
      <!-- 评论者信息 -->
      <div class="comment_user_one">
        <img :src="one.avatar" alt="" class="avatar">

        <div class="comment_user_one_info">
          <span class="name">{{ one.name }}</span>
          <span class="time">{{ moment(one.date).format('YYYY-MM-DD') }}</span>
        </div>
      </div>

      <!-- 评论内容 -->
      <div class="comment_main">{{ one.content }}</div>

      <!-- 二级评论 -->
      <template v-if="one.children?.length">
        <div class="comment_user_two" v-for="two in one.children" :key="two.id">
          <!-- 评论者信息 -->
          <div class="comment_user_two_info">
            <img src="https://q2.qlogo.cn/headimg_dl?dst_uin=528609062&spec=100" class="avatar_two">
            <span class="name">{{ two.name }}</span>
            <span class="time">{{ moment(two.date).format('YYYY-MM-DD') }}</span>
          </div>

          <!-- 评论内容 -->
          <div class="comment_main">
            <a href="javascript:;">@{{ one.name }}： </a>
            <span style="font-size:15px;color:#444">{{ two.content }}</span>
          </div>
        </div>
      </template>
    </li>
  </ul>
</template>

<style scoped lang="scss">
/* 评论内容 */
ul {
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 105px;
    padding: 10px 0;
    border-bottom: 1px dashed #eee;
    transition: all 0.3s;

    // 评论者头像
    .avatar {
      width: 35px;
      height: 35px;
      margin-right: 15px;
      border-radius: 50%;
    }

    /* 评论者信息 */
    .comment_user_one {
      display: flex;
      align-items: center;

      /* 评论者信息 */
      .comment_user_one_info {
        display: flex;
        flex-direction: column;

        /* 评论者昵称 */
        .name {
          color: #333;
          transition: all 0.3s;
          font-size: 16px;
        }

        /* 评论时间 */
        .time {
          color: #8599ab;
          margin-top: -7px;
          font-size: 14px;
        }
      }
    }

    /* 评论的内容 */
    .comment_main {
      margin: 5px 0px 5px 50px;
      font-size: 15px;
      transition: all 0.3s;
      word-break: break-word;
    }

    /* 二级评论 */
    .comment_user_two {
      margin: 10px 0 0 50px;

      .comment_user_two_info {
        display: flex;
        align-items: center;

        .avatar_two {
          width: 25px;
          height: 25px;
          margin-right: 10px;
          border-radius: 50%;
        }

        .name {
          margin-right: 15px;
          font-size: 15px;
          color: #444;
        }

        .time {
          color: #8599ab;
          font-size: 12px;
        }
      }

      .comment_main {
        margin: 5px 0px 5px 50px;

        a {
          color: #007bff;
        }
      }
    }

    /* 最后一个取消下边框 */
    &:last-of-type {
      border-bottom: 0;
    }
  }
}
</style>
