public class Main {
    public static void main(String[] args) {
        int numero = 4;
        int resultado = fatorial(numero);
        System.out.println("Fatorial de " + numero + "é: " + resultado);
    }

    public static int fatorial(int n){
        if(n==0){
            return 1; // Caso bae
        } else {
            return n * fatorial(n-1); // Chamada Recursiva
        }
    }
}