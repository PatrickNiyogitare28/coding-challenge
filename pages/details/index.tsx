import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Layout from 'src/layout';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import { ICountry, ICountryName } from 'src/interfaces/ICountry';
import { countriesService }  from 'src/services';
import toast, { Toaster } from 'react-hot-toast';
import { useAppDispatch } from '@redux/store';
import { ItemLoading } from '@components/loaders';

const Details: React.FC = () => {
    const dispatch = useAppDispatch();
    const router: any = useRouter();
    const {country} = router.query;
    const [paramCountry, setParamCountry] = useState<ICountry | any>();
    useEffect(() => {
        if(!country) return;
        fetchCountryDetails(country);
    },[country, dispatch])

    const fetchCountryDetails = async(country: string) => {
        const countryRes: Array<ICountry | any> = await countriesService.getOneByName(country);
        if(countryRes.length < 1){
            toast.error("Country not found");
            return setTimeout(() => {
                router.push('/dashboard');
            }, 300)
        }
        setParamCountry(countryRes[0]);
    }

    const getNativeName = (name: ICountryName) : string => {
        if (!name) return "";
        const names: Array<any> = Object?.keys(name);
        return names[0];
    }

    const getCurrencyName = (currency: Object): string => {
        if (!currency) return "";
        const names: Array<any> = Object?.keys(currency);
        return names[0];
    }

    const getLanguages = (languages: Object): Array<string> => {
        if (!languages) return [""];
        const langsObj: Array<any> = Object?.keys(languages);
        return langsObj;
    }
    return (
        <>
        <Toaster />
        <Layout showBackBreadCrumb={true}>
            <>
            {paramCountry?.name && 
           <div className={styles.container}>
            <div className={styles.fragWrapper}>
             <Image 
             src={`${paramCountry?.flags.svg}`}
             alt={`${paramCountry?.name.common} flag`} 
             width="350" 
             height="250" 
             />
            </div>
            <div className={styles.detailsWrapper}>
                <h3>{paramCountry.name.common}</h3>
                <div className={styles.dataContainer}>
                <div className={styles.dataWrapper}>
                    <label>Native Name: <span>{getNativeName(paramCountry.name.nativeName)}</span></label>
                    <label>Population: <span>{paramCountry.population}</span></label>
                    <label>Region: <span>{paramCountry.region}</span></label>
                    <label>Sub Region: <span>{paramCountry.subregion}</span></label>
                    <label>Capital: <span>{paramCountry.capital[0]}</span></label>
                </div>
                <div className={styles.dataWrapper}>
                    <label>Top Level Domain: <span>{paramCountry.tld[0]}</span></label>
                    <label>Currencies: <span>{getCurrencyName(paramCountry.currencies)}</span></label>
                    <label>Langueges: <span>{getLanguages(paramCountry.languages).map((lang, index) => (
                        <small key={index.toString()}>{lang}</small>
                    ))}</span></label>
                </div>
                </div>
                <div className={styles.borderCountriesWrapper}>
                    <div className={styles.labelWrapper}>
                        <label>Border Countries</label>
                    </div>
                    <div className={styles.bordersWrapper}>
                        {
                            paramCountry?.borders?.map((border: string) => (
                                <div className={styles.borderItem}>  
                                <label>{border}</label>
                               </div>
                            ))
                        }
                    </div>
                </div>
            </div>
           </div>
         }
         {!paramCountry?.name && 
          <ItemLoading />
         }
         </>
        </Layout>
        </>
    )
}

export default Details;