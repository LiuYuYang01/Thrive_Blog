import Request from '@/util/request'

// 获取文章
export const getCateAPI = (id: string) => {
    return Request.instance.request({
        url: `/api/article/${id}`,
        params: id
    })
}

// 获取文章列表
export const getArticleListAPI = () => {
    return Request.instance.request({
        url: "/api/article"
    })
}