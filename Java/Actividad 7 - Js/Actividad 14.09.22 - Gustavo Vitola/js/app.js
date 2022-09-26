//aplicamos la funcion que aveces no sirve :,v
function sumar(){
var x,y,sumar
x=document.getElementById("n1").value
y=document.getElementById("n2").value
sumar= parseInt(x) + parseInt(y)
document.getElementById("resultado_suma").innerHTML = sumar
}
//funcion para restar
function restar(){
    var x,y,restar
    x=document.getElementById("n1").value
    y=document.getElementById("n2").value
    restar= parseInt(x) - parseInt(y)
    document.getElementById("resultado_resta").innerHTML = restar
    }
//funcion para multiplicar
function Multiplicar(){
    var x,y,Multiplicar
    x=document.getElementById("n1").value
    y=document.getElementById("n2").value
    Multiplicar= parseInt(x) * parseInt(y)
    document.getElementById("resultado_Multiplicar").innerHTML = Multiplicar
    }
//Funcion para dividir
function Division(){
    var x,y,Division
    x=document.getElementById("n1").value
    y=document.getElementById("n2").value
    Division= parseInt(x) / parseInt(y)
    document.getElementById("resultado_Division").innerHTML = Division
    }