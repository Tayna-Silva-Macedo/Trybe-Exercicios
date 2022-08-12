#Exercício 6
SELECT 
    M.title,
    M.director,
    M.year,
    M.length_minutes,
    B.rating,
    B.domestic_sales,
    B.international_sales,
    T.name AS theater_name,
    T.location AS theater_location
FROM
    pixar.movies AS M
        INNER JOIN
    pixar.box_office AS B ON M.id = B.movie_id
		INNER JOIN
	pixar.theater AS T ON M.theater_id = T.id
WHERE
    M.theater_id IS NOT NULL
        AND B.rating > 8;
    