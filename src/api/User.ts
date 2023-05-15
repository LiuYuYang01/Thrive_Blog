import Request from '@/util/request'
import type { Response } from '@/types/Response'
import type { Author } from '@/types/User'

// 获取作者信息
export function getAuthorAPI(): Promise<Response<Author>> {
    return Request.instance.request({
        url: "/api/author"
    })
}