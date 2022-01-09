const { 
  getAllUsers,
  addUser,
  getUser,
} = require('../services/user.service');

const getUsers = async ( _req, res, next) => {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users);
  } catch(err) {
    console.log(err.message);
    return next(err);
  }
}

const createUser = async (req, res, next ) => {
  try {
    const user = req.body;
    const userCreated = await addUser(user)
    return res.status(201).json(userCreated);
  } catch(e) {
    console.log(e.message);
    return next(e);
  }
}

const findUser = async (req, res, next) => {
  try {
    const user = req.params;
    console.log(user);
    const findUser =  await getUser(user)
    return res.status(200).json(findUser);
  } catch(e) {
    console.log(e.message);
    return next(e)
  }
}

module.exports = {
  getUsers,
  createUser,
  findUser
}