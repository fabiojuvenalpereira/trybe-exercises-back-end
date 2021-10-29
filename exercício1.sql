SELECT
  M.title,
  B.domestic_sales,
  B.domestic_sales
FROM
  Movies AS M
  INNER JOIN BoxOffice AS B ON M.movie_id = B.movie_id;