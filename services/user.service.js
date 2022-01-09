const { 
  getAllUsersFromDb,
  createUserOnDb,
} = require('../models/user.model');

const getAllUsers = async () => {
  const [users] = await getAllUsersFromDb();
  return users;
};

const addUser = async (user) => {
  const userCreated = await createUserOnDb(user);
  return userCreated;
};

const getUser = async (user) => {
  const findByuser = await findUserOnDb(user);
  return findByuser;
}

module.exports = {
  getAllUsers,
  addUser,
  getUser,
}