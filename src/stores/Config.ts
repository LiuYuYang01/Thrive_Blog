import { getLayoutDataAPI } from '@/api/Project'
import { defineStore } from 'pinia'

// 网站配置
export const useConfigStore = defineStore('config', () => {
    // 暗黑还是光亮
    const isTheme = ref<boolean>(false)

    // 首页布局
    const layout = ref<Layout>({
        // 选择文章布局方式
        isArticleLayout: "classics",
        // 选择显示的侧边栏模块
        rightSidebar: ["author", "hotArticle", "randomArticle", "newComments"],
        // 首页背景图
        swiperImage: "https://bu.dusays.com/2023/11/10/654e2cf6055b0.jpg",
        // 打字机文本
        swiperText: ['这是一段文本', '这是第二段文本']
    })

    const updateIsTheme = (data: boolean) => {
        isTheme.value = data
    }

    // 获取首页布局配置
    const getLayoutData = async () => {
        const { data } = await getLayoutDataAPI()
        layout.value = data;
    }

    return { isTheme, updateIsTheme, layout, getLayoutData }
})