// Exemplo ilustrando o operador lógico ou representado por (||)

const a = true;
const b = false;

const resultado01 = a || b; // Resultado true
const resultado02 = a || true // true
const resultado03 = (a && b) || b; // false (a && b ) = false

// Precisa de pelo menos um valor true (verdadeiro)
console.log(`a ou b resultado: ${resultado01}`) // true
console.log(`a ou true resultado: ${resultado02}`) // true
console.log(`(true && false) || false resultado: ${resultado03}`) // false
