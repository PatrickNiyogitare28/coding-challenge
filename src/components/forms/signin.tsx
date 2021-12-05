import React, {useState} from 'react';
import {useFormik}  from 'formik';
import { signinInitialValues, signinValidationSchema } from './yup';
import styles from './styles.module.scss';
import { signin} from 'src/services/auth.service';
import toast, { Toaster } from 'react-hot-toast';
import { ILoginWithEmailDto } from 'pages/api/auth/signinWithEmail';


const SigninForm: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const formik = useFormik({
        initialValues: signinInitialValues,
        validationSchema: signinValidationSchema,
        onSubmit (values) {
         handleSave(values);
        }
    });
    const handleSave = async(data: ILoginWithEmailDto) => {
      setLoading(true);
      const signupRes: any = await signin(data);
      setLoading(false);
      if(!signupRes.success) return toast.error(signupRes?.message || 'Login failed');
      return toast.success("Successfully loggedin")
    }
    const {handleSubmit, errors, touched, getFieldProps} = formik;
    return (
        <>
        <Toaster 
        />
        <div className={styles.formContainer}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div className={styles.row} >
                <input 
                type="text" 
                placeholder="Email" 
                className={(errors.email && touched.email) ? styles.errorInput : ""}
                {...getFieldProps("email")}
                />
                {(errors.email && touched.email) ?
                    <p className={styles.errorText}>{errors.email}</p> :
                    <></>
                }
                </div>

                <div className={styles.row} >
                <input 
                type="password" 
                placeholder="Password" 
                className={(errors.password && touched.password) ? styles.errorInput : ""}
                {...getFieldProps("password")}
                />
                {(errors.password && touched.password) ?
                    <p className={styles.errorText}>{errors.password}</p> :
                    <></>
                }
                </div>
                
                <div className={styles.row} >
                <button
                    type="submit"
                    className={(Object.keys(errors).length === 0 || (Object.keys(touched).length === 0 || loading)) ? "" : styles.disabledButton}
                    disabled={(Object.keys(errors).length === 0 || (Object.keys(touched).length === 0) || loading) ? false : true}>{!loading ? 'Login': 'Logging in...'}</button>
                </div>
            </form>
        </div>
        </>
    )

}
export  {SigninForm};