import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/styles/public.scss'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from '@/router'

import editor from '@/util/Editor'

// Pinia状态持久化存储到本地
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()

// 安装Pinia状态持久化
pinia.use(piniaPluginPersistedState)

app.use(pinia)
app.use(router)
app.use(editor);

app.mount('#app')
