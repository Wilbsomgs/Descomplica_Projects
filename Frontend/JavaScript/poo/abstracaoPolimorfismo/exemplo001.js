// Classe base 
class Imovel{
    constructor(endereco,tamanho){
        this.endereco = endereco;
        this.tamanho = tamanho;
    }

    descrever(){
        throw new Error("Esse método deve ser implementado por suas subclasses");
    }
}

class Casa extends Imovel{
    constructor(endereco, tamanho, numQuartos,temGaragem, cor){
        super(endereco, tamanho);
        this.numQuartos = numQuartos;
        this.temGaragem = temGaragem;
        this.cor = cor;
    }

    descrever() {
        let descricao = `Casa localizada em ${this.endereco}, de cor ${this.cor},  com ${this.numQuartos} quartos, de tamanho ${this.tamanho}m²`;

        //Operador ternário
        descricao += this.temGaragem ? " e tem garagem" : " e não possui garagem";

        return descricao;
    }
}

class Apartamento extends Imovel{
    constructor(endereco,tamanho, numAndar, possuiElevador){
        super(endereco, tamanho);
        this.numAndar = numAndar;
        this.possuiElevador = possuiElevador;
    }

    descrever(){
        let descricao = `Apartamento localizado em ${endereco}, tamanho ${tamanho}m², fica no ${numAndar}`;

        descricao += this.possuiElevador ? " e possui elevador" : " e não possui elevador";
        
        return descricao; 
    }
}

function descreverImovel(imovel){ // Polimorfismo
    console.log(imovel);
}
const casa = new Casa("Rua Alameda das Dálias", 120, 4, true, "amarelo");
const apartamento = new Apartamento("Rua José Vicent Xavire, 185", 90, "2°", true);

descreverImovel(casa);
descreverImovel(apartamento);