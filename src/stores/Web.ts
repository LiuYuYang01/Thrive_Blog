import { getWebDataAPI } from '@/api/Project'
import { defineStore } from 'pinia'

export const useWebStore = defineStore('web', () => {
    // 网站配置信息
    const webConfig = ref<WebConfig>({
        description: "",
        keyword: "",
        logo: "",
        subhead: "",
        title: ""
    })

    // 获取网站配置信息
    const getWebData = async () => {
        const { data } = await getWebDataAPI()
        webConfig.value = data
        console.log(data, 111);
    }

    return { webConfig, getWebData }
}, { persist: true })