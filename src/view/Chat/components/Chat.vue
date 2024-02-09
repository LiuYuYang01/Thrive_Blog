<script setup lang="ts">
import { ref } from 'vue';

const content = ref<string>("")

const chatList = ref(
  [
    {
      name: "尤雨溪",
      content: "Hello",
      date: "2023-05-25"
    }
  ]
)

const send = () => {
  chatList.value.push({
    name: "刘宇阳",
    content: content.value,
    date: "2023-05-25"
  })
}
</script>

<template>
  <div class="Chat">
    <!-- 对话用户信息 -->
    <div class="header">站长</div>

    <!-- 聊天框 -->
    <div class="chatList">
      <div v-for="item in chatList">{{ item.content }}</div>
    </div>

    <div class="chatSend">
      <textarea placeholder="你想说些什么？" v-model="content"></textarea>

      <div class="send" @click="send"><n-button type="info" style="width: 100%;">发送</n-button></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.Chat {
  position: relative;
  flex: 1;
  background-color: #f4f4f4;

  // 对话信息
  .header {
    height: 80px;
    line-height: 80px;
    padding-left: 40px;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    font-weight: 900;
    font-size: 18px;
  }

  // 评论框
  .chatSend {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
    border-top: 1px solid #eee;
    background-color: #fff;

    textarea {
      width: 100%;
      height: 200px;
      padding: 20px;
      border-radius: 5px;
      box-sizing: border-box;
      transition: all $move;
      outline: none;
      resize: none;
      border: none;
    }

    .send {
      position: absolute;
      bottom: 20px;
      right: 20px;
      width: 100px;
    }
  }
}
</style>
