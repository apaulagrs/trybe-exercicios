INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, active, username) VALUES 
('Gabriella', 'Aguiar', 5, 2, 1, 'Gabriella');

INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, active, username) VALUES 
('Ana', 'Fagundes', 7, 2, 1, 'AnaF'),
('Julia', 'Neto', 7, 2, 0, 'JuliaN');

INSERT INTO sakila.actor (first_name, last_name) 
	SELECT first_name, last_name FROM sakila.staff
    LIMIT 5;
    
INSERT INTO sakila.category (name) VALUES 
('Romantic Comedy'),
('Psycho Horror'),
('Artificial Inteligency');

INSERT INTO sakila.store (manager_staff_id, address_id) VALUES 
(3, 3);