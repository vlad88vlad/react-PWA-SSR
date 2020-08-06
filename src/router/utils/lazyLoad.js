import Loadable from 'react-loadable';

export const lazyLoad = (importComponent) => (
    Loadable({
        loader: () => importComponent,
        loading: () => null,
    })
);
