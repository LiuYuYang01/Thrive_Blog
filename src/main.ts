import hljsVuePlugin from '@highlightjs/vue-plugin'

import { createApp } from 'vue'

import '@/styles/public.scss'

import App from './App.vue'
import router from '@/router'

const app = createApp(App)

app.use(hljsVuePlugin)
app.use(router)

app.mount('#app')
