import React from 'react';
import styles from './styles.module.scss';

const ItemsLoading: React.FC = () => {
    return(
        <div className={styles.itemsLaoderContainer}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
     </div>
    );
}

const ItemLoading: React.FC = () => {
 return (
     <div className={styles.itemLoaderContainer}>
         <div className={styles.fragWrapper}></div>
         <div className={styles.detailsWrapper}>
            <div className={styles.contentWrapper}>
                <div className={styles.heading}></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.contentWrapper}>
                <div></div>
                <div></div>
                <div></div>
            </div>
         </div>
     </div>
 )
}
export  {ItemsLoading, ItemLoading};