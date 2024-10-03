import axios from "../apis/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const refresh = async () => {
        const response = await axios.get("/refresh", { withCredentials: true });
        setAuth((prevAuth) => {
            return { ...prevAuth, accessToken: response.data.accessToken };
        });
        return response.data.accessToken;
    };
    return refresh;
};
export default useRefreshToken;
