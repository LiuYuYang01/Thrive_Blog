interface Discuss {
    id?: number,
    avatar: string,
    name: string,
    content: string,
    email: string,
    url?: string,
    aid: number,
    rid?: number,
    audit: number,
    createtime?: string,
    children?: Discuss[]
}