SELECT
  M.title,
  (B.domestic_sales + B.international_sales) AS `Total de Vendas`
FROM
  Movies AS M
  JOIN BoxOffice AS B ON M.id = B.movie_id
  AND B.domestic_sales <= B.international_sales;