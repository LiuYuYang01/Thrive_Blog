import { createPinia } from 'pinia'

// Pinia状态持久化存储到本地
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

const pinia = createPinia()

// 安装Pinia状态持久化
pinia.use(piniaPluginPersistedState)

export default pinia

export * from './Config'