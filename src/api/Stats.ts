import Request from '@/util/Request'

// 获取动态日历数据
export function getActiveAPI(): http<Active> {
    return Request.instance.request({
        url: "/api/active"
    })
}
