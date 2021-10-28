SELECT
  EMPLOYEE_ID AS `ID`,
  FIRST_NAME AS `Primeiro Nome`,
  MONTH(HIRE_DATE) AS `Ano de contratação`
FROM
  employees;