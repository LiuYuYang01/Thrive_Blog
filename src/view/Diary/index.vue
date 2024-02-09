<script setup lang="ts">
import useAuthorStore from '@/stores/Author'
const store = useAuthorStore()
store.getAuthor()

const diarys = [
  {
    id: 1,
    content: "追魂夺命流水线，暗无天日鬼车间",
    cover: ["https://liuyuyang.net/usr/uploads/2023/04/2401325320.jpeg", "https://liuyuyang.net/usr/uploads/2023/04/624381519.jpg", "https://liuyuyang.net/usr/uploads/2023/04/2555324373.jpeg"],
    date: "2023-08-13 8:21"
  },
  {
    id: 2,
    content: "互联网从不缺乏天才，而努力才是最终的入场券!",
    cover: ["https://liuyuyang.net/usr/uploads/2023/08/3843057387.jpg"],
    date: "2023-08-13 8:28"
  },
  {
    id: 3,
    content: "一天一夜没睡，登顶江苏最高峰！玉女峰",
    cover: ["http://liuyuyang.net/usr/uploads/2023/06/20230501163808.jpg"],
    date: "2023-05-01  23:47"
  }
]

const viewImages = ref(false)
const image = ref<string>('')
</script>

<template>
  <div class="diary">
    <div class="header">
      <div class="box">
        <div class="my">
          <img :src="store.authorInfo.avatar" alt="">
        </div>

        <h3>前途未必光明坦荡，但一定充满渴望!</h3>
      </div>
    </div>

    <!-- 日记列表 -->
    <div class="list">
      <!-- <div class="title">🏄‍♂️ 闪念</div> -->

      <div class="item" v-for="item in diarys" :key="item.id">
        <img :src="store.authorInfo.avatar" alt="" class="avatar">
        <!-- <img src="https://s11.ax1x.com/2023/12/28/piqsmb4.jpg" alt="" class="avatar"> -->

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
            <div class="cover img4" style="height: 300px;flex-wrap: wrap;">
              <div style="width: 49%; height: 47%;" :style="{ backgroundImage: `url(${cover})` }"
                v-for="cover in item.cover" :key="cover" @click="image = cover; viewImages = true"></div>
            </div>
          </template>

          <div class="date">{{ item.date }}</div>
        </div>
      </div>

      <!-- 加载更多 -->
      <a href="javascript:;" class="loadMore">加载更多...</a>
    </div>
  </div>

  <el-dialog v-model="viewImages" title="查看图片">
    <img :src="image" style="width: 100%;">
  </el-dialog>
</template>

<style scoped lang="scss">
@import "@/styles/public.scss";

// 滚动条轨道
::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #f9f9f9;
  transition: all $move;
}

// 进度条颜色
::-webkit-scrollbar-thumb {
  background-color: #e4e4e4;
}

// 头像动画效果
@keyframes miniShape {

  0%,
  100% {
    border-radius: 42% 58% 70% 30%/45% 45% 55% 55%;
    transform: translate3d(0, 0, 0) rotateZ(.01deg);
  }

  34% {
    border-radius: 70% 30% 46% 54%/30% 29% 71% 70%;
    transform: translate3d(0, 5px, 0) rotateZ(.01deg);
  }

  50% {
    transform: translate3d(0, 0, 0) rotateZ(.01deg);
  }

  67% {
    border-radius: 100% 60% 60% 100%/100% 100% 60% 60%;
    transform: translate3d(0, -3px, 0) rotateZ(.01deg);
  }
}

.diary {
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 0 150px;

  margin: 0 auto;
  background: $subBackground;
  transition: background $move;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 650px;
    height: 180px;
    padding: 20px;
    margin-bottom: -20px;
    border-radius: 10px;
    border: 1px solid $borderColor;
    background: url("https://bu.dusays.com/2023/11/10/654e2cf6055b0.jpg") center;
    background-size: 100%;
    transition: all $move;

    .box {
      position: relative;
      top: 75px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .my {
        overflow: hidden;
        width: 120px;
        height: 120px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        border-radius: 50%;

        >img {
          width: 100%;
          height: 100%;
          transition: transform $move;
          animation: 5s linear infinite miniShape;
        }

        &:hover img {
          transform: scale(1.1);
        }
      }

      h3 {
        color: $shallowColor;
        font-size: 14px;
        margin-top: 20px;
      }
    }
  }

  // .title {
  //   width: 400px;
  //   margin: 20px auto 0px;
  //   text-align: center;
  //   font-size: 30px;
  //   padding-bottom: 20px;
  //   border-bottom: 1px solid $contentLight;
  //   transition: border-bottom $move;
  // }

  .list {
    overflow: auto;
    width: 650px;
    min-height: 500px;
    padding: 0 20px;
    background: #f9f9f9;
    border-radius: 10px;
    border: 1px solid $borderColor;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 8px 24px;
    transition: all $move;

    .title {
      color: $textColor;
    }

    .item {
      display: flex;
      padding: 30px;
      border-bottom: 1px solid $borderColor;
      background-color: #f9f9f9;
      transition: all $move;

      &:first-of-type {
        margin-top: 90px;
      }

      &:last-of-type {
        border-bottom: none;
      }

      .avatar {
        width: 50px;
        height: 50px;
        margin-right: 20px;
        border: 1px solid #eee;
        border-radius: 20px;
      }

      .info {
        width: 90%;

        .name {
          font-size: 20px;
          color: #586c97;
        }

        .content {
          line-height: 30px;
          margin: 10px 0;
          color: #666;
        }

        .cover {
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          margin: 20px 0;

          img {
            width: 100%;
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

    .loadMore {
      display: block;
      height: 30px;
      line-height: 30px;
      padding: 10px 0;
      margin-bottom: 10px;
      text-align: center;
      border: 1px solid $borderColor;
      border-radius: 5px;
      color: #666;

      &:hover {
        background-color: #f9f9f9;
      }
    }
  }
}
</style>
