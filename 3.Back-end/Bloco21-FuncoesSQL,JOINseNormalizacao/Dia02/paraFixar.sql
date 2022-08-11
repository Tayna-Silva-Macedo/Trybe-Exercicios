# Como utilizar o INNER JOIN

#Exercício 1
SELECT 
    act.actor_id, act.first_name, fil.film_id
FROM
    sakila.actor AS act
INNER JOIN
    sakila.film_actor AS fil 
    ON act.actor_id = fil.actor_id;

#Exercício 2
SELECT
	sta.first_name,sta.last_name, addr.address
FROM 
	sakila.staff AS sta
INNER JOIN
	sakila.address AS addr
    ON sta.address_id = addr.address_id;

#Exercício 3
SELECT 
    cus.customer_id,
    cus.first_name,
    cus.email,
    addr.address_id,
    addr.address
FROM
    sakila.customer AS cus
INNER JOIN
	sakila.address AS addr
    ON cus.address_id = addr.address_id
ORDER BY cus.first_name DESC
LIMIT 100;

#Exercício 4
SELECT
	cus.first_name,
    cus.email,
    addr.address_id,
    addr.address,
    addr.district
FROM
	sakila.customer AS cus
INNER JOIN
	sakila.address AS addr
    ON cus.address_id = addr.address_id
WHERE 
	addr.district = 'California' 
    AND first_name LIKE '%rene%';

#Exercício 5
SELECT
	cus.first_name,
    COUNT(addr.address) AS quantidade_de_enderecos
FROM
	sakila.customer AS cus
INNER JOIN
	sakila.address AS addr
    ON cus.address_id = addr.address_id
WHERE
	active IS TRUE
GROUP BY
	cus.customer_id
ORDER BY 
	cus.first_name DESC, last_name DESC;

#Exercício 6
SELECT
	sta.first_name,
    sta.last_name,
    AVG(pay.amount) AS media_de_pagamento
FROM
	sakila.staff AS sta
INNER JOIN
	sakila.payment AS pay
    ON sta.staff_id = pay.staff_id
WHERE
	YEAR(pay.payment_date) = 2006
GROUP BY
	sta.first_name, sta.last_name;

#Exercício 7
SELECT
	act.actor_id,
    act.first_name,
    fil.film_id,
    fil.title    
FROM
	sakila.actor AS act
INNER JOIN
	sakila.film_actor AS fila
    ON act.actor_id = fila.actor_id
INNER JOIN
	sakila.film AS fil
    ON fila.film_id = fil.film_id;
    
# O que é SELF JOIN e quando utilizá-lo

#Exercício 1
SELECT 
    CONCAT(emp.first_name, ' ', emp.last_name) AS pessoa_colaboradora,
    CONCAT(man.first_name, ' ', man.last_name) AS gerente
FROM
    hr.employees AS emp
INNER JOIN
	hr.employees AS man
    ON emp.manager_id = man.employee_id
WHERE
	emp.department_id <> man.department_id;

#Exercício 2
SELECT 
    CONCAT(man.first_name, ' ', man.last_name) AS gerente,
    COUNT(*) AS quantidade_de_pessoas_lideradas
FROM
    hr.employees AS man
INNER JOIN
	hr.employees AS emp
    ON emp.manager_id = man.employee_id
GROUP BY
	man.employee_id;