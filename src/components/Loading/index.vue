<script setup lang="ts">

</script>

<template>
  <div class="Loading">
    <img src="@/assets/img/loading.gif" alt="">
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/public.scss";

.Loading {
  background: #fff;
  text-align: center;
  @include container;

  img {
    width: 100px;
    height: 100px;
  }
}
</style>
