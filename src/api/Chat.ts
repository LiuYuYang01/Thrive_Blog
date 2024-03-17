import Request from '@/utils/Request'

// 分页获取聊天记录
export function getChatDataAPI(room: number, params?: Page): http<Paginate<Chat[]>> {
    return Request.instance.request({
        url: `/api/chat/${room}`,
        params
    })
}

// 获取全部聊天记录
export function getChatListAPI(room: number): http<Chat[]> {
    return Request.instance.request({
        url: `/api/list/chat/${room}`
    })
}