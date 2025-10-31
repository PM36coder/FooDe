import { FoodItem } from "../schema/foodItemModel.js";
import { FoodPartner } from "../schema/foodPartnerModel.js";
import { uploadVideo } from "../services/storageImagekit.js";

const createFoodItem = async (req, res) => {
  try {
    const { name, description } = req.body;
    const file = req.file;

    console.log("Received file:", file);
    const foodPartnerId = req.user.id;

    if (!name || !description || !file) {
      return res.status(400).json({ message: "Name, description, and video are required" });
    }

    const videoUrl = await uploadVideo(file.buffer, file.originalname);
console.log("Uploaded video URL:", videoUrl);

    const newFoodItem = await FoodItem.create({
      name,
      description,
      video: videoUrl,
      foodPartnerId,
    });

    res.status(201).json({
      message: "Food item created successfully",
      data: newFoodItem
    });

  } catch (error) {
    console.log("Error in creating food item:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};




const deleteFoodItem = async (req,res)=>{
    const foodItemId = req.params.id;
    const foodPartnerId = req.user.id;

    try {
        
        const foodPartner = await FoodPartner.findById(foodPartnerId);
        if(!foodPartner){
            return res.status(403).json({message :"Access denied. Not authorized."})
        }

        const foodItem = await FoodItem.findById(foodItemId);
        if(!foodItem){
            return res.status(404).json({message :"Food not found"})
        }

        //!  Check if the food item belongs to the food partner
        if(foodItem.foodPartnerId.toString() !== foodPartnerId){
            return res.status(403).json({message :"Access denied. Not authorized."})
        }

        await FoodItem.findByIdAndDelete(foodItemId);
        return res.status(200).json({message :"Food item deleted successfully"})

        

    } catch (error) {
        console.error("Error in deleting food item:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


const getAllFoodItems = async (req,res)=>{

  try{
    const foodItems = await FoodItem.find().populate('foodPartnerId', 'name email').sort({createdAt: -1});

    return res.status(200).json({data: foodItems})

  }catch(error){
    console.error("Error in getting all food items:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
export { createFoodItem ,deleteFoodItem ,getAllFoodItems};
