//Funcion que suma dos numeros
function sumar(){

    var x,y,sumar

    x=parseFloat (document.getElementById("n1").value)
    y=parseFloat (document.getElementById("n2").value)

    sumar=x+y

    document.write("<p style=background-color:lightblue;text-align:center;font-size:60px;margin-top:6%;padding:210px;border-radius:12px;border:solid black;>",sumar," </p>")
}