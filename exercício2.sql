USE sakila;
CREATE VIEW film_info AS
  SELECT
    A.actor_id AS `actor_id`,
    CONCAT(A.first_name," ",A.last_name) AS `nome completo`,
    F.title AS `titulo`
  FROM actor AS A
    JOIN film_actor AS FA 
    ON FA.actor_id = A.actor_id
    JOIN film AS F
    ON F.film_id = FA.film_id;
