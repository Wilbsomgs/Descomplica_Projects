// Usando a estrutura de repetição While 

let quantidadeFlexoes = 0;
let cansaco = false;

while(!cansaco) {
    quantidadeFlexoes++;
    console.log(`Eu fiz ${quantidadeFlexoes} flexões`);

    if(quantidadeFlexoes === 10){
        cansaco = true;
    }
}