# 1.Média de dias que uma pessoa usuária permanece com o produto alugado
SELECT 
    customer_id,
    AVG(DATEDIFF(return_date, rental_date)) AS media_de_dias_alugado
FROM
    sakila.rental
GROUP BY customer_id;

# 2.Tempo máximo, mínimo e a média de tempo dos filmes lançados em 2006 por rating
SELECT 
    rating,
    MAX(length) AS tempo_maximo,
    MIN(length) AS tempo_minimo,
    AVG(length) AS media_de_tempo
FROM
    sakila.film
WHERE
    release_year = 2006
GROUP BY rating;

# 3.Quantas pessoas usuárias temos por cidade?
SELECT 
    city_id, COUNT(*) AS numero_de_pessoas
FROM
    sakila.address
GROUP BY city_id;

# 4.Qual o valor total recebido dentro de cada mês?
SELECT 
    MONTH(payment_date) AS mes, 
    SUM(amount) AS valor_total
FROM
    sakila.payment
GROUP BY MONTH(payment_date);

# 5.Quantidade de itens alugados pelo preço
SELECT 
    amount, COUNT(*) AS quantidade_de_itens
FROM
    sakila.payment
GROUP BY amount;

# 6.Qual valor total arrecadado agrupado por mês, ano e `amount`?
SELECT 
    MONTH(payment_date) AS mes,
    YEAR(payment_date) AS ano,
    amount AS valor,
    SUM(amount) AS valor_total
FROM
    sakila.payment
GROUP BY MONTH(payment_date) , YEAR(payment_date) , amount;