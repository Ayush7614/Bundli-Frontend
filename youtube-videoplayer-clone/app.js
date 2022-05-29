const playPauseBtn = document.querySelector(".play-pause-btn")
const theatreBtn = document.querySelector(".theatre-btn")
const fullScreenBtn = document.querySelector(".fullscreen-btn")
const miniPlayerBtn = document.querySelector(".mini-player-btn")
const muteBtn = document.querySelector(".mute-btn")
const currentTimeElem = document.querySelector(".current-time")
const totalTimeElem = document.querySelector(".total-time")
const volumeSlider = document.querySelector(".volume-slider")
const video = document.querySelector("video")
const videoContainer = document.querySelector(".video-container")

//View modes
theatreBtn.addEventListener("click", toggleTheatre)
fullScreenBtn.addEventListener("click", toggleFullscreen)
miniPlayerBtn.addEventListener("click", toggleMiniplayer)

function toggleTheatre(){
    videoContainer.classList.toggle("theatre")
}
function toggleFullscreen(){
  if(document.fullscreenElement == null){
      videoContainer.requestFullscreen()
  }
  else{
      document.exitFullscreen()
  }

}
document.addEventListener("fullscreenchange", () =>{
    videoContainer.classList.toggle("full-screen",document.fullscreenElement)
})
function toggleMiniplayer(){
    if (videoContainer.classList.contains("mini-player")) {
        document.exitPictureInPicture()
    }
    else {
        video.requestPictureInPicture()
    }

}
video.addEventListener("enterpictureinpicture", () => {
    videoContainer.classList.add("mini-player")
})
video.removeEventListener("leavepictureinpicture", () => {
    videoContainer.classList.remove("mini-player")
}) 
//Keyboard functionality
document.addEventListener("keydown", e =>{
    const tagName = document.activeElement.tagName.toLowerCase()

    if (tagName === "input") return
    switch(e.key.toLowerCase()){
        case " ":
            if (tagName === "button") return
        case "k":
            togglePlay()
            break
        case "f":
            toggleFullscreen()
            break
        case "t":
            toggleTheatre()
            break
        case "i":
            toggleMiniplayer()
            break
        case "m":
            toggleMute()
            break  
        case "arrowleft":
        case "j":
            skip(-5)
            break
        case "arrowright":
        case "l":
            skip(5)
            break      
    }
})
playPauseBtn.addEventListener('click', togglePlay)//Play/pause video on clicking button
video.addEventListener('click', togglePlay)//Play/pause video on clicking video 
function togglePlay() {
    video.paused ? video.play() : video.pause()
}
//Remove pause icon when playing video
video.addEventListener("play", () =>{
    videoContainer.classList.remove("paused")
})
//Add pause icon when video is paused
video.addEventListener("pause", () => {
    videoContainer.classList.add("paused")
})

// Volume
muteBtn.addEventListener("click", toggleMute)
volumeSlider.addEventListener("input", e => {
    video.volume = e.target.value
    video.muted = e.target.value === 0
})

function toggleMute() {
    video.muted = !video.muted
}

video.addEventListener("volumechange", () => {
    volumeSlider.value = video.volume
    let volumeLevel
    if (video.muted || video.volume === 0) {
        volumeSlider.value = 0
        volumeLevel = "muted"
    } else if (video.volume >= 0.5) {
        volumeLevel = "high"
    } else {
        volumeLevel = "low"
    }

    videoContainer.dataset.volumeLevel = volumeLevel
})

// Duration
video.addEventListener("loadeddata", () => {
    totalTimeElem.textContent = formatDuration(video.duration)
})

video.addEventListener("timeupdate", () => {
    currentTimeElem.textContent = formatDuration(video.currentTime)
    const percent = video.currentTime / video.duration
    timelineContainer.style.setProperty("--progress-position", percent)
})

const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
})
function formatDuration(time) {
    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60) % 60
    const hours = Math.floor(time / 3600)
    if (hours === 0) {
        return `${minutes}:${leadingZeroFormatter.format(seconds)}`
    } else {
        return `${hours}:${leadingZeroFormatter.format(
            minutes
        )}:${leadingZeroFormatter.format(seconds)}`
    }
}

function skip(duration) {
    video.currentTime += duration
}