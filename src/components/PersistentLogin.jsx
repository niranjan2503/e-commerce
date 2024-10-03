import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useRefreshToken from "../hooks/useRefreshToken";
import { Outlet } from "react-router-dom";

const PersistentLogin = () => {
    const [loading, setLoading] = useState(true);
    const { auth, rememberme } = useAuth();
    const refresh = useRefreshToken();
    useEffect(() => {
        const verifyRefresh = async () => {
            try {
                await refresh();
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        !auth?.accessToken && rememberme ? verifyRefresh() : setLoading(false);
    }, []);
    return (
        <>
            {!rememberme ? (
                <Outlet></Outlet>
            ) : loading ? (
                <p>Loading ...</p>
            ) : (
                <Outlet></Outlet>
            )}
        </>
    );
};
export default PersistentLogin;
