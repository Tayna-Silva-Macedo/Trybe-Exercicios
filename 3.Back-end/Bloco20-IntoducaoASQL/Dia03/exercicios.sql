#Exercício 1
SELECT * FROM PecasFornecedores.Pecas
WHERE name LIKE 'gr%';

#Exercício 2
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE peca = 2
ORDER BY fornecedor ASC;

#Exercício 3
SELECT peca, preco, fornecedor FROM PecasFornecedores.Fornecimentos
WHERE fornecedor LIKE '%n%';

#Exercício 4
SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%ltda'
ORDER BY name DESC;

#Exercício 5
SELECT COUNT(name) AS numero_de_empresas FROM PecasFornecedores.Fornecedores
WHERE code LIKE '%f%';

#Exercício 6
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE preco BETWEEN 15 AND 40
ORDER BY preco ASC;

#Exercício 7
SELECT COUNT(*) FROM PecasFornecedores.Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';