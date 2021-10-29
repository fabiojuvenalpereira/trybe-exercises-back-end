SELECT
  title
FROM
  Movies
WHERE
  id in (
    SELECT
      movie_id
    FROM
      BoxOffice
    WHERE
      rating > 7.5
  );