var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
document.addEventListener("keydown", dibujarTeclado);



  var d = document.getElementById("canvas");
  var lienzo = d.getContext("2d");
  var x = 150;
  var y = 150;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}


function dibujarTeclado(evento)
{
  console.log(evento);
  var colorcito= "blue";
  var movimiento= 1;

 switch (evento.keyCode)
 {
   case teclas.UP:
    dibujarLinea(colorcito, x, y, x, y - movimiento, lienzo);
    y = y - movimiento;
   break;

   case teclas.DOWN:
   dibujarLinea(colorcito, x, y, x, y + movimiento, lienzo);
   y = y + movimiento;
     break;

     case teclas.LEFT:
     dibujarLinea(colorcito, x, y, x - movimiento, y, lienzo);
     x = x - movimiento;
     break;
     case teclas.RIGHT:
     dibujarLinea(colorcito, x, y, x + movimiento, y, lienzo);
     x = x + movimiento;
      break;

 }
}
