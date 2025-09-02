// Método adiciona um elemento no começo da lista 
let numbers = new Array(5); 
for(let i = 0; i < numbers.length; i++){
    numbers[i] = i+1;
} // Inicializa os espaços em ordem crescente

console.log(numbers)
if(numbers[0] >= 1){
    numbers.unshift(0); // Adiciona 0 na posição 0 
};

console.log(numbers)