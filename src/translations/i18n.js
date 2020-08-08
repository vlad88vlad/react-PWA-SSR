import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from './plugins/LanguageDetector';
import Backend from './plugins/Backend';
import SessionStoreManager from './utils/SessionStoreManager';
import LocalStoreManager from './utils/LocalStoreManager';


const RESOURCE_API = '/translations';


i18n
    .use(Backend)
    // detect user language
    .use(LanguageDetector)
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: 'en',
        keySeparator: '_',
        react: {
            wait: true,
        },
        backend: {
            resourceAPI: RESOURCE_API,
            SaveManager: SessionStoreManager,
        },
        detection: {
            storageName: 'language',
            SaveManager: LocalStoreManager,
        },
        debug: false,
    });


export default i18n;
