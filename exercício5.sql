SELECT
  M.*,
  T.*
FROM
  Movies AS M
  RIGHT JOIN Theater AS T ON M.theater_id = T.id
ORDER BY
  T.`name`;