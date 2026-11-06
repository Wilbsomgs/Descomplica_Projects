import duckdb

# 1. Reconecta ao DuckDB existente ('meu_dw.duckdb')
caminho_db = "/home/wilbsom/Área de trabalho/Ciencia-da-computacao/github/BI e Big Data/PR01/meu_dw.duckdb"
conn = duckdb.connect(caminho_db)

print("✅ Conectado ao DW existente para a Prática 2!\n")

# 2. Consulta Analítica Avançada 1: Faturamento Acumulado por Dia (Running Total)
# Utiliza funções de janela (SUM() OVER (ORDER BY ...))
sql_acumulado = """
SELECT 
    t.data_venda,
    SUM(f.valor_total) AS faturamento_diario,
    SUM(SUM(f.valor_total)) OVER (ORDER BY t.data_venda) AS faturamento_acumulado
FROM fato_vendas f
JOIN dim_tempo t ON f.id_data = t.data_venda
GROUP BY t.data_venda
ORDER BY t.data_venda;
"""

print("--- 📈 Relatório 1: Faturamento Diário e Acumulado ---")
df_acumulado = conn.execute(sql_acumulado).fetchdf()
print(df_acumulado)
print("\n" + "=" * 50 + "\n")

# 3. Consulta Analítica Avançada 2: Ranking de Melhores Clientes (RANK / DENSE_RANK)
# Descobre quais clientes mais gastaram e atribui uma posição no ranking
sql_ranking = """
SELECT 
    DENSE_RANK() OVER (ORDER BY SUM(f.valor_total) DESC) AS ranking,
    c.nome_cliente,
    c.cidade_cliente,
    COUNT(f.id_transacao) AS total_compras,
    SUM(f.valor_total) AS valor_total_gasto
FROM fato_vendas f
JOIN dim_cliente c ON f.id_cliente = c.id_cliente
GROUP BY c.nome_cliente, c.cidade_cliente
ORDER BY valor_total_gasto DESC;
"""

print("--- 🏆 Relatório 2: Ranking de Clientes por Faturamento ---")
df_ranking = conn.execute(sql_ranking).fetchdf()
print(df_ranking)

# Fecha a conexão
conn.close()
