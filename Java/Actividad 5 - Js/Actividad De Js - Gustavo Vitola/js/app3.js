var a , b 
a=parseInt(prompt("Digite un Numero Entero Inicial"))
b=parseInt(prompt("Digite el numero al cual desea que finalice la cadena"))

for (i=a ; i<=b ; i++)
if (i%2==0){
    document.write(i)
}
else{
    document.write("<br>")
}
