import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', () => {
    const chatUserInfo = ref<ChatUserInfo>()

    // 判断登记的信息是否为空
    const isNull = () => !(chatUserInfo.value?.name && chatUserInfo.value?.avatar)

    const updateChatUserInfo = (data: ChatUserInfo) => {
        chatUserInfo.value = data
    }

    return { chatUserInfo, updateChatUserInfo,isNull }
}, { persist: true })