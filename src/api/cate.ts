import Request from '@/util/request'
import type { Response } from '@/types/Response'
import type { Cate } from '@/types/Cate'

// 获取分类信息
export const getCate = (id: string) => {
    return Request.instance.request({
        url: `/api/cate/${id}`,
        params: id
    })
}

// 获取分类列表
export const getCateListAPI = ():Promise<Response<Cate>> => {
    return Request.instance.request({
        url: "/api/cate"
    })
}

