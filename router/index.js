const express = require('express');
const { getUsers, createUser, findUser } = require('../controllers/user.controller');
const { verification } = require('../middlewares/verification.middleware'); 
const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.post('/user', verification, createUser);
userRouter.get('/user', findUser);


module.exports = userRouter;