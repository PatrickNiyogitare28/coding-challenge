import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Layout from 'src/layout';
import DashboardHeader from '@components/dashboard-header';
import { useAppDispatch } from '@redux/store';
import { ICountry } from 'src/interfaces/ICountry';
import { countriesService } from 'src/services';
import styles from './styles.module.scss';

const Dashboard: React.FC = () => {
   const dispatch: any = useAppDispatch();
   const [countries, setCountries ] = useState<Array<ICountry>>([]);
   useEffect(() => {
    getCountries();
   },[dispatch])

   const getCountries = async() => {
       const countries: Array<ICountry> = await countriesService.getAllNameRegion('/all');
       setCountries(countries);
       console.log(countries)
   }
  
   const getCurrencyName = (currency: Object) : string => {
     if(!currency) return "";
     const names: Array<any> = Object?.keys(currency);
     return names[0];
   }

    return(
        <Layout>
            <>
            <DashboardHeader />
            <div className={styles.itemsContainer}>
                {
                  countries?.length > 0 &&  countries?.map((country: ICountry, index: number) => (
                        <div className={styles.item}> 
                            <Image 
                            src={`${country.flags.svg}`} 
                            alt={`${country.name.common} flag`} 
                            width="250" 
                            height="140" 
                            className={styles.flag}
                            />
                            <div className={styles.detailsContainer}>
                             <h3>{country.name.common}</h3>
                             <label>Population: <span>{country.population}</span></label>
                             <label>Capital: <span>{country.capital}</span></label>
                             <label>Currency: <span>{getCurrencyName(country?.currencies)}</span></label>
                            </div>
                            <div className={styles.actionsContainer}>
                                <div className={styles.actionsWrapper}>
                                    <div className={styles.iconContainer}>
                                        <Image src="/icons/delete-icon.svg" width="100" height="70" alt="delete" />
                                    </div>
                                    <div className={styles.iconContainer}>
                                        <Image src="/icons/check-icon.svg" width="100" height="40" alt="delete" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            </>
        </Layout>
    )
}
export default Dashboard;