var ctx = null,
    canva = null;

function iniciar() {
    canva = document.getElementById('Dibujo');
    ctx = canva.getContext('2d');

    ctx.beginPath();
    ctx.arc(95, 70, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#58D3F7";
    ctx.fill();

    ctx.font = 'Bold 16px Tahoma';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.fillText('HTML', 95, 50);

    ctx.beginPath();
    ctx.moveTo(75, 52);
    ctx.lineTo(115, 52);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();


    ctx.fillStyle = "white";
    ctx.fillRect(75, 55, 40, 40);
    ctx.lineWidth = 5;

    var img = new Image();
    img.src = 'img/5.png';
    img.onload = function() {
        ctx.drawImage(img, 83, 60);
    }


}
window.addEventListener("load", iniciar, false);


var lienzo = null,
    canva = null;
var x = 50,
    y = 50;
var lastPress = null;

const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;
const KEY_P = 80;
var pause = true;


function animacion() {
    canvas = document.getElementById('animacion');
    lienzo = canvas.getContext('2d');
    run();

}

function run() {
    requestAnimationFrame(run);
    accionesJuego();
    pintarLienzo(lienzo);
}

function accionesJuego() {
    if (!pause) {
        if (lastPress == KEY_RIGHT) {
            x += 5;
        } else if (lastPress == KEY_LEFT) {
            x -= 5;
        } else if (lastPress == KEY_UP) {
            y -= 5;
        } else if (lastPress == KEY_DOWN) {
            y += 5;
        }

        if (x >= canvas.width) {
            x = 0;
        } else if (x < 0) {
            x = canvas.width
        } else if (y >= canvas.height) {
            y = 0;
        } else if (y < 0) {
            y = canvas.height;
        }
    }

    if (lastPress == KEY_P) {
        pause = !pause;
        lastPress = null;
    }
}

function pintarLienzo(lienzo) {
    lienzo.fillStyle = "#F7F9FA";
    lienzo.fillRect(0, 0, canvas.width, canvas.height);
    lienzo.fillStyle = '#0f0';
    lienzo.fillRect(x, y, 10, 10);

    if (pause) {
        lienzo.font = 'Bold 20px Tahoma';
        lienzo.textAlign = 'center';
        lienzo.fillStyle = 'red';
        lienzo.fillText('PAUSE', 300, 75);
        lienzo.font = '16px Tahoma';
        lienzo.fillText('(pulse "p" para comenzar o seguir jugando)', 300, 100);
    }
}

document.addEventListener('keydown', function(evt) {
        lastPress = evt.keyCode;
    },
    false
);

window.addEventListener("load", animacion, false);