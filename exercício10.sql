SELECT
  DEPARTMENT_ID,
  ROUND (AVG(SALARY), 2) AS `Media`,
  COUNT(JOB_ID) AS `NUMEMP`
FROM
  employees
GROUP BY
  DEPARTMENT_ID
HAVING
  `NUMEMP` > 10;