<script setup lang='ts'>
// 1
</script>

<template>
  <!-- 星空颗粒效果 -->
  <div class="StarrySky">
    <StarrySky style="width: 100%; height: 700px;" />
  </div>

  <!-- 视图组件 -->
  <RouterView />

  <teleport to='#ToolBar'>
    <ToolBar />
  </teleport>

  <!-- 编辑器组件 -->
  <!-- <Editor /> -->
</template>

<style scoped>
.StarrySky {
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 500px;
}
</style>