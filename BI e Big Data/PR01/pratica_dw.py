import duckdb
import pandas as pd

# 1. Conecta ao DuckDB (cria um arquivo local chamado 'meu_dw.duckdb')
conn = duckdb.connect("meu_dw.duckdb")

# 2. Simulando dados transacionais brutos
dados_brutos = pd.DataFrame(
    {
        "id_transacao": [1, 2, 3, 4, 5],
        "data_venda": [
            "2026-10-01",
            "2026-10-01",
            "2026-10-02",
            "2026-10-02",
            "2026-10-03",
        ],
        "nome_cliente": [
            "Ana Silva",
            "Carlos Souza",
            "Ana Silva",
            "Mariana Lima",
            "Carlos Souza",
        ],
        "cidade_cliente": [
            "São Paulo",
            "Rio de Janeiro",
            "São Paulo",
            "Curitiba",
            "Rio de Janeiro",
        ],
        "nome_produto": [
            "Mouse Gamer",
            "Teclado Mecânico",
            "Mouse Gamer",
            "Monitor 27",
            "Teclado Mecânico",
        ],
        "categoria_produto": [
            "Periféricos",
            "Periféricos",
            "Periféricos",
            "Monitores",
            "Periféricos",
        ],
        "valor_unitario": [150.0, 300.0, 150.0, 1200.0, 300.0],
        "quantidade": [2, 1, 1, 1, 2],
        "desconto": [10.0, 0.0, 5.0, 50.0, 20.0],
    }
)

# Carrega os dados brutos para uma tabela de Staging no DuckDB
conn.execute("CREATE OR REPLACE TABLE stg_vendas AS SELECT * FROM dados_brutos")
print("✅ Dados brutos carregados na tabela de Staging!")

# 3. Criando a Dimensão Produto
conn.execute("""
CREATE OR REPLACE TABLE dim_produto AS
SELECT 
    ROW_NUMBER() OVER() AS id_produto,
    nome_produto,
    categoria_produto
FROM (
    SELECT DISTINCT nome_produto, categoria_produto 
    FROM stg_vendas
);
""")

# 4. Criando a Dimensão Cliente
conn.execute("""
CREATE OR REPLACE TABLE dim_cliente AS
SELECT 
    ROW_NUMBER() OVER() AS id_cliente,
    nome_cliente,
    cidade_cliente
FROM (
    SELECT DISTINCT nome_cliente, cidade_cliente 
    FROM stg_vendas
);
""")

# 5. Criando a Dimensão Tempo (Data)
conn.execute("""
CREATE OR REPLACE TABLE dim_tempo AS
SELECT DISTINCT
    CAST(data_venda AS DATE) AS data_venda,
    EXTRACT(YEAR FROM CAST(data_venda AS DATE)) AS ano,
    EXTRACT(MONTH FROM CAST(data_venda AS DATE)) AS mes,
    EXTRACT(DAY FROM CAST(data_venda AS DATE)) AS dia
FROM stg_vendas;
""")

# 6. Criando a Tabela Fato (Fato Vendas - cruzando chaves estrangeiras)
conn.execute("""
CREATE OR REPLACE TABLE fato_vendas AS
SELECT
    v.id_transacao,
    t.data_venda AS id_data,
    c.id_cliente,
    p.id_produto,
    v.quantidade,
    v.valor_unitario,
    v.desconto,
    (v.valor_unitario * v.quantidade - v.desconto) AS valor_total
FROM stg_vendas v
JOIN dim_cliente c ON v.nome_cliente = c.nome_cliente
JOIN dim_produto p ON v.nome_produto = p.nome_produto
JOIN dim_tempo t ON v.data_venda = CAST(t.data_venda AS VARCHAR);
""")

print("✅ Modelo Dimensional (Star Schema) criado com sucesso!")

# 7. Consulta OLAP analítica: Faturamento total por Categoria de Produto
resultado = conn.execute("""
SELECT
    p.categoria_produto,
    SUM(f.quantidade) AS total_itens_vendidos,
    SUM(f.valor_total) AS faturamento_total
FROM fato_vendas f
JOIN dim_produto p ON f.id_produto = p.id_produto
GROUP BY p.categoria_produto
ORDER BY faturamento_total DESC;
""").fetchdf()

print("\n--- Relatório OLAP: Faturamento por Categoria ---")
print(resultado)

# Fecha a conexão
conn.close()
