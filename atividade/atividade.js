//HTML + CSS + JAVASCRIPT

// FORMULÁRIO 

// NOME, CPF, EMAIL, SENHA, BOTÃO ENVIAR

// NOME = ""
// CPF == 11
// EMAIL CONTER @ .COM (OPCIONAL)
//SENHA = CARACTERS MAISCULOS, MINUSCULOS E SIMBOLOS 
// BOTÃO ENVIAR TUDO ISSO.
//TODOS OS DADOS DA PESSOA EM UMA DIV ABAIXO.


// ATIVIDADE AVALIATIVA -- ATÉ AMANHÃ DIA 27/03

function verificar(){
    let nome = document.getElementById("nome").value
    let CPF = document.getElementById("CPF").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let nomeverif
    let CPFverif
    let emailverif
    let senhaverif
    
    //Aqui as variáveis CPF, email e senha verif servem para verificar se a validação
    //destes campos foi concluida com êxito. A minha lógica é que se o valor de todos estes
    //for =true, a função vai exibir que o registro foi concluido com êxito.
    
    if(nome.length==0){
        alert("Nome deve ser preenchido.")
        
        }else nomeverif=true

    if(CPF.length!==11){
        alert("CPF Deve conter exatamente 11 digitos numéricos.")
       
        }else CPFverif=true
    
    if(!email.includes("@")){
        alert("Este e-mail é invalido.")
       
    }else emailverif=true
    
    if(!senha.match(/[A-Z]/) || !senha.match(/[a-z]/) || !senha.match(/[^A-Za-z0-9]/)){
        alert("Senha deve conter pelo menos um caráctere maiúsculo e um símbolo.")
       

        //Nesta parte, eu uso o comando .match para verificar se a senha entrada pelo usuário possui pelo menos uma maiúscula,
        //uma minúscula e uma símbolo respectivamente, por meio da expressão /[a-z]/, /[A-Z]/ e /[^A-Za etc...]. Pela minha lógica,
        //se pelo menos uma destas tentativas de verificação falhar, ele irá mostrar o alerta na página HTML, senão, vai confirmar que
        //a senha está verificada com sucesso e prosseguir.
            
        
    }else senhaverif=true
   
    if (nomeverif===true && CPFverif === true && emailverif ===true && senhaverif===true){
        respostadoc.innerHTML = "Registro concluído com sucesso!" 
        document.getElementById("dadosnome").innerHTML =nome
        document.getElementById("dadoscpf").innerHTML =CPF
        document.getElementById("dadosemail").innerHTML =email

        //Se todas as etapas de verificação forem concluidas com sucesso, a página irá mostrar nossa mensagem para o usuário
        //sem nenhum alerta, e, em uma div abaixo dela, também irá mostrar a maioria dos dados que o usuário forneceu.
    }
}