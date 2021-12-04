import React from 'react';
import styles from './styles.module.scss';

const SignupForm: React.FC = () => {
    return (
        <div className={styles.formContainer}>
            <h2>Signup</h2>
            <form>
                <div className={styles.row} >
                <input type="text" placeholder="First Name" />
                </div>

                <div className={styles.row} >
                <input type="text" placeholder="Last Name" />
                </div>

                <div className={styles.row} >
                <input type="text" placeholder="Email" />
                </div>

                <div className={styles.row} >
                <input type="password" placeholder="Password" />
                </div>
                
                <div className={styles.row} >
                <button>Register</button>
                </div>
            </form>
        </div>
    )
}
export  {SignupForm};