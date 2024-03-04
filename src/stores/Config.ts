import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', () => {
    // 暗黑还是白天?
    const isEffect = ref<boolean>(false)
    // 文章列表布局方式?
    const isArticleLayout = ref<string>("classics")

    const updateIsEffect = (data: boolean) => {
        isEffect.value = data
    }

    const updateIsArticleLayout = (data: string) => {
        isArticleLayout.value = data
    }

    return { isEffect, isArticleLayout, updateIsEffect, updateIsArticleLayout }
})