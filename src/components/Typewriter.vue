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
    new Typed('#typed', options);
})
</script>

<template>
    <span id="typed"></span>
</template>

<style scoped lang="scss">
#typed {
    font-family: Alimama ShuHeiTi, -apple-system, BlinkMacSystemFont;
}
</style>