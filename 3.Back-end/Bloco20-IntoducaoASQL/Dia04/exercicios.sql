#Exercício 1
SELECT * FROM Pixar.Movies;

INSERT INTO 
	Pixar.Movies (title, director, year, length_minutes)
VALUES 
	('Monstros SA', 'Pete Docter', 2001, 92),
    ('Procurando Nemo', 'John Lasseter', 2003, 107),
    ('Os Incríveis', 'Brad Bird', 2004, 116),
    ('WALL-E', 'Pete Docter', 2008, 104);

#Exercício 2
SELECT * FROM Pixar.BoxOffice;

INSERT INTO 
	Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES
	(9, 6.8, 450000000, 370000000);

#Exercício 3
SELECT * FROM Pixar.Movies;

UPDATE Pixar.Movies 
SET 
    director = 'Andrew Staton'
WHERE
    id = 9;

#Exercício 4
SELECT * FROM Pixar.Movies;

UPDATE Pixar.Movies 
SET 
    title = 'Ratatouille',
    year = 2007
WHERE
    id = 3;

#Exercício 5
SELECT * FROM Pixar.BoxOffice;

INSERT INTO 
	Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES
	(8, 8.5, 300000000, 250000000),
    (10, 7.4, 460000000, 510000000),
    (11, 9.9, 290000000, 280000000);

#Exercício 6
SELECT * FROM Pixar.Movies;

DELETE FROM Pixar.BoxOffice 
WHERE
    movie_id = 11;

DELETE FROM Pixar.Movies 
WHERE
    id = 11;

#Exercício 7
SELECT * FROM Pixar.Movies;

DELETE FROM Pixar.BoxOffice 
WHERE
    movie_id IN (2 , 9);

DELETE FROM Pixar.Movies 
WHERE
    id IN (2 , 9);