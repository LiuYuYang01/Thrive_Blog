import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
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