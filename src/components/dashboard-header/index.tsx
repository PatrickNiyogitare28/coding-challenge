import React from 'react';
import DropDown from './drop-down';
import { ISelectOption } from './IProps';
import SearchInput from './search-input';
import styles from './styles.module.scss';

const DashboardHeader: React.FC = () => {
     const selectOptions:Array<ISelectOption> = [
        {
            label: "Africa",
            value:"AFRICA"
        },
        {
            label: "America",
            value:"AMERICA"
        },
        {
            label: "Asia",
            value:"ASIA"
        },
        {
            label:"Europe",
            value:"EUROPE"
        },
        {
            label:"Oceania",
            value:"OCEANIA"
        },

    ];
    return (
        <div className={styles.headerContainer}>
            <SearchInput />
            <DropDown label="Select" show={true} selectOptions={selectOptions}/>
        </div>
    )
}
export default DashboardHeader;