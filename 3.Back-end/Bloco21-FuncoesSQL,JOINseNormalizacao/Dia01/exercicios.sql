#Exercício 1
SELECT 
    MAX(salary) AS maior_salario
FROM
    hr.employees;
    
#Exercício 2
SELECT 
    MAX(salary) - MIN(salary) AS diferenca_de_salarios
FROM
    hr.employees;

#Exercício 3
SELECT 
    job_id, AVG(salary) AS media_salarial
FROM
    hr.employees
GROUP BY job_id
ORDER BY media_salarial DESC;

#Exercício 4
SELECT 
    SUM(salary) AS soma_de_salarios
FROM
    hr.employees;

#Exercício 5
SELECT 
    ROUND(MAX(salary), 2) AS maior_salario,
    ROUND(MIN(salary), 2) AS menor_salario,
    ROUND(SUM(salary), 2) AS soma_de_salarios,
    ROUND(AVG(salary), 2) AS media_de_salarios
FROM
    hr.employees;

#Exercício 6
SELECT 
    COUNT(first_name) AS quantidade_de_programadores
FROM
    hr.employees
WHERE
    job_id = 'it_prog';

#Exercício 7
SELECT 
    job_id, SUM(salary) AS dinheiro_necessario
FROM
    hr.employees
GROUP BY job_id;

#Exercício 8
SELECT 
    job_id, SUM(salary) AS dinheiro_necessario
FROM
    hr.employees
GROUP BY job_id
HAVING job_id = 'it_prog';

#Exercício 9
SELECT 
    job_id, AVG(salary) AS media_salarial
FROM
    hr.employees
GROUP BY job_id
HAVING job_id <> 'it_prog'
ORDER BY media_salarial DESC;

#Exercício 10
SELECT 
    department_id,
    AVG(salary) AS media_salarial,
    COUNT(first_name) AS numero_de_funcionarios
FROM
    hr.employees
GROUP BY department_id
HAVING numero_de_funcionarios > 10;

#Exercício 11
UPDATE hr.employees 
SET 
    phone_number = REPLACE(phone_number, '515', '777')
WHERE
    phone_number LIKE '515%';

#Exercício 12
SELECT 
    *
FROM
    hr.employees
WHERE
    CHAR_LENGTH(first_name) >= 8;

#Exercício 13
SELECT 
    employee_id,
    first_name,
    YEAR(hire_date) AS ano_de_contratacao
FROM
    hr.employees;

#Exercício 14
SELECT 
    employee_id,
    first_name,
    DAY(hire_date) AS dia_de_contratacao
FROM
    hr.employees;

#Exercício 15
SELECT 
    employee_id,
    first_name,
    MONTH(hire_date) AS mes_de_contratacao
FROM
    hr.employees;

#Exercício 16
SELECT 
    UCASE(CONCAT(first_name, ' ', last_name)) AS nome
FROM
    hr.employees;

#Exercício 17
SELECT 
    last_name, hire_date
FROM
    hr.employees
WHERE
    MONTH(hire_date) = 7
        AND YEAR(hire_date) = 1987;

#Exercício 18
SELECT 
    first_name,
    last_name,
    DATEDIFF(CURRENT_DATE(), hire_date) AS quantidade_de_dias_na_empresa
FROM
    hr.employees;