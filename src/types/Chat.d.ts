interface Chat {
    id: number,
    room: number,
    data: ChatUserInfo[]
}

interface ChatInfo {
    id?: number,
    avatar: string,
    name: string,
    content: string,
    date: Date
}

type ChatUserInfo = Omit<ChatInfo, "id" | "content" | "date">