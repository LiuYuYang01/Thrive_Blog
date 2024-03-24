import Request from '@/utils/Request'

// 获取网站配置
export function getWebDataAPI(): http<WebConfig> {
    return Request.instance.request({
        url: `/api/project/web`
    })
}

// 获取布局配置
export function getLayoutDataAPI(): http<Layout> {
    return Request.instance.request({
        url: "/api/project/layout"
    })
}