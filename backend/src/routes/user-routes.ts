import { Router } from "express";
import { getAllUsers, userSignUp } from "../controllers/user-controllers";
import { signupValidator, validate } from "../utils/validators";

const userRoutes = Router();

userRoutes.get('/', getAllUsers);
userRoutes.post('/signup', validate(signupValidator) ,userSignUp);
export default userRoutes;