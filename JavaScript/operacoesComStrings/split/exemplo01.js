// Método split 
// Cria um array para cada elemento da string determinado por um simbolo

let listaDeFrutas = "maçã,banana,laranja,uva,abacaxi";
let arrayDeFrutas = listaDeFrutas.split(","); 
console.log(`Resultado split():  ${arrayDeFrutas}`); 

arrayDeFrutas.forEach((fruta, indice)=>{
    console.log(`Fruta ${indice + 1}: ${fruta}`);
});