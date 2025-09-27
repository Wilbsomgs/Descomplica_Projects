package Pilha;

import java.util.Stack;
public class PilhaExemplo02 {
    public static void main(String[] args) {
        Stack<Integer> idades = new Stack<>();
        Stack<Integer> idadesMenores = new Stack<>();

        idades.push(32);
        idades.push(34);
        idades.push(12);
        idades.push(21);
        idades.push(11);
        idades.push(16);

        System.out.println("Todas as idades" + idades);

        int idade =0;
        for(int i =0; i < 6; i ++){

            idade = idades.get(i);
            if(idade <= 18){
                idadesMenores.push(idade);
            }
        }
        System.out.println(idadesMenores);

    }
}
