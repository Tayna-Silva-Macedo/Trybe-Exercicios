#Exercício 1
SELECT piece, price FROM PiecesProviders.Provides
WHERE provider = 'RBT';

#Exercício 2
SELECT * FROM PiecesProviders.Provides
ORDER BY price DESC
LIMIT 5;

#Exercício 3
SELECT provider, price FROM PiecesProviders.Provides
ORDER BY price DESC
LIMIT 4 
OFFSET 2;

#Exercício 4
SELECT * FROM PiecesProviders.Provides
WHERE provider = 'HAL'
ORDER BY price DESC;

#Exercício 5
SELECT COUNT( DISTINCT provider) FROM PiecesProviders.Provides
WHERE piece = 1;