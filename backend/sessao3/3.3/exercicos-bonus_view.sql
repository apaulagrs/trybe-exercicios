USE sakila;

CREATE VIEW film_info AS
	SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS actor, f.title
    FROM sakila.actor AS a
    INNER JOIN sakila.film_actor AS fa
    INNER JOIN sakila.film AS f
    ON a.actor_id = fa.actor_id AND fa.film_id = f.film_id
    ORDER BY actor;
    
SELECT * FROM film_info;

DROP VIEW film_info;

CREATE VIEW address_info AS
	SELECT a.address_id, a.address, a.district, c.city_id, c.city
    FROM sakila.address AS a
    INNER JOIN sakila.city AS c
    ON a.city_id = c.city_id
    ORDER BY city;
    
SELECT * FROM address_info;
