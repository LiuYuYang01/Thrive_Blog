<script setup lang='ts'>
import Typed from 'typed.js'
const props = defineProps<{ data: string[] }>()

if (props.data) {
    const options = {
        strings: props.data,
        typeSpeed: 100,
        backSpeed: 30,
        loop: true
    };

    onMounted(() => {
        new Typed('#typed', options);
    })
}
</script>

<template>
    <slot></slot>
</template>

<style scoped lang="scss"></style>