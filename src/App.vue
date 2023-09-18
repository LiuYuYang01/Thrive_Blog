<script setup lang='ts'>

</script>

<template>
  <!-- 星空颗粒效果 -->
  <div style="position: absolute; top: 0; overflow: hidden; width: 100%; height: 500px;">
    <StarrySky style="width: 100%; height: 700px;" />
  </div>

  <!-- 进度条组件 -->
  <Nprogress />

  <!-- 视图组件 -->
  <RouterView />

  <teleport to='#ToolBar'>
    <ToolBar />
  </teleport>

  <!-- 编辑器组件 -->
  <!-- <Editor /> -->
</template>

<style scoped></style>