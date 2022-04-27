import React , {useState} from 'react'
import { getCountriesByRegion } from '../../api/api_countries';

export default function Dropdown({setcountriesState,setIsPending}) {
    const [ShowRegion, setShowRegion] = useState(false)
    const FilterCountriesByRegion = (region) =>{
        
        setIsPending(true)
        
        getCountriesByRegion(region,(isOk,data) => {
            if(!isOk){
                console.log('Failed To fetch data !');
                return

            }
            setcountriesState(data)
            setIsPending(false)
            setShowRegion(false)
        })

    }
    return (
        <div className='w-max  shadow-md px-5 py-3 rounded cursor-pointer relative dark:bg-dark-100 dark:text-dark-text' onClick={() => setShowRegion(prevState => !prevState)}>
                    <div className='flex items-center'>
                        <span className='font-semibold text-sm'>Filter by Region</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>

                    </div>
                    
                    <div className={`font-medium dark:bg-dark-100 absolute transition-all rounded shadow-md px-5 py-3 bg-white w-full left-0 mt-4 ${ShowRegion ? 'scale-100': 'scale-0'}`}>
                        <p onClick={() => FilterCountriesByRegion('Africa')} className='text-sm mb-2 hover:font-semibold'>Africa</p>
                        <p onClick={() => FilterCountriesByRegion('America')} className='text-sm mb-2 hover:font-semibold'>America</p>
                        <p onClick={() => FilterCountriesByRegion('Asia')} className='text-sm mb-2 hover:font-semibold'>Asia</p>
                        <p onClick={() => FilterCountriesByRegion('Europe')} className='text-sm mb-2 hover:font-semibold'>Europe</p>
                        <p onClick={() => FilterCountriesByRegion('Oceania')} className='text-sm hover:font-semibold'>Oceania</p>
                    </div>
            

        </div>
  )
}
