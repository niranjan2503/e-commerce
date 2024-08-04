export const offlineItems = {
    USERNAME: "username",
    PASSWORD: "password",
    REMEMBERME: "rememberme",
};

export const OfflineStorage = {
    setOfflineItem: (key, item) => {
        localStorage.setItem(key, item);
    },
    getOfflineItem: (key) => {
        return localStorage.getItem(key);
    },
    removeOfflineItem: (key) => {
        localStorage.removeItem(key);
    },
};
