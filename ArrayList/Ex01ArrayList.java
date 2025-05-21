/* 
 Criar um array list 
 Solicitar os números do usúario
 armazenar os números do usuário dentro do array
 Exibir quais números foram adicionados no array list 
 Somar todos os números;
*/
import java.util.Scanner;
import java.util.ArrayList;

public class Ex01ArrayList {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        ArrayList<Integer> numeros = new ArrayList<>();
        
        int numeroUsuario, soma = 0;
        
        System.out.println("Insira 5 números para serem armazenados e depois fazer a soma dos mesmos!\n");
        
        for(int i =0; i < 5; i++){
            System.out.println("Digite o " + (i + 1) + "°" + " número: ");
            numeroUsuario = scanner.nextInt();
            
            numeros.add(numeroUsuario);
        }
        
        System.out.println("Os números digitados foram: " + numeros);
        
        for(int num : numeros) {
            soma += num;
        }
        
        System.out.println("A soma de todos os números: " + numeros + " é de " + soma);
    } 
}