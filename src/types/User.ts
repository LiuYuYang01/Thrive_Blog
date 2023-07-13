// export interface Author {
//     author: string,
//     qq: number,
//     avatar: string,
//     introduce: string,
//     background: string,
//     myInfo: {
//         row1: string,
//         row2: string
//     },
//     socializing: {
//         name: string,
//         url: string
//     }[]
// }

export type UserInfo = {
    id?: number;
    avatar: string;
    introduce: string;
    name: string;
    qq: number;
    background: string;
    role: string;
};

export type User = {
    id?: number;
    username: string;
    password: string;
    userInfo: UserInfo;
};
