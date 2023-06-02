<script setup lang="ts">
// 引入用户信息
import useUserStore from '@/stores/Author'
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const Store = useUserStore()
const { authorInfo } = storeToRefs(Store)

Store.getAuthor()

onMounted(() => {
  const introduce = document.querySelector(".introduce")
  setTimeout(() => {
    introduce.style.marginTop = "0"
  })
})
</script>

<template>
  <div class="my">
    <div class="header">
      <div class="info">
        <!-- 介绍 -->
        <div class="introduce">
          <!-- <div class="row1">I am <span class="name">{{ authorInfo.author }}</span></div> -->
          <div class="row">I am <span class="name">张三</span></div>
          <div class="row1">{{ authorInfo.myInfo.row1 }}</div>
          <div class="row2">{{ authorInfo.myInfo.row2 }}</div>
        </div>

        <!-- 头像 -->
        <div class="avatar">
          <img :src="authorInfo.avatar" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.my {
  margin-top: 60px;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 600px;
    background: url("@/assets/img/bg.png") no-repeat center;
    background-size: 100%;
  }

  .info {
    width: $w;
    display: flex;
    justify-content: space-between;
    padding: 0 150px;

    .introduce {
      width: 450px;
      margin-top: -300px;
      color: #353a40;
      font-family: LongZhuTi;
      transition: all 0.8s;

      .name {
        color: #738bff;
      }

      .row {
        font-size: 60px;
        margin-top: 70px;
      }

      .row1 {
        font-size: 40px;
        margin: 40px 0 30px;
      }

      .row2 {
        color: #767676;
        font-family: "黑体";
      }
    }

    .avatar {
      overflow: hidden;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
