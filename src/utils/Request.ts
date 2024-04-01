import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";

export default class Request {
    // private static 表示该属性是私有的，只能在当前类中使用并且是静态属性，类型为 Request 的实例对象
    private static _singletonInstance: Request;
    // Axios 实例对象
    readonly request: AxiosInstance;
    // API URL 前缀
    private static readonly baseURL: string = "http://127.0.0.1:5000/";
    // private static readonly baseURL: string = "http://114.115.174.207:5000/";
    // private static readonly baseURL: string = "http://192.168.95.199:5000/";

    // 获取store对象
    static interface: Request;

    // private 设置为受保护的只能在该类中使用，不能被直接new Request实例化
    private constructor() {
        // 配置请求URL
        this.request = axios.create({ baseURL: Request.baseURL });

        // 响应拦截器
        this.request.interceptors.response.use(
            // 成功响应
            (res: AxiosResponse) => {
                return res.data;
            });
    }

    // 单例模式：只允许被new实例化一次
    static get instance() {
        // 如果没有就赋值并返回
        if (!Request._singletonInstance) Request._singletonInstance = new Request();

        // 如果有就直接返回
        return Request._singletonInstance;
    }
}