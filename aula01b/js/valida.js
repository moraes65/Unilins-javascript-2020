function validar(){
    var elementoNome = formSignUp.nome.value;
    var elementoEmail = formSignUp.email.value;
    var elementoCelular = document.getElementsByName('celular')[0].value;
    console.log(elementoCelular);
    var elementoSenha = formSignUp.senha.value;
    var elementoConfirm = formSignUp.confirm_senha.value;
    var elementoErro = document.getElementById('msg_erro')
    console.log(elementoNome);
    if (elementoNome == ''){
        // alert('Campo Nome Vazio!');
        elementoErro.innerHTML = 'Campo Nome Vazio!';
        formSignUp.nome.focus();
        return false;
    }
    if (elementoNome.length < 3){
        elementoErro.innerHTML = 'Digite Nome Completo!';
        formSignUp.nome.focus();
        return false;
    }
    if (elementoEmail == ''){
        // alert('Campo Email Vazio!');
        elementoErro.innerHTML = 'Campo Email Vazio!';
        formSignUp.email.focus();
        return false;
    }
    if (elementoCelular == ''){
        // alert('Campo Email Vazio!');
        elementoErro.innerHTML = 'Campo Celular Vazio!';
        formSignUp.celular.focus();
        return false;
    }
    if (elementoSenha == ''){
        // alert('Campo Senha Vazio!');
        elementoErro.innerHTML = 'Campo Senha Vazio!';
        formSignUp.senha.focus();
        return false;
    }
    if (elementoConfirm == ''){
        // alert('Campo Confirm Senha Vazio!');
        elementoErro.innerHTML = 'Campo Confirm Senha Vazio!';
        formSignUp.confirm_senha.focus();
        return false;
    }
    if (elementoSenha != elementoConfirm){
        elementoErro.innerHTML = 'Senhas não conferem!';
        formSignUp.senha.focus();
        return false;
    }
    

    elementoErro.innerHTML = 'Formulário Preenchido Corretamente.';
}