// Método remove o primeiro item da lista e move todos os outros elementos da lista à esquerda
let numbers = new Array(10);

for(let i = 0; i < numbers.length; i++){
    numbers[i] = i*3;
}

console.log(`Array numbers após preenchimento: ${numbers}`);
numbers.shift();

console.log(`Array numbers após executar o shift() ${numbers}`);