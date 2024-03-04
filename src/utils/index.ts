// 加载效果
export const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `

// 生成随机数
export function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 获取页面滚动的距离
export const useScroll = () => {
  const top = ref<number>(0)

  const scroll = () => {
    top.value = document.documentElement.scrollTop
  }

  onMounted(() => {
    window.addEventListener("scroll", scroll)
  })

  onDeactivated(() => {
    window.removeEventListener('scroll', scroll)
  })

  return top
}