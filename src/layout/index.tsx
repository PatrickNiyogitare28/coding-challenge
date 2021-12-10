import { Navbar, Sidebar } from '@components/layout';
import React, { useState } from 'react';
import { ILayoutProps } from './IProps';
import styles from './styles.module.scss';

const Layout:React.FC<ILayoutProps> = ({children, showBackBreadCrumb=false}) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    return (
        <div className={styles.layoutContainer}>
           <div className={styles.sidebarWrapper}>
            <Sidebar showSidebar={showSidebar} />
           </div>
           <div className={styles.contentWrapper}>
            <Navbar backBreadCrumb={showBackBreadCrumb} showSidebar={() => setShowSidebar(!showSidebar)}/>
            {children}
           </div>
        </div>
    )
}
export default Layout;