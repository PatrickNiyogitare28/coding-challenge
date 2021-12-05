import { Navbar, Sidebar } from '@components/layout';
import React from 'react';
import { ILayoutProps } from './IProps';
import styles from './styles.module.scss';

const Layout:React.FC<ILayoutProps> = ({children}) => {
    return (
        <div className={styles.layoutContainer}>
           <div className={styles.sidebarWrapper}>
            <Sidebar />
           </div>
           <div className={styles.contentWrapper}>
            <Navbar />
            {children}
           </div>
        </div>
    )
}
export default Layout;