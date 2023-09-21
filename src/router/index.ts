import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // 当页面组件切换路由时，滚动条重置到顶部
    scrollBehavior: () => ({ top: 0 }),
    routes: [
        {
            path: "/",
            component: () => import('@/view/Layout/index.vue'),
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
                    // 一级分类
                    path: "cate/:one",
                    component: () => import('@/view/Cate/index.vue'),
                    children: [
                        {
                            // 二级分类
                            path: ":two",
                            component: () => import('@/view/Cate/index.vue')
                        }
                    ]
                },
                {
                    // 闪念
                    path: "diary",
                    name: "diary",
                    component: () => import('@/view/Diary/index.vue')
                },
                {
                    // 朋友圈
                    path: "friend",
                    name: "friend",
                    component: () => import('@/view/Friend/index.vue')
                },
                {
                    // 统计页
                    path: "stats",
                    name: "stats",
                    component: () => import('@/view/Stats/index.vue')
                },
                {
                    // 我的页面
                    path: "my",
                    name: "my",
                    component: () => import('@/view/My/index.vue')
                }
            ]
        },
        {
            // 在线聊天室
            path: "/chat",
            name: "chat",
            component: () => import('@/view/Chat/index.vue')
        }
    ],
})

// 监听路由是否发生变化
router.beforeEach(to => {
    const dom = document.querySelector(".ToolBar .item") as HTMLElement

    // 只有在文章页才会出现显示目录按钮，否则不显示
    to.path.includes("/article") ? dom.style.display = "block" : dom.style.display = "none"
})

export default router