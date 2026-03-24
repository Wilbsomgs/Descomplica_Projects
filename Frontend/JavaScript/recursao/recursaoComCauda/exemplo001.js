function fatorial(n){
    if(n ==0){
        return 1; // Caso base 
    } else{
        return n * fatorial(n-1) // Chamada recursiva
    }

}