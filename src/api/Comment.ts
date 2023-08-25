import Request from '@/util/Request'
import type { http } from '@/types/Response'
import type { Comment } from '@/types/Comment'

// 获取评论信息
export function getCommentDataAPI(id: string): http<Comment[]> {
    return Request.instance.request({
        url: `/api/comment/${id}`,
        params: id
    })
}

// 获取评论列表
export function getCommentListAPI(): http<Comment[]> {
    return Request.instance.request({
        url: "/api/comment"
    })
}