import {Routes,Route,HashRouter} from 'react-router-dom'
import Home from './pages/Home';
import Country_Details from './pages/Country_Details';
import useDarkMode from './useDarkMode';


function App() {
  const {theme,setTheme} = useDarkMode()
  
  return (
    <>
      <div className="font-body flex items-center justify-between px-3 md:px-12 py-6 shadow-md dark:bg-dark-100 dark:text-dark-text">
      <h3 className="font-bold text-base md:text-xl">
        Where in the world? | Made with ❤️ by Abhishek
      </h3>
      
      <div className="flex items-center" onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}>
        {
          theme ==='light' ? 
            <>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <span className="font-semibold ml-2 cursor-pointer">Dark Mode</span>
            </>
            
            :
            <>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="font-semibold ml-2 cursor-pointer text-sm md:text-base">Light Mode</span>

            </>
            
        }
        
        
        
      </div>

    </div>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/countries/:name' element={<Country_Details/>} />
      </Routes>
    </HashRouter>
    </>
    
  
    
    
  );
}

export default App;
