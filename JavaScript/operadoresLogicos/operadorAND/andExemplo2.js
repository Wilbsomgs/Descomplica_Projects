// Acesso à área restrita

let tipoUsuario = 'admin';
let logado = true;
let permissaoUser = true;

if(tipoUsuario === 'admin'){
    permissaoUser = true;
} else {
    permissaoUser = false;
}

if(permissaoUser && logado){
    console.log("Acesso permitido.");
}else {
    console.log("Acesso negado.");
}
