import Request from '@/util/Request'

// 获取作者信息
export function getAuthorAPI(id: number): http<User> {
    return Request.instance.request({
        url: `/api/user/${id}`
    })
}