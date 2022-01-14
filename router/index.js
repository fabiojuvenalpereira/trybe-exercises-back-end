const express = require('express');
const { 
  getUsers,
  createUser,
  findUser,
  findUserById,
} = require('../controllers/user.controller');
const { verification } = require('../middlewares/verification.middleware'); 
const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.post('/user', verification, createUser);
userRouter.get('/:user', findUser);
userRouter.get('/user/:id', findUserById);


module.exports = userRouter;