import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        int numero;

        numero = Integer.parseInt(JOptionPane.showInputDialog("Digite um número para calcular seu fatorial: "));
        if(numero < 0){
            System.out.println("Digite um número maior que zero para calcular seu fatorial!");
            System.exit(0);
        }else{
            fatorial.fatp(numero,numero,1);
        }
        System.exit(0);

    }
}