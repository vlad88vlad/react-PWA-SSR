import StoreManager from '../models/StoreManager';

class SessionStoreManager extends StoreManager {
    constructor(storeName) {
        super();
        this.storeName = storeName;
    }

    save(data) {
        try {
            sessionStorage.setItem(this.storeName, JSON.stringify(data));
        } catch (e) {
            console.error(e);
        }
    }

    load() {
        try {
            return JSON.parse(sessionStorage.getItem(this.storeName));
        } catch {
            return null;
        }
    }
}

export default SessionStoreManager;
