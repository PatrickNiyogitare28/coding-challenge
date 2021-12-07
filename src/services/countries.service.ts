/*Modify to add an appointment based service only*/
import axios from 'axios'
import { BASE_URL } from 'src/constants/base-url'
const { get } = axios

const getAllNameRegion = (endpoint: string) => get(`${BASE_URL}${endpoint}`,
  {
    headers: {
      "Content-type": "application/json",
    }
  }
)
  .then((res: any) => {
    return res.data
  })
  .catch((error: any) => {
    return error
  })

  
  export const  countriesService = {getAllNameRegion}