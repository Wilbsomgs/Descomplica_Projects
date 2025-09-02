// Método pop remove o último item da lista (array)
let nomes = ["Maria", "João", "Fernando"];

nomes.push("Daniele");

nomes.pop() // Remove o último item da lista (daniele)

console.log(nomes);

let compras = [
    "sabonete",
    "fralda",
    "água sanitária",
    "creme dental"
];

compras.push("sabão em pó");
console.log("Console antes do método POP(): ");
console.log(compras);

compras.pop(); // Remove o último item da lista(sabão em pó);
console.log("\n" + compras);

// Exemplo 03 
let idade = [14,12,17,24,]; 

for(let i = 0; i < idade.length; i++){
    if(idade[i] >= 18){
        idade.pop();
        console.log("Método pop executado!");
    } else{
        console.log("Menor de idade" + idade[i]);
    }
};

console.log(idade);