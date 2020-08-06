import { lazyLoad } from 'router/utils/lazyLoad';

export const routes = [
    {
        key: 'TestPage',
        component: lazyLoad(import(/* webpackChunkName: "Test2" */ '../pages/TestPage')),
        path: '/TestPage',
        meta: {
            title: 'domainA',
            meta: [
                { name: 'description', content: 'TestPage' },
            ],

        },
    },
    {
        key: 'TestPage',
        component: lazyLoad(import(/* webpackChunkName: "Test2" */ '../pages/DemoPage')),
        path: '/DemoPage',
        meta: {
            title: 'DemoPage',
            meta: [
                { name: 'description', content: 'DemoPage' },
            ],

        },
    },
];
