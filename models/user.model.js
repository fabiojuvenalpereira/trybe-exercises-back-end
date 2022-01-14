const connection = require('./connection');

const getAllUsersFromDb = async () => {
  // return connection().then((db) => db.collection('authors').find({}).toArray());
  
  const conn = await connection();
  const query = await conn.collection('authors').find({}).toArray();

  return query;
};


const createUserOnDb = async ({firstName, lastName, email, password}) => {
  const conn = await connection();
  const { insertedId } = await conn.collection('authors').insertOne({
    firstName, lastName, email, password
  });
  return {
    message: 'user been created',
    id: insertedId,
    name: (`${firstName} ${lastName}` ),
    email,
  };
}

const findUserOnDb = async (user) => {
  const conn = await connection();
  const userReturn = await conn.collection('authors')
    .findOne(
      { firstName: `${user}` }
    );
  return userReturn;
}

const findIdOnDb = async (id) => {
  const conn = await connection();
  const userReturn = await conn.collection('authors')
    .findOne(
      { _id: `${id}` }
    );
  return userReturn;
}


module.exports = {
  getAllUsersFromDb,
  createUserOnDb,
  findUserOnDb,
  findIdOnDb,
};