import { getAuthorAPI } from '@/api/User'
import { Author } from '@/types/User'
import { defineStore } from "pinia"

type State = {
    authorInfo: Author
}

type Getter = {}

type Actions = {
    getAuthor(): Promise<void>
}

const Store = defineStore<"Author", State, Getter, Actions>("Author", {
    state: () => ({
        // 作者信息
        authorInfo: {
            author: "", //头像
            qq: 0, //QQ
            introduce: "", //介绍
            background: "", //背景图
            socializing: [] //社交账号
        }
    }),
    actions: {
        // 获取作者信息
        async getAuthor() {
            const { data } = await getAuthorAPI()

            this.authorInfo = data
        },
    },
    // pinia状态是否持久化到本地存储
    persist: true
})
export default Store