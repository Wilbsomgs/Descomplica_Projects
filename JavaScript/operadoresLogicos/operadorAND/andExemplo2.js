// Acesso à área restrita

let tipoUsuario = 'admn';
let logado = true;
let permissaoUser = true;

if(tipoUsuario === 'admin'){

} else {
    permissaoUser == false;
}

if(permissaoUser && logado){
    console.log("Acesso permitido.");
}else {
    console.log("Acesso negado.");
}
