import Request from '@/util/request'

export const getCate = (id: string) => {
    return Request.instance.request(({
        url: `/api/cate/${id}`,
        params: id
    }))
}

export const getCateList = () => {
    return Request.instance.request(({
        url: "/api/cate"
    }))
}