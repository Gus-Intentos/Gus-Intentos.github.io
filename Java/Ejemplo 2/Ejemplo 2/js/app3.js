//Variables
var  n;
//Capturo
n=parseFloat(prompt("Digite su calificacion"))
//Proceso
if(n>=3){
    document.write("Aprendiz con nota de "+n+" Fue APROBADO , Felicidades!!! <img src='img/voto-positivo.png' height='24px' ")
}
else{
    document.write("Aprendiz con nota de "+n+" Usted fue REPROBADO <img src='img/disgusto.png' height='24px>'" )
}