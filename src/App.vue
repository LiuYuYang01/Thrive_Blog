<script setup lang='ts'>

</script>

<template>
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