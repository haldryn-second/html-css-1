function accionPlay() {
    if (!medio.paused && !medio.ended) {
        medio.pause();
        play.value = '\u25BA'; //\u25BA
        document.body.style.backgroundColor = '#EDF0F2';
    } else {
        medio.play();
        play.value = '||';
        document.body.style.backgroundColor = 'grey';
    }
}

function accionReiniciar() {
    medio.pause();
    medio.currentTime = 0;
    accionPlay();
}

function accionRetrasar() {
    medio.currentTime = medio.currentTime - 5;

}

function accionAdelantar() {
    medio.currentTime = medio.currentTime + 5;
}

function accionSilenciar() {
    if (medio.muted) {
        medio.muted = false;
    } else {
        medio.muted = true;
    }
}

function accionMasVolumen() {
    medio.volume = medio.volume + 0.1

}

function accionMenosVolumen() {
    medio.volume = medio.volume - 0.1
}

function iniciar() {

    medio = document.getElementById('medio');
    play = document.getElementById('play');
    reiniciar = document.getElementById('reiniciar');
    retrasar = document.getElementById('retrasar');
    adelantar = document.getElementById('adelantar');
    silenciar = document.getElementById('silenciar');

    play.addEventListener('click', accionPlay);
    reiniciar.addEventListener('click', accionReiniciar);
    retrasar.addEventListener('click', accionRetrasar);
    adelantar.addEventListener('click', accionAdelantar);
    silenciar.addEventListener('click', accionSilenciar);
    menosVolumen.addEventListener('click', accionMenosVolumen);
    masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);