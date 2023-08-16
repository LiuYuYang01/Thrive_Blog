<script setup lang="ts">
// 引入用户信息
import useUserStore from '@/stores/Author'

const Store = useUserStore()
const { authorInfo } = storeToRefs(Store)

Store.getAuthor()

// 动态获取图片路径
const getIcon = (icon: string) => {
  return new URL(`../../assets/svg/technology/${icon}.svg`, import.meta.url).href
}

// 技术栈列表
const technology = [
  {
    name: "HTML",
    background: "#f74916"
  },
  {
    name: "CSS",
    background: "#3e95f1"
  },
  {
    name: "JavaScript",
    background: "#fbcb34"
  },
  {
    name: "TypeScript",
    background: ""
  },
  {
    name: "Nodejs",
    background: "#333333"
  },
  {
    name: "Vue",
    background: ""
  },
  {
    name: "Vite",
    background: "#977bf5"
  },
  {
    name: "Pinia",
    background: ""
  },
  {
    name: "React",
    background: "#20232a"
  },
  {
    name: "Webpack",
    background: ""
  },
  {
    name: "Python",
    background: ""
  },
  {
    name: "MySQL",
    background: ""
  },
  {
    name: "Flask",
    background: ""
  },
  {
    name: "小程序",
    background: "#b9f0af"
  },
  {
    name: "GitHub",
    background: ""
  },
  {
    name: "PS",
    background: "#031d26"
  },
  {
    name: "Ai",
    background: "#251301"
  },
  {
    name: "Dw",
    background: "#082601"
  },
  {
    name: "Pr",
    background: "#2a0033"
  },
  {
    name: "Ae",
    background: "#20003f"
  }
]


// 进入页面 动画效果
onMounted(() => {
  const introduce = document.querySelector(".introduce") as HTMLElement
  const technology = document.querySelector(".technology .list") as HTMLElement

  setTimeout(() => {
    // 文字下移动画效果
    introduce.style.marginTop = "0"

    // 技术栈左右滚动效果
    technology.style.marginLeft = "-1320px"

    // 监听过渡结束事件
    technology.addEventListener("transitionend", () => {
      technology.style.marginLeft = "450px"
    })
  })
})
</script>

<template>
  <div class="my">
    <div class="header">
      <div class="info">
        <!-- 介绍 -->
        <div class="introduce">
          <div class="row1">I am <span class="name">YuYang</span></div>
          <div class="row1">一名Web全栈开发工程师</div>
          <div class="row2">我从小就对计算机编程技术有着无穷的兴趣，所以我的梦想是做一名技术顶尖的 架构师，因此我一直在朝着这个方向去努力、去坚持 直到梦想成真！</div>
        </div>

        <!-- 头像 -->
        <div class="avatar">
          <img :src="authorInfo.avatar" alt="">
        </div>
      </div>
    </div>

    <!-- 我的技术栈 -->
    <div class="technology">
      <div class="title">我的技术栈</div>
      <div class="list" style="margin-left: 450px;">
        <img :src="getIcon(item.name)" alt="" v-for="item in technology" :key="item.name"
          :style="{ backgroundColor: item.background }">
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
          line-height: 30px;
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

  .technology {
    overflow: hidden;
    height: 200px;
    background: #fff;

    .title {
      text-align: center;
      color: #666;
      padding-top: 15px;
      font-family: kuaikan;
    }

    .list {
      width: $w;
      display: flex;
      margin: 20px 0;
      transition: all 30s linear;

      img {
        width: 70px;
        height: 70px;
        padding: 20px;
        margin: 0 20px;
        border-radius: 20px;
        border: 1px solid #eee;
        box-shadow: 0 2px 16px -3px rgba(0, 0, 0, 0.15);
      }
    }
  }
}
</style>
