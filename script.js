function verificarSenha() {
    let inputSenha = document.getElementById("senha").value;
    if (inputSenha === 'pinguim') {
        alert("Bem-vindo!");
    }
    else {
        alert("Ops ... Senha Incorreta! \n\nDica: Começa com P, vive em ambiente gelado!");
    }

}