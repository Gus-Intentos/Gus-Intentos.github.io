var Peso,Estatura,Imc

Peso=parseFloat(prompt("                                              Digite Su Peso (Kg)"));
Estatura=parseFloat(prompt("                                         Digite Su Estatura (Cm)"));

Imc=Peso/(Estatura*Estatura);

if(Imc<18.5){
    document.write ( " <img src='img/desnutricion (2).png' > <p style='color:lightcyan;'>Usted tiene un peso Insuficiente</p>" )
}else if(Imc>=18.5 && Imc<=24.9){
    document.write( "<img src='img/sonriendo.png'> <p style='color:lightgreen;'>Usted tiene un Peso Normal</p>" )
}else if(Imc>=25 && Imc<=29.9){
    document.write( "<img src='imgsuspicaz.png'> <p style='color:yellow;'>Usted tiene Sobrepeso - Riesgo Aumentando</p>" )
}else if(Imc>=30 && Imc<=34.9){
    document.write( "<img src='img/nina.png'><p style='color:#630606;'>Usted Tiene Obvesidad Grado I - Riesgo Grave</p>" )
}else if(Imc>=35 && Imc<=39.9){
    document.write( "<img src='img/nina.png'><p style='color:#630606;'>Usted Tiene Obvesidad Grado II - Riego Muy Grave")
}else if(Imc>=40 && Imc<=49.9){
    document.write( "<img src='img/nina.png'><p style='color:#630606;'>Usted Tiene Obvesidad Grado III - Riego Severo")
}else if (Imc>=50){
    document.write( "<img src='img/nina.png'><p style='color:#630606;'>Usted Tiene Obvesidad Grado VI - Riesgo Muy Severo")
}else {
    document.write(" Digite numeros Reales Sobre su Peso y Estatura <br><a style='text-decoration:none; color:#BE8ABF'; href='index.html'> -Rehacer- </a>")
}


