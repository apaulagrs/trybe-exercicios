SELECT m.*
FROM pixar.movies AS m
LEFT JOIN pixar.theater AS t
ON m.theater_id = t.id
WHERE theater_id IS NOT NULL;

-- resposta

USE pixar;

SELECT
    m.id,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.theater_id
FROM
    movies m
INNER JOIN
    boxoffice b ON b.movie_id = m.id
WHERE
    b.rating > 8
        AND m.theater_id IS NOT NULL;