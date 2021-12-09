import React from 'react';
import DropDown from './drop-down';
import { IDashboardHeaderProps, ISelectOption } from './IProps';
import SearchInput from './search-input';
import styles from './styles.module.scss';

const DashboardHeader: React.FC<IDashboardHeaderProps> = ({onSearchInputChanged, onSelectInputChanged}) => {
     const selectOptions:Array<ISelectOption> = [
        {
            label: "Africa",
            value:"africa"
        },
        {
            label: "America",
            value:"america"
        },
        {
            label: "Asia",
            value:"asia"
        },
        {
            label:"Europe",
            value:"europe"
        },
        {
            label:"Oceania",
            value:"oceania"
        },

    ];
    return (
        <div className={styles.headerContainer}>
            <SearchInput onChange={(query: string) => onSearchInputChanged(query)}/>
            <DropDown label="Select" show={true} selectOptions={selectOptions} onSelectChanged={(value: string) => onSelectInputChanged(value)}/>
        </div>
    )
}
export default DashboardHeader;