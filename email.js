//CODIGO DE VALIDAÇAO DO EMAIL
//---------------------------------------------------
function checaremail(){
    if(document.forms[0].email.value == "" ||
      document.forms[0].email.value.indexOf('@') == -1 ||
      document.forms[0].email.value.indexOf('.') == -1  ){  
        alert("Por favor, informar um E-mail válido");
        return false;
     
    }else{
        alert("E-mail informado");
        alert("E-mail informado com sucesso");
        document.getElementeById('email').innerHTML=document.forms[0].email.value;
   
    }
}



//---------------------------------------------------

//CODIGO DE VERIFICAÇAO DO EMAIL DIGITADO

//---------------------------------------------------



//---------------------------------------------------