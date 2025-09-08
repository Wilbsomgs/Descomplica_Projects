import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        int VetSoma[], i, soma = 0;
        VetSoma = new int[50];

        for (i = 0; i <= 5; i++) {
            VetSoma[i] = Integer.parseInt(
                    JOptionPane.showInputDialog("Digite um valor inteiro")
            );
            soma += VetSoma[i];
        }

        System.out.println("A soma dos 50 valores é: " + soma);

        System.exit(0);
    }
}
