//Aplicacion
var temp;
//captura de datos
temp=parseFloat(prompt("Ingrese su temperatura en °C"))
//Proceso
if (temp>=38) {
document.write("  La temperatura " + temp + " Es muy elevada - ( Tienes Fiebre ) <img src='img/temperatura.png' height='30px'>" )
} else { 
document.write(" La temperatura  " +  temp +  " Es normal indica que no tienes fiebre <img src='img/temperatura (1).png' height='30px'>" )
}