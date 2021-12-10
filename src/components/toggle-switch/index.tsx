import { useAppDispatch } from '@redux/store';
import React,{useState, useEffect} from 'react';
import { IToggleProps } from './IProps';
import styles from './styles.module.scss';

const ToggleSwitch: React.FC<IToggleProps> = ({isOn=false, onClick}) => {
    const dispatch: any = useAppDispatch();
    const [isDarkActive, setIsDarkActive] = useState<boolean>(false);
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
        localStorage.setItem('theme',inactiveTheme);
        onClick();
    }

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
      }, [activeTheme]);

      useEffect(() => {
        const theme: any = (typeof window !== 'undefined') ? localStorage.getItem('theme') : 'light';
        if(theme == 'dark') return setIsDarkActive(true);
        return setIsDarkActive(false);
    },[dispatch])

    return (
        <div className={styles.container} onClick={() => onClicked()}>
            <div className={styles.item} style={(isOn || isDarkActive) ? onStyles : offStyles}></div>
        </div>
    )
}
export {ToggleSwitch};