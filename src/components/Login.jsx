import { useState } from "react";
import "../styles/accessForm.css";
import useAuth from "../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "../apis/axios";
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [user, setUser] = useState("Danerys");
    const [password, setPassword] = useState("khaleesi");
    const { setAuth, rememberme, setRememberme } = useAuth(false);
    const handleLogin = async (event) => {
        event.preventDefault();
        const response = await axios.post(
            "/login",
            { user, password },
            {
                withCredentials: true,
            }
        );
        setAuth({ accessToken: response.data.accessToken, user });
        navigate(from, { replace: true });
    };
    return (
        <div className="form-container">
            <form action="" className="form">
                <div className="form-header">Login</div>
                <div className="form-field">
                    <label htmlFor="">Username</label>
                    <input
                        type="text"
                        name="user"
                        value={user}
                        placeholder="Enter username"
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-field check-box">
                    <input
                        type="checkbox"
                        name="rememberme"
                        id="rememberme"
                        checked={rememberme}
                        onChange={(e) => setRememberme(e.target.checked)}
                    />
                    <label htmlFor="rememberme">Remember Me</label>
                </div>
                <button
                    type="submit"
                    onClick={(e) => handleLogin(e)}
                    className="form-submit"
                >
                    Login
                </button>
                <p className="forgot-password">
                    <span>Forgot Password?</span>
                </p>
                <p className="toggle-form">
                    Don't have an account? <Link to={"/register"}>Register</Link>
                </p>
            </form>
        </div>
    );
};
export default Login;
