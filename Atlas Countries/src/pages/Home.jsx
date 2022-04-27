import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Dropdown from '../components/Dropdown/Dropdown';
import Search from '../components/Search/Search';
import { getAllCountries } from './../api/api_countries';

export default function Home() {
    const [AllCountries, setAllCountries] = useState([])
    const [IsPending, setIsPending] = useState(true)
    const [isSearching, setIsSearching] = useState(false)
    

    const navigate = useNavigate()

    
    useEffect(() => {
        
        getAllCountries((isOk,data) => {
            if (!isOk){
                console.log('Failed To fetch data !');
                return
            }
            
            setAllCountries(data)
            setIsPending(false)
            
        })

    }, [])
  return (
    <div className='bg-light-Background dark:bg-dark-Background px-12 py-6 font-body min-h-screen'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>

            <Search setMatchData = {setAllCountries} setIsSearching={setIsSearching} />
            <Dropdown setcountriesState = {setAllCountries} setIsPending={setIsPending} />
            
            
            

        </div>
        {(IsPending || isSearching) && <p className='text-center text-lg text-gray-600 dark:text-dark-text font-semibold mt-10'>Loading ...</p>}
        {!(IsPending || isSearching) &&
        
            <div className='grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 sm:gap-x-4  lg:gap-x-10 2xl:gap-x-40 gap-y-20 mt-10 '>
                {
                    AllCountries.map((c,index) => {
                        // console.log(`index : ${index} ---> ${c.flags.png}`);
                        return(
                            <article onClick={() => navigate(`/countries/${c.name.common}`)} className='bg-white dark:bg-dark-100 shadow-md rounded overflow-hidden cursor-pointer transition-shadow hover:shadow-2xl'>
                            <div className='h-1/2'>
                                <img src={c.flags.png} alt="c-flag" className='w-full h-full'  />

                            </div>
                            
                            <div className='p-4'>
                                <h2 className='font-bold my-3 dark:text-dark-text'>{c.name.common}</h2>
                                <div className='flex flex-col text-sm text-dark-100'>
                                    <p className='font-semibold dark:text-dark-text'>Population : <span className='text-light-100'>{c.population}</span> </p>
                                    <p className='font-semibold dark:text-dark-text'>Region : <span className='text-light-100'>{c.region}</span></p>
                                    <p className='font-semibold dark:text-dark-text'>Capital : <span className='text-light-100'>{c.capital}</span> </p>
        
                                </div>
                                
                            </div>
                        
                        
                        </article>

                        )
                        

                    })
                }
               
            
           
            
            

            </div>
        }
        
       
        
    </div>

  )
}
