public class QuickSortExemplo001{
    public static void quickSort(int[] vetor, int inicio, int fim){
        if(inicio < fim){
            int posicaoPivo = particionar(vetor, inicio, fim);

            quickSort(vetor, inicio, posicaoPivo -1);
            quickSort(vetor, posicaoPivo + 1,fim);
        }
    }
    private static int particionar(int[] vetor, int inicio, int fim){
        int pivo = vetor[fim];
        int i = inicio -1;
        for(int j = inicio; j < fim; j++){
            if (vetor[j] <= pivo){
                i++;
                int temp = vetor[i];
                vetor[i] = vetor[j];
                vetor[j] = temp;
            }
        }
        int temp = vetor[i+1];
        vetor[i+1] = vetor[fim];
        vetor[fim] = temp;
        return i + 1;
    }

    public static void main(String[] args){
        int[] numeros = {23,31,32,55,34,21,42};

        System.out.println("Antes da ordenação");
        for(int num : numeros){
            System.out.println(num + " ");
        }
        quickSort(numeros,0, numeros.length - 1);

        System.out.println("\n\nDepois da ordenação");
        for(int num : numeros){
            System.out.println(num + " ");
        }
    }
}