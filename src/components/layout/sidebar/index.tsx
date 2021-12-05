import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import { ITabItemProps } from './IProps';
import { getTabItems } from './tabItems';

const Sidebar:React.FC = () => {
    const router: any = useRouter();
    const {param} = router.query;
    const tabItems: Array<ITabItemProps> = getTabItems(param ? param : 'list');
  
    return (
        <div className={styles.sidebarContainer}>
           <Image src="/logos/bag-logo.svg" width="50" height="50" />
           <div className={styles.tabItemsContainer}>
            {
                tabItems.map((item: ITabItemProps, index: number) => (
                    <div 
                    className={styles.tabItem} 
                    style={{backgroundColor: item.backgroundColor}}
                    onClick={() => router.push({
                        pathname: '/dashboard',
                        query: { param: item.param },
                        })}>
                        <label>
                                {item.name}
                        </label>
                    </div>
                ))
            }
           </div>
        </div>
    )
}
export  {Sidebar};