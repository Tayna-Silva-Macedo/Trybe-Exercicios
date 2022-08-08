#Exercício 1
SELECT * FROM Scientists.Scientists
WHERE name LIKE '%e%';

#Exercício 2
SELECT name FROM Scientists.Projects
WHERE code LIKE 'a%'
ORDER BY name ASC;

#Exercício 3
SELECT code, name FROM Scientists.Projects
WHERE code LIKE '%3%'
ORDER BY name ASC;

#Exercício 4
SELECT scientist FROM Scientists.AssignedTo
WHERE project IN ('AeH3', 'Ast3', 'Che1');

#Exercício 5
SELECT * FROM Scientists.Projects
WHERE hours > 500;

#Exercício 6
SELECT * FROM Scientists.Projects
WHERE hours BETWEEN 250 AND 800;

#Exercício 7
SELECT name, code FROM Scientists.Projects
WHERE name NOT LIKE 'a%';

#Exercício 8
SELECT name FROM Scientists.Projects
WHERE code LIKE '%h%';