var ctx = null,
    canvas = null;

function iniciar() {
    canvas = document.getElementById('Dibujo');
    ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(95, 70, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#58D3F7";
    ctx.fill();

    ctx.font = 'Bold 12px Tahoma';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.fillText('HTML', 95, 50);

    ctx.beginPath();
    ctx.moveTo(75, 52);
    ctx.lineTo(115, 52);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "orange";
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