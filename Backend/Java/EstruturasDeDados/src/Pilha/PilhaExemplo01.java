package Pilha;

import java.util.Stack;
public class PilhaExemplo01{
    public static void main(String[] args) {
        Stack<Integer> idades = new Stack<>();

        idades.push(43);
        idades.push(32);
        idades.push(12);
        idades.push(32);
        idades.push(14);

        System.out.println("Idaades" + idades);

        // Peek
        int idadeConsultada = idades.peek();
        System.out.println("Exibe o último da pilha" + idadeConsultada);

        // Pop
        idades.pop();
        System.out.println("Idades após removes o último da pilha" + idades);

        // isEmpty
        if (idades.isEmpty()){
            System.out.println("A pilha está vazia");
        }else{
            System.out.println("A pilha ainda tem elementos: " + idades);
        }
    }
}