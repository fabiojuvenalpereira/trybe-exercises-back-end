const connection = require('./connection');

const getAllUsersFromDb = async () => {
  const query = connection.execute('SELECT id, last_name FROM authors');
  
  return query;
};

module.exports = {
  getAllUsersFromDb,
}