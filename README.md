# validacao
 
 # Validação de CPF
Este projeto fornece uma interface simples para validar um número de CPF (Cadastro de Pessoas Físicas) usando HTML, CSS e JavaScript. A página web contém um formulário que permite ao usuário inserir um CPF e enviar o formulário para validação. A validação em si é realizada através de um arquivo JavaScript externo.

Estrutura do Projeto
O projeto consiste nos seguintes arquivos:

index.html: O arquivo HTML que define a estrutura da página.
main.css: A folha de estilo CSS para estilizar a página.
cpf.js: O arquivo JavaScript que contém a lógica para validação do CPF.

index.html
O arquivo index.html define a estrutura da página da web. Abaixo está a descrição dos principais componentes:
!DOCTYPE html
html
head
    meta charset='utf-8'>
    meta http-equiv='X-UA-Compatible' content='IE=edge'
    title>Validação de CPF/title
    meta name='viewport' content='width=device-width, initial-scale=1'
    link rel='stylesheet' type='text/css' media='screen' href='main.css'
    script src='cpf.js' /script
/head
body
    form action="" id="cpfForm"
        label for="">CPF:/label
        input type="text" id="cpf" name="cpf" maxlength="14"
        button type="submit">validar/button
    /form
    p id="message"/p
 
    script src='cpf.js' /script
/body
/html

Descrição dos Elementos:
!DOCTYPE html: Declara que o documento é um HTML5.
html: O elemento raiz do documento HTML.
head: Contém metadados sobre o documento.
meta charset='utf-8'>: Define a codificação de caracteres como UTF-8.
meta http-equiv='X-UA-Compatible' content='IE=edge'>: Garante que o documento seja exibido no modo mais recente disponível no Internet Explorer.
title: Define o título da página exibido na aba do navegador.
meta name='viewport' content='width=device-width, initial-scale=1'>: Configura a viewport para dispositivos móveis, tornando a página responsiva.
link rel='stylesheet' type='text/css' media='screen' href='main.css'>: Inclui uma folha de estilo externa para estilizar a página.
script src='cpf.js'/script: Inclui um arquivo JavaScript externo para adicionar funcionalidades.
body>: Contém o conteúdo visível da página.
form action="" id="cpfForm">: Define um formulário para a entrada do CPF, com o id cpfForm. O atributo action está vazio, o que significa que o formulário não será enviado para um servidor.
label for="">CPF:/label: Rótulo para o campo de entrada. O atributo for está vazio, então não está associado a um campo específico.
input type="text" id="cpf" name="cpf" maxlength="14">: Campo de entrada para o CPF. O atributo maxlength limita a entrada a 14 caracteres.
button type="submit"validar/button: Botão para submeter o formulário.
p id="message"/p: Parágrafo onde as mensagens serão exibidas.
script src='cpf.js'/script: Inclui novamente o arquivo JavaScript externo.

 # Validação de CPF com JavaScript
Este projeto é uma implementação simples para validar números de CPF (Cadastro de Pessoas Físicas) usando JavaScript. A validação é realizada diretamente no navegador quando um usuário submete um formulário com um CPF.

Funcionalidades
Valida o CPF inserido pelo usuário.
Exibe uma mensagem indicando se o CPF é válido ou inválido.
Utiliza JavaScript puro para validação e manipulação do DOM.
Como Funciona
Estrutura HTML: O código JavaScript espera um formulário HTML com o ID cpfForm e um campo de entrada com o ID cpf, além de um elemento para exibir mensagens com o ID message.
Validação: O código remove todos os caracteres não numéricos do CPF e verifica se ele possui exatamente 11 dígitos. Ele também verifica se todos os dígitos são iguais, o que é inválido.
Cálculo de Validação: Calcula os dígitos verificadores do CPF para garantir sua validade, baseando-se em um algoritmo específico.

Explicação do Código JavaScript

O código JavaScript é responsável por validar o CPF e exibir uma mensagem para o usuário

// VALIDAÇÃO DE CPF DIRETO DO JAVASCRIPT
// Adicionando escutador ao formulário
document.getElementById('cpfForm').addEventListener('submit', function(event){
    event.preventDefault();
 
    const cpf = document.getElementById('cpf').value;
    const msg  = document.getElementById('message');
 
    if(validarCPF(cpf)){
    msg.textContent = "O CPF é válido";
    msg.style.color = 'green';
 
    }else{
        msg.textContent = "O CPF é inválido";
        msg.style.color = 'red';
    }
}
);
 
function validarCPF(cpf){
    cpf = cpf.replace(/[^\d]+/g, ''); //Remove caracteres não numéricos
 
    //Estrutura de decisão para verificar a quantidade de dígitos e se todos os digitos são iguais
    if(cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)){
        return false;
    }

    let soma = 0;
    let resto;

    for(let i=1;i<=9;i++){
        soma +=parseInt(cpf.substring(i-1, i)) * (11 - i);
    }
}

event.preventDefault();: Impede o envio do formulário para evitar o recarregamento da página.
document.getElementById('cpf').value: Obtém o valor do campo de entrada de CPF.
validarCPF(cpf): Chama a função validarCPF para validar o CPF.
Mensagens de Validação: Atualiza o conteúdo e a cor do texto no elemento com ID message com base na validade do CPF.
cpf.replace(/[^\d]+/g, '');: Remove qualquer caractere que não seja numérico do CPF, como pontos e traços.
Verificação de Comprimento e Dígitos Repetidos:
cpf.length !== 11: Garante que o CPF tenha exatamente 11 dígitos.
/^(\d)\1{10}$/: Verifica se todos os 11 dígitos são iguais, o que é inválido.
Cálculo da Soma:
A função calcula uma soma parcial para validar os primeiros 9 dígitos. Esta soma é parte do cálculo para verificar a validade dos dígitos verificadores finais do CPF.

 # Validação de E-mail com JavaScript
Este projeto fornece uma função para validar endereços de e-mail usando JavaScript. A função verifica se o e-mail fornecido pelo usuário contém um símbolo @ e um ponto . para garantir que ele tenha um formato básico válido. Se o e-mail for válido, ele é exibido na página.

Descrição do Código
O código JavaScript contém uma função que valida um e-mail e fornece feedback ao usuário com base na validade do e-mail fornecido.

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

Função checaremail:
Obtém o Valor do Campo de E-mail: const emailValue = document.forms[0].email.value;
A função acessa o valor do campo de e-mail no primeiro formulário da página.
Valida o E-mail:
Verifica se o campo está vazio: emailValue == ""
Verifica se o e-mail contém o símbolo @: emailValue.indexOf('@') == -1
Verifica se o e-mail contém um ponto .: emailValue.indexOf('.') == -1
Se alguma dessas condições for verdadeira, exibe um alerta solicitando um e-mail válido e retorna false.
E-mail Válido:
Se todas as condições forem satisfeitas, exibe dois alertas: um confirmando o e-mail informado e outro indicando sucesso.
Atualiza o conteúdo do elemento com ID email para mostrar o e-mail fornecido.

 # Validação de E-mail com JavaScript
Este projeto demonstra uma validação simples de e-mail usando JavaScript e HTML. O código HTML apresenta um formulário onde o e-mail é validado ao perder o foco (evento onblur) e os resultados da validação são exibidos na página.

Estrutura do Projeto
O projeto é composto por três arquivos principais:

HTML: index.html - Estrutura da página.
CSS: main.css - Estilos da página (não fornecido, mas mencionado).
JavaScript: email.js - Código para validação do e-mail.

!DOCTYPE html
html
head
    meta charset='utf-8'
    meta http-equiv='X-UA-Compatible' content='IE=edge'
    title Validação de email /title
    meta name='viewport' content='width=device-width, initial-scale=1'
    link rel='stylesheet' type='text/css' media='screen' href='main.css'
   
/head
body
 
    form action=""
    label for="">E-mail:/label
    input type="text" name="email" onblur="checaremail()"
    input type="submit" value="ENVIAR"
 
    /form
    div id="email" /div
 
    script src='email.js' /script
 
/body
/html

Explicação do Código HTML
Meta Tags:

Charset: Define o conjunto de caracteres para UTF-8.
X-UA-Compatible: Garante compatibilidade com o modo de exibição do Internet Explorer.
Viewport: Configura a escala da página para dispositivos móveis.
Link para CSS:

link rel='stylesheet' type='text/css' media='screen' href='main.css': Inclui o arquivo CSS para estilos.
Formulário:

label for="email" E-mail: /label: Rótulo para o campo de entrada.
input type="text" name="email" id="email" onblur="checaremail()": Campo de entrada para o e-mail. O evento onblur chama a função checaremail() quando o campo perde o foco.
input type="submit" value="ENVIAR": Botão de envio do formulário.
Div para Exibição:

div id="email" /div: Div onde o resultado da validação do e-mail será exibido.
Inclusão do JavaScript:

script src='email.js' /script: Inclui o arquivo JavaScript que contém a lógica de validação.