import Request from '@/util/Request'
import type { http } from '@/types/Response'
import { Article } from '@/types/Article'

// 获取文章数据
export const getArticleAPI = (id: number): http<Article> => {
    return Request.instance.request({
        url: `/api/article/${id}`,
        params: { id }
    })
}

// 获取文章列表
export const getArticleListAPI = (): http<Article[]> => {
    return Request.instance.request({
        url: "/api/article"
    })
}