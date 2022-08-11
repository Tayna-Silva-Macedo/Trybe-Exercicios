#1. Adicione os dois principais atores filme Matrix na tabela actor;
SELECT 
    *
FROM
    sakila.actor
ORDER BY actor_id DESC;

INSERT INTO sakila.actor (first_name, last_name)
VALUES 
	('Keanu', 'Reeves'),
	('Carrie-Anne', 'Moss');

#2. Adicione o filme Matrix 4 na tabela film;
SELECT 
    *
FROM
    sakila.film
ORDER BY film_id DESC;

INSERT INTO 
	sakila.film (title, language_id, rental_duration, rental_rate, replacement_cost)
VALUES
	('Matrix 4', 1, 4, 5.00, 25.00);

#3. Faça a ligação na tabela film_actor destes registros inseridos anteriormente;
SELECT 
    *
FROM
    sakila.film_actor
ORDER BY film_id DESC;

INSERT INTO sakila.film_actor (actor_id, film_id)
VALUES
	(201, 1001),
    (202, 1001);

#4. Insira na tabela inventory um registro com o id deste filme para a loja com id igual a 1;
SELECT 
    *
FROM
    sakila.inventory
ORDER BY inventory_id DESC;

INSERT INTO 
	sakila.inventory (film_id, store_id)
VALUES
	(1001, 1);

#5. Crie você como pessoa usuária na tabela customer (faça a associação do seu cadastro com um registro já existente na tabela address);
SELECT 
    *
FROM
    sakila.customer
ORDER BY customer_id DESC;

INSERT INTO 
	sakila.customer (store_id, first_name, last_name, email, address_id, create_date)
VALUES
	(1, 'TAYNÁ', 'MACÊDO', 'tayna_sm1996@hotmail.com', 50, now());

#6. Insira os dados de aluguel na tabela rental deste filme, como sendo realizado a retirada do filme no dia 09/08/2022;
SELECT 
    *
FROM
    sakila.rental
ORDER BY rental_id DESC;

INSERT INTO sakila.rental (rental_date, inventory_id, customer_id, staff_id)
VALUES
	(now(), 4582, 600, 1);

#7. Faça a atualização com a devolução do filme no dia de hoje (09/08/2022) na tabela rental, no registro que foi inserido anteriormente (return_date);
SELECT 
    *
FROM
    sakila.rental
ORDER BY rental_id DESC;

UPDATE sakila.rental 
SET 
    return_date = NOW()
WHERE
    rental_id = 16050;

#8. Faça o delete lógico (update) do seu usuário na tabela customer (mudar o status de active para 0);
SELECT 
    *
FROM
    sakila.customer
ORDER BY customer_id DESC;

UPDATE sakila.customer 
SET 
    active = 0
WHERE
    customer_id = 600;

#Bônus: deletar todos registros inseridos anteriormente;
-- Restauração do banco sakila