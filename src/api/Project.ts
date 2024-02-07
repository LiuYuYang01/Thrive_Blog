import Request from '@/util/Request'

// 获取网站配置
export function getWebDataAPI(): http<WebConfig> {
    return Request.instance.request({
        url: `/api/project/web`
    })
}