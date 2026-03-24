function calcularMedia(num1, num2,num3,num4){
    let media = (num1 + num2 + num3 + num4) / 4;

    if(media > 6){
        console.log("Aluno aprovado");
    }else if(media >= 5){
        console.log("Aluno em recuperação!")
    } else {
        console.log("Aluno reprovado!");
    }
}

calcularMedia(8,7,8,9);