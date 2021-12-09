import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { ToggleSwitch } from '@components/toggle-switch';
import { useRouter } from 'next/router';
import { IUser } from 'pages/api/auth/signupWithEmail';
import { crypto } from 'src/helpers/utils/crypto.util';
import { INavbarProps } from './IProps';

const Navbar: React.FC<INavbarProps> = ({backBreadCrumb=false}) => {
    const router: any = useRouter();
    const {tab} = router.query;
    const [breadCrumb, setBreadCrumb] = useState<any>("MY LIST");
    useEffect(() => {
      if(tab === 'visited') return setBreadCrumb('VISITED');
      if(tab === 'to-visit') return setBreadCrumb('TO VISIT');
      return setBreadCrumb('MY LIST')
    },[tab])

    const user: IUser = (typeof window  !== 'undefined') ? crypto.decrypt(sessionStorage.getItem('hash')) : {};

    const [dirkMode, setDirkMode] = useState<boolean>(false);
    return (
        <div className={styles.navContainer}>
           <div className={styles.breadCrumbContainer}>
             {!backBreadCrumb && 
             <label>{breadCrumb}</label>
             }
             {backBreadCrumb && 
             <div className={styles.backBreadCrumb} style={{display: 'flex', width:"60px"}} onClick={() => router.push('/dashboard')}>
                <Image src="/icons/back-icon.svg" width="100" height="20" alt="Return back" />
                <label>Back</label>
             </div>
             }
           </div>
           <div className={styles.actionsWrapper}>
             <div className={styles.toggleModeWrapper}>
                <label>DARK MODE</label>
                <ToggleSwitch isOn={dirkMode} onClick={() => setDirkMode(!dirkMode)}/>
             </div>
             <div className={styles.notificationsContainer}>
                <Image src="/icons/notification-icon.svg" alt="notifications" width="20" height="20" />
             </div>
             <div className={styles.profileLabelWrapper}>
                 <ul>
                     <li>Hey,</li>
                     <li>{user?.firstName}</li>
                     <li>{user?.firstName?.substr(0,1)}{user?.lastName?.substr(0,1)}</li>
                 </ul>
             </div>
           </div>
        </div>
    )
}

export {Navbar};