// Exemplo que ilustra os resultdos de operadores lógicos 

const a = true;
const b = false;

// Usando o and (&&) é necessário que os dois valores sejam verdadeiros
const resultado01 = a && b; // false
const resultado02 = a && true; // true 

console.log(`a && b = ${resultado01}`) // saída é false
console.log(`a && true = ${resultado02}`) // saída é true