interface Comment {
    id?: number,
    avatar: string,
    name: string,
    content: string,
    email: string,
    url?: string,
    aid: number,
    rid?: number,
    createtime?: string,
    children?: Omit<Comment, "children">[]
}