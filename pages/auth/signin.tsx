import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { SigninForm, SignupForm } from '@components/forms';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@redux/store';

const Signin: React.FC = () => {
    const router: any = useRouter();
    const dispatch: any = useAppDispatch();
    const [theme, setTheme] = useState<string>('light')
    useEffect(() => {
        const theme: any = (typeof window !== 'undefined') ? localStorage.getItem('theme') : 'light';
        document.body.dataset.theme = theme
        setTheme(theme)
    },[dispatch])
    return (
        <div className={styles.viewContainer}>
            <div className={styles.highrightWrapper}> 
                <div className={styles.socialMediaAuthWrapper}>
                <h1  style={{color: theme === 'dark' ? 'white':''}}>
                    Login with your Account to Continue
                </h1>
                <button>
                    <Image src="/logos/google-logo.svg" alt="signup with google" width="30" height="30" />
                    <label>Continue with Google</label>
                </button>
                <h3 onClick={() => router.push('/auth/signup')}>Have no account, Singup</h3>
                </div>
                <div className={styles.formWrapper}>
                    <SigninForm />
                </div>
            </div>
        </div>
    )
}

export default Signin