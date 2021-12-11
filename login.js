function main() {
    
    const reg = new RegexWarrior();

    attach("submit","click",function () {
       
        let email = val("email");
        let password = val("pass");

        if(reg.isEmail(email)) {

            if(password.length < 4) {
                alert("A sua senha é insegura. Use ao menos 4 caracteres.");
            } else {

                alert("Bem-Vindo, prezado usuário!\n\nSeu e-mail é: " + email + "\nSua senha é: " + password);
            }

        } else {
            alert("E-mail inválido");
        }
        

        });        

}

