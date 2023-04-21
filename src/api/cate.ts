import Request from '@/util/request'

// 获取分类信息
export const getCate = (id: string) => {
    return Request.instance.request(({
        url: `/api/cate/${id}`,
        params: id
    }))
}

// 获取分类列表
export const getCateListAPI = () => {
    return Request.instance.request(({
        url: "/api/cate"
    }))
}