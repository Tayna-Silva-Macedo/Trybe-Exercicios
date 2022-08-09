# INSERT - adicionando dados em tabelas

#Exercício 1
INSERT INTO sakila.staff 
	(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES 
	('Tayná', 'Macêdo', 2, 'tayna_sm1996@hotmail.com', 1, 1, 'taynasm', 't1996');

SELECT * FROM sakila.staff;

#Exercício 2
INSERT INTO sakila.staff 
	(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES 
	('Vânia', 'Macêdo', 1, 'cdvania@gmail.com', 2, 1, 'cdvania', 'vania1971'),
    ('José Pereira', 'Macêdo', 1, 'pereira1962@gmail.com', 2, 1, 'pereira1962', '2911pe');

SELECT * FROM sakila.staff;

#Exercício 3
INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name
	FROM sakila.customer
	LIMIT 5;

SELECT * FROM sakila.actor;

#Exercício 4
INSERT INTO sakila.category (name)
VALUES 
	('Romance'),
    ('Fantasy'),
    ('Biography');

SELECT * FROM sakila.category;

#Exercício 5
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES 
	(3, 3);

SELECT * FROM sakila.store;

# UPDATE - alterando dados

#Exercício 1
SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.actor 
SET 
    first_name = 'JULES'
WHERE
    first_name = 'JULIA';

SELECT * FROM sakila.actor;

#Exercício 2
SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.category 
SET 
    name = 'Science Fiction'
WHERE
    name = 'Sci-fi';

SELECT * FROM sakila.category;

#Exercício 3
SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.film 
SET 
    rental_rate = 25
WHERE
    length > 100
        AND rating IN ('G' , 'PG', 'PG-13')
        AND replacement_cost > 20;
        
SELECT * FROM sakila.film;

#Exercício 4
SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.film 
SET 
    rental_rate = (CASE
        WHEN length BETWEEN 0 AND 100 THEN 10
        WHEN length > 100 THEN 20
    END);
        
SELECT * FROM sakila.film;

# DELETE - removendo dados de uma tabela

#Exercício 1
SET SQL_SAFE_UPDATES = 0;

DELETE FROM sakila.film_actor 
WHERE
    actor_id = 12;

DELETE FROM sakila.actor 
WHERE
    first_name = 'KARL';

SELECT * FROM sakila.actor;

#Exercício 2
SET SQL_SAFE_UPDATES = 0;

DELETE FROM sakila.film_actor 
WHERE
    actor_id IN (8, 103, 181);

DELETE FROM sakila.actor 
WHERE
    first_name = 'MATTHEW';

SELECT * FROM sakila.actor;

#Exercício 3
SET SQL_SAFE_UPDATES = 0;

DELETE FROM sakila.film_text 
WHERE
    description LIKE '%saga%';

#Exercício 4
SET SQL_SAFE_UPDATES = 0;

TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;