import Request from '@/util/Request'

// 获取表情数据
export const getEmoteAPI = (id: number): http<Emote> => {
    return Request.instance.request({
        url: `/api/emote/${id}`,
        params: { id }
    })
}

// 获取表情列表
export const getEmoteListAPI = (): http<Emote[]> => {
    return Request.instance.request({
        url: "/api/emote"
    })
}