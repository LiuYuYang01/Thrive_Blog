<script setup lang="ts">
import { ref } from 'vue';
import io from 'socket.io-client';

// 登记框
const model = ref<boolean>(true)

// 用户信息
const userInfo = reactive({
  name: "",
  avatar: "Smokey"
})

// 头像列表
const avatars = ["Ginger", "Patches", "Sadie", "Casper", "Molly", "Smokey", "Lilly"]
const avatarFilter = (v: string) => `https://api.dicebear.com/7.x/fun-emoji/svg?seed=${v}`

// 名称校验规则
const rules = reactive({
  name: [
    { required: true, message: '名称不能为空', trigger: 'blur' },
    { min: 1, max: 10, message: '名称长度限制为 1 ~ 10个字符', trigger: 'blur' },
  ]
})

const socket = io('http://localhost:5000'); // 替换为你的 Flask-SocketIO 服务器地址

socket.on('connect', () => {
  console.log('connected to server');
});

socket.on('message', (message) => {
  console.log('received message:', message);
});

socket.emit('message', 'Hello from client');

// const aaa = 
const content = ref<string>("")

const list = ref(
  [
    {
      avatar: avatarFilter("Sammy"),
      name: "尤雨溪",
      content: "Hello",
      date: "2023-05-25"
    }
  ]
)

const send = () => {
  list.value.push({
    avatar: avatarFilter("Smokey"),
    name: "刘宇阳",
    content: content.value,
    date: "2023-05-25"
  })
}

// 聊天页不让他显示星空颗粒背景
onMounted(() => {
  const StarrySky: HTMLStyleElement = document.querySelector(".StarrySky")!
  useRoute().path === "/chat" ? StarrySky.style.display = "none" : StarrySky.style.display = "block"
})
</script>

<template>
  <div class="Chat">
    <!-- 对话用户信息 -->
    <div class="header">作者</div>

    <!-- 聊天框 -->
    <div class="list">
      <div v-for="item in list" class="msg">
        <img :src="item.avatar" class="avatar">
        <p class="content">{{ item.content }}</p>
      </div>
    </div>

    <div class="reply">
      <textarea placeholder="你想说些什么？" v-model="content"></textarea>

      <div class="send" @click="send">
        <el-button type="primary" plain>发送 Ctrl + Enter</el-button>
      </div>
    </div>

    <el-dialog v-model="model" title="信息登记" width="500">
      <el-form :model="userInfo" :rules="rules">
        <el-form-item label="名称" prop="name">
          <el-input v-model="userInfo.name" autocomplete="off" style="width: 300px;" />
        </el-form-item>

        <el-form-item label="头像">
          <el-radio-group v-model="userInfo.avatar" class="ml-4">
            <el-radio :label="item" size="large" v-for="(item, index) in avatars" :key="index">
              <img :src="avatarFilter(item)" alt="">
            </el-radio>
          </el-radio-group>

          <!-- <img :src="avatarFilter(item)" alt="" v-for="(item, index) in avatars" :key="index"> -->
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
.Chat {
  flex: 1;
  position: relative;
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

  .list {
    padding: 20px;

    .msg {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }

    .avatar {
      width: 50px;
      height: 50px;
      border-radius: $round;
    }

    .content {
      background-color: #fff;
      padding: 15px;
      margin-left: 10px;
      @include container;
    }
  }

  // 评论框
  .reply {
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
      right: 60px;
      width: 100px;
    }
  }

  :deep(.el-form-item__content) {
    .el-radio.el-radio--large {
      margin-bottom: 30px;
      margin-top: 10px;

      img {
        width: 50px;
        height: 50px;
        border-radius: 15px;
      }
    }
  }
}
</style>
