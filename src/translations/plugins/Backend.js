import axios from 'axios';
import { resourceAdapt } from '../adaptors/resourceAdapt';

class Backend {
    constructor() {
        this.resourceAPI = '';
        this.lang = {};
        this.saveManager = {};
        this.resourceAdapt = resourceAdapt;
    }

    init(services, backendOptions) {
        this.resourceAPI = backendOptions.resourceAPI;
        if (typeof backendOptions.SaveManager === 'function') {
            const nameSpace = services.resourceStore?.options?.ns?.[0] ?? 'translation';

            this.saveManager = new backendOptions.SaveManager(nameSpace);
        }
    }


    read(language, namespace, callback) {
        this.lang[language] = {};
        const localResource = this.resourcesFromSessionStorage?.[language] ?? {};

        if (Object.keys(localResource).length !== 0) {
            callback(null, this.resourcesFromSessionStorage[language]);
        } else {
            this.loadResource(language, namespace, callback);
        }
    }


    saveToStorage(resources) {
        if (this.saveManager?.save) {
            this.saveManager.save({
                ...this.resourcesFromSessionStorage,
                ...resources,
            });
        }
    }

    get resourcesFromSessionStorage() {
        if (this.saveManager?.load) {
            return this.saveManager.load();
        }


        return {};
    }

    loadResource(language, namespace, callback) {
        axios.get(`${this.resourceAPI}/${language}`).then(({ data }) => {
            this.lang[language] = this.resourceAdapt(data);
            callback(null, this.lang[language]);
            this.saveToStorage({ [language]: this.lang[language] });
        }).catch((e) => {
            callback(e, false);
        });
    }
}

Backend.type = 'backend';

export default Backend;
