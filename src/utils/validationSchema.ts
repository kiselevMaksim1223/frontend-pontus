import * as yup from "yup";


export const schema = yup.object().shape({
    name: yup.string()
        .min(2, "Min length is 2")
        .required("Name is required")
    ,
    email: yup.string()
        .email("Invalid email address")
        .matches(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Invalid email address format"
        )
        .required("Email is required"),
    message: yup.string()
        .min(7, "Min length is 7")
        .required("Message is required")

});