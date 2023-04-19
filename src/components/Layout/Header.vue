<script setup lang='ts'>
import useScroll from '@/util/useScroll';
const top = useScroll()
</script>

<template>
  <div class="header" :style="{ backgroundColor: top > 100 ? '#fff' : '' }">
    <div class="w">
      <!-- 一级导航 -->
      <ul class="one">
        <li class="one_item">
          <a href="javascript:;" class="one_item_nav">
            <img src="@/assets/img/logo_dark.png" alt="" v-if="top > 100">
            <img src="@/assets/img/logo_light.png" alt="" v-else>
          </a>
        </li>

        <li class="one_item">
          <a href="javascript:;" class="one_item_nav" :style="{ color: top > 100 ? '#333' : '#fff' }">
            <iconpark-icon name="home"></iconpark-icon>
            <span> 首页</span>
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
  transition: background-color $move;
  z-index: 999;

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
        padding: 0 20px;

        img {
          width: 145px;
          height: 40px;
          transition: all $move;
        }

        &:hover img {
          transition: transform $move;
          transform: scale(0.9);
        }

        // 导航
        .one_item_nav {
          display: inline-block;
          color: #fff;
          font-size: 15px;

          // 导航与图标颜色
          span,
          iconpark-icon {
            vertical-align: middle
          }
        }
      }
    }
  }
}
</style>