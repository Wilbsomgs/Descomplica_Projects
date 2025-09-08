import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        int MatSoma[][], a , b, soma = 0;
        MatSoma = new int [10][12];

        for(a = 0; a <=9; a++){
            for(b =0; b<=11; b++){
                MatSoma[a][b] = Integer.parseInt(JOptionPane.showInputDialog("Digite um valor inteiro"));
                soma += MatSoma[a][b];
            }
        }
        System.out.println("A soma dos 120 valores é: " + soma);
        System.exit(0);
    }
}