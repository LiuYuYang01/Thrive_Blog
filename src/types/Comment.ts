export interface Comment {
    id?: number,
    avatar: string,
    name: string,
    content: string,
    date: string,
    children: Omit<Comment, "children">[]
}