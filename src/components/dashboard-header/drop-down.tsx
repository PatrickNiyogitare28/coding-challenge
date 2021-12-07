import React,{useState, useRef, useEffect} from 'react';
import Image from 'next/image';
import { IFilterProps, ISelectOption} from './IProps';
import styles from './styles.module.scss';

const DropDown:React.FC<IFilterProps> = ({label, selectOptions, onSelectChanged}) => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<ISelectOption>();
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    const [options, setOptions] = useState<Array<ISelectOption>>(selectOptions);
    useEffect(() => {
     onSelectChanged(selectedOption?.value);
    },[selectedOption])

/**
 * Hook that alerts clicks outside of the passed ref
 */
 function useOutsideAlerter(ref:any) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event:any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowDropDown(false)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

    return (
        <div className={styles.selectTabContainer} onClick={() => setShowDropDown(!showDropDown)}  ref={wrapperRef}>
          <div className={styles.tabContainer}>
            <label>{(selectedOption) ? selectedOption?.label : label}</label>
            <Image src="/icons/drop-down-icon.svg" width="20" height="20" alt="drop down" />
          </div>
         {showDropDown &&
            <div className={styles.dropDownContainer}>
                <div className={styles.itemContainer}>
                {options.map((option:ISelectOption, index:number) => (
                    <div 
                    style={{backgroundColor: (selectedOption?.value === option.value) ? "rgba(79, 154, 252, 0.248)": ""}}
                    className={styles.item} 
                    onClick={() => setSelectedOption(option)}  
                    >{option.label}</div>
                ))}
                </div>
            </div>
            }
        </div>
    )
}
export default DropDown; 