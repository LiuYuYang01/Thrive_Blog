import Request from '@/util/request'
import type { Response } from '@/types/Response'
import type { Active } from '@/types/Stats'

// 获取动态日历数据
export function getActiveAPI(): Promise<Response<Active>> {
    return Request.instance.request({
        url: "/api/active"
    })
}
