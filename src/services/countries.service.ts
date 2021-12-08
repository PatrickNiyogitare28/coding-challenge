/*Modify to add an appointment based service only*/
import axios from 'axios'
import { IAddToVisitDto } from 'pages/api/countries/toVisit/add'
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

  
const addToVisit = async (data: IAddToVisitDto) => {
  try {
      let response: any = await fetch('http://localhost:3000/api/countries/toVisit/add', {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).then((response) => response.json())
    .then((response) => {
      const {success, data, message} = response;
      if(success) return {success, data};
      return {success, message};
      
    });
    return response;
  } catch (error: any) {
    return {success: false, message: 'Failed to to visit list'}
  }
};

const getToVisitByUserId = async (pid: string) => {
  try {
      let response: any = await fetch(`http://localhost:3000/api/countries/toVisit/${pid}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }).then((response) => response.json())
    .then((response) => {
      const {success, data, message} = response;
      if(success) return {success, data};
      return {success, message};
      
    });
    return response;
  } catch (error: any) {
    return {success: false, message: 'Failed to get to visit list'}
  }
};
  
  export const  countriesService = {getAllNameRegion, addToVisit, getToVisitByUserId}