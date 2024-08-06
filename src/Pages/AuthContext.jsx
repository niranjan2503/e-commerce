import { createContext, useContext, useState } from "react";
import { getuserDetails } from "../services/authService";
import { offlineItems, OfflineStorage } from "../services/offlinestorage";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
    let isExistingUser = false;
    const [user, setUser] = useState("");
    if (getuserDetails()) {
        isExistingUser = true;
    }
    const [isAuthenticated, setIsAuthenticated] = useState(isExistingUser);
    const setLogin = (username) => {
        // OfflineStorage.setOfflineItem(offlineItems.USERNAME, username);
        setIsAuthenticated(true);
    };
    const setLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, setLogin, setLogout, setUser, user }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
