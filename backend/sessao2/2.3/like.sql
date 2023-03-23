SELECT * FROM film
WHERE title LIKE '%ACE%';

SELECT * FROM film
WHERE description LIKE '%CHINA';

SELECT * FROM film
WHERE description LIKE '%GIRL%' AND title LIKE '%LORD';

SELECT * FROM film
WHERE title LIKE '___gon%';

SELECT * FROM film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';

SELECT * FROM film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';

SELECT * FROM film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';
