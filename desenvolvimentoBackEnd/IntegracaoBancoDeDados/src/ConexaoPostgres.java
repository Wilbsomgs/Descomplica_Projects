import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class ConexaoPostgres {

    public static void main(String[] args) {
        // Dados de conexão
        String url = "jdbc:postgresql://localhost:5432/usuario";
        String usuario = "meu_usuario";
        String senha = "minha_senha";

        // Teste de conexão
        try (Connection conexao = DriverManager.getConnection(url, usuario, senha)) {
            System.out.println("Conectado com sucesso!");

            // Exemplo de SELECT
            String sql = "SELECT * FROM usuarios";
            PreparedStatement stmt = conexao.prepareStatement(sql);
            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                System.out.println("ID: " + rs.getInt("id"));
                System.out.println("Nome: " + rs.getString("nome"));
                System.out.println("Email: " + rs.getString("email"));
                System.out.println("------");
            }

        } catch (Exception e) {
            System.out.println("Erro ao conectar: " + e.getMessage());
        }
    }
}
