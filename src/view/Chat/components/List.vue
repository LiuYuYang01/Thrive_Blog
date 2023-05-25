<script setup lang="ts">

</script>

<template>
  <div class="Left">
    <!-- 用户信息 -->
    <div class="userInfo">
      <img src="http://q.qlogo.cn/headimg_dl?dst_uin=3311118881&spec=640&img_type=jpg" alt="" />

      <div>
        <p style="font-size: 15px;">方法总比困难多</p>
        <p style="font-size: 12px;color: #666;padding-top: 5px;">ID: 3311118881</p>
      </div>
    </div>

    <!-- 聊天室列表 -->
    <div class="list">
      <div class="item">
        <img src="http://static.liuyuyang.net/emote/Sticker/3d%E7%9C%BC%E9%95%9C.png" alt="" />
        <a href="javascript:;">联系站长</a>
      </div>

      <div class="item">
        <img src="http://static.liuyuyang.net/emote/Sticker/%E5%AE%B3%E7%BE%9E.png" alt="" />
        <a href="javascript:;">Blog交流群</a>
      </div>

      <div class="item">
        <img src="http://static.liuyuyang.net/emote/Sticker/%E5%8A%A0%E7%8F%AD.png" alt="" />
        <a href="javascript:;">Bug反馈群</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.Left {
  width: 260px;
  border-right: 1px solid #eee;

  // 用户信息
  .userInfo {
    display: flex;
    align-items: center;
    height: 80px;
    padding: 20px;
    border-bottom: 1px solid #eee;
    transition: color $move;
    cursor: pointer;

    &:hover {
      color: $color;
    }

    img {
      width: 50px;
      height: 50px;
      padding-right: 20px;
    }
  }

  // 聊天室列表
  .list {
    .item {
      display: flex;
      align-items: center;
      height: 70px;
      border-bottom: 1px solid #fbfbfb;
      transition: background-color $move;
      cursor: pointer;

      a {
        transition: color $move;
      }

      &:hover {
        background-color: #fafcff;

        a {
          color: $color;
        }
      }

      img {
        width: 40px;
        height: 40px;
        padding: 0 20px;
      }
    }
  }
}
</style>
