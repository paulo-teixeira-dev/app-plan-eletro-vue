import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/eletro'
        },
        /* -- ELETRO -- */
        {
            path: '/eletro',
            name: 'eletroIndex',
            component: () => import('../views/eletro/Index.vue'),
            meta: {
                title: 'Eletrodomesticos'
            }
        },
        {
            path: '/eletro/show/:id',
            name: 'eletroShow',
            component: () => import('../views/eletro/Show.vue'),
            meta: {
                title: 'Eletrodomesticos - Visualizar'
            }
        },
        {
            path: '/eletro/store/',
            name: 'eletroStore',
            component: () => import('../views/eletro/Store.vue'),
            meta: {
                title: 'Eletrodomesticos - Cadastrar'
            }
        },
    ]
})

router.beforeEach((to, from, next) => {
    next()
    document.title = `${to.meta.title}`;
})

export default router
