import { useFormik } from "formik";
import FormField from "./FormField";
import { signupSchema } from "../../services/userValidationSchema";

const SignUp = ({ setSignUp }) => {
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik(
        {
            initialValues: {
                firstname: "",
                lastname: "",
                email: "",
                phonenumber: "",
                password: "",
            },
            validationSchema: signupSchema,
            // onSubmit,
        }
    );
    return (
        <>
            <>
                <h1>Sign Up</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <FormField
                        label={"First Name"}
                        id="firstname"
                        placeholder={"Enter First Name"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstname}
                        touched={touched.firstname}
                        type={"text"}
                        error={errors.firstname}
                    ></FormField>
                    <FormField
                        label={"Last Name"}
                        id="lastname"
                        placeholder={"Enter last Name"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastname}
                        touched={touched.lastname}
                        type={"text"}
                        error={errors.lastname}
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
                        id="phonenumber"
                        placeholder={"Enter Phone Number"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phonenumber}
                        touched={touched.phonenumber}
                        type={"text"}
                        error={errors.phonenumber}
                    ></FormField>
                    <FormField
                        label={"Password"}
                        id="password"
                        placeholder={"Set Password"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        touched={touched.password}
                        type={"text"}
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
