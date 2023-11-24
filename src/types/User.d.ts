type UserInfo = {
    id?: number;
    avatar: string;
    introduce: string;
    name: string;
    qq: number;
    background: string;
    role: string;
};

type User = {
    id?: number;
    username: string;
    password: string;
    userInfo: UserInfo;
};
