import React from 'react';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import Loadable from 'react-loadable';
import ReactDOMServer from 'react-dom/server';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { parse as parseUrl } from 'url';
import configureStore from './store/configureStore';
import App from './App';

const store = configureStore();

export const serverRender = (url, modules) => {
    const history = createMemoryHistory({
        initialEntries: [url],
    });
    const location = parseUrl(url);

    return ReactDOMServer.renderToString(
        <Loadable.Capture report={(m) => modules.push(m)}>
            <StaticRouter location={location} history={history}>
                <Provider store={store}>
                    <App />
                </Provider>
            </StaticRouter>
        </Loadable.Capture>,
    );
};

export const clientRender = () => {
    const history = createBrowserHistory();


    return (
        <BrowserRouter history={history}>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    );
};

export const addSEO = () => {
    const helmet = Helmet.renderStatic();

    return helmet.title.toString() + helmet.meta.toString();
};
