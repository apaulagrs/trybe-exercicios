SELECT A.actor_id, A.first_name, A.last_name, F.film_id
FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS F
ON A.actor_id = F.actor_id;

SELECT stf.first_name, stf.last_name, addr.address
FROM sakila.staff AS stf
INNER JOIN sakila.address AS addr
ON stf.address_id = addr.address_id;

SELECT cstm.customer_id, CONCAT(cstm.first_name, ' ', cstm.last_name) AS full_name, cstm.email, addr.address_id, addr.address
FROM sakila.customer AS cstm
INNER JOIN sakila.address AS addr
ON cstm.address_id = addr.address_id
ORDER BY cstm.first_name DESC LIMIT 100;

SELECT cstm.first_name, cstm.last_name, cstm.email, addr.address_id, addr.address, addr.district
FROM sakila.customer AS cstm
INNER JOIN sakila.address AS addr
ON cstm.address_id = addr.address_id
WHERE addr.district = 'California'
AND cstm.first_name LIKE '%RENE%';

