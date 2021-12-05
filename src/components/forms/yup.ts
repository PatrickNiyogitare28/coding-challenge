import * as Yup from 'yup'
import { ISignupWithEmailDto } from 'pages/api/auth/signupWithEmail';
import { ILoginWithEmailDto } from 'pages/api/auth/signinWithEmail';

export const signupInitialValues: ISignupWithEmailDto = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}
export const signinInitialValues: ILoginWithEmailDto = {
    email: "",
    password: ""
}
export const signupValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email().required("Email Required"),
    password: Yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Password should be strong').required("Required")
})
export const signinValidationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email Required"),
    password: Yup.string().required("Required")
})