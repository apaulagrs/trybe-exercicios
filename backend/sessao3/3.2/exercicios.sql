SELECT m.title, b.domestic_sales, b.international_sales
FROM pixar.box_office AS b
INNER JOIN pixar.movies AS m
ON b.movie_id = m.id;

SELECT m.title, b.domestic_sales + b.international_sales AS total_sales
FROM pixar.box_office AS b
INNER JOIN pixar.movies AS m
ON b.movie_id = m.id
WHERE b.international_sales > b.domestic_sales
ORDER BY total_sales DESC;

SELECT m.title, b.rating
FROM pixar.movies AS m
INNER JOIN pixar.box_office AS b
ON b.movie_id = m.id
ORDER BY rating DESC;