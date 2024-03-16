<script setup lang="ts">
import { useChatStore } from '@/stores';

const store = useChatStore()

const avatarFilter = (v: string) => `https://api.dicebear.com/7.x/fun-emoji/svg?seed=${v}`
</script>

<template>
  <div class="Left">
    <!-- 用户信息 -->
    <div class="user">
      <img :src="avatarFilter(store.chatUserInfo?.avatar as string)" alt="" />

      <div class="info">
        <p class="name">{{ store.chatUserInfo?.name || '神秘人'}}</p>
        <p class="id">ID: 3311118881</p>
      </div>
    </div>

    <!-- 聊天室列表 -->
    <div class="list">
      <div class="item">
        <img src="http://image.liuyuyang.net/emote/Sticker/3d%E7%9C%BC%E9%95%9C.png" alt="" />
        <a href="javascript:;">滴滴作者</a>
      </div>

      <div class="item">
        <img src="http://image.liuyuyang.net/emote/Sticker/%E5%AE%B3%E7%BE%9E.png" alt="" />
        <a href="javascript:;">Blog交流群</a>
      </div>

      <div class="item">
        <img src="http://image.liuyuyang.net/emote/Sticker/%E5%8A%A0%E7%8F%AD.png" alt="" />
        <a href="javascript:;">需求墙</a>
      </div>

      <div class="item">
        <img src="http://image.liuyuyang.net/emote/Sticker/%E5%8A%A0%E7%8F%AD.png" alt="" />
        <a href="javascript:;">Bug反馈群</a>
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
