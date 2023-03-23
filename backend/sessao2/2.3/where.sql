 USE sakila;
 
 SELECT * FROM customer
 WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
 
 SELECT first_name FROM customer
 WHERE active = 0
 AND store_id = 2
 AND first_name <> 'KENNETH'
 ORDER BY first_name;
 
 SELECT title, description, release_year, rating, replacement_cost FROM film
 WHERE rating <> 'NC-17'
 AND replacement_cost >= 18
 ORDER BY replacement_cost DESC, title
 LIMIT 100;
 
 SELECT COUNT(*) FROM customer
 WHERE active = 1 AND store_id = 1;
 
 SELECT * FROM customer
 WHERE active <> 1 AND store_id = 1;
 
 SELECT * FROM film
 WHERE rating = 'NC-17'
 ORDER BY rental_rate, title
 LIMIT 50;