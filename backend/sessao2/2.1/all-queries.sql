SELECT title, release_year, rental_duration, rental_rate, replacement_cost FROM sakila.film 
ORDER BY rental_duration DESC, replacement_cost
LIMIT 20;