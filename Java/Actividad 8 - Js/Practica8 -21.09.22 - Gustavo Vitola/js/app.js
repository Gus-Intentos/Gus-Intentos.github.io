function ValidaCampos(){
    var Formulario;
    Formulario=document.formUser;
    if (Formulario.user.value==""){
        document.getElementById("ValideUser").innerHTML="Necesita escribir el usuario para continuar con el"
        Formulario.user.focus();
        return false;
    }else{
            document.getElementById("ValideUser").innerHTML="";
        }


        if (Formulario.Email.value==""){
        document.getElementById("Valide_Email").innerHTML="Oh! Se te olvido escribir tu correo electronico";
            Formulario.email.focus();
            return false;
    }else{
        document.getElementById("Valide_Email").innerHTML=""
    }


    if (Formulario.Password.value==""){
        document.getElementById("Valide_Password").innerHTML="Se te olvido colocar tu contraseña , Colocala y/o intenta nuevamente";
            Formulario.Password.focus();
            return false;
    }else{
        document.getElementById("Valide_Password").innerHTML=""
    }


    if (Formulario.PasswordC.value==""){
        document.getElementById("validaPasswordC").innerHTML="Escribe la contraseña otra vez, Eres bobo o peinas calvos?";
            Formulario.Password.focus();
            return false;
    }else{
        document.getElementById("validaPasswordC").innerHTML="";
       } 

       Formulario.submit();
}
    

