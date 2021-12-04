import React from 'react';
import Image from 'next/image';
import { SignupForm } from '@components/forms';
import styles from './styles.module.scss';

const Signup: React.FC = () => {
    return (
        <div className={styles.viewContainer}>
            <div className={styles.highrightWrapper}> 
                <div className={styles.socialMediaAuthWrapper}>
                <h1>
                    Create Account to Continue
                </h1>
                <button>
                    <Image src="/logos/google-logo.svg" alt="signup with google" width="30" height="30" />
                    <label>Continue with Google</label>
                </button>
                <h3>Got an account, login</h3>
                </div>
                <div className={styles.formWrapper}>
                    <SignupForm />
                </div>
            </div>
        </div>
    )
}

export {Signup}