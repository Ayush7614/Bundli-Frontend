const music = document.querySelector('audio');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const img = document.querySelector('img');
const prev = document.getElementById('prev');
const play = document.getElementById('play');
const next = document.getElementById('next');

const songs = [
    {
        name: "music-1",
        title: "Abc",
        artist: "Cba",
    },
    {
        name: "music-2",
        title: "Def",
        artist: "Fed",
    },
    {
        name: "music-3",
        title: "Xyz",
        artist: "Zyx",
    },
]

let isPlaying = false; 
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
};

const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
};

play.addEventListener("click", () => {
    isPlaying ? pauseMusic() : playMusic();
});

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = `music/${songs.name}.mp3`;
    img.src = `images/${songs.name}.jpg`;
}

songIndex = 0;

const nextSong = () => {
    songIndex = (songIndex+1)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

const prevSong = () => {
    songIndex = ((songIndex-1)+songs.length)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

next.addEventListener('click',nextSong);
prev.addEventListener('click', prevSong);