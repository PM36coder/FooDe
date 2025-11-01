import { FoodPartner } from "../schema/foodPartnerModel.js"; 
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const foodPartnerRegister = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  }

  try {
    const existsUser = await FoodPartner.findOne({ email });
    if (existsUser) {
      return res.status(409).json({ message: "User Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await FoodPartner.create({
      email,
      password: hashedPassword,
      name,
    });

    user.password = undefined;
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    return res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 2 * 24 * 60 * 60 * 1000,
      })
      .status(201)
      .json({ message: "User Registered Successfully", user,role:'partner', success:true });
  } catch (error) {
    console.error("Error in user registration:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const foodPartnerLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const user = await FoodPartner.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Invalid Credential" });
    }
    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    user.password = undefined;
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });
    return res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 2 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({ message: "Login Successful", user,role:'partner', success:true });
  } catch (error) {
    console.error("Error in user registration:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const foodPartnerLogout = (req, res) => {
  try {
    //! Clear the cookie
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    });

    return res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.error("Error in user logout:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// const foodPartnerDelete = async (req, res) => {
//   try {
//     const userId = req.params.id; // or from req.body if you're sending it in body

//     if (!userId) {
//       return res.status(400).json({ message: "User ID is required" });
//     }

//     // Delete user from DB
//     const deletedUser = await FoodPartner.findByIdAndDelete(userId);

//     if (!deletedUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Clear token cookie
//     res.clearCookie("token", {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
//     });

//     return res
//       .status(200)
//       .json({ message: "User account deleted and logged out successfully" });
//   } catch (error) {
//     console.error("Error in user logout/delete:", error);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// };


export { foodPartnerRegister, foodPartnerLogin, foodPartnerLogout };
