import { createApp } from 'vue'
import pinia from '@/stores'

import 'element-plus/dist/index.css'
// 公共样式
import '@/styles/public.scss'
// 页面自适应
import '@/styles/reactive/index.scss'
// 主题切换
import '@/styles/theme1.scss'

import App from './App.vue'
import router from '@/router'

import editor from '@/util/Editor'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(editor);

app.mount('#app')
