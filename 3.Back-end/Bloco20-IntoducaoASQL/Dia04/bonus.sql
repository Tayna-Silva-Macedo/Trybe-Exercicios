#Exercício 8
SELECT * FROM Pixar.BoxOffice;

UPDATE Pixar.BoxOffice 
SET 
    rating = 9.0
WHERE
    movie_id IN (6 , 10);

#Exercício 9
SELECT * FROM Pixar.BoxOffice;

UPDATE Pixar.BoxOffice 
SET 
    rating = 6.0
WHERE
    movie_id IN (3 , 7, 8);

#Exercício 10
SELECT * FROM Pixar.Movies;

DELETE FROM Pixar.BoxOffice 
WHERE
    movie_id IN (1 , 6, 7, 8);

DELETE FROM Pixar.Movies 
WHERE
    id IN (1 , 6, 7, 8);