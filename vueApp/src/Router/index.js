import { createRouter, createWebHistory } from 'vue-router';
import { authGuard } from '@auth0/auth0-vue';
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Main from '@/views/Main.vue'
import NotFound from '@/views/NotFound.vue'
import Callback from '@/views/Callback.vue'

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
        beforeEnter: authGuard
    },
    {
        path: '/callback',
        name: 'Callback',
        component: Callback
    }, 
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router