import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Main from '@/views/Main.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/main',
        name: 'Main',
        component: Main,
        meta: { requiresAuth: true }
    }, 
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to, from, next) => 
{
    let routerAuthCheck = false

    if (to.matched.some(record => record.meta.requiresAuth) && !routerAuthCheck)
    {
        return
    }

    next()
})

export default router