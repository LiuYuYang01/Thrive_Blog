export interface Author {
    author: string,
    qq: number,
    avatar: string,
    introduce: string,
    background: string,
    myInfo: {
        row1: string,
        row2: string
    },
    socializing: {
        name: string,
        url: string
    }[]
}