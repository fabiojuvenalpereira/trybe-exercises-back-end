const { 
  getAllUsers,
  addUser,
  getUser,
  getUserById
} = require('../services/user.service');

const getUsers = async (_req, res, next) => {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users);
  } catch (err) {
    console.log(err.message);
    return next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const user = req.body;
    const userExists = await getUser(user.firstName);
    if (userExists) return res.status(401).json({ message: 'user already exists in db' });
    const userCreated = await addUser(user);
    return res.status(201).json(userCreated);
  } catch (e) {
    console.log(e.message);
    return next(e);
  }
};

const findUser = async (req, res, next) => {
  try {
    const { user } = req.params;
    const findUser = await getUser(user);
    if(findUser === null) res.status(200).json({ message: 'usuário não encontrado'});
    return res.status(200).json(findUser);
  } catch (e) {
    console.log(e.message);
    return next(e);
  }
};

const findUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findUser = await getUserById(id);
    return res.status(200).json(findUser);
  } catch (e) {
    console.log(e.message);
    return next(e);
  }
};

module.exports = {
  getUsers,
  createUser,
  findUser,
  findUserById,
};
