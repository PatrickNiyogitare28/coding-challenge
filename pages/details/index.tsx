import React from 'react';
import Image from 'next/image';
import Layout from 'src/layout';
import styles from './styles.module.scss';
const Details: React.FC = () => {
    return (
        <Layout showBackBreadCrumb={true}>
           <div className={styles.container}>
            <div className={styles.fragWrapper}>
             <Image src="/images/frag.png" width="350" height="250" alt="frag" />
            </div>
            <div className={styles.detailsWrapper}>
                <h3>Belgium</h3>
                <div className={styles.dataContainer}>
                <div className={styles.dataWrapper}>
                    <label>Native Name: <span>Belgee</span></label>
                    <label>Population: <span>11,238,234</span></label>
                    <label>Region: <span>Europe</span></label>
                    <label>Sub Region: <span>Western Europe</span></label>
                    <label>Capital: bordersWrapper<span>Brussels</span></label>
                </div>
                <div className={styles.dataWrapper}>
                    <label>Top Level Domain: <span>.be</span></label>
                    <label>Currencies: <span>Euro</span></label>
                    <label>Langueges: <span>Dutch, French, German</span></label>
                </div>
                </div>
                <div className={styles.borderCountriesWrapper}>
                    <div className={styles.labelWrapper}>
                        <label>Border Countries</label>
                    </div>
                    <div className={styles.bordersWrapper}>
                        <div className={styles.borderItem}>  
                            <label>France</label>
                        </div>
                        <div className={styles.borderItem}>  
                            <label>German</label>
                        </div>
                        <div className={styles.borderItem}>  
                            <label>Netherlands</label>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </Layout>
    )
}

export default Details;