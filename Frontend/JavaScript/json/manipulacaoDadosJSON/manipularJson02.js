// Objeto JSON

let json = {
    "id": 1,
    "nome": "Maria",
    "endereço": "Rua Alameda das Dálias",
    "compras": ["Margarina", "Pão", "Arroz", "Feijão"]
}

// Iterando os itens de compra 
for(let i = 0; i < json.compras.length; i++){
    console.log(json.nome + " comprou: " + json.compras[i]);
}

json.compras.push("Macarrão"); // Para adicionar no array não precisa do índice
console.log(json.compras[4]);


json.compras.pop(); // Remove o Macarrão

console.log(json);

json.compras.shift();

console.log(json);