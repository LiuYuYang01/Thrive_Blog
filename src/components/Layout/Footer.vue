<script setup lang='ts'>

</script>

<template>
  <div class="footer">
    <p class="info">一直对网站开发领域很感兴趣，从小就希望有一个属于自己的网站，在17年时候成功进入站长圈，并通过各种自学，以及各种折腾，才有了你现在看到的这个网站</p>
  </div>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  align-items: center;
  height: 120px;
  border-top: 1px solid $borderColor;
  background-color: $boxColor;
  transition: all $move;

  .info {
    width: 600px;
    line-height: 25px;
    padding-left: 300px;
    color: $textColor;
    font-size: 14px;
  }
}
</style>