// Classe base "Produtos de uma loja de tecnologia"
class Produtos{
    constructor(item, valor,qntEstoque){
        this._item = item;
        this._valor = valor;
        this._qntEstoque = qntEstoque;
    }

    descreverProduto(){
        let descricao = `Produto: ${this._item}, Preço: R$${this._valor}, Quantidade em estoque: ${this._qntEstoque}`;
        if(this._qntEstoque < 3){
            descricao += "Necessário reabastecer";
        }
        return descricao;
    }
}

const carregadorTipoCInova = new Produtos("Carregador Inova", 20, 13);
const carregarTipoCHrebos = new Produtos("Carregador H'rebos", 50, 2);

console.log(carregadorTipoCInova.descreverProduto());
console.log(carregarTipoCHrebos.descreverProduto());