const mysql = require('mysql2/promise');

const connection = mysql.createPool(
  {
    host: 'localhost',
    user: 'trybe',
    password: '06111995',
    database: 'model_example',
  }
);

module.exports = connection;