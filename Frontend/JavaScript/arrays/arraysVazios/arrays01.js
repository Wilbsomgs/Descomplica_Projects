let arrayVazio01 = [];
let arrayVazio02 = new Array();

console.log(arrayVazio01); // 0 
console.log(arrayVazio02); // 0 

let arr = new Array(5);
console.log(arr)// 5 espaços vazios

// para inicializar 
arr.fill(0);
console.log(arr);

// Alterando o valor da variável arr 
arr[2] = 3; 
console.log(arr);

for(let i = 0; i < arr.length; i++){
    arr[i] = i+1;
};

console.log(arr);