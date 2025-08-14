// Método slice()
// Cria uma nova string com base em uma string existente, 
// porém não altera a original
let frutas = "maçã, banana, laranja, usa, abacaxi"; // String original
console.log(`String original antes  da execução: ${frutas}`);

let parteFrutas = frutas.slice(5,21) // 5- Início 21- Término
console.log(`Resultado slice(): ${parteFrutas}`);

console.log(`String original após a execução do slice() ${frutas}`);