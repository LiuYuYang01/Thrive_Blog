import Request from '@/util/Request'
import type { http } from '@/types/Response'
import type { Comment } from '@/types/Comment'

// 新增评论
export function addCommentDataAPI(data: Comment): http<Comment> {
    console.log(data, 333);

    return Request.instance.request({
        url: `/api/comment`,
        method: "post",
        data
    })
}

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