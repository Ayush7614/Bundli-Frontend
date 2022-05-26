import React from "react"
import image from "../images/troll-face.svg"
import {BsFillSunFill,BsFillMoonStarsFill} from "react-icons/bs"
export default function Header(props) {

  return (
        <header className="header">
            <img src={image} alt=""></img>
            <h1>Memely</h1>
            <div className="right">
            {props.darkMode?<BsFillSunFill className="mode-icon" size = '2em' onClick={props.toggleDarkMode} />:<BsFillMoonStarsFill size = '2em' className="mode-icon" onClick={props.toggleDarkMode}/>}
            </div>

        </header>
    )
}
