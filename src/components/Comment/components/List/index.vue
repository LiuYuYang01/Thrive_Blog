<script setup lang="ts">
import { getArticleCommentListAPI, getCommentListAPI } from '@/api/Comment'

import { svg } from "@/utils"

// 引入时间插件
import moment from 'moment';

const props = defineProps<{ isPublish: boolean }>()
const emit = defineEmits<{ (e: "reply", data: { id: number, name: string }): void }>()

// 监听是否发布完评论，发布完后就重新获取评论列表数据
watch(() => props.isPublish, () => {
  getCommentData()
})

// 分页查询
const paging = reactive({ page: 1, size: 5 })

// 评论加载效果
const loading = ref(false)

const route = useRoute()

// 当前文章下的所有评论
const list = ref<Discuss[]>([])

// 监听分页变化
watch(paging, () => {
  loading.value = true;
  loading.value = false;
})

// 获取评论列表数据
const getCommentData = async () => {
  loading.value = true;

  const { data } = await getArticleCommentListAPI(+route.params.id)
  list.value = data

  loading.value = false;
}
getCommentData()

// 回复评论
const reply = (id: number, name: string) => {
  const content = document.querySelector(".frame .ipt") as HTMLDivElement;
  content.focus();

  // 给发布评论组件传递id，用于表示回复一级还是二级评论
  emit("reply", { id, name })
}
</script>

<template>
  <ul class="list" v-loading="loading" :element-loading-svg="svg" element-loading-svg-view-box="-10, -10, 50, 50"
    v-if="list?.length">

    <li class="item" v-for="one in list" :key="one.id">
      <!-- 一级评论 -->
      <div class="comment_user_one">
        <img :src="one.avatar" alt="" class="avatar">

        <div class="comment_user_one_info">
          <a :href="one.url" class="name active" target="_blank" v-if="one.url">{{ one.name }}</a>
          <a class="name" v-else>{{ one.name }}</a>
          <span class="time">{{ moment(one.createtime).format('YYYY-MM-DD HH:mm') }}</span>
        </div>

        <div class="reply" @click="reply(one.id as number, one.name)">回复</div>
      </div>

      <!-- 评论内容 -->
      <div class="comment_main">{{ one.content }}</div>

      <!-- 二级评论 -->
      <template v-if="one.children?.length">
        <div class="comment_user_two" v-for="two in one.children" :key="two.id">
          <!-- 评论者信息 -->
          <div class="comment_user_two_info">
            <img :src="two.avatar" class="avatar_two">
            <a :href="two.url" class="name active" target="_blank" v-if="two.url">{{ two.name }}</a>
            <a class="name" v-else>{{ two.name }}</a>
            <span class="time">{{ moment(two.createtime).format('YYYY-MM-DD HH:mm') }}</span>
            <div class="reply" @click="reply(two.id as number, two.name)">回复</div>
          </div>

          <!-- 评论内容 -->
          <div class="comment_main">
            <a href="javascript:;">@{{ one.name }}： </a>
            <span>{{ two.content }}</span>
          </div>

          <!-- 三级评论 -->
          <div class="comment_user_three" v-for="three in two.children" :key="two.id">
            <!-- 评论者信息 -->
            <div class="comment_user_three_info">
              <img :src="three.avatar" class="avatar_three">
              <a :href="three.url" class="name active" target="_blank" v-if="three.url">{{ three.name }}</a>
              <a class="name" v-else>{{ three.name }}</a>
              <span class="time">{{ moment(three.createtime).format('YYYY-MM-DD HH:mm') }}</span>
              <div class="reply" @click="reply(two.id as number, three.name)">回复</div>
            </div>

            <!-- 评论内容 -->
            <div class="comment_main">
              <a href="javascript:;">@{{ two.name }}： </a>
              <span>{{ three.content }}</span>
            </div>
          </div>
        </div>
      </template>
    </li>
  </ul>

  <div class="void" v-else>
    <img src="@/assets/svg/other/empty.svg" alt="">
    <p>空空如也~</p>
  </div>

  <!-- 当评论数量超过5个时才会显示分页 -->
  <!-- <Pagination v-model="paging.page" :size="5" :total="tempCommentsList.length" v-if="tempCommentsList.length >= 5" /> -->
</template>

<style scoped lang="scss">
/* 评论内容 */
.list {
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 105px;
    padding: 10px;
    border-bottom: 1px dashed #eee;
    transition: all 0.3s;

    &:hover {
      border-radius: $round;
      background-color: #f3f8fe;
    }

    // 回复按钮布局
    .reply {
      position: absolute;
      right: 70px;
      padding: 10px 20px;
      margin-left: 5px;
      color: #666;
      cursor: pointer;
      transition: all $move;

      &:hover {
        color: $color;
      }
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
          font-size: 16px;
          transition: color $move;
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
      color: #666;
      margin: 5px 0px 5px 50px;
      font-size: 15px;
      transition: all $move;
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
          transition: color $move;
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

    /* 三级评论 */
    .comment_user_three {
      margin: 10px 0 0 50px;

      .comment_user_three_info {
        display: flex;
        align-items: center;

        .avatar_three {
          width: 25px;
          height: 25px;
          margin-right: 10px;
          border-radius: 50%;
        }

        .name {
          margin-right: 15px;
          font-size: 15px;
          color: #444;
          transition: color $move;
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

// 空状态
.void {
  text-align: center;
  margin: 50px 0 10px;

  img {
    width: 200px;
    height: 150px;
  }

  p {
    margin-top: 10px;
    color: #333;
  }
}
</style>