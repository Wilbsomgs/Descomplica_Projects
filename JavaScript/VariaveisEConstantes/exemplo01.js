// Criando uma constante
const externo = "Olá, eu sou uma constante global";
console.log(externo); // Exibindo no console a constante externo;

// Exemplo usando Var
function exemploVar(){
    if (true){
        var mensagem = " Olá, Faculdade Descomplica, eu sou uma var...";
    }
    console.log(mensagem); // Fora do escopo, mas funcionando 
}

// Chamanando da função exemploVar()
exemploVar();

function exemploLet(){
    if(true) {
        let mensagem = " Olá, Faculdade Descomplica, eu sou um let...";
        console.log(mensagem);
    }
    
}

// Erro usando let
function exemploLetErro(){
    if(true) {
        let mensagem = " Olá, Faculdade Descomplica, eu sou um let...";
        console.log(mensagem) // Para ñ quebrar o código
    }
    // console.log(mensagem); Exibe erro (porque não está no mesmo escopo)
}

// Chamando função exemploLetErro()
exemploLetErro();

