//Aplicacion
var n;
//Capturar
n=parseInt(prompt("Digite un Numero Entero"))
//Proceso
if(n>=10 & n<=100){
    document.write("El numero " + n+" Se encuentra entre 10 - 100 <img src='img/bloques-numericos.png' height='24px'")
}
else{
    document.write( "El numero " + n+" No se encuentra entre 10 - 100  <img src='img/numeros.png' height='24px'>")
}
