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
                    // 首页
                    path: "",
                    name: "home",
                    component: () => import('@/view/Home/index.vue')
                },
                {
                    // 文章页
                    path: "article/:id",
                    name: "article",
                    component: () => import('@/view/Article/index.vue')
                },
                {
                    // 统计页
                    path: "stats",
                    name: "stats",
                    component: () => import('@/view/Stats/index.vue')
                },
                {
                    // 在线聊天室
                    path: "chat",
                    name: "chat",
                    component: () => import('@/view/Chat/index.vue')
                }
            ]
        }
    ],
})

export default router