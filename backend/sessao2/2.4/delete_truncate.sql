SET SQL_SAFE_UPDATES = 0;

DELETE FROM sakila.film_text
WHERE title = 'ACADEMY DINOSAUR';

DELETE FROM sakila.actor
WHERE first_name = 'GRACE';

DELETE FROM sakila.film_actor
WHERE actor_id = 12;
DELETE FROM sakila.actor
WHERE first_name = 'KARL';

SELECT actor_id, first_name FROM sakila.actor
WHERE first_name = 'MATTHEW';
DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);
DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

SELECT * FROM sakila.film_text;
DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';

TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
