import { useNavigate } from "react-router-dom";
import FormField from "./FormField";
import { useFormik } from "formik";
import { loginschema } from "../../services/userValidationSchema";
import { onLogin } from "../../services/authService";
import { useState } from "react";
const SignIn = ({ setLogin, setSignUp, setUser }) => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const onSubmit = (values, actions) => {
        onLogin(values)
            .then((res) => {
                setLogin(res.data.token);
                if (res.data?.user) setUser(res.data.user);
                setUser("Some One");
                navigate("/");
                actions.resetForm();
            })
            .catch((err) => {
                actions.setSubmitting(false);
                setError(err.response.data.message);
            });
    };
    const {
        values,
        errors,
        isSubmitting,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: loginschema,
        onSubmit,
    });

    return (
        <>
            <h1>Sign In</h1>
            {error && <p className="form-error">{error}</p>}
            <form className="form" onSubmit={handleSubmit}>
                <FormField
                    label={"User Id"}
                    type="text"
                    id={"username"}
                    value={values.user}
                    onChange={handleChange}
                    error={errors.username}
                    onBlur={handleBlur}
                    touched={touched.username}
                    placeholder={"Enter Email or Phone number"}
                ></FormField>
                <FormField
                    label={"Password"}
                    type="password"
                    id={"password"}
                    value={values.password}
                    onChange={handleChange}
                    error={errors.password}
                    onBlur={handleBlur}
                    touched={touched.password}
                    placeholder={"Enter Password"}
                ></FormField>
                <div className="form-field form-row-field">
                    <span>Forgot Password</span>
                </div>
                <div className="form-field btn-form-field">
                    <button disabled={isSubmitting} type="submit" className="submit-btn">
                        Login
                    </button>
                </div>
                <div className="toggle-form-field">
                    <p>
                        Don't have an account?{" "}
                        <span
                            onClick={() => {
                                setSignUp(true);
                            }}
                        >
                            Sign Up
                        </span>
                    </p>
                </div>
            </form>
        </>
    );
};
export default SignIn;
