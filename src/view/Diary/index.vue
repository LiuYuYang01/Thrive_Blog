<script setup lang="ts">
import useAuthorStore from '@/stores/Author'
const store = useAuthorStore()
store.getAuthor()

const diarys = [
  {
    id: 1,
    content: "追魂夺命流水线，暗无天日鬼车间",
    cover: ["https://liuyuyang.net/usr/uploads/2023/04/2401325320.jpeg", "https://liuyuyang.net/usr/uploads/2023/04/624381519.jpg", "https://liuyuyang.net/usr/uploads/2023/04/2555324373.jpeg"],
    date: "2023-08-13"
  },
  {
    id: 2,
    content: "互联网从不缺乏天才，而努力才是最终的入场券!",
    cover: ["https://liuyuyang.net/usr/uploads/2023/08/3843057387.jpg"],
    date: "2023-08-13"
  },
  {
    id: 3,
    content: "一天一夜没睡，登顶江苏最高峰！玉女峰",
    cover: ["http://liuyuyang.net/usr/uploads/2023/06/20230501163808.jpg"],
    date: "2023-05-01"
  }
]

const viewImages = ref(false)
const image = ref<string>('')
</script>

<template>
  <!-- <div class="swiper">
    <Swiper src="https://t3.picb.cc/2023/08/04/ITN4rM.jpeg" :Ripple="true">
      <div class="title">记录点点滴滴</div>
    </Swiper>
  </div> -->

  <div class="diary">
    <div class="my">
      <img :src="store.authorInfo.avatar" alt="">
    </div>

    <!-- 日记列表 -->
    <div class="list">
      <div class="title">✍️ 生活随笔</div>

      <div class="item" v-for="item in diarys" :key="item.id">
        <img :src="store.authorInfo.avatar" alt="" class="avatar">

        <div class="info">
          <div class="name">{{ store.authorInfo.name }}</div>
          <div class="content">{{ item.content }}</div>

          <!-- 单图 -->
          <template v-if="item.cover?.length === 1">
            <div class="cover">
              <img :src="cover" v-for="cover in item.cover" :key="cover" @click="image = cover; viewImages = true">
            </div>
          </template>

          <!-- 双图 -->
          <template v-if="item.cover?.length === 2">
            <div class="cover" style="height: 145px;">
              <div style="width: 49%; height: 100%;" :style="{ backgroundImage: `url(${cover})` }"
                v-for="cover in item.cover" :key="cover" @click="image = cover; viewImages = true"></div>
            </div>
          </template>

          <!-- 三图、四图 -->
          <template v-if="item.cover?.length === 3 || item.cover?.length === 4">
            <div class="cover" style="height: 300px;flex-wrap: wrap;">
              <div style="width: 49%; height: 47%;" :style="{ backgroundImage: `url(${cover})` }"
                v-for="cover in item.cover" :key="cover" @click="image = cover; viewImages = true"></div>
            </div>
          </template>

          <div class="date">{{ item.date }}</div>
        </div>
      </div>
    </div>
  </div>

  <el-dialog v-model="viewImages" title="查看图片">
    <img :src="image" style="width: 100%;">
  </el-dialog>
</template>

<style scoped lang="scss">
@import "@/styles/public.scss";

// .swiper {
//   :deep .Swiper {
//     background-position: center top;
//   }

//   .title {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: rgba(0, 0, 0, 0.2);
//     width: 100%;
//     height: 100%;
//     padding-bottom: 60px;
//     color: #fff;
//     font-size: 40px;
//     text-shadow: 0 0.1875rem 0.5rem #1c1f21;
//   }
// }

// 滚动条轨道
::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #f5f5f5;
}

// 进度条颜色
::-webkit-scrollbar-thumb {
  background-color: #e4e4e4;
}

.diary {
  display: flex;
  height: 100vh;
  padding-top: 50px;
  margin: 0 auto;
  background: $subBackground;
  transition: background-color $move;

  .my {
    overflow: hidden;
    width: 400px;
    height: 400px;
    position: fixed;
    top: 25%;
    margin-left: 200px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 50%;

    >img {
      width: 100%;
      height: 100%;
      transition: transform $move;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  .title {
    width: 400px;
    margin: 20px auto 0px;
    text-align: center;
    font-size: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #fafafa;
  }

  .list {
    overflow: auto;
    position: relative;
    left: 230px;
    width: 700px;
    padding: 0 20px;
    margin: 50px auto;
    background: #fff;
    border-radius: 10px;
    border: 1px solid #eee;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 8px 24px;

    .item {
      display: flex;
      padding: 30px;
      border-bottom: 1px solid #f2f2f2;

      &:last-child {
        border-bottom: none;
      }

      .avatar {
        width: 50px;
        height: 50px;
        margin-right: 20px;
        border: 1px solid #eee;
        border-radius: 10px;
      }

      .name {
        font-size: 20px;
        color: #586c97;
      }

      .content {
        margin: 10px 0;
        color: #555;
      }

      .cover {
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        width: 400px;
        height: 300px;
        margin: 20px 0;

        img {
          height: 100%;
          border-radius: $round;
          cursor: pointer;
        }

        >div {
          border-radius: $round;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          cursor: pointer;
        }
      }

      .date {
        font-size: 12px;
        color: #666;
      }
    }
  }
}
</style>
