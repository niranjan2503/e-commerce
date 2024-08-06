/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./login.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useAuth } from "../AuthContext";
const Login = () => {
    const { setLogin, isAuthenticated, setUser } = useAuth();
    const [signUp, setSignUp] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, []);
    return (
        <section className="main-container">
            <div className="form-container">
                {signUp ? (
                    <SignUp setSignUp={setSignUp}></SignUp>
                ) : (
                    <SignIn
                        setLogin={setLogin}
                        setSignUp={setSignUp}
                        setUser={setUser}
                    ></SignIn>
                )}
            </div>
        </section>
    );
};
export default Login;
