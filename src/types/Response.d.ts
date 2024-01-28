interface Response<T> {
    code: number;
    message: string;
    data: T
}

// 简化响应类型
type http<T> = Promise<Response<T>>

interface Paginate<T> {
    next: boolean,
    prev: boolean,
    page: number,
    size: number,
    pages: number,
    total: number,
    result: T
}