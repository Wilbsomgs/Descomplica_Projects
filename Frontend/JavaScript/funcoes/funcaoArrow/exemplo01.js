// Arroz function com dois parâmetros

/*
    Estrutura arrow function
    
    let exemploVariavel = (parametro1, parametro2) => {bloco de código};
*/

let somar = (a,b) =>  {
    return a + b;
};


// Exibe o resultado da arrow function com dois parâmetros
console.log(somar(5,3));


// Arrow function com apenas 1 parametro
let dobrar = n => n * 2;

// Exibe o resultado do arrow function dobrar
console.log(dobrar(5));

// Arrow function com corpo de função mais complexo 
let saudacao = (nome, idade) => {
    let mensagem = `\nOlá, meu nome é ${nome} e eu tenho ${idade} anos.`;
    
    return mensagem;
};

// Exibindo a execução da função saudacao
console.log(saudacao("Wilbsom", 20));