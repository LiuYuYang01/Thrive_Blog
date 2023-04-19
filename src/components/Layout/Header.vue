<script setup lang='ts'>

</script>

<template>
  <div class="header">
    <div class="w">
      <!-- 一级导航 -->
      <ul class="one">
        <li class="one_item">
          <a href="javascript:;" class="one_item_nav">
            <img src="@/assets/img/logo_light.png" alt="">
          </a>
        </li>

        <li class="one_item">
          <a href="javascript:;" class="one_item_nav">
            <iconpark-icon name="home"></iconpark-icon>
            <span> 首页</span>
          </a>
        </li>

        <li class="one_item">
          <a href="javascript:;" class="one_item_nav">
            <iconpark-icon name="home"></iconpark-icon>
            <span> 首页</span>
          </a>
        </li>

        <li class="one_item">
          <a href="javascript:;" class="one_item_nav">
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
  // background-color: #fff;

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
          transition: transform $move;
        }

        &:hover img {
          transition: transform $move;
          transform: scale(0.9);
        }

        .one_item_nav {
          display: inline-block;

          // 导航与图标颜色
          span,
          iconpark-icon {
            color: #fff;
            vertical-align: middle
          }
        }
      }
    }
  }
}
</style>