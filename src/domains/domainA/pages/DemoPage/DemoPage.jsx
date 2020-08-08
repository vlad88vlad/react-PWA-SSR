import React from 'react';
import './style.scss';
import { useTranslation } from 'react-i18next';

const DemoPage = () => {
    const { t } = useTranslation();


    return (
        <main className="DemoPage">
            <h1>{t('domainA.DemoPage')}</h1>

        </main>
    );
};

export default DemoPage;
