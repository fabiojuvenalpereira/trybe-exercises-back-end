SELECT
  T.*,
  M.*
FROM
  Theater AS T
  LEFT JOIN Movies AS M ON M.theater_id = T.id;