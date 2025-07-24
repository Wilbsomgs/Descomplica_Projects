// Definindo a função anônima

let somarParametros = function(parametro1, parametro2){
    console.log("Parâmetro 1: " + parametro1);
    console.log("Parâmetro 2:" + parametro2);

    let resultado = parametro1 + parametro2;
    
    console.log("O resultado é: " + resultado);

    return resultado;
}

// Chamada da função atráves de uma variável
let resultado = somarParametros(5,10);
console.log("Resultado da chamda da função somarParametros: " + resultado);

// Função que aceita outra função como parâmetro 
function executarFuncao(funcao,valor1,valor2){
    console.log("\nExecutando a função passada como argumento");

    return funcao(valor1,valor2);
};

// Passando a função anônima como argumento para outra função
let resultadoExecucao = executarFuncao(somarParametros,7,3);

// Exibindo o resultado da Execução
console.log("Resultado da resultadoExecucao: " + resultadoExecucao);

// Chamando imediatamente
let resultadoImediato = (function(a,b){
    console.log("\nExecutando o bloco de chamada imediata da função anônima");

    return a*b;
})(4,11);

console.log("Resultado da execução da função anônima chamda anônima" + resultadoImediato);

//Call-back
let numeros = [1,2,3,4,5]; // Variável numeros do tipo array
let dobrados = numeros.map(function(numero){
    return numero*2;
});

console.log(dobrados);