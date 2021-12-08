import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Layout from 'src/layout';
import DashboardHeader from '@components/dashboard-header';
import { useAppDispatch } from '@redux/store';
import { ICountry } from 'src/interfaces/ICountry';
import { countriesService } from 'src/services';
import styles from './styles.module.scss';
import { IUser } from 'pages/interfaces/IUser';
import { crypto } from 'src/helpers/utils/crypto.util';
import toast, { Toaster } from 'react-hot-toast';
import { IAddToVisitDto } from 'pages/api/countries/toVisit/add';
import { IToVisit } from 'src/interfaces/IToVisit';
import { useRouter } from 'next/router';
import { ITabItemProps } from '@components/layout/sidebar/IProps';
import { getTabItems } from '@components/layout/sidebar/tabItems';

const Dashboard: React.FC = () => {
    const router: any = useRouter();
   const dispatch: any = useAppDispatch();
   const [countries, setCountries ] = useState<Array<ICountry>>([]);
   const [queryName, setQueryName] = useState<string>("");
   const [queryRegion, setQueryRegion] = useState<string>("");
   const [endpoint, setEndpoint] = useState<string>('/all')
   const [currentUser, setCurrentUser]  = useState<IUser | null> ();
   const [toVisitList, setToVisitList] = useState<Array<IToVisit | any>>([]);
   const [loading, setLoading] = useState<boolean>(false);
   const {tab} = router.query;
   const tabItems: Array<ITabItemProps> = getTabItems(tab ? tab : 'list');

   useEffect(() => {
    getCountries();
    getLoggedInUser();
    getToVisitList();
   },[dispatch])

   const getCountries = async() => {
       setLoading(true);
       const countries: Array<ICountry> = await countriesService.getAllNameRegion(endpoint);
       setCountries(countries);
       setLoading(false);
   }
  
   const getCurrencyName = (currency: Object) : string => {
     if(!currency) return "";
     const names: Array<any> = Object?.keys(currency);
     return names[0];
   }

   useEffect(() => {
    if(queryName?.length > 0){
        setEndpoint(`/name/${queryName}`)
    }
    else{
        setEndpoint('/all')
    }
   },[queryName])

   useEffect(() => {
    if(queryRegion?.length > 0){
        setEndpoint(`/region/${queryRegion}`)
    }
    else{
        setEndpoint('/all')
    }
   },[queryRegion]);

   useEffect(() => {
    getToVisitList()
    getCountries();
   }, [endpoint])

   /*get loggedin user*/
   const getLoggedInUser = () => {
    const user: IUser = (typeof window  !== 'undefined') ? crypto.decrypt(sessionStorage.getItem('hash')) : null;
    if(user) setCurrentUser(user);
   }
   /*Add to visit list*/
   const onAddToList = async(countryName: string) => {
     const user: IUser = (typeof window  !== 'undefined') ? crypto.decrypt(sessionStorage.getItem('hash')) : null;
      if(!user || !user.id) return toast.error('Loggin required');
      const dto: IAddToVisitDto = {countryName, userId: user.id}
      const onAddToListResponse: any = await countriesService.addToVisit(dto);
      if(!onAddToListResponse.success) return toast.error(onAddToListResponse.message || 'Error occured');
      toast.success(onAddToListResponse.message || `Added ${countryName} to visit list`);
      getToVisitList();
   }
   /*Get to visit list*/
   const getToVisitList = async() => {
       const user: IUser = (typeof window  !== 'undefined') ? crypto.decrypt(sessionStorage.getItem('hash')) : null;
       if(!user || !user.id) return toast.error('Loggin required');
       const getListRes: any = await countriesService.getToVisitByUserId(user.id);
       if(!getListRes.success) return;
       setToVisitList(getListRes.data);
   }
   /*isAdded to visit list*/
   const isAddedToVisitList = (countryName: string) => {
    const index: any = toVisitList?.findIndex((country: IToVisit) => country.countryName === countryName);
    if(index > -1) return true;
    return false;
   }
   /*Remove from to visit list*/
   const removeFromToVisitList  = async(countryName: string) => {
    const index: any = toVisitList?.findIndex((country: IToVisit) => country.countryName === countryName);
    if(index < 0) return toast.error(`${countryName} not found in to visit list`);
    const removeRes: any = await countriesService.removeFromVisitById(toVisitList[index].id);
    if(!removeRes.success) return toast.error(removeRes.message || 'Can not remove from to visit list');
    toast.success(removeRes.message);
    getToVisitList();
   }

   /*handle on tab change*/
   useEffect(() => {
     if(tab === 'to-visit'){
         let filtrate: Array<ICountry> = [];
         countries.forEach((country: ICountry) => {
           if(toVisitList.findIndex((ctr: IToVisit) => ctr.countryName == country.name.common) > 0){
               filtrate.push(country);
           }
         });
         setCountries(filtrate);
     }
     else{
         getCountries();
     }
   },[tab])
    return(
        <Layout>
            <>
            <Toaster />
            <DashboardHeader 
            onSearchInputChanged={(query: string) => setQueryName(query)} 
            onSelectInputChanged={(query: string) => setQueryRegion(query)} />
            {!loading && 
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
                                    <div className={styles.iconContainer} onClick={() => removeFromToVisitList(country.name.common)}>
                                        <Image src="/icons/delete-icon.svg" width="100" height="70" alt="delete" />
                                    </div>
                                    <div 
                                    className={styles.iconContainer} 
                                    onClick={() => onAddToList(country.name.common)}
                                    style={{backgroundColor: (isAddedToVisitList(country.name.common)) ? '#14C704': ''}}
                                    >
                                        <Image src="/icons/check-icon.svg" width="100" height="40" alt="delete" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            }
            {loading && 
             <div className={styles.loadingWrapper}>
                 <Image className={styles.loader} src="/icons/loading.gif" alt="laoding" width="500" height="320" />
             </div>
            }
            </>
        </Layout>
    )
}
export default Dashboard;