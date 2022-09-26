//Variables
var  ingresos,gastos;
//Capturo
ingresos=parseFloat(prompt("Digite su Valor De Ingresos"))
gastos=parseFloat(prompt("Digite su Valor De Gastos"))
//Proceso
if(ingresos>gastos){
    document.write("FELICIDADES , Usted ha tenido Ganancias")
}
else{
    document.write("Lo sentimos... Usted ha estado teniendo Perdidas")
}