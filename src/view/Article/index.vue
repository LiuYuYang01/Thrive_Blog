<script setup lang="ts">
const cover = ref<string>("")
</script>

<template>
  <div class="Article">
    <!-- 取消波浪、打字机效果 -->
    <!-- <Swiper src="http://static.liuyuyang.net/images/63adb5eb87f9b.jpg" :Ripple="true" :Typing="true"></Swiper> -->
    <Swiper :src="cover" :Ripple="true" :Typing="true"></Swiper>

    <!-- :modules="['Author']" 设置只显示哪些模块 -->
    <Frame>
      <Article v-model="cover" />
    </Frame>
  </div>
</template>

<style scoped lang="scss">
.main {
  // margin-top: -250px;
}

.Article {
  :deep .Directory {
    margin-top: 0;
  }
}
</style>
