import Request from '@/utils/Request'

// 获取分类信息
export function getCateDataAPI(id: string): http<Cate[]> {
    return Request.instance.request({
        url: `/api/cate/${id}`,
        params: id
    })
}

// 获取分类列表
export function getCateListAPI(): http<Paginate<Cate[]>> {
    return Request.instance.request({
        url: "/api/cate"
    })
}