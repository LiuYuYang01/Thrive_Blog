<!-- 
Author：刘宇阳,
Blog：http://liuyuyang.net/
Time：2023年04月09日
GitHub：https://github.com/LiuYuYang01
Info：互联网从不缺乏天才，而努力才是最终的入场券！
-->

<script setup lang='ts'>
import Typed from 'typed.js'
import { onMounted } from 'vue'

const options = {
  strings: ['半山腰的风景很美, 然而, 我还是更新到山顶去看看!', '路虽远, 行则将至, 事虽难, 做则必成!'],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
};

onMounted(() => {
  var typed = new Typed('#typed', options);
})
</script>

<template>
  <RouterView />

  <span id="typed"></span>
</template>

<style scoped lang="scss">
#typed {
  font-family: Alimama ShuHeiTi, -apple-system, BlinkMacSystemFont;
}
</style>