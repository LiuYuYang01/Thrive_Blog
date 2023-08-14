<script setup lang="ts">
import "@/util/changeTheBackground"
</script>

<template>
  <div class="swiper">
    <Swiper src="https://t3.picb.cc/2023/08/04/ITN4rM.jpeg" :Ripple="true">
      <div class="title">记录点点滴滴</div>
    </Swiper>
  </div>

  <!-- 日记列表 -->
  <div class="diary">
    <div class="list">
      <div class="item">
        <img src="https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640" alt="">

        <div class="info">
          <div class="name">YuYang</div>
          <div class="content">互联网从不缺乏天才，而努力才是最终的入场券!</div>
          <div class="date">2023-08-13</div>
        </div>
      </div>

      <div class="item">
        <img src="https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640" alt="">

        <div class="info">
          <div class="name">YuYang</div>
          <div class="content">互联网从不缺乏天才，而努力才是最终的入场券!</div>
          <div class="date">2023-08-13</div>
        </div>
      </div>

      <div class="item">
        <img src="https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640" alt="">

        <div class="info">
          <div class="name">YuYang</div>
          <div class="content">互联网从不缺乏天才，而努力才是最终的入场券!</div>
          <div class="date">2023-08-13</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/public.scss";

.swiper {
  :deep .Swiper {
    background-position: center top;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    padding-bottom: 60px;
    color: #fff;
    font-size: 40px;
    text-shadow: 0 0.1875rem 0.5rem #1c1f21;
  }
}

.diary {
  .list {
    width: 900px;
    padding: 10px;
    margin: 50px auto 0;
    // background-color: #fff;
    // @include container;

    .item {
      display: flex;
      height: 150px;
      padding: 30px;
      border-bottom: 1px solid #f2f2f2;

      img {
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
      }

      .date {
        font-size: 12px;
        color: #666;
      }
    }
  }
}
</style>
