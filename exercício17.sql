SELECT
  LAST_NAME AS `Sobrenome`,
  HIRE_DATE AS `Data de contratação`
FROM
  employees
WHERE
  MONTH(`HIRE_DATE`) = 7
  AND YEAR(`HIRE_DATE`) = 1987;