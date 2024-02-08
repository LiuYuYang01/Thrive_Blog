<script setup lang='ts'>
import { ref, watch } from 'vue'

// 导入相关API
import { getCateListAPI } from '@/api/Cate'

// 获取页面滚动的距离
import { useScroll } from '@/util';
const top = useScroll()


let cateList = ref<Cate[]>()

// 获取分类导航信息
const getCateList = async () => {
  const { data } = await getCateListAPI()

  cateList.value = data.result
}

getCateList()

const route = useRoute()
// 在这个数组中的路由导航栏默认高亮效果, 否则默认透明效果
const pages = ["/stats", "/chat", "/my", "/diary"]
const is = ref<boolean>(false)
// 监听整个route对象的变化
watch(() => route, r => {
  const c = "/" + r.fullPath.split("/")[1]

  // 查询pages数组中是否包含对应路由的信息
  pages.includes(c) ? is.value = true : is.value = false
}, { immediate: true, deep: true })

import logo_dark from '@/assets/img/logo_dark.png'
import logo_light from '@/assets/img/logo_light.png'

import { useConfigStore } from '@/stores'
const store = useConfigStore()

// 扩展页面
const ExtendPage: Cate = {
  name: "扩展页面",
  icon: "💡",
  url: "",
  mark: "",
  level: 0,
  children: []
}
// const ExtendPage = {
//   name: "扩展页面",
//   icon: "💡",
//   url: "",
//   children: [
//     {
//       "id": 1,
//       "name": "个人主页",
//       "url": "/my",
//     },
//     {
//       "id": 2,
//       "name": "我的相册",
//       "url": "",
//     },
//     {
//       "id": 3,
//       "name": "数据统计",
//       "url": "/stats",
//     },
//     {
//       "id": 4,
//       "name": "在线聊天室",
//       "url": "/chat",
//     }
//   ]
// }
</script>

<template>
  <div :class="top > 100 || is ? 'Header borderColor gradient' : 'Header'">
    <div class="w" style="width: 1500px;">
      <!-- 一级导航 -->
      <ul class="one">
        <!-- LOGO -->
        <li class="one_item">
          <!-- 图片LOGO模式 -->
          <RouterLink to="/" class="one_item_nav" v-if="true">
            <!-- 白天 -->
            <template v-if="!store.isEffect">
              <img :src="top > 100 || is ? logo_light : logo_dark" alt="">
            </template>

            <!-- 黑夜 -->
            <template v-else>
              <img :src="logo_dark" alt="">
            </template>
          </RouterLink>

          <!-- 文字LOGO模式 -->
          <RouterLink to="/" class="one_item_nav" :style="{ color: top > 100 || is ? 'var(--textColor, #333)' : '#fff' }"
            v-else>
            <b>Thrive</b>
          </RouterLink>
        </li>

        <!-- 首页 -->
        <li class="one_item">
          <RouterLink to="/" class="one_item_nav" :style="{ color: top > 100 || is ? 'var(--textColor, #333)' : '#fff' }">
            💎 首页</RouterLink>
        </li>

        <!-- 导航列表 -->
        <li class="one_item" v-for="one in cateList" :key="one.id">
          <RouterLink :to="{ path: `/cate/${one.mark}`, query: { name: one.name } }" class="one_item_nav"
            :style="{ color: top > 100 || is ? 'var(--textColor, #333)' : '#fff' }">
            {{ one.icon }} {{ one.name }}

            <!-- 判断有没有二级分类，有就显示下拉箭头 -->
            <iconpark-icon name="down" v-if="one.children?.length"></iconpark-icon>
          </RouterLink>

          <!-- 二级导航 -->
          <ul class="two">
            <li class="two_item" v-for="two in one?.children" :key="two.id">
              <RouterLink :to="{ path: `/cate/${one.mark}/${two.mark}`, query: { name: two.name } }" class="two_item_nav">
                {{
                  two.name }}</RouterLink>
            </li>
          </ul>
        </li>

        <!-- <li class="one_item">
          <RouterLink to="/diary" class="one_item_nav"
            :style="{ color: top > 100 || is ? 'var(--textColor, #333)' : '#fff' }">
            🏄‍♂️ 闪念</RouterLink>
        </li> -->

        <li class="one_item">
          <RouterLink to="/friend" class="one_item_nav"
            :style="{ color: top > 100 || is ? 'var(--textColor, #333)' : '#fff' }">
            🌎 朋友圈</RouterLink>
        </li>

        <!-- 扩展页面 -->
        <li class="one_item">
          <RouterLink :to="ExtendPage.url" class="one_item_nav"
            :style="{ color: top > 100 || is ? 'var(--textColor, #333)' : '#fff' }">
            {{ ExtendPage.icon }} {{ ExtendPage.name }}

            <!-- 判断有没有二级分类，有就显示下拉箭头 -->
            <iconpark-icon name="down" v-if="ExtendPage.children.length"></iconpark-icon>
          </RouterLink>

          <!-- 二级导航 -->
          <ul class="two">
            <li class="two_item" v-for="two in ExtendPage.children" :key="two.id">
              <RouterLink :to="two.url" class="two_item_nav">{{ two.name }}</RouterLink>
            </li>
          </ul>
        </li>
      </ul>

      <!-- 宽度小于等于800显示 -->
      <div class="top">
        <!-- 图片LOGO模式 -->
        <RouterLink to="/" class="one_item_nav" v-if="true">
          <!-- 白天 -->
          <template v-if="!store.isEffect">
            <img :src="top > 100 || is ? logo_light : logo_dark" alt="">
          </template>

          <!-- 黑夜 -->
          <template v-else>
            <img :src="logo_dark" alt="">
          </template>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/global.scss';

.Header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  backdrop-filter: blur(5px);
  transition: background-color $move;
  z-index: 999;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 0;
    transition: background $move;
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
        position: relative;

        img {
          // width: 145px;
          height: 40px;
          padding-right: 20px;
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
          // color: #fff;
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

        // 二级导航
        .two {
          display: none;
          overflow: hidden;
          position: absolute;
          top: 50px;
          width: 100%;
          border-radius: $round;
          box-shadow: 0 12px 32px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08);

          .two_item {
            .two_item_nav {
              position: relative;
              display: inline-block;
              width: 100%;
              padding: 10px;
              padding-left: 10px;
              font-size: 15px;
              box-sizing: border-box;
              transition: all $move;

              // 鼠标经过的小横线
              &::after {
                content: "";
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                width: 0;
                height: 3px;
                background-color: $color;
                transition: width $move;
              }
            }

            // 鼠标经过二级导航的效果
            &:hover .two_item_nav {
              color: $color;
              // background-color: #f5f7fc;
              padding-left: 30px;

              &:hover::after {
                width: 10px;
              }
            }
          }
        }

        // 鼠标经过哪个，就让哪个二级导航显示
        &:hover .two {
          display: block;
        }
      }
    }

    .top {
      display: none;
      justify-content: center;
      align-items: center;
      height: 60px;

      img {
        height: 50px;
        transition: all $move;
      }

      &:hover img {
        transition: transform $move;
        transform: scale(0.9);
      }

      &:hover .one_item_nav {
        color: $color !important;
      }
    }
  }
}

// 下边框
.borderColor {
  transition: all $move;
}

// 渐变
.gradient {
  &::after {
    content: "";
    height: 30px;
    transition: height $move;
  }
}
</style>