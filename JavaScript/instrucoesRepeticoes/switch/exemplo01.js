// Função que recebe as cores do semáforos

function checkTrafficLight(lightColor){
    switch(lightColor){
        case 'verde':
            console.log("Pode atravessar a rua.");
            break;
        case 'amarelo':
            console.log("Prepare-se para parar.");
            break;
        case 'vermelho':
            console.log("Pare! Você não pode atravessar.")
            break;
        default: 
            console.log("Cor inválida! Aguarde até que o semáforo esteja com uma cor válida.");       
    }
}

checkTrafficLight('verde');
checkTrafficLight('amarelo');
checkTrafficLight('vermelho');
checkTrafficLight('roxo');