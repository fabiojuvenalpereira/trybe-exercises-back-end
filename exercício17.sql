SELECT
  LAST_NAME AS `Sobrenome`,
  HIRE_DATE AS `Data de contratação`
FROM
  employees
WHERE
  YEAR(`HIRE_DATE`) = 1987;