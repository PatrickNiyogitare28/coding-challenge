import React,{useState, useEffect} from 'react';
import { IToggleProps } from './IProps';
import styles from './styles.module.scss';

const ToggleSwitch: React.FC<IToggleProps> = ({isOn=false, onClick}) => {
    const [activeTheme, setActiveTheme] = useState("light");
    const inactiveTheme = activeTheme === "light" ? "dark" : "light";

    const onStyles= {
     marginLeft: 'auto',
     backgroundColor: '#ffdb59'
    }
    const offStyles = {
      backgroundColor: 'black'
    }
    const onClicked = () => {
        setActiveTheme(inactiveTheme);
        onClick();
    }

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
      }, [activeTheme]);

    return (
        <div className={styles.container} onClick={() => onClicked()}>
            <div className={styles.item} style={isOn ? onStyles : offStyles}></div>
        </div>
    )
}
export {ToggleSwitch};