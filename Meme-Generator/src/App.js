import React from "react"
import Header from "./Components/Header"
import Meme from "./Components/Meme"
 export default function App(){

   
    const [darkMode,setDarkMode]=React.useState(true)
    function changeMode(){
        setDarkMode((prevMode)=>!prevMode)
        console.log(darkMode)
    }
    return(
        <div className={darkMode?" container darkmode":"container"}>
        <Header
        darkMode={darkMode}
        toggleDarkMode={changeMode}
        />
        <div className="main">
        <Meme 
         darkMode={darkMode}
         toggleDarkMode={changeMode}/>
        </div>
        </div>
    )
}