const { 
  getAllUsersFromDb,
  createUserOnDb,
  findUserOnDb,
  findIdOnDb,
} = require('../models/user.model');

const getAllUsers = async () => {
  const users = await getAllUsersFromDb();
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

const getUserById = async (id) => {
  const findById = await findIdOnDb(id);
  if (findById === null || findById === undefined) return [];
  return findById;
}

module.exports = {
  getAllUsers,
  addUser,
  getUser,
  getUserById,
}