export interface Cate {
    id: number,
    name: string,
    icon: string,
    url: string,
    children: Omit<Cate, "url">[]
}