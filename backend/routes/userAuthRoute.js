import { userRegister ,userLogin, userLogout } from "../controller/userController.js";
import express from 'express'
 const router = express.Router();

 router.post('/register', userRegister)
 router.post('/login', userLogin)
 router.post('/logout', userLogout)

 export default router