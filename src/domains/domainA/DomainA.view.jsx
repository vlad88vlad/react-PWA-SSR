import React from 'react';
import RenderRoutes from 'router/RenderRoutes';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routes } from './router';

const DomainAView = () => {
    const { t } = useTranslation();


    return (
        <div>
            <h1>{t('domainA.title')}</h1>
            <Link to="/domainA/TestPage">
                {t('domainA.TestPage')}
            </Link>
            <Link to="/domainA/DemoPage">
                {t('domainA.DemoPage')}
            </Link>
            <RenderRoutes routes={routes} rootPath="/domainA" />
        </div>
    );
};

export default DomainAView;
