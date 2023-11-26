interface Response<T> {
    code: number;
    message: string;
    data: T
}

// 简化响应类型
type http<T> = Promise<Response<T>>