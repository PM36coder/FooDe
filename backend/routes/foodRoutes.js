import express from 'express';
import FoodPartnerAuth from '../middleware/foodMiddleware.js';
import { createFoodItem, deleteFoodItem } from '../controller/foodController.js';
import multer from 'multer';

const upload = multer({
    storage: multer.memoryStorage(),
})
const router = express.Router()

router.post('/add',FoodPartnerAuth ,upload.single('video'),createFoodItem)
router.delete('/delete/:id', FoodPartnerAuth,deleteFoodItem)

export default router;