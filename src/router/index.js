import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Home,
        children: [{
                path: '/',
                name: 'index',
                component: () =>
                    import ('../views/Index.vue')
            },

        ]
    },
    {
        path: '/details',
        component: Home,
        children: [{
            path: '',
            name: 'details',
            component: () =>
                import ('../views/Details.vue')
        }, ]

    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/Login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router