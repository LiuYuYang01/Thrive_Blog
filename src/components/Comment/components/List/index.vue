<script setup lang="ts">
import { ref } from 'vue';
import { Comment } from '@/types/Comment'
import { getCommentListAPI } from '@/api/Comment'
// 引入时间插件
import moment from 'moment';

const props = defineProps<{ isPublish: boolean }>()
const emit = defineEmits<{ (e: "setAid", id: number): void }>()


// 监听是否发布完评论，发布完后就重新获取评论列表数据
watch(() => props.isPublish, (val) => {
  if (val) getCommentData()
})

const loading = ref(false)
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `

const route = useRoute()

const CommentsList = ref<Comment[]>([])
CommentsList.value = []

// 获取评论列表数据
async function getCommentData() {
  loading.value = true;

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

  loading.value = false;
}
getCommentData()

// 回复评论
const reply = (id: number) => {
  const content = document.querySelector(".frame .ipt") as HTMLDivElement;
  content.focus();

  // 给发布评论组件传递id，用于表示回复一级还是二级评论
  emit("setAid", id)
}
</script>

<template>
  <ul class="list" v-loading="loading" :element-loading-svg="svg" element-loading-svg-view-box="-10, -10, 50, 50">
    <li class="item" v-for="one in CommentsList" :key="one.id">
      <!-- 评论者信息 -->
      <div class="comment_user_one">
        <img :src="one.avatar" alt="" class="avatar">

        <div class="comment_user_one_info">
          <a :href="one.url" class="name active" target="_blank" v-if="one.url">{{ one.name }}</a>
          <a class="name" v-else>{{ one.name }}</a>
          <span class="time">{{ moment(one.date).format('YYYY-MM-DD') }}</span>
        </div>
      </div>

      <!-- 评论内容 -->
      <div class="comment_main">{{ one.content }} <div class="reply" @click="reply(one.id as number)">回复</div>
      </div>

      <!-- 二级评论 -->
      <template v-if="one.children?.length">
        <div class="comment_user_two" v-for="two in one.children" :key="two.id">
          <!-- 评论者信息 -->
          <div class="comment_user_two_info">
            <img src="https://q2.qlogo.cn/headimg_dl?dst_uin=528609062&spec=100" class="avatar_two">
            <a :href="two.url" class="name active" target="_blank" v-if="two.url">{{ two.name }}</a>
            <a class="name" v-else>{{ two.name }}</a>
            <span class="time">{{ moment(two.date).format('YYYY-MM-DD') }}</span>
          </div>

          <!-- 评论内容 -->
          <div class="comment_main">
            <!-- <a href="javascript:;">@{{ one.name }}： </a> -->
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

    // 回复按钮布局
    .reply {
      display: inline-block;
      height: 25px;
      line-height: 25px;
      padding: 0 5px;
      margin-left: 10px;
      border: 1px solid $contentColor;
      border-radius: $round;
      color: $contentColor;
      opacity: 0;
      cursor: pointer;
      transition: all $move;

      &:hover {
        color: $color;
        border: 1px solid $color;
      }
    }

    &:hover .reply {
      opacity: 1;
    }

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

        .active {
          color: $color;
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
        margin: 5px 0px 5px 40px;

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
