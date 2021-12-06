import React from 'react';
import { IToggleProps } from './IProps';
import styles from './styles.module.scss';

const ToggleSwitch: React.FC<IToggleProps> = ({isOn=false, onClick}) => {
    const onStyles= {
     marginLeft: 'auto',
     backgroundColor: '#ffdb59'
    }
    const offStyles = {
      backgroundColor: 'black'
    }
    return (
        <div className={styles.container} onClick={() => onClick()}>
            <div className={styles.item} style={isOn ? onStyles : offStyles}></div>
        </div>
    )
}
export {ToggleSwitch};