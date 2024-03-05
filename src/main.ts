import { createApp } from 'vue'
import pinia from '@/stores'

import 'element-plus/dist/index.css'
import '@/styles/index.scss'

import App from './App.vue'
import router from '@/router'

import editor from '@/utils/Editor'

import masonry from 'vue-next-masonry';

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(editor);
app.use(masonry as any);

app.mount('#app')
