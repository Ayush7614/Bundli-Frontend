import { getAxiosInstance } from "./api"


export const getAllCountries = (callback)=>{
    getAxiosInstance().get('all')
    .then(response => {
        const data = response.data
        console.log(data)
        callback(true,data)
    })
    .catch(error =>{
        console.log(error);
        callback(false,error)
    })
}

export const getCountryByName = (name,callback)=>{
    getAxiosInstance().get(`name/${name}?fullText=true`)
    .then(response => {
        const data = response.data
        console.log(data)
        callback(true,data)
    })
    .catch(error =>{
        console.log(error);
        callback(false,error)
    })
}

export const getCountriesByRegion = (region,callback)=>{
    getAxiosInstance().get(`region/${region}`)
    .then(response => {
        const data = response.data
        console.log(data)
        callback(true,data)
    })
    .catch(error =>{
        console.log(error);
        callback(false,error)
    })
}


export const getCountryBySearch = (name,callback)=>{
    getAxiosInstance().get(`name/${name}`)
    .then(response => {
        const data = response.data
        console.log(data)
        callback(true,data)
    })
    .catch(error =>{
        console.log(error);
        callback(false,error)
    })
}