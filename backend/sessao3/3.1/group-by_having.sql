SELECT first_name, COUNT(first_name) AS 'quantidade' FROM sakila.actor
GROUP BY first_name;

SELECT COUNT(*) FROM sakila.actor;

-- exercicios

SELECT active, COUNT(*) FROM sakila.customer
GROUP BY active;

SELECT store_id, active, COUNT(active) FROM sakila.customer
GROUP BY store_id, active;

SELECT rating, AVG(length) FROM sakila.film
GROUP BY rating
ORDER BY AVG(length) DESC;

SELECT district, COUNT(*) FROM sakila.address
GROUP BY district
ORDER BY COUNT(*) DESC;
