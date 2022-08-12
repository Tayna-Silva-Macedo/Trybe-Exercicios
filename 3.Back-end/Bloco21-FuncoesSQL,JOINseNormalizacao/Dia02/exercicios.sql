#Exercício 1
SELECT 
    M.title, B.domestic_sales, B.international_sales
FROM
    pixar.movies AS M
        INNER JOIN
    pixar.box_office AS B ON M.id = B.movie_id;

#Exercício 2
SELECT 
    M.title,
    B.domestic_sales + B.international_sales AS total_sales
FROM
    pixar.movies AS M
        INNER JOIN
    pixar.box_office AS B ON M.id = B.movie_id
WHERE
    B.international_sales > B.domestic_sales;

#Exercício 3
SELECT 
    M.title, B.rating
FROM
    pixar.movies AS M
        INNER JOIN
    pixar.box_office AS B ON M.id = B.movie_id
ORDER BY B.rating DESC;

#Exercício 4
SELECT 
    T.name,
    T.location,
    M.title,
    M.director,
    M.year,
    M.length_minutes
FROM
    pixar.theater AS T
        LEFT JOIN
    pixar.movies AS M ON T.id = M.theater_id
ORDER BY T.name ASC;

#Exercício 5
SELECT 
    M.title,
    M.director,
    M.year,
    M.length_minutes,
    T.name,
    T.location
FROM
    pixar.theater AS T
        RIGHT JOIN
    pixar.movies AS M ON T.id = M.theater_id
ORDER BY T.name ASC;