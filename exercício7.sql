SELECT
  COUNT(fornecimento)
FROM
  Vendas
WHERE
  `Order_date` BETWEEN '2018-04-15'
  AND '2019-07-30';