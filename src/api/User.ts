import Request from '@/utils/Request'

// 获取作者信息
export function getAuthorAPI(id: number): http<UserInfo> {
    return Request.instance.request({
        url: `/api/user/${id}`
    })
}