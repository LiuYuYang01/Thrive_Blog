<script setup lang="ts">

</script>

<template>
  <div class="Diary">
    <Swiper src="https://t3.picb.cc/2023/08/04/ITN4rM.jpeg" class="swiper">
      <div class="title">记录点点滴滴</div>
    </Swiper>

    <TimeAxis />
  </div>
</template>

<style scoped lang="scss">
.Diary {
  :deep .Swiper {
    background-position: center top;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    padding-bottom: 60px;
    color: #fff;
    font-size: 40px;
    text-shadow: 0 0.1875rem 0.5rem #1c1f21;
  }
}
</style>
