import React, { useState,useEffect } from 'react'
import { getCountryBySearch } from '../../api/api_countries';
import useDebounce from './useDebounce';

export default function Search({setMatchData,setIsSearching}) {
    const [inputText, SetinputText] = useState('')
    
    
    const debouncedSearchTerm = useDebounce(inputText, 1000)
    useEffect(
        () => {
            if(!inputText){
                return
            }
            console.log('salam!');
            // Make sure we have a value (user has entered something in input)
            if (debouncedSearchTerm) {
                // Set isSearching state
                setIsSearching(true);
                // Fire off our API call
                
                getCountryBySearch(inputText,(isOk,data)=>{
                    if(!isOk){
                        console.log('Failed To fetch data !');
                        return
                    }
                    setIsSearching(false);
                    // setShowResults(true)
                    setMatchData(data);
                })
            } else {
                // setShowResults(false)
                return
            }
        },
        
        [debouncedSearchTerm]
    );
  return (
    <div className='relative w-full mb-3 md:mb-0 md:w-1/2 lg:w-1/3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute stroke-light-100 fill-white dark:fill-dark-100 top-3 left-2 "  viewBox="0 0 24 24" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input onChange={(e) => SetinputText(e.target.value)} className='shadow-md px-10 py-3 text-sm w-full dark:bg-dark-100 dark:placeholder-dark-text dark:text-dark-text placeholder-light-100 rounded outline-none' type="text" placeholder='Search for a countries ...' />
                

    </div>
  )
}
