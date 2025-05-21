public class Ex01StringBuilder {
    public static void main(String[] args){
        anexar();
        reverter();
        deletar();
        inserir();
        converterParaString();
    }

    public static void anexar(){
        StringBuilder nome = new StringBuilder("João");

        nome.append("Antonio");

        System.out.println("O nome + anexo é: " + nome);
    }

    public static void reverter(){
        StringBuilder nome = new StringBuilder();

        nome.append("João");

        nome.reverse();

        System.out.println("O nome + anexo é: " + nome);
    }

    public static void deletar(){
        StringBuilder nome = new StringBuilder("João");

        nome.delete(2,3);

        System.out.println("O nome + anexo é: " + nome);
    }

    public static void inserir(){
        StringBuilder nome = new StringBuilder();

        nome.append("Joo");

        nome.insert(2, "ã");

        System.out.println("O nome + anexo é: " + nome);
    }

    public static void converterParaString(){
        StringBuilder nome = new StringBuilder();
        
        nome.append("João");

        if(nome instanceof StringBuilder){
            System.out.println("O objeto nome é instância da classe StringBuilder.");
        }

        if(nome.toString() instanceof String){
          System.out.println("O objeto nome é instância da classe String ");
        }
    }
}