import Request from '@/util/request'
import type { Response } from '@/types/Response'
import type { Calendar } from '@/types/Stats'

// 获取动态日历数据
export function getCalendarAPI(): Promise<Response<Calendar>> {
    return Request.instance.request({
        url: "/api/calendar"
    })
}
