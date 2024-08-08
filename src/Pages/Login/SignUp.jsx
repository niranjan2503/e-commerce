import { useFormik } from "formik";
import FormField from "./FormField";
import { signupSchema } from "../../services/userValidationSchema";
import { userRegistration } from "../../services/authService";
import { useState } from "react";

const SignUp = ({ setSignUp }) => {
    const handleRegister = (values, actions) => {
        userRegistration(values)
            .then((response) => {
                console.log("Registration Successful");
                setSignUp(false);
            })
            .catch((err) => {
                actions.setErrors({
                    email: err.response.data.errors.email,
                    phone_number: err.response.data.errors.phone_number,
                });
            });
    };
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik(
        {
            initialValues: {
                first_name: "niranjan",
                last_name: "subbu",
                email: "niranjan@g.com",
                phone_number: "12345",
                password: "Hi1234",
            },
            validationSchema: signupSchema,
            onSubmit: handleRegister,
        }
    );
    return (
        <>
            <>
                <h1>Sign Up</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <FormField
                        label={"First Name"}
                        id="first_name"
                        placeholder={"Enter First Name"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.first_name}
                        touched={touched.first_name}
                        type={"text"}
                        error={errors.first_name}
                    ></FormField>
                    <FormField
                        label={"Last Name"}
                        id="last_name"
                        placeholder={"Enter last Name"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.last_name}
                        touched={touched.last_name}
                        type={"text"}
                        error={errors.last_name}
                    ></FormField>
                    <FormField
                        label={"Email"}
                        id="email"
                        placeholder={"Enter Email"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        touched={touched.email}
                        type={"text"}
                        error={errors.email}
                    ></FormField>
                    <FormField
                        label={"Phone Number"}
                        id="phone_number"
                        placeholder={"Enter Phone Number"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone_number}
                        touched={touched.phone_number}
                        type={"text"}
                        error={errors.phone_number}
                    ></FormField>
                    <FormField
                        label={"Password"}
                        id="password"
                        placeholder={"Set Password"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        touched={touched.password}
                        type={"password"}
                        error={errors.password}
                    ></FormField>
                    <div className="form-field btn-form-field">
                        <button type="submit" className="submit-btn">
                            Signup
                        </button>
                    </div>
                    <div className="toggle-form-field">
                        <p>
                            Already have an account?{" "}
                            <span
                                onClick={() => {
                                    setSignUp(false);
                                }}
                            >
                                Sign In
                            </span>
                        </p>
                    </div>
                </form>
            </>
        </>
    );
};
export default SignUp;
