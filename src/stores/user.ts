import { defineStore } from "pinia"

type State = {
    profile: any
}

type Getter = {}
type Actions = {}

const store = defineStore<"user", State, Getter, Actions>("user", {
    state() {
        return {
            profile: {
                token: "Bearer JsonWebToken"
            }
        }
    },
    // pinia状态是否持久化到本地存储
    persist: true
})

export default store