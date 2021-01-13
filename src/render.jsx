import React from 'react';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import Loadable from 'react-loadable';
import ReactDOMServer from 'react-dom/server';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { parse as parseUrl } from 'url';
import { createBroswerContext, createServerContext } from 'useSSE';
import configureStore from './store/configureStore';
import App from './App';

const store = configureStore();

export const serverRender = (url, modules) => {
    const history = createMemoryHistory({
        initialEntries: [url],
    });
    const {
        ServerDataContext,
        resolveData,
    } = createServerContext();

    const location = parseUrl(url);
    const content = (
        <Loadable.Capture report={(m) => modules.push(m)}>
            <StaticRouter location={location} history={history}>
                <Provider store={store}>
                    <ServerDataContext>

                        <App />
                    </ServerDataContext>
                </Provider>
            </StaticRouter>
        </Loadable.Capture>
    );
    const renderToString = () => ReactDOMServer.renderToString(content);
    const htmlStream = () => ReactDOMServer.renderToNodeStream(
        content,
    );

    return {
        renderToString,
        htmlStream,
        resolveData,
    };
};

export const clientRender = () => {
    const history = createBrowserHistory();

    const BroswerDataContext = createBroswerContext();

    return (
        <BrowserRouter history={history}>
            <Provider store={store}>
                <BroswerDataContext>

                    <App />
                </BroswerDataContext>
            </Provider>
        </BrowserRouter>
    );
};

export const addSEO = () => {
    const helmet = Helmet.renderStatic();

    return helmet.title.toString() + helmet.meta.toString();
};
