import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue'),
            meta: {
                title: 'Login',
                requiresAuth: false
            }
        },
        {
            path: '/equipment',
            name: 'equipment',
            component: () => import('../views/Equipment.vue'),
            meta: {
                title: 'Equipment',
                requiresAuth: true
            }
        },
        {
            path: '/operations',
            name: 'operations',
            component: () => import('../views/Operations.vue'),
            meta: {
                title: 'Operations',
                requiresAuth: true
            }
        },
        {
            path: '/reports',
            name: 'sla',
            component: () => import('../views/Reports.vue'),
            meta: {
                title: 'SLA',
                requiresAuth: true
            }
        },
    ],
    scrollBehavior() {
        return {x: 0, y: 0}
    }
})
