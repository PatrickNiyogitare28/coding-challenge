import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

const SearchInput: React.FC = () => {
    return (
        <div className={styles.searchContainer}>
            <Image src="/icons/search-icon.svg" alt="search" width="20"  height="20" />
            <input type="text" onChange={(event:any) => {}} placeholder="Search For a Country..." />
        </div>
    )
}
export default SearchInput;