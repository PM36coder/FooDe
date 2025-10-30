import express from 'express';
import FoodPartnerAuth from '../middleware/foodMiddleware.js';
import { getFoodPartnerFoodItems } from '../controller/getFoodData.js';

const router = express.Router()

router.get('/get-food', FoodPartnerAuth, getFoodPartnerFoodItems)
export default router;
