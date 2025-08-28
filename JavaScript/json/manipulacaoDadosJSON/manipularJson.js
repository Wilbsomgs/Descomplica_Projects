let pessoa = {
    "nome": "João",
    "idade": 30,
    "endereco": {
        "rua": "Rua Principal",
        "numero": 123
    },
    "telefones": ["1234-5678", "8765-4321"]
};

console.log(pessoa);

// Acessar dados
console.log("\nAcessar dados: ");
console.log(pessoa.nome);
console.log(pessoa["idade"]);
console.log(pessoa.endereco.rua);
console.log(pessoa["telefones"][0]);

console.log("\nAdicionar dados: ");
pessoa.email = "joao@gmail.com";
console.log(pessoa);

console.log("\nModificar dados: ");
pessoa.idade = 21;
pessoa.endereco.rua = "Rua secundária";
console.log(pessoa);

console.log("\nRemover dados");
delete pessoa.telefones;
console.log(pessoa);

console.log("\nOperações com Arrays");
pessoa.hobbies = ["leitura", "esportes"];
console.log(pessoa.hobbies[1]); // Exibe leitura
pessoa.hobbies.push("viagem"); // adiciona no vetor hobbies leitura
console.log(pessoa.hobbies);


// For in
// Não é ideal parar ser usado para iterar sobre arrays
for(let chave in pessoa){
    console.log(chave + ": " +pessoa[chave]);
}
console.log("\nFor in execudado");



// Converter JSON em texto
let jsonTexto = JSON.stringify(pessoa); // Converte o json para string
console.log(jsonTexto + "\n");

// Converter texto em JSON
let objetoJSON = JSON.parse(jsonTexto); // Converte a string em arquivo JSON de novo
console.log(objetoJSON);