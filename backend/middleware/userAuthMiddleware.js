import { User } from '../schema/userModel.js'
import jwt from 'jsonwebtoken'
export const userAuth = async(req,res,next)=>{
    try {
        const token = req.cookies.token
        if(!token){
            return res.status(401).json({message : "Unauthorized: No token provided"})
        }
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        const userData = await User.findById(decode.id).select('-password')
        if(!userData){
            return res.status(404).json({message : "User not found"})
        }
        req.user = userData
        next()
    } catch (error) {
        console.log("Authentication error:", error);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}