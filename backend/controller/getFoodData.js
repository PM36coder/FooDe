import { FoodItem } from "../schema/foodItemModel.js";

const getFoodPartnerFoodItems = async (req, res) => {

    const foodPartnerId = req.user.id;
    try {
        const foodItems = await FoodItem.find({ foodPartnerId});
        if(foodItems.length === 0){
            return res.status(404).json({message :"No food items found for this food partner"})
        }
        if(!foodItems){
            return res.status(404).json({message :"Food items not found"})
        }

        res.status(200).json({
            message: "Food items fetched successfully",
            data: foodItems
        });
    } catch (error) {
        console.log("Error in fetching food items:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export { getFoodPartnerFoodItems}