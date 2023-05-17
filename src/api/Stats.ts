import Request from '@/util/request'
import type { http } from '@/types/Response'
import type { Active } from '@/types/Stats'

// 获取动态日历数据
export function getActiveAPI(): http<Active> {
    return Request.instance.request({
        url: "/api/active"
    })
}
