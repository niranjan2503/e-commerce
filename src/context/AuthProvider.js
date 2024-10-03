import { createContext, useState } from "react";
import useLocalstorage from "../hooks/useLocalstorage";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [rememberme, setRememberme] = useLocalstorage("rememberme", false);
    return (
        <AuthContext.Provider value={{ auth, setAuth, rememberme, setRememberme }}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContext;
