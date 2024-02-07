import Request from '@/util/Request'
import { Link, Cate, LinkType } from '@/types/Link'

// 新增网站
export function addLinkDataAPI(data: Link): http<void> {
    return Request.instance.request({
        method: "POST",
        url: "/api/link",
        data
    })
}

// 获取网站信息
export function getLinkDataAPI(id: string): http<Link[]> {
    return Request.instance.request({
        url: `/api/link/${id}`,
        params: id
    })
}

// 获取网站列表
export const getLinkListAPI = (params?: Page): http<Paginate<Link[]>> => {
    // 如果有参数就是分页查询，没有参数就是查询全部
    if (params) {
        return Request.instance.request({
            url: `/api/link?page=${params.page}&size=${params.size}`,
        });
    } else {
        return Request.instance.request({
            url: "/api/link"
        })
    }
};

// 获取网站类型列表
export const getLinkTypeListAPI = (): http<LinkType[]> => {
    return Request.instance.request({
        url: "/api/link_type"
    })
};