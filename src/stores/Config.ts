import { getLayoutDataAPI, getWebDataAPI } from '@/api/Project'
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

    const web = ref<WebConfig>({
        url: "",
        favicon: "https://liuyuyang.net/favicon.ico",
        title: "Thrive",
        subhead: "花有重开日, 人无再少年",
        light_logo: "https://liuyuyang.net/avatar.jpg",
        dark_logo: "https://liuyuyang.net/avatar.jpg",
        description: "记录前端、Python、Java点点滴滴",
        keyword: "",
        footer: "",
        covers: [],
        font: '',
        social: ''
    })

    const updateIsTheme = (data: boolean) => {
        isTheme.value = data
    }

    // 获取首页布局配置
    const getLayoutData = async () => {
        const { data } = await getLayoutDataAPI()
        layout.value = data;
    }

    // 获取网站配置
    const getWebData = async () => {
        const { data } = await getWebDataAPI()
        web.value = data;
    }
    getWebData()

    return { isTheme, updateIsTheme, layout, getLayoutData, web, getWebData }
})