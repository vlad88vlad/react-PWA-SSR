import React from 'react';
import { useTranslation } from 'react-i18next';

const DomainBView = () => {
    const { t } = useTranslation();


    return (
        <div>
            <h1>{t('domainB.title')}</h1>

            <a
                href="https://css-tricks.com/domain-driven-design-with-react/"
                target="_blank"
                rel="noreferrer noopener"
            >
                {t('domainB.link')}
            </a>

        </div>
    );
};

export default DomainBView;
