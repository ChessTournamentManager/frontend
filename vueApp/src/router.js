import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import About from './components/About.vue';
import Main from './components/Main.vue';

Vue.use(Router);

export default new Router({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            redirect: '/home'
        },
        {
            path: '/home',
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
            component: Main
        }, 
        {
            path: '*',
            name: 'NotFound',
            component: NotFoundPage
        }
    ]
})