import { FoodPartner } from "../schema/foodPartnerModel.js";
import jwt from "jsonwebtoken";

const FoodPartnerAuth = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const FoodPartnerData = await FoodPartner.findById(decode.id).select("-password");

    if (!FoodPartnerData) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    req.user = FoodPartnerData;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default FoodPartnerAuth;
