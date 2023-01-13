var d = document.getElementById("canvas");
var lienzo = d.getContext("2d");
estado = 0;

document.addEventListener("mousedown", empezarDibujo);
document.addEventListener("mouseup", terminarDibujo);
document.addEventListener("mousemove", dibujarLinea);


function empezarDibujo(evento){
    estado = 1;
    x = evento.layerX;
    y = evento.layerY;
    console.log(evento);
}


function terminarDibujo(evento){
   estado = 0;
   x=evento.layerX;
   y =  evento.layerY;
}


function  dibujarLinea(evento){
  if (estado==1)
  {
  linea("blue", x, y, evento.layerX, evento.layerY, lienzo);
  }
  x = evento.layerX;
  y = evento.layerY;
}

  
function linea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial-176, yinicial-138);
  lienzo.lineTo(xfinal-176, yfinal-138);
  lienzo.stroke();
  lienzo.closePath();
}
