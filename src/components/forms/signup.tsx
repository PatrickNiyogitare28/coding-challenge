import React, {useState} from 'react';
import { useRouter } from 'next/router';
import {useFormik}  from 'formik';
import { signupInitialValues, signupValidationSchema } from './yup';
import styles from './styles.module.scss';
import { signup } from 'src/services/auth.service';
import toast, { Toaster } from 'react-hot-toast';
import { ISignupWithEmailDto } from 'pages/api/auth/signupWithEmail';


const SignupForm: React.FC = () => {
    const router:any = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: signupInitialValues,
        onSubmit (values) {
         handleSave(values);
        },
        validationSchema: signupValidationSchema
    });
    const handleSave = async(data: ISignupWithEmailDto) => {
      setLoading(true);
      const signupRes: any = await signup(data);
      setLoading(false);
      if(!signupRes.success) return toast.error(signupRes?.message || 'Registration failed');
      toast.success("Successfully registered")
      setTimeout(() => {
          router.push('/auth/signin');
      },5000);
    }
    const {handleSubmit, errors, touched, getFieldProps} = formik;
    return (
        <>
        <Toaster 
        />
        <div className={styles.formContainer}>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div className={styles.row} >
                <input 
                type="text" 
                placeholder="First Name" 
                className={(errors.firstName && touched.firstName) ? styles.errorInput : ""}
                {...getFieldProps("firstName")}
                />
                {(errors.firstName && touched.firstName) ?
                    <p className={styles.errorText}>{errors.firstName}</p> :
                    <></>
                }
                </div>

                <div className={styles.row} >
                <input 
                type="text" 
                placeholder="Last Name" 
                className={(errors.lastName && touched.lastName) ? styles.errorInput : ""}
                {...getFieldProps("lastName")}
                />
                {(errors.lastName && touched.lastName) ?
                    <p className={styles.errorText}>{errors.lastName}</p> :
                    <></>
                }
                </div>

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
                    disabled={(Object.keys(errors).length === 0 || (Object.keys(touched).length === 0) || loading) ? false : true}>{!loading ? 'Register': 'Registerig...'}</button>
                </div>
            </form>
        </div>
        </>
    )

}
export  {SignupForm};