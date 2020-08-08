import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguageSwitcher = () => {
    const { i18n, t } = useTranslation();
    const languages = ['ua', 'en'];

    const changeLanguage = useCallback(
        (lang) => {
            i18n.changeLanguage(lang);
        },
        [i18n],
    );

    return {
        languages, changeLanguage, language: i18n.language, t,
    };
};
