import javax.swing.*;

public class Main{
    public static void main(String[] args){
        int f, numero;

        numero = Integer.parseInt(JOptionPane.showInputDialog("Digite um número para calcular o fatorial do mesmo: "));

        if (numero < 0){
            System.out.println("Número inválido! Por favor digite um número maior ou igual a zero.");
            System.exit(0);
        }else {
            f = fat(numero);
            System.out.println("O fatorial de " + numero + " é: " + f);
        }
        System.exit(0);
    }
    static int fat(int n){
        int f; // Não é necessário criar essa variável

        if(n==0){
            return 1;
        } else{
            f = n* fat(n-1);
            return f; // possibilidade de colocar apenas 'return f = n * fat(n-1);
        }
    };
}