import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', () => {
    // 暗黑还是光亮
    const isTheme = ref<boolean>(false)
    // 文章列表布局方式
    const isArticleLayout = ref<string>("classics")
    // 右侧信息栏显示哪些模块
    const rightSidebarList = ref<string[]>(["Author", "HotArticle", "RandomArticle", "NewComments"])

    const updateIsTheme = (data: boolean) => {
        isTheme.value = data
    }

    const updateIsArticleLayout = (data: string) => {
        isArticleLayout.value = data
    }

    const updateRightSidebarList = (data: string[]) => {
        rightSidebarList.value = data
    }

    return { isTheme, isArticleLayout, rightSidebarList, updateIsTheme, updateIsArticleLayout, updateRightSidebarList }
})