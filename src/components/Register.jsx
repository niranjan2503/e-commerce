import { useState } from "react";
import "../styles/accessForm.css";
import { Link } from "react-router-dom";
const Register = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [mobileno, setMobileno] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPswd, setConfirmPswd] = useState("");
    const [error, setError] = useState("");
    const handleRegister = (event) => {
        event.preventDefault();
        setError("user Already Exists");
    };
    return (
        <div className="form-container">
            <form action="" className="form register-form">
                <div className="form-header">Register</div>
                <p className="error-message">{error}</p>
                <div className="form-field">
                    <label htmlFor="">First Name</label>
                    <input
                        type="text"
                        name="firstname"
                        value={firstname}
                        placeholder="Enter First Name"
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="">Last Name</label>
                    <input
                        type="text"
                        name="lastname"
                        value={lastname}
                        placeholder="Enter Last Name"
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="">Email</label>
                    <input
                        type="text"
                        name="mail"
                        value={mail}
                        placeholder="Enter Email"
                        onChange={(e) => setMail(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="">Mobile Number</label>
                    <input
                        type="text"
                        name="mobileno"
                        value={mobileno}
                        placeholder="Enter Mobile Number"
                        onChange={(e) => setMobileno(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPswd"
                        value={confirmPswd}
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPswd(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    onClick={(e) => handleRegister(e)}
                    className="form-submit"
                >
                    Register
                </button>
                <p className="toggle-form">
                    Have an account? <Link to={"/login"}>Login</Link>
                </p>
            </form>
        </div>
    );
};
export default Register;
