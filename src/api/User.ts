import Request from '@/util/request'
import type { Response } from '@/types/Response'
import type { Author } from '@/types/User'

// 获取作者信息
export function getAuthorAPI() {
    return Request.instance.request({
        url: "/api/author"
    })
}