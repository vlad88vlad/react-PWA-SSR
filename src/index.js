import { hydrate } from 'react-dom';
import Loadable from 'react-loadable';
import * as serviceWorker from './serviceWorker';
import { clientRender } from './render';
import './translations/i18n';
import client from "./api-client";
import interceptorsInit from './api-client/interceptors';

interceptorsInit(client);

window.onload = () => {
    Loadable.preloadReady().then(() => {
        hydrate(
            clientRender(),
            document.getElementById('root')
        );
    });
};
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
