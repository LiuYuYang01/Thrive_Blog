<script setup lang='ts'>
import { ref } from 'vue'

// 导入分类数据的类型
import { Cate } from '@/types/Cate'

// 导入Scss主题变量
import global from '@/styles/global.module.scss';

// 导入相关API
import { getCateListAPI } from '@/api/Cate'

// 获取页面滚动的距离
import useScroll from '@/util/useScroll';
const top = useScroll()


let cateList = ref<Cate[]>()

// 获取分类导航信息
const getCateList = async () => {
  try {
    const { data } = await getCateListAPI()

    cateList.value = data
  } catch (error) {
    console.log("在分类导航中捕获到异常：", error);
  }
}

getCateList()

// 导出Scss指定的变量
// const { color } = global;
</script>

<template>
  <div class="header" :style="{ backgroundColor: top > 100 ? '#fff' : '' }" :class="top > 100 ? 'gradient' : ''">
    <div class="w">
      <!-- 一级导航 -->
      <ul class="one">
        <!-- LOGO -->
        <li class="one_item">
          <!-- 图片LOGO模式 -->
          <a href="javascript:;" class="one_item_nav" v-if="false">
            <img src="@/assets/img/logo_dark.png" alt="" v-if="top > 100">
            <img src="@/assets/img/logo_light.png" alt="" v-else>
          </a>

          <!-- 文字LOGO模式 -->
          <a href="javascript:;" class="one_item_nav" :style="{ color: top > 100 ? '#333' : '#fff' }" v-else>
            <b>Blog</b>
          </a>
        </li>

        <!-- 首页 -->
        <li class="one_item">
          <a href="javascript:;" class="one_item_nav" :style="{ color: top > 100 ? '#333' : '#fff' }">💎 首页</a>
        </li>

        <!-- 导航列表 -->
        <li class="one_item" v-for="item in cateList" :key="item.id">
          <a href="javascript:;" class="one_item_nav" :style="{ color: top > 100 ? '#333' : '#fff' }">
            {{ item.icon }} {{ item.name }}

            <iconpark-icon name="down" v-if="item.children.length"></iconpark-icon>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/global.scss';

.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  transition: background-color $move;
  z-index: 999;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 0;
    background: linear-gradient(#ffffff, transparent 70%);
  }

  .w {
    width: $w;
    height: 60px;
    margin: 0 auto;

    // 一级导航
    .one {
      display: flex;
      align-items: center;
      height: 60px;

      // 导航列表
      .one_item {
        img {
          width: 145px;
          height: 40px;
          padding-right: 40px;
          transition: all $move;
        }

        &:hover img {
          transition: transform $move;
          transform: scale(0.9);
        }

        &:hover .one_item_nav {
          color: $color !important;
        }

        // 导航
        .one_item_nav {
          display: inline-block;
          padding: 20px;
          color: #fff;
          font-size: 15px;
          transition: color $move;

          // 文字模式
          b {
            font-size: 20px;
            padding-right: 40px;
          }

          // 导航与图标颜色
          span,
          iconpark-icon {
            vertical-align: middle
          }

          iconpark-icon {
            padding-right: 5px;
            font-size: 18px;
          }
        }
      }
    }
  }
}

.gradient {
  &::after {
    content: "";
    height: 30px;
    transition: height $move;
  }
}
</style>