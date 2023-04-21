import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // 当页面组件切换路由时，滚动条重置到顶部
    scrollBehavior: () => ({ top: 0 }),
    routes: [
        {
            path: "/",
            component: () => import('@/components/Layout/Layout.vue'),
            children: [
                {
                    path: "",
                    name: "home",
                    component: () => import('@/view/Home.vue')
                }
            ]
        }
    ],
})

export default router