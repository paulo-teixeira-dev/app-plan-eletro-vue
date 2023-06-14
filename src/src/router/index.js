import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        /* -- ELETRO -- */
        {
            path: '/eletro',
            name: 'eletroIndex',
            component: () => import('../views/eletro/Index.vue'),
            meta: {
                title: 'Eletrodomesticos'
            }
        },
    ]
})

router.beforeEach((to, from, next) => {
    next()
    document.title = `${to.meta.title}`;
})

export default router
