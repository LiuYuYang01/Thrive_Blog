const route = useRoute()

onMounted(() => {
  document.title = "博客名称 - " + (route.meta.title as string)
})