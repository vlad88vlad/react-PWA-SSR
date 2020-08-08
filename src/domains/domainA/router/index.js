import { lazyLoad } from 'router/utils/lazyLoad';

export const routes = [
    {
        key: 'TestPage',
        component: lazyLoad(import(/* webpackChunkName: "TestPage" */ '../pages/TestPage')),
        path: '/TestPage',
        meta: {
            title: 'TestPage',
            meta: [
                { name: 'description', content: 'TestPage' },
            ],

        },
    },
    {
        key: 'TestPage',
        component: lazyLoad(import(/* webpackChunkName: "DemoPage" */ '../pages/DemoPage')),
        path: '/DemoPage',
        meta: {
            title: 'DemoPage',
            meta: [
                { name: 'description', content: 'DemoPage' },
            ],

        },
    },
];
