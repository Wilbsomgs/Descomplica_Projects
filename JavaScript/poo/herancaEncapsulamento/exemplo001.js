// Classe base "Casa"

class Casa {
    constructor(cor,numQuarto, temGaragem){
        // Propriedades privadas utilizando convenção de underscore
        this._cor = cor;
        this._numQuarto = numQuarto;
        this._temGaragem = temGaragem;
    }

    // Métodos getters e setters para acessar e modificar propriedades
    get cor(){
        return this._cor;
    }

    set cor(novaCor){
        this._cor = novaCor;
    }

    get numQuarto(){
        return this._numQuarto;
    }

    set numQuart(novoNumQuarto){
        this._numQuarto = novoNumQuarto;
    }

    get temGaragem(){
        return this._temGaragem;
    }

    set temGaragem(novoTemGaragem){
        this._temGaragem = novoTemGaragem;
    }

    // Método para descrever a casa
    descrever(){
        let descricao = `Esta casa é de cor ${this._cor}, tem ${this._numQuarto} quartos`;
        if (this._temGaragem){
            descricao += " e tem uma garagem.";
        }else {
            descricao += " e não tem garagem ";
        }
    }

}


const minhaCasa = new Casa("amarelo", 3, true);
console.log(minhaCasa);



// Classe Derivada "CasaLuxuosa" que herda de "Casa"
class CasaLuxuosa extends Casa {
    constructor(cor, numQuarto,temGaragem, temPiscina){
        // Chama o construtor da classe base casa
        super(cor,numQuarto, temGaragem);
        //Propriedades adiocional específica da classe derivada
        this._temPiscina = temPiscina;
    }

    get temPiscina(){
        return this._temPiscina;
    }

    set temPiscina(novoTemPiscina){
        this._temPiscina = novoTemPiscina;
    }

    descrever(){
        let descricao = super.descrever(); // Chcama o método descrever da classe base
        if(this._temPiscina){
            descricao += " também tem uma piscina.";
        }else{
            descricao += " não tem piscina.";
        }

        return descricao;
    }
}



const minhaCasaLuxuosa = new CasaLuxuosa("Verde", 5, true, true);
const minhaCasaLuxuosa2 = new CasaLuxuosa("Rosé", 4, true, false);

console.log( minhaCasaLuxuosa);
console.log( minhaCasaLuxuosa2);