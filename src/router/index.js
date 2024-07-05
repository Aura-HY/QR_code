import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: '',
        redirect: '/login'
    },
    {
        path: '/detailShow',
        name: 'detailShow',
        component: () => import('../pages/detailShow.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../pages/home.vue')
    },
    {
        path: '/createQE',
        name: 'createQE',
        component: () => import('../pages/createQE.vue')
    },
    {
        path: '/updateQE',
        name: 'updateQE',
        component: () => import('../pages/updateQE.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../pages/register.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
