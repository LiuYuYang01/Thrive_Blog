import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', () => {
    // 当前房间号
    const room = ref<number>()

    // 当前用户信息
    const chatUserInfo = ref<ChatUserInfo>()

    // 判断登记的信息是否为空
    const isNull = () => !(chatUserInfo.value?.name && chatUserInfo.value?.avatar)

    const updateRoom = (n: number) => {
        room.value = n
    }

    const updateChatUserInfo = (data: ChatUserInfo) => {
        chatUserInfo.value = data
    }

    return { room, chatUserInfo, updateRoom, updateChatUserInfo, isNull }
}, { persist: true })