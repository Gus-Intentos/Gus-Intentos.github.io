var a , b , i 
   a=parseInt(prompt("Digite un numero inicial")) 
   b=parseInt(prompt("Digite el numero para finalizar"))
   i=a
   while(i<=b ){
    if(i%2==0){
   document.write(i+"<br>")
    }
   i=i+1
}