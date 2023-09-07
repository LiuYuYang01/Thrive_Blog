import { createApp } from 'vue'
import pinia from '@/stores'

import '@/styles/public.scss'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from '@/router'

import editor from '@/util/Editor'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(editor);

app.mount('#app')
