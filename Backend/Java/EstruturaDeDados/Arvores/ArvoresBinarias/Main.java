public class Main{
    public static void main(String[] args) {
        Arvore arvore = new Arvore();
        arvore.inserir(5);
        arvore.inserir(20);
        arvore.inserir(50);
        arvore.inserir(12);
        arvore.inserir(11);

        arvore.imprimir();

        arvore.contem(40);
    }
}

class Arvore{
    No raiz;

    public Arvore(){
        this.raiz = null;
    }

    public void inserir(int valor){
        No novoNo = new No(valor);
        if(raiz == null){
            raiz = novoNo;
        }else{
            inserirNo(raiz, novoNo);
        }
    }

    private void inserirNo(No atual, No novoNo){
        if(novoNo.valor < atual.valor){
            if(atual.esquerdo == null){
                atual.esquerdo = novoNo;
            }else{
                inserirNo(atual.esquerdo, novoNo);
            }
        }else{
            if(atual.direito == null){
                atual.direito = novoNo;
            }else{
                inserirNo(atual.direito, novoNo);
            }
        }
    }

    public void imprimir(){
        imprimirNo(raiz);
    }

    private void imprimirNo(No no){
        if(no != null){
            imprimirNo(no.esquerdo);
            System.out.println(no.valor);
            imprimirNo(no.direito);
        }
    }

    public boolean contem(int valor){

        return buscarNo(raiz, valor);
    }

    private boolean buscarNo(No atual, int valor){
        if(atual == null){
            return false;
        }

        if(atual.valor == valor){
            System.out.println("Valor encontrado" + " " + valor);
            return true;
        }

        if(atual.valor > valor){
           return buscarNo(atual.esquerdo, valor);
        }else {
           return buscarNo(atual.direito, valor);
        }
    }
}
class No{
    int valor;
    No esquerdo;
    No direito;

    public No(int valor){
        this.valor = valor;
        this.esquerdo = null;
        this.direito = null;
    }
}