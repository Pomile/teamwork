import express from 'express';
import Users from '../controllers/user';
import UserInputValidation from '../middleware/user';
// import UserAuth from '../middleware/auth';

const { createUsers, loginUsers } = Users;
const { ValidateCreateUserInput, ValidateUserLoginInInput } = UserInputValidation;
// const { isAdmin } = UserAuth;


const userRouter = express.Router();


userRouter.post('/auth/create-user', ValidateCreateUserInput, createUsers);
userRouter.post('/auth/signin', ValidateUserLoginInInput, loginUsers);


export default userRouter;
