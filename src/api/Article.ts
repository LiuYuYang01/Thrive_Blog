import Request from '@/util/request'
import type { Response } from '@/types/Response'
import { Article } from '@/types/Article'

// 获取文章数据
export const getArticleAPI = (id: number): Promise<Response<Article>> => {
    return Request.instance.request({
        url: `/api/article/${id}`,
        params: { id }
    })
}

// 获取文章列表
export const getArticleListAPI = (): Promise<Response<Article[]>> => {
    return Request.instance.request({
        url: "/api/article"
    })
}