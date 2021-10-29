SELECT
  movie_id
FROM
  BoxOffice
WHERE
  movie_id IN (
    SELECT
      id
    FROM
      Movies
    WHERE
      `year` >= 2009
  );