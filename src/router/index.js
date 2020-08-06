import { lazyLoad } from './utils/lazyLoad';


export const StaticRoutesConfig = [
    {
        key: 'domainA',
        component: lazyLoad(import(/* webpackChunkName: "domainA" */ '../domains/domainA')),
        path: '/domainA',
        meta: {
            title: 'domainA',
            meta: [
                { name: 'description', content: 'domainA' },
            ],

        },
    },
    {
        key: 'domainB',
        component: lazyLoad(import(/* webpackChunkName: "domainB" */ '../domains/domainB')),
        path: '/',
        meta: {
            title: 'domainB',
            meta: [
                { name: 'description', content: 'domainB' },
            ],

        },
    },
];
