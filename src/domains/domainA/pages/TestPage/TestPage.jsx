import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import client from 'api-client';
import Button from 'components/Button';
import './style.scss';

const TestPage = () => {
    const { t } = useTranslation();
    const [data, setData] = useState([]);


    const getData = () => {
        client.get('https://jsonplaceholder.typicode.com/todos', {
            headers: {
                'Cache-Control': 'no-cache',
                test: 'test',
            },
        }).then(({ data: respData }) => {
            console.log(respData);
            setData(respData);
        });
    };
    const postData = () => {
        client.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }).then(({ data: respData }) => {
            console.log(respData);
        });
    };

    const getDataWithCache = () => {
        client.get('https://jsonplaceholder.typicode.com/todos/1').then(({ data: respData }) => {
            console.log(respData);
        });
    };

    useEffect(() => {
    }, []);


    return (
        <main className="TestPage">
            <h1>{t('domainA.TestPage')}</h1>
            <p>
                TestPage TestPage TestPage TestPage TestPage TestPage
                TestPage TestPage TestPage TestPage TestPage TestPage
                TestPage TestPage TestPage TestPage TestPage TestPage
                TestPage TestPage TestPage TestPage TestPage TestPage
            </p>
            <Button onClick={() => getData()}>
                getData
            </Button>
            <Button onClick={() => getDataWithCache()}>
                getDataWithCache
            </Button>
            <Button onClick={() => postData()}>
                postData
            </Button>
            {data.map((item) => (
                <div key={item.id}>
                    <div>{item.title}</div>
                </div>
            ))}
        </main>
    );
};

export default TestPage;
