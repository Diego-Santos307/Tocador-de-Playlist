const songName = document.getElementById('song-name'); // Const dos nomes das musicas.
const bandName = document.getElementById('band-name'); // Const dos nomes das bandas.
const song = document.getElementById('audio'); // Const dos audios do álbum.
const cover = document.getElementById('cover'); // Const das img do álbum.
const play = document.getElementById('play'); // Const do play.

// criado uma variavel auxiliar, que irá dizer se está tocando ou não.
let isPlaying = true;

// criado uma funcão de repetição
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

// criado uma condicional
function playPauseDecider(){
    if(isPlaying === true){
        playSong();
    }
    else{
        pauseSong();
    }
}

// criado um Even, apatir do click
play.addEventListener('click', playPauseDecider);