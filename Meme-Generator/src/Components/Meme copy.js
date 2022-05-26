// import React from "react"
// import Slider from "./Slider";

// export default function Meme() {

//     // state for managing meme
//     const [meme, setMeme] = React.useState({
//         topText: "",
//         bottomText: "",
//         randomImg: "https://i.imgflip.com/30b1gx.jpg"
//     })
//     // state for managing img data
//     const [memeImgData, setMemeImgData] = React.useState([]);

    
//     const DEFAULT_OPTIONS =
//         [
//             {
//                 label: "Top: ",
//                 name: "top",
//                 value: "",
//                 range: {
//                     min: 0,
//                     max: 100
//                 },
//                 units: "%"
//             },
//             {
//                 label: "Left: ",
//                 name: "left",
//                 value: "",
//                 range: {
//                     min: 0,
//                     max: 100
//                 },
//                 units: "%"
//             },
//             {
//                 label: "Right: ",
//                 name: "right",
//                 value: "",
//                 range: {
//                     min: 0,
//                     max: 100
//                 },
//                 units: "%"
//             },
//             {
//                 label: "Bottom: ",
//                 name: "bottom",
//                 value: "",
//                 range: {
//                     min: 0,
//                     max: 100
//                 },
//                 units: "%"
//             },
//             {
//                 label: "Font-Size: ",
//                 name: "font-size",
//                 value: 18,
//                 range: {
//                     min: 0,
//                     max: 200
//                 },
//                 units: "px"
//             },

//         ];
       
//         const [sliderData,setSliderData]=React.useState(DEFAULT_OPTIONS);
        
//     const sliderOption = DEFAULT_OPTIONS.map((eachSlider) => {
        
//         return (
//             <Slider
//                 key={eachSlider.label}
//                 label={eachSlider.label}
//                 name={eachSlider.name}
//                 className={eachSlider.name}
//                 value={eachSlider.value}
//                 min={eachSlider.range.min}
//                 max={eachSlider.range.max}
//                 onChange={handleSliderChange} 
                
//             />
//         )
//     })

//     function handleSliderChange(e) {
//        const {name,value}=e.target
//        console.log(name)
//         setSliderData((prevSliderData) => {
//             console.log(e.target.value)
//             return (
//                 prevSliderData.map((prevData) => {
//                     console.log(prevData)
//                     if(name==prevData.name){
//                         console.log(prevData.name)
//                     return ({ ...prevData, value:value })
//                 }
//                     else{
//                         console.log(prevData.label)
//                         return(prevData)
//                     }
//                 })
//             )

//         })


//     }

//     // useEffect for getting data from Api

//     React.useEffect(() => {
//         fetch(" https://api.imgflip.com/get_memes")
//             .then(res => res.json())
//             .then(apiData => setMemeImgData(apiData.data.memes))
//     }, [])








//     function getImage() {
//         const dataArr = memeImgData
//         const randomNo = Math.floor(Math.random() * dataArr.length);
//         const imgUrl = dataArr[randomNo].url;
//         setMeme((prev) => {
//             return ({ ...prev, randomImg: imgUrl })
//         })
//     }

//     function handleChange(event) {
//         const { name, value } = event.target;
//         setMeme((prevData) => {
//             return ({
//                 ...prevData, [name]: value
//             })
//         })
//     }
//     return (
//         <main>
//             <div className="form">
//                 <input type="text"
//                     className="input input-1"
//                     placeholder="Enter top line"
//                     name="topText"
//                     value={meme.topText}
//                     onChange={handleChange}
//                 />
//                 <input type="text"
//                     className="input input-2"
//                     placeholder="Enter bottom line"
//                     name="bottomText"
//                     value={meme.bottomText}
//                     onChange={handleChange}
//                 />
//                 <button className="btn" onClick={getImage}>Get a new meme image 🖼️</button>




//             </div>
//             <div className="sys-container">

//                 <div className="meme-img-container">
//                     <h2 className="top-text meme-text">{meme.topText}</h2>
//                     <h2 className="bottom-text meme-text">{meme.bottomText}</h2>
//                     <img src={meme.randomImg} alt="" className="meme-img" />
//                 </div>
//                 <div className="slider-container">
//                     {sliderOption}
//                 </div>

//             </div>
//         </main>
//     )
// }