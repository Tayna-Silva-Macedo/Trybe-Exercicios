#Operadores booleanos e relacionais

#Exercício 1
SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

#Exercício 2
SELECT first_name FROM sakila.customer
WHERE active IS FALSE
AND store_id = 2
AND first_name <> 'kenneth'
ORDER BY first_name ASC;

#Exercício 3
SELECT title, description, release_year, replacement_cost from sakila.film
WHERE rating <> 'NC-17'
AND replacement_cost >= 18
ORDER BY replacement_cost DESC, title ASC
LIMIT 100;

#Exercício 4
SELECT COUNT(*) AS quantidade_de_clients_ativos from sakila.customer
WHERE store_id = 1
AND active IS TRUE;

#Exercício 5
SELECT * from sakila.customer
WHERE store_id = 1
AND active IS FALSE;

#Exercício 6
SELECT * from sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate ASC, title ASC
LIMIT 50;

# LIKE - criando pesquisas mais dinâmicas

#Exercício 1
SELECT * FROM sakila.film
WHERE title LIKE '%ace%';

#Exercício 2
SELECT * FROM sakila.film
WHERE description LIKE '%china';

#Exercício 3
SELECT * FROM sakila.film
WHERE description LIKE '%girl%'
AND title LIKE '%lord';

#Exercício 4
SELECT * FROM sakila.film
WHERE title LIKE '___gon%';

#Exercício 5
SELECT * FROM sakila.film
WHERE title LIKE '___gon%'
AND description LIKE '%documentary%';

#Exercício 6
SELECT * FROM sakila.film
WHERE title LIKE '%academy'
OR title LIKE 'mosquito%';

#Exercício 7
SELECT * FROM sakila.film
WHERE description LIKE '%monkey%'
AND description LIKE '%sumo%';

# IN e BETWEEN - englobando uma faixa de resultados

#Exercício 1
SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name ASC;

#Exercício 2
SELECT email FROM sakila.customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email ASC;

#Exercício 3
SELECT COUNT(*) AS quantidade_de_pagamentos FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';

#Exercício 4
SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title ASC;

#Exercício 5
SELECT title, rating FROM sakila.film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title ASC
LIMIT 500;

# Data e tempo - lidando com resultados temporais

#Exercício 1
SELECT COUNT(*) AS quantidade_de_pagamentos FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25';

#Exercício 2
SELECT COUNT(*) AS quantidade_de_pagamentos FROM sakila.payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';

#Exercício 3
SELECT DATE(rental_date) AS Data,
YEAR(rental_date) AS ano,
MONTH(rental_date) AS mês,
DAY(rental_date) AS dia,
HOUR(rental_date) AS hora,
MINUTE(rental_date) AS minuto,
SECOND(rental_date) AS segundo
FROM sakila.rental
WHERE rental_id = 10330;

#Exercício 4
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-28'
AND HOUR(payment_date) >= 22;