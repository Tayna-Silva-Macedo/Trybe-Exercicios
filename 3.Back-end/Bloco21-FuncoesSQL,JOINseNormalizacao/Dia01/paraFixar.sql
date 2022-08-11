# Manipulação de strings

#Exercício 1
SELECT UCASE('trybe');

#Exercício 2
SELECT 
    REPLACE('Você já ouviu falar do DuckDuckGo?',
        'DuckDuckGo',
        'Google');

#Exercício 3
SELECT CHAR_LENGTH('Uma frase qualquer');

#Exercício 4
SELECT 
    SUBSTRING('A linguagem JavaScript está entre as mais usadas',
        13,
        10);

#Exercício 5
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

# Condicionais

#Exercício 1
SELECT 
    film_id,
    title,
    IF(title = 'ace goldfinger',
        'Já assisti a esse filme',
        'Não conheço o filme') AS `conheço o filme?`
FROM
    sakila.film;

#Exercício 2
SELECT 
    title,
    rating,
    CASE
        WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
    END AS `público-alvo`
FROM
    sakila.film;
    
# Funções matemáticas do MySQL

# Desafios com DIV e MOD
#Exercício 1
SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS `Par ou ímpar`;

#Exercício 2
SELECT 220 DIV 12;

#Exercício 3
SELECT 
    IF(220 MOD 12 = 0,
        'Não há lugares sobrando',
        CONCAT('Sim, há ',
                220 MOD 12,
                ' lugares sobrando')) AS `Há lugares sobrando?`;

# Para fixar
#Exercício 1
SELECT FLOOR(15 + (RAND() * (20 - 15)));

#Exercício 2
SELECT ROUND(15.7515971, 5);

#Exercício 3
SELECT FLOOR(39.494);

#Exercício 4
SELECT CONCAT(CEIL(85.234), '%');

# Trabalhando com datas

#Exercício 1
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());

#Exercício 2
SELECT TIMEDIFF('11:00:00', '10:25:45');

# Utilizando as funções de agregação AVG, MIN, MAX, SUM e COUNT

#Exercício 1
SELECT 
	AVG(length) AS `Média de Duração`,
    MIN(length) AS `Duração Mínima`,
    MAX(length) AS `Duração Máxima`,
    SUM(length) AS `Tempo de Exibição Total`,
    COUNT(*) AS `Filmes Registrados`
FROM 
	sakila.film;
    
# Exibindo e filtrando dados de forma agrupada com GROUP BY e HAVING

#Praticando GROUP BY
#Exercício 1
SELECT 
    active, COUNT(*)
FROM
    sakila.customer
GROUP BY active;

#Exercício 2
SELECT 
    store_id, active, COUNT(*)
FROM
    sakila.customer
GROUP BY store_id , active;

#Exercício 3
SELECT 
    rating, AVG(rental_duration) AS `avg_rental_duration`
FROM
    sakila.film
GROUP BY rating
ORDER BY avg_rental_duration DESC;

#Exercício 4
SELECT 
    district, COUNT(*)
FROM
    sakila.address
GROUP BY district
ORDER BY 2 DESC;

#Para fixar
#Exercício 1
SELECT 
    rating, AVG(length) AS duracao_media
FROM
    sakila.film
GROUP BY rating
HAVING duracao_media BETWEEN 115.0 AND 121.50
ORDER BY duracao_media DESC;
    
#Exercício 2
SELECT 
    rating, SUM(replacement_cost) AS custo_de_substituicao
FROM
    sakila.film
GROUP BY rating
HAVING custo_de_substituicao > 3950.50
ORDER BY custo_de_substituicao ASC;