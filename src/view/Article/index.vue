<script setup lang="ts">
// 引入时间插件
import moment from "moment";

const info = ref<Info>({
  cover: "",
  title: "",
  cate: [],
  view: 0,
  comment: 0,
});
</script>

<template>
  <div class="Article">
    <!-- 取消波浪、打字机效果 -->
    <Swiper :src="info.cover" :Ripple="true">
      <div class="box">
        <!-- 文章标题 -->
        <div class="title">{{ info.title }}</div>

        <!-- 文章信息 -->
        <div class="info">
          <!-- 文章创建时间 -->
          <span>
            <iconpark-icon name="alarm-clock" /> {{ moment(info.createtime).format('YYYY-MM-DD HH:mm') }}
          </span>

          <!-- 文章浏览量 -->
          <span>
            <iconpark-icon name="fire" /> {{ info.view }}
          </span>

          <!-- 文章所在的分类 -->
          <span>
            <iconpark-icon name="tag-one" /> {{ info.cate[0]?.name }}
          </span>

          <!-- 文章评论数量 -->
          <span>

            <iconpark-icon name="comment" /> 评论：{{ info.comment }}
          </span>
        </div>
      </div>
    </Swiper>

    <!-- :modules="['Author']" 设置只显示哪些模块 -->
    <Frame>
      <Article v-model="info" />
    </Frame>
  </div>
</template>

<style scoped lang="scss">
.Article {
  :deep(.directory) {
    margin-top: 0;
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);

    .title {
      color: #fff;
      font-size: 40px;
      margin-bottom: 40px;
    }

    .info {
      font-size: 12px;
      font-weight: 400;

      span {
        display: inline-block;
        margin: 0 10px;
        color: #fff;

        iconpark-icon {
          padding: 3px;
          border-radius: 50%;
          color: #fff;
        }

        &:nth-child(1) iconpark-icon {
          background-color: #539dfd;
        }

        &:nth-child(2) iconpark-icon {
          background-color: #eb373a;
        }

        &:nth-child(3) iconpark-icon {
          background-color: #f5a630;
        }

        &:nth-child(4) iconpark-icon {
          background-color: #b335ec;
        }
      }
    }
  }
}
</style>
