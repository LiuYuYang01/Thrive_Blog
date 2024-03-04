<script setup lang="ts">
// 引入时间插件
import moment from "moment";
// 随机预览图
import { randomImage } from "@/utils/RandomImage";

const props = defineProps<{ data: Paginate<Article[]> }>();
const emit = defineEmits<{ (e: "get", params: Page): void }>();

const paginate = ref<Paginate<Article[]>>(props.data);

watch(
  paginate,
  (p) => {
    if (props.data) emit("get", { page: p.page, size: p.size });
  },
  { immediate: true }
);
</script>

<template>
  <div class="card" v-if="data">
    <div class="item" :style="{ backgroundImage: `url(${item.cover || randomImage()})` }" v-for="item in data.result">
      <RouterLink :to="`/article/${item.id}`" class="box">
        <h1 class="title">{{ item.title }}</h1>
               
        <div class="info">
          <span>⏰ {{ moment(item.createtime).format("YYYY-MM-DD HH:mm") }}</span>
          <span>🏷️ {{ item.cate[0].name }}</span>
        </div>
      </RouterLink>
    </div>

    <!-- 当文章数量超过5个时才会显示分页 -->
    <Pagination v-model="paginate" :paginate="data" v-if="data && data.total >= 5" />
  </div>
</template>

<style scoped lang="scss">
.card {
  .item {
    overflow: hidden;
    position: relative;
    width: 860px;
    height: 240px;
    margin-bottom: 30px;
    border-radius: 10px;
    background: url("https://liuyuyang.net/img/20ac414805e3491098df678d3d9f100f_KJCPUs.jpg") center no-repeat;
    background-size: cover;
    cursor: pointer;
    transition: transform $move;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      transition: background-color $move;
    }

    &:hover {
      transform: scale(1.03);

      &::after {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }

    .box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;

      .title {
        font-size: 25px;
        color: #fff;
        text-align: center;
      }

      .info {
        display: flex;
        justify-content: center;
        color: #fff;
        text-align: center;
        position: relative;
        z-index: 2;

        span {
          padding: 0 10px;
          color: #eee;
        }
      }
    }
  }
}
</style>@/utils/RandomImage
