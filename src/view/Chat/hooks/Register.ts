import { ref } from 'vue';
import io from 'socket.io-client';
import { FormInstance } from 'element-plus';
import { useChatStore } from '@/stores';

export const store = useChatStore()

// 登记框
export const model = ref<boolean>(false)

export const form = ref<FormInstance>()

// 用户信息
export const chatUserInfo = reactive<ChatUserInfo>({
    name: "",
    avatar: "Ginger"
})

// 头像列表
export const avatars = ["Ginger", "Patches", "Sadie", "Casper", "Molly", "Smokey", "Lilly"]
export const avatarFilter = (v: string) => `https://api.dicebear.com/7.x/fun-emoji/svg?seed=${v}`

// 名称校验规则
export const rules = reactive({
    name: [
        { required: true, message: '名称不能为空', trigger: 'blur' },
        { min: 1, max: 10, message: '名称长度限制为 1 ~ 10个字符', trigger: 'blur' },
    ]
})

// 关闭弹框触发
export const close = () => {
    // form.value?.resetFields()

    // chatUserInfo.name = ""
    // chatUserInfo.avatar = "Ginger"
}

// 提交表单触发
export const submit = async () => {
    if (!form.value) return
    await form.value.validate((valid, fields) => {
        if (valid) {
            store.updateChatUserInfo(chatUserInfo)

            model.value = false

            ElMessage({
                message: '🎉 选择成功~',
                type: 'success',
            })
        } else {
            console.log('error submit!', fields)
        }
    })
}