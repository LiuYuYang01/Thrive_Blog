import Request from '@/util/request'
import type { Response } from '@/types/Response'
import type { Calendar, Active } from '@/types/Stats'

// 获取动态日历数据
export function getCalendarAPI(): Promise<Response<Active>> {
    return Request.instance.request({
        url: "/api/calendar"
    })
}
