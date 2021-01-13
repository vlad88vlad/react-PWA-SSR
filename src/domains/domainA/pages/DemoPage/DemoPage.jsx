import React, { useState } from 'react';
import './style.scss';
import { useTranslation } from 'react-i18next';
import { useSSE } from 'useSSE';
import { Helmet } from 'react-helmet';
import client from '../../../../api-client';

const DemoPage = () => {
    const { t } = useTranslation();
    const [shouldRefresh, setRefresh] = useState(0);
    const refresh = () => {
        setRefresh(shouldRefresh + 1);
    };

    const [data] = useSSE(
        () => new Promise((resolve) => client.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(({ data: dataR }) => resolve(dataR))),
        [shouldRefresh],
    );
    // const data = resp?.data || {};

    console.log(data);


    return (
        <main className="DemoPage">
            <Helmet
                title={data?.title}
            />
            <h1>{t('domainA.DemoPage')}</h1>
            {data && (<pre>{data.title}</pre>)}
            <button onClick={refresh} type="button">refresh</button>
        </main>
    );
};

export default DemoPage;
