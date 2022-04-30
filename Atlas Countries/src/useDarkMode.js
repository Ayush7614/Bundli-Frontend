import { useState ,useEffect} from 'react'

export default function useDarkMode() {
    const [theme, setTheme] = useState(localStorage.theme?localStorage.theme:'dark')
    
    
    useEffect(() => {
        console.log('useDarkMode ran!')
        localStorage.setItem('theme' , theme)
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            
            console.log('dark mode')
            document.documentElement.classList.add('dark')
          } else {
            
            console.log('light mode')
            document.documentElement.classList.remove('dark')
          }
    
      
    }, [theme])

    return {theme,setTheme}
    
  
}



