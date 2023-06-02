<script setup lang="ts">

</script>

<template>
  <ul class="list">
    <li class="item">
      <!-- 评论者信息 -->
      <div class="comment_user_one">
        <img src="https://q2.qlogo.cn/headimg_dl?dst_uin=3311118881&spec=100" alt="" class="avatar">

        <div class="comment_user_one_info">
          <span class="name">方法总比困难多</span>
          <span class="time">2022-06-06 15:28</span>
        </div>
      </div>

      <!-- 评论内容 -->
      <div class="comment_main">
        半山腰的风景很美，然而我还是更想到山顶去看看！
      </div>

      <!-- 二级评论 -->
      <div class="comment_user_two">
        <!-- 评论者信息 -->
        <div class="comment_user_two_info">
          <img src="https://q2.qlogo.cn/headimg_dl?dst_uin=528609062&spec=100" class="avatar_two">
          <span class="name">苏小晨</span>
          <span class="time">2022-06-11 15:28</span>
        </div>

        <!-- 评论内容 -->
        <div class="comment_main">
          <a href="javascript:;">@方法总比困难多： </a>
          <span>加油哦!</span>
        </div>
      </div>
    </li>

    <li class="item">
      <!-- 评论者信息 -->
      <div class="comment_user_one">
        <img src="https://q2.qlogo.cn/headimg_dl?dst_uin=3118614536&spec=100" alt="" class="avatar">

        <div class="comment_user_one_info">
          <span class="name">鱼子酱</span>
          <span class="time">2022-06-06 15:28</span>
        </div>
      </div>

      <!-- 评论内容 -->
      <div class="comment_main">
        生命不息，奋斗不止！只要相信，只要坚持，只要你真的是用生命在热爱，那一定是天赋使命使然，那就是一个人该坚持和努力的东西，无论梦想是什么，无论路有多曲折多遥远，只要是灵魂深处的热爱，就会一直坚持到走上属于自己的舞台！
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
/* 评论内容 */
ul {
  display: flex;
  flex-direction: column;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 105px;
    padding: 10px 0;
    border-bottom: 1px dashed #eee;
    transition: all 0.3s;

    // 评论者头像
    .avatar {
      width: 35px;
      height: 35px;
      margin-right: 15px;
      border-radius: 50%;
    }

    /* 评论者信息 */
    .comment_user_one {
      display: flex;
      align-items: center;

      /* 评论者信息 */
      .comment_user_one_info {
        display: flex;
        flex-direction: column;

        /* 评论者昵称 */
        .name {
          color: var(--Yuexing-tags-a);
          transition: all 0.3s;
          font-size: 16px;
        }

        /* 评论时间 */
        .time {
          color: #8599ab;
          margin-top: 3px;
          font-size: 14px;
        }
      }
    }

    /* 评论的内容 */
    .comment_main {
      margin: 15px 0px 15px 50px;
      font-size: 15px;
      transition: all 0.3s;
      word-break: break-word;
    }

    /* 二级评论 */
    .comment_user_two {
      margin: 10px 0 0 50px;

      .comment_user_two_info {
        display: flex;
        align-items: center;

        .avatar_two {
          width: 25px;
          height: 25px;
          margin-right: 10px;
          border-radius: 50%;
        }

        .name {
          margin-right: 15px;
          font-size: 15px;
          color: #444;
        }

        .time {
          color: #8599ab;
          font-size: 12px;
        }
      }

      .comment_main {
        margin: 10px 0px 10px 50px;

        a {
          color: #007bff;
        }
      }
    }

    /* 最后一个取消下边框 */
    &:last-of-type {
      border-bottom: 0;
    }
  }
}
</style>
