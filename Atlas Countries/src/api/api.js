import axios from 'axios'


export const getAxiosInstance = ()=>{
    return axios.create({
    baseURL: 'https://restcountries.com/v3.1/',
    
    });
}