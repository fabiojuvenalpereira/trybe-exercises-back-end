SELECT
  CONCAT(
    'o Projeto ',
    `Name`,
    ' Precisou de ',
    `Hours`,
    ' Horas para ser concluido'
  ) AS `Projetos`
FROM
  Projects;