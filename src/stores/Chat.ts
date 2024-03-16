import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', () => {
    const chatUserInfo = ref<ChatUserInfo>()

    const updateChatUserInfo = (data: ChatUserInfo) => {
        chatUserInfo.value = data
    }

    return { chatUserInfo, updateChatUserInfo }
})