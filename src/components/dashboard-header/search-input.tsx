import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { ISearchInputProps } from './IProps';

const SearchInput: React.FC<ISearchInputProps> = ({onChange}) => {
    return (
        <div className={styles.searchContainer}>
            <Image src="/icons/search-icon.svg" alt="search" width="20"  height="20" />
            <input type="text" onChange={(event:any) => onChange(event.target.value)} placeholder="Search For a Country..." />
        </div>
    )
}
export default SearchInput;