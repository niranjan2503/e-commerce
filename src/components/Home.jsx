import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Home = () => {
    const { auth, setAuth } = useAuth();
    console.log(auth);
    const navigate = useNavigate();
    const handleLogout = () => {
        setAuth({});
    };
    return (
        <div>
            Home
            <div>
                <button
                    onClick={() => {
                        handleLogout();
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};
export default Home;
