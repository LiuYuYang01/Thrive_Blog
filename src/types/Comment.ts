export interface Comment {
    id?: number,
    avatar: string,
    name: string,
    content: string,
    aid: number,
    rid: number,
    date: string,
    children: Omit<Comment, "children">[]
}