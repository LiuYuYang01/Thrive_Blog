import Request from '@/util/Request'
import type { http } from '@/types/Response'
// import type { Author } from '@/types/User'
import type { User, UserInfo } from '@/types/User'

// 获取作者信息
export function getAuthorAPI(id: number): http<User> {
    return Request.instance.request({
        url: `/api/user/${id}`
    })
}