import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/Home'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/views/Home'),
                meta: {
                    breadcrumbs: [
                        {
                            text: 'Home',
                            href: '/',
                            icon: 'mdi-home-variant-outline',
                        },
                    ],
                },
            },
            {
                path: 'projects',
                name: 'project',
                component: () => import('@/views/Project'),
                meta: {
                    breadcrumbs: [
                        {
                            text: 'Home',
                            href: '/',
                            icon: 'mdi-home-variant-outline',
                        },
                        {
                            text: 'Projects',
                            href: '/projects',
                            icon: 'mdi-webpack',
                        },
                    ],
                },
            },
        ],
    },
];

const router = new VueRouter({
    routes,
});

export default router;
