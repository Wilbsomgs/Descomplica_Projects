// Método replace()
// Substitui um trecho da string por outro
// Precisa da referência e do valor a ser substituído

let animalErrado1 = "Zefra";
let animalErrado2 = "Cabre";
console.log(`Palavra sem o replace() 1:  ${animalErrado1}`);
console.log(`Palavra sem o replace() 2:  ${animalErrado2}`);

let animalCorreto1 = animalErrado1.replace("f", "b");
let animalCorreto2 = animalErrado2.replace("bre", "bra");

console.log(`Resultado replace() 1: ${animalCorreto1}`);
console.log(`Resultado replace() 2: ${animalCorreto2}`);