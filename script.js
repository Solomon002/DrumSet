// play sound on click

var clapSound = document.getElementById('clapSound');

 function playAudio1() {
   clapSound.play();
}

var hihatSound = document.getElementById('hihatSound');

function playAudio2() {
  hihatSound.play();
}  

var rideSound = document.getElementById('rideSound');

function playAudio3() {
   rideSound.play();
}

var snareSound = document.getElementById('snareSound');

function playAudio4() {
  snareSound.play();
}

var tomSound = document.getElementById('tomSound');

function playAudio5() {
  tomSound.play();
}

var openhatSound = document.getElementById('openhatSound');

function playAudio6() {
   openhatSound.play();
}

var tinkSound = document.getElementById('tinkSound');

function playAudio7() {
  tinkSound.play();
}

var kickSound = document.getElementById('kickSound');

function playAudio8() {
  kickSound.play();
}

var boomSound = document.getElementById('boomSound');

function playAudio9() {
  boomSound.play();
}


// Playy sound with keys

var bodyEvent = document.body;

bodyEvent.addEventListener('keydown', function(e){
    var keyCode = e.keyCode;
    if(keyCode === 65){
        clapSound.play();
    }
    else if(keyCode === 83){
        hihatSound.play();
    }
    else if(keyCode === 68){
        rideSound.play();
    }
    else if(keyCode === 70){
        snareSound.play();
    }
    else if(keyCode === 71){
        tomSound.play();
    }
    else if(keyCode === 72){
        openhatSound.play();
    }
    else if(keyCode === 74){
        tinkSound.play();
    }
    else if(keyCode === 75){
        kickSound.play();
    }
    else if(keyCode === 76){
        boomSound.play();
    }    
});