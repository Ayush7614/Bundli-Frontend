import React,{useState,useEffect} from 'react'
import { useParams , useNavigate } from 'react-router-dom'
import { getCountryByName } from '../api/api_countries'

export default function Country_Details() {
    const {name} = useParams()
    const [country, setCountry] = useState([])
    const [IsPending, setIsPending] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        
        getCountryByName(name,(isOk,data) => {
            if (!isOk){
                console.log('Failed To fetch data !');
                console.log(data);
                return
            }
            
            setCountry(data)
            setIsPending(false)
            
        })

    }, [name])
  return (
    
    
    <div className='dark:bg-dark-Background min-h-screen '>
        
        <div className='p-10 dark:bg-dark-Background w-full'>
            <button onClick={() => {navigate('/')}} className='flex items-center px-6 py-1  dark:bg-dark-100 dark:text-dark-text shadow-buttonShadow rounded-md'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 dark:text-dark-text mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back
            </button>

        </div>
        
        {IsPending && <p className='text-center text-lg text-gray-600 dark:text-dark-text font-semibold mt-10'>Loading ...</p>}
        {!IsPending &&
            
            country.map(c =>{
                
                return(
                    <div className='grid px-10 sm:grid-cols-2 gap-10  '>
                        <img src={`${c.flags.png}`} alt="c_flag" className='w-full md:w-4/5 lg:w-2/3' />
                        
                        <div>
                            <h2 className='font-bold text-2xl my-4 dark:text-dark-text'>{c.name.common}</h2>
                            <div className='grid md:grid-cols-2 '>
                                <div>
                                    <p className='text-sm font-semibold dark:text-dark-text'>Native Name : <span className='text-light-100'>{Object.values(c.name.nativeName)[0].official}</span></p>
                                    <p className='text-sm font-semibold dark:text-dark-text' >Population : <span className='text-light-100'>{c.population}</span> </p>
                                    <p className='text-sm font-semibold dark:text-dark-text'>Region : <span className='text-light-100'>{c.region}</span></p>
                                    <p className='text-sm font-semibold dark:text-dark-text'>Sub Region : <span className='text-light-100'>{c.subregion}</span></p>
                                    <p className='text-sm font-semibold dark:text-dark-text'>Capital : <span className='text-light-100'>{c.capital}</span> </p>

                                </div>

                                    

                                <div className='my-6 md:my-0'>
                                    <p className='text-sm font-semibold dark:text-dark-text' >Top Level Domain : <span className='text-light-100'>.{c.cca2}</span> </p>
                                    <p className='text-sm font-semibold dark:text-dark-text'>Currencies : <span className='text-light-100'>{Object.keys(c.currencies).join('')}</span> </p>
                                    <p className='text-sm font-semibold dark:text-dark-text'>Languages : <span className='text-light-100'>{Object.values(c.languages).join(',')}</span> </p>

                                </div>
                                
                                


                                
                            </div>

                            <div className='mt-10'>
                                <p className='text-sm font-semibold dark:text-dark-text'>Border Countries : 
                                    <div className='grid grid-cols-3 gap-3 mt-4'>
                                        {
                                            c.borders.map(b => {
                                                return(
                                                    
                                                    <span className='px-4 dark:bg-dark-100 dark:text-dark-text  font-normal py-1 text-center shadow-buttonShadow text-xs rounded mx-2'>{b}</span>
    
    
                                                    
    
    
                                                )
                                            })

                                        }
                                            

                                    </div>
                                    
                                 </p>
                            </div>
                        </div>

                    </div>
                    

                )
            })
            
        
        }
        
        
    </div>
  )
}
