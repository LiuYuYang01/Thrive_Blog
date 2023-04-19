import axios, { AxiosError, type AxiosRequestConfig } from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios'

// 导入全局共享数据
import useUserStore from '@/stores/user'

export default class Request {
    // private static 表示该属性是私有的，只能在当前类中使用并且是静态属性，类型为 Request 的实例对象
    private static _singletonInstance: Request
    // Axios 实例对象
    readonly request: AxiosInstance
    // API URL 前缀
    private static readonly baseURL: string = "https://apipc-xiaotuxian-front.itheima.net/"

    // 获取store对象
    private userStore = useUserStore()
    static interface: any;

    // private 设置为受保护的只能在该类中使用，不能被直接new Request实例化

    private constructor() {
        // 配置请求URL
        this.request = axios.create({ baseURL: Request.baseURL })

        // 配置请求拦截器
        this.request.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            // 判断全局状态中有没有Token，有就赋值，没有就略过
            if (this.userStore.profile.token) {
                // 核心代码
                config.headers.Authorization = this.userStore.profile.token
            }

            return config
        })

        // 响应拦截器
        this.request.interceptors.response.use(
            // 成功响应
            (res: AxiosResponse) => {
                return res.data
            },
            // 失败响应
            (err: AxiosError) => {
                if (err.response?.status === 401) {
                    // 重置用户信息 通过$reset()方法将store中的数据初始化
                    this.userStore.$reset()

                    // 没有登录就跳转到登录页
                    // router.push("/login")
                }
            })
    }

    // 只允许被new实例化一次
    static get instance() {
        // 如果没有就赋值并返回
        if (!Request._singletonInstance) Request._singletonInstance = new Request()

        // 如果有就直接返回
        return Request._singletonInstance
    }

    http(){
        return Request.instance
    }
}