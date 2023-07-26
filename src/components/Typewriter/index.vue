<script setup lang='ts'>
import Typed from 'typed.js'

const options = {
    strings: ['print("互联网从不缺乏天才, 而努力才是最终的入场券!")', 'console.log("路虽远, 行则将至, 事虽难, 做则必成!")'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
};

onMounted(() => {
    new Typed('#typed', options);
})
</script>

<template>
    <slot></slot>
</template>

<style scoped lang="scss"></style>