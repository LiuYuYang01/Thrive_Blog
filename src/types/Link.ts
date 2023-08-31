export interface Link {
    id?: number,
    title: string,
    description: string,
    email: string,
    image: string,
    url: string
}

export interface Cate {
    title: string,
    list: Link[]
}