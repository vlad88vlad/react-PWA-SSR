const isFunction = (fn) => typeof fn === 'function';

class LanguageDetector {
    constructor() {
        this.saveManager = {};
    }


    init(_, languageDetector = {}) {
        const storageName = languageDetector.storageName || 'lng';

        if (isFunction(languageDetector.SaveManager)) {
            this.saveManager = new languageDetector.SaveManager(storageName);
        }
    }


    get storageLang() {
        return isFunction(this.saveManager.load) ? this.saveManager.load() : null;
    }

    detect() {
        const detectedLanguage = (navigator.languages && navigator.languages[0])// Chrome / Firefox
            || navigator.language // All browsers
            || navigator.userLanguage; //


        return this.storageLang || detectedLanguage.slice(0, 2);
    }


    cacheUserLanguage(lng) {
        if (isFunction(this.saveManager.save)) {
            this.saveManager.save(lng);
        }
    }
}

LanguageDetector.type = 'languageDetector';

export default LanguageDetector;
