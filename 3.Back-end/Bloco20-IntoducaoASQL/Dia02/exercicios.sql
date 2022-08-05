#Exercício 1
SELECT 'This is SQL Exercise, Practice and Solution.';

#Exercício 2
SELECT 1, 2, 3;

#Exercício 3
SELECT 10 + 15;

#Exercício 4
SELECT (4 + 8) * 50;

#Exercício 5
SELECT * FROM Scientists.Scientists;

#Exercício 6
SELECT name AS 'nome_do_projeto', hours AS 'tempo_de_trabalho' FROM Scientists.Projects;

#Exercício 7
SELECT name FROM Scientists.Scientists
ORDER BY name ASC;

#Exercício 8
SELECT name FROM Scientists.Projects
ORDER BY name DESC;

#Exercício 9
SELECT CONCAT ('O projeto ', name, ' precisou de ', hours, ' horas para ser concluído.') FROM Scientists.Projects;

#Exercício 10
SELECT name, hours FROM Scientists.Projects
ORDER BY hours DESC
LIMIT 3;

#Exercício 11
SELECT DISTINCT project FROM Scientists.AssignedTo;

#Exercício 12
SELECT name FROM Scientists.Projects
ORDER BY hours DESC
LIMIT 1;

#Exercício 13
SELECT name FROM Scientists.Projects
ORDER BY hours ASC
LIMIT 1 OFFSET 1;

#Exercício 14
SELECT * FROM Scientists.Projects
ORDER BY hours ASC
LIMIT 5;

#Exercício 15
SELECT CONCAT('Existem ', COUNT( name ), ' cientistas na tabela Scientists.') AS resultado FROM Scientists.Scientists;
