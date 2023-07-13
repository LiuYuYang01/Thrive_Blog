import { getAuthorAPI } from '@/api/User'
import { User, UserInfo } from '@/types/User'
import { defineStore } from "pinia"

type State = {
    authorInfo: UserInfo
}

type Getter = {}

type Actions = {
    getAuthor(): Promise<void>
}

const Store = defineStore<"Author", State, Getter, Actions>("Author", {
    state: () => ({
        // 作者信息
        authorInfo: {
            avatar: "",
            introduce: "",
            name: "",
            qq: 0,
            background: "",
            role: ""
        }
    }),
    actions: {
        // 获取作者信息
        async getAuthor() {
            const { data } = await getAuthorAPI(1)

            this.authorInfo = data.userInfo
        }
    },
    // pinia状态是否持久化到本地存储
    // persist: true
})
export default Store