var Op,Num1,Num2,Calculo;

Op=parseInt(prompt
("Opciones-Menu                                                                             1.Sumar                                                                         2.Restar                                                                        3.Multiplicacion                                                                4.Division"))
switch (Op) {
    case 1:
        Num1=parseInt(prompt("Digite Un Numero a Sumar"))
        Num2=parseInt(prompt("Digite Un Segundo Numero A Sumar"))
        Calculo=Num1+Num2;
        document.write("El resultado de la suma de "+Num1+" + "+Num2+" Es " +Calculo)
        break;
        case 2:
            Num1=parseInt(prompt("Digite Un Numero a Restar"))
            Num2=parseInt(prompt("Digite Un Segundo Numero A Restar"))
            Calculo=Num1-Num2;
            document.write("El resultado de la resta de "+Num1+" - "+Num2+" Es " +Calculo)
        
        break;
        case 3:
            Num1=parseInt(prompt("Digite Un Numero a Multiplicar"))
            Num2=parseInt(prompt("Digite Un Segundo Numero A Multiplicar"))
            Calculo=Num1*Num2;
            document.write("El resultado de la Multiplicacion de "+Num1+" * "+Num2+" Es " +Calculo)
        
        break;
        case 4:
            Num1=parsefloat(prompt("Digite Un Numero a Dividir"))
            Num2=parseFloat(prompt("Digite Un Segundo Numero A Dividir"))
            Calculo=Num1/Num2;
            document.write("El resultado de la Division de "+Num1+" / "+Num2+" Es " +Calculo)
        
        break;

    default:
        document.write("!Elija una Opcion del Menu!")
        break;
}