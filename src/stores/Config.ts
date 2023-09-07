import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', () => {
    // 暗黑还是白天?
    const isEffect = ref<boolean>(false)

    const updateIsEffect = (data: boolean) => {
        isEffect.value = data
    }

    return { isEffect, updateIsEffect }
})