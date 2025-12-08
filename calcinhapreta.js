const songName = document.getElementById('song-name'); // Const dos nomes das musicas.
const bandName = document.getElementById('band-name'); // Const dos nomes das bandas.
const song = document.getElementById('audio'); // Const dos audios do álbum.
const cover = document.getElementById('cover'); // Const das img do álbum.
const play = document.getElementById('play'); // Const do play.

let isPlaying = true;

function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = false;
}

function pauseSong(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = true;
}

function playPauseDecider(){
    if(isPlaying === true){
        playSong();
    }
    else{
        pauseSong();
    }
}

play.addEventListener('click', playPauseDecider);