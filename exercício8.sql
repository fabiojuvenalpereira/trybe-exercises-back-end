SELECT
  JOB_ID,
  SUM(SALARY)
FROM
  employees
WHERE
  JOB_ID = 'IT_PROG'
GROUP BY
  JOB_ID;