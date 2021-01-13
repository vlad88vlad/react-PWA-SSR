import express from 'express';
import compression from 'compression';

import fs from 'fs';
import Loadable from 'react-loadable';
import path from 'path';
import { serverRender, addSEO } from '../src/render';
import translations from './translations/translationsExample';

const PORT = 8081;
const app = express();
app.use(compression());
app.use(express.static('./build'));

const renderHTML = async (req, res) => {
    const url = req.originalUrl || req.url;
    console.log(url);
    const modules = [];
    const { renderToString, htmlStream, resolveData } = serverRender(url, modules);

    renderToString();
    const dataApi = await resolveData();
    console.log(dataApi);
    //
    // const stream = htmlStream();
    // stream.pipe(res, { end: false });
    // stream.on('end', () => {
    //     res.write(pageParts[1]);
    //     res.write(data.toHtml());
    //     res.write(pageParts[2]);
    //     res.end();
    // });

    //
    console.log('dataApi',(dataApi.data));
    // console.log(dataApi.toHtml());
    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('An error occurred');
        }
        return res.send(
            data
                .replace('<div id="root"></div>', `<div id="root">${renderToString()}</div>`)
                .replace('<title></title>', addSEO())
                .replace('<script type="text/javascript">__init__</script>', dataApi.toHtml())
        );

    });
};

app.route('/translations/:lang')
    .get(translations);
app.get('/*', renderHTML);
Loadable.preloadAll()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`SSR running on port ${PORT}`);
        });
    });
