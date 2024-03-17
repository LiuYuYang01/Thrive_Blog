<script setup lang="ts">
import { useChatStore } from '@/stores';

const store = useChatStore()

const room = ref<number>(10001)

// 监听房间号变化
watch(room, (v) => {
  store.updateRoom(v)
}, { immediate: true })

const avatarFilter = (v: string) => `https://api.dicebear.com/7.x/fun-emoji/svg?seed=${v}`

const list = ref([
  {
    id: 10001,
    title: "滴滴作者",
    image: "http://image.liuyuyang.net/emote/Sticker/3d%E7%9C%BC%E9%95%9C.png"
  },
  {
    id: 10002,
    title: "Blog交流群",
    image: "http://image.liuyuyang.net/emote/Sticker/%E5%AE%B3%E7%BE%9E.png"
  },
  {
    id: 10003,
    title: "需求墙",
    image: "http://image.liuyuyang.net/emote/Sticker/%E5%8A%A0%E7%8F%AD.png"
  },
  {
    id: 10004,
    title: "Bug反馈群",
    image: "http://image.liuyuyang.net/emote/Sticker/%E5%8A%A0%E7%8F%AD.png"
  }
])
</script>

<template>
  <div class="Left">
    <!-- 用户信息 -->
    <div class="user">
      <img :src="avatarFilter(store.chatUserInfo?.avatar as string)" alt="" />

      <div class="info">
        <p class="name">{{ store.chatUserInfo?.name || '神秘人' }}</p>
        <p class="id">ID: 3311118881</p>
      </div>
    </div>

    <!-- 聊天室列表 -->
    <div class="list">
      <div :class="['item', room === item.id ? 'active' : '']" v-for="(item, index) in list" :key="item.id"
        @click="room = item.id">
        <img :src="item.image" alt="" />
        <a href="javascript:;">{{ item.title }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.Left {
  width: 260px;
  border-right: 1px solid #eee;
  background-color: #2b333e;

  // 用户信息
  .user {
    display: flex;
    align-items: center;
    height: 80px;
    padding: 20px;
    color: #fff;
    border-bottom: 1px solid #454e5a;
    cursor: pointer;

    .info {
      padding-left: 20px;

      .name {
        color: #fff;
        font-size: 15px;
        transition: color $move;

        &:hover {
          color: $color;
        }
      }

      .id {
        font-size: 12px;
        color: #b0b0b0;
        padding-top: 5px;
        transition: color $move;

        &:hover {
          color: #fff;
        }
      }
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 15px;
    }
  }

  // 聊天室列表
  .list {
    .active {
      background-color: #242c3a;

      a {
        color: $color !important;
      }
    }

    .item {
      display: flex;
      align-items: center;
      height: 70px;
      border-bottom: 1px solid #313c4d;
      transition: background-color $move;
      cursor: pointer;

      a {
        color: #acacac;
        transition: color $move;
      }

      &:hover {
        background-color: #242c3a;

        a {
          color: $color;
        }
      }

      img {
        width: 40px;
        height: 40px;
        padding: 0 20px;
      }
    }
  }
}
</style>
