import { FoodItem } from "../schema/foodItemModel.js";
import { FoodPartner } from "../schema/foodPartnerModel.js";
import { uploadVideo } from "../services/storageImagekit.js";
const createFoodItem = async (req, res) => {
  try {
    const { name, description } = req.body;
    const {video} = req.file
    // console.log("Request Body:", req.body);
    const foodPartnerId = req.user.id // ✅ Authenticated partner se id
// console.log("Authenticated Food Partner ID:", foodPartnerId);
    // 🔒 Check if user is authenticated (middleware should have set req.user)
    if (!foodPartnerId) {
      return res.status(403).json({ message: "Access denied. Not authorized." });
    }

   
    if (!name || !description || !video) {
      return res
        .status(400)
        .json({ message: "Name , description and video are required" });
    }

    // Verify the food partner exists (extra safety)
    const partnerExists = await FoodPartner.findById(foodPartnerId);
    if (!partnerExists) {
      return res
        .status(404)
        .json({ message: "Food partner not found or unauthorized" });
    }

    //  Create food item
    const newFoodItem = await FoodItem.create({
      name,
      description,
      video,
      foodPartnerId: foodPartnerId,
    });

    return res
      .status(201)
      .json({ message: "Food item created successfully",  });
  } catch (error) {
    console.error("Error in creating food item:", error);
    return res.status(500).json({ message: "Internal Server Error" });
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

export { createFoodItem ,deleteFoodItem};
