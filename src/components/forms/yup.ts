import { IUser } from '../../../pages/interfaces/IUser';
import * as Yup from 'yup'

export const signupInitialValues: IUser = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}
export const signupValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email().required("Email Required"),
    password: Yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Password should be strong').required("Required")
})