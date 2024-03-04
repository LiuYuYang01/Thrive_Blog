import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', () => {
    // 暗黑还是光亮
    const isTheme = ref<boolean>(false)
    // 文章列表布局方式
    const isArticleLayout = ref<string>("classics")
    // 右侧信息栏显示哪些模块
    const rightSidebarList = ref<string[]>(["Author", "HotArticle", "RandomArticle", "NewComments"])
    // 首页轮播图
    const swiperImage = ref<string>("https://liuyuyang.net/img/20ac414805e3491098df678d3d9f100f_KJCPUs.jpg")
    // 首页轮播图打字机文本
    const swiperText = ref<string[]>(['System.out.print("有些梦虽然遥不可及，但并不是不可能实现!");', 'print(" 互联网从不缺乏天才, 而努力才是最终的入场券!")', 'console.log("再渺小的星光，也有属于他的光芒!")'])

    const updateIsTheme = (data: boolean) => {
        isTheme.value = data
    }

    const updateIsArticleLayout = (data: string) => {
        isArticleLayout.value = data
    }

    const updateRightSidebarList = (data: string[]) => {
        rightSidebarList.value = data
    }

    const updateSwiperImage = (data: string) => {
        swiperImage.value = data
    }

    const updateSwiperText = (data: string[]) => {
        rightSidebarList.value = data
    }

    return { isTheme, isArticleLayout, rightSidebarList, swiperImage, swiperText, updateIsTheme, updateIsArticleLayout, updateRightSidebarList, updateSwiperText, updateSwiperImage }
})