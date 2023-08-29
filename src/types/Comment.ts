export interface Comment {
    id?: number,
    avatar: string,
    name: string,
    content: string,
    email: string,
    url?: string,
    aid: number,
    rid?: number,
    date?: string,
    children?: Omit<Comment, "children">[]
}