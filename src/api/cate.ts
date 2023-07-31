import Request from '@/util/Request'
import type { http } from '@/types/Response'
import type { Cate } from '@/types/Cate'

// 获取分类信息
export function getCateDataAPI(id: string): http<Cate[]> {
    return Request.instance.request({
        url: `/api/cate/${id}`,
        params: id
    })
}

// 获取分类列表
export function getCateListAPI(): http<Cate[]> {
    return Request.instance.request({
        url: "/api/cate"
    })
}