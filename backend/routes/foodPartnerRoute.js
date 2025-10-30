
import express from 'express'
import {  foodPartnerLogin, foodPartnerLogout, foodPartnerRegister } from '../controller/foodPartnerController.js';
 const router = express.Router();

 router.post('/register', foodPartnerRegister)
 router.post('/login', foodPartnerLogin)
 router.get('/logout', foodPartnerLogout)
//  router.delete("/logout/:id", foodPartnerDelete);

 export default router