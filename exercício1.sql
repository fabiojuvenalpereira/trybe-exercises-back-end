USE sakila;
CREATE VIEW film_with_categories AS 
  SELECT
    F.title AS título,
    FC.category_id AS id,
    C.name AS nome
  FROM film AS F
    JOIN film_category AS FC ON F.film_id = FC.film_id
    JOIN category AS C ON C.category_id = FC.category_id;