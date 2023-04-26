export interface User {
    author: string,
    qq: number,
    introduce: string,
    socializing: {
        name: string,
        url: string
    }[]
}