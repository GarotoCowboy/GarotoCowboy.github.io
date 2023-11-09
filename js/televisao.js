var player = document.getElementById("video");
var index = 0
var ligada = true;
const videos = [
    "videos/batalhaLendaria.mp4",
    "videos/shrekphone.mp4",
    "videos/arvoreBugada.mp4",
    "videos/danca.mp4",
    "videos/espelhoMaligno.mp4",
    "videos/minecraft.mp4"
];


function play(){
document.getElementById("video").play();
}

function pausar(){
    document.getElementById("video").pause();
}

function aumentarVolume(){
    if(document.getElementById("video").volume < 1){
        document.getElementById("video").volume+=0.1;
    }
}

function diminuirVolume(){
    if(document.getElementById("video").volume>0){
        document.getElementById("video").volume-=0.1;

    }
}

function trocarCanalMais(){
    index++
    if(index>=videos.length){
        index = 0
    }
    document.getElementById("video").src = videos[index]
    play()
}

function trocarCanalMenos(){
    index--
    if(index>=videos.length){
        index = 0
    }
    document.getElementById("video").src = videos[index]
    play()
}

function ligar(){
    document.getElementById("video").style.opacity = 1;
}

function desligar(){
    document.getElementById("video").style.opacity = 0;
    document.getElementById("video").pause();
    document.getElementById("video").muted;
    document.getElementById("video").currentTime = 0;

}

