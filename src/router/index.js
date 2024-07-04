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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
