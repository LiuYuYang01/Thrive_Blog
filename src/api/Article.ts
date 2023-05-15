import Request from '@/util/request'

// 获取文章数据
export const getArticleAPI = (id: number) => {
    console.log(id);

    return Request.instance.request({
        url: `/api/article/${id}`,
        params: { id }
    })
}

// 获取文章列表
export const getArticleListAPI = () => {
    return Request.instance.request({
        url: "/api/article"
    })
}