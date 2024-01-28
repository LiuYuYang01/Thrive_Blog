type UserInfo = {
    id?: number;
    avatar: string;
    info: string;
    name: string;
    email: string;
    role: string;
    createtime?: Date
};

type User = {
    id?: number;
    username: string;
    password: string;
    userInfo: UserInfo;
};
