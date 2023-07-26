import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/styles/public.scss'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from '@/router'

// import editor from '@/util/Editor'

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
    Hljs: hljs,
});

// Pinia状态持久化存储到本地
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()

// 安装Pinia状态持久化
pinia.use(piniaPluginPersistedState)

app.use(pinia)
app.use(router)
app.use(VMdPreview);

app.mount('#app')
