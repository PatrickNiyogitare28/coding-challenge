import React from 'react';
import {useFormik}  from 'formik';
import { signupInitialValues, signupValidationSchema } from './yup';
import styles from './styles.module.scss';

const SignupForm: React.FC = () => {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: signupInitialValues,
        onSubmit (values) {
          console.log(values);
        },
        validationSchema: signupValidationSchema
    });
    const {handleSubmit, errors, touched, getFieldProps} = formik;
    return (
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
                    className={(Object.keys(errors).length === 0 || (Object.keys(touched).length === 0)) ? "" : styles.disabledButton}
                    disabled={(Object.keys(errors).length === 0 || (Object.keys(touched).length === 0)) ? false : true}>Register</button>
                </div>
            </form>
        </div>
    )
}
export  {SignupForm};