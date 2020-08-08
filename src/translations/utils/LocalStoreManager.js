import StoreManager from '../models/StoreManager';

class LocalStoreManager extends StoreManager {
    constructor(storeName) {
        super();
        this.storeName = storeName;
    }

    save(data) {
        try {
            localStorage.setItem(this.storeName, JSON.stringify(data));
        } catch (e) {
            console.error(e);
        }
    }

    load() {
        try {
            return JSON.parse(localStorage.getItem(this.storeName));
        } catch {
            return null;
        }
    }
}

export default LocalStoreManager;
