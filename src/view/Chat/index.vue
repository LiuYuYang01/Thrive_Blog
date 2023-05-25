<script setup lang="ts">
import List from './components/List.vue'
import Chat from './components/Chat.vue'
</script>

<template>
  <div class="ChatBox">
    <List />
    <Chat />
  </div>
</template>

<style scoped lang="scss">
.ChatBox {
  display: flex;
  justify-content: space-between;
  width: 60%;
  height: 600px;
  margin: 100px auto;
  border-radius: 5px;
  border: 1px solid #eee;
  background-color: #fff;
  transition: all $move;

  &:hover {
    box-shadow: 0 10px 20px 1px rgb(83, 157, 253, .1);
  }
}
</style>
