import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
export const loginschema = yup.object().shape({
    username: yup.string().required("required"),
    password: yup.string().required("required"),
});

export const signupSchema = yup.object().shape({
    firstname: yup.string().trim().required("required"),
    lastname: yup.string().trim().required("required"),
    email: yup.string().email("Please Enter Valid Email").required("required"),
    phonenumber: yup.string().required("required"),
    password: yup
        .string()
        .min(5, "Password should be of minimum 5 characters")
        .max(10, "Password should be of maximum 10 characters")
        .matches(passwordRules, {
            message: "Should Contain 1 uppercase,1lowercase,1numeric digit",
        })
        .required("required"),
    // confirmpassword: yup
    //     .string()
    //     .oneOf([yup.ref("password"), null], "password must match")
    //     .required("required"),
});
