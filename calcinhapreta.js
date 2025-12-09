const songName = document.getElementById('song-name'); // Const dos nomes das musicas.
const bandName = document.getElementById('band-name'); // Const dos nomes das bandas.
const song = document.getElementById('audio'); // Const dos audios do álbum.
const cover = document.getElementById('cover'); // Const das img do álbum.
const play = document.getElementById('play'); // Const do play.

// criado uma variavel auxiliar, que irá dizer se está tocando ou não.
let isPlaying = true;

// criadas variaveis para atulização constante dos nomes das musicas, bandas, img e som.
const AEncruzilhada = {
    songName: 'A Encruzilhada',
    artist: 'Calcinha Preta',
    File: 'A Encruzilhada'
}

const AmorDividido = {
    songName: 'Amor Dividido',
    artistist: 'Calcinha Preta',
    File: 'Amor Dividido'
}

const BabyDoll = {
    songName: 'Baby Doll',
    artist: 'Calcinha Preta',
    File: 'Baby Doll'
}

const FaçoChover = {
    songName: 'Faço Chover',
    artist: 'Calcinha Preta',
    File: 'Faço Chover'
}

const FilmeseHistórias = {
    songName: 'Filmes e Histórias',
    artist: 'Calcinha Preta',
    File: 'Filmes e Histórias'
}

const LoucaPorTi = {
    songName: 'Louca Por Ti',
    artist: 'Calcinha Preta',
    File: 'Louca Por Ti'
}

const Magica = {
    songName: 'Magica',
    artist: 'Calcinha Preta',
    File: 'Magica'
}

const Paulinha = {
    songName: 'Paulinha',
    artist: 'Calcinha Preta',
    File: 'Paulinha'
}

const SemExplicação = {
    songName: 'Sem Explicação',
    artist: 'Calcinha Preta',
    File: 'Sem Explicação'
}

const TemMaisAlguém = {
    songName: 'Tem Mais Alguém',
    artist: 'Calcinha Preta',
    File: 'Tem Mais Alguém'
}

const VocêNãoValeNada = {
    songName: 'Você Não Vale Nada',
    artist: 'Calcinha Preta',
    File: 'Você Não Vale Nada'
}


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

// Mais uma função para adicionar a img, song, nome da banda e musica, conforme for passando.
function initializeSong(){

}


// criado um Even, apatir do click
initializeSong();

play.addEventListener('click', playPauseDecider);