class Produtos {
    constructor(item, valor, quantidade ){
        this.item = item;
        this.valor = valor;
        this.quantidade = quantidade;
    }

    descrever(){
        let descricao = `Produto: ${this.item}\nValor: R$${this.valor}\nQuantidade em estoque: ${this.quantidade}\n`;
        return descricao;
    }
}

const carregador = new Produtos("Carregador", 20, 200);
const caboInova = new Produtos("Cabo inova", 15, 10);
const peliculaCeramica = new Produtos("Película de Cerâmica", 30, 120);
const pelicula3Dprivacidade = new Produtos("Película 3D com privacidade", 20, 67);
const pelicula3D= new Produtos("Película 3D", 10, 232);

console.log(carregador.descrever());
console.log(caboInova.descrever());
console.log(peliculaCeramica.descrever());
console.log(pelicula3Dprivacidade.descrever());
console.log(pelicula3D.descrever());

