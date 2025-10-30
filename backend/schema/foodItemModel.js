import { Schema, model } from "mongoose";

const foodSchema = new Schema({
    name:{ type: String, required:true, trim: true},
    description:{ type: String, required:true, trim: true},
    
    video:{ type: String, required:true, trim: true},
    
    foodPartnerId:{ type: Schema.Types.ObjectId, ref: 'FoodPartner', required:true }
}, { timestamps:true})

export const FoodItem = model('FoodItem', foodSchema)   
