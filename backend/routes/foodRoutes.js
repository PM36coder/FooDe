import express from 'express';
import FoodPartnerAuth from '../middleware/foodMiddleware.js';
import { createFoodItem, deleteFoodItem, getAllFoodItems } from '../controller/foodController.js';
import { userAuth } from '../middleware/userAuthMiddleware.js';
import multer from 'multer';

const upload = multer({
    storage: multer.memoryStorage(),
})
const router = express.Router()

router.post('/add',FoodPartnerAuth ,upload.single('video'),createFoodItem)
router.delete('/delete/:id', FoodPartnerAuth,deleteFoodItem)

//!get food api [public route]
router.get('/all-foods', userAuth,getAllFoodItems)
export default router;