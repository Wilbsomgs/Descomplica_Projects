public class fatorial {
    static void fatp(int n, int x, int f){
        if(x == 0 || x == 1){ // caso base
            System.out.println("O fatorial de " + n +  " é: " + f);
        }else{
            fatp(n,x-1,f*x); // Regra 2 e 3
        }
    }
}
