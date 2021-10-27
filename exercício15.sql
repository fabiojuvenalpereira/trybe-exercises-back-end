SELECT
  CONCAT(
    'Existem ',
    COUNT(`Name`),
    ' Cientistas na tabela Scientists'
  )
FROM
  Scientists;