import React, { useState } from "react";
import { API } from "../../utils/Axios";
import { setAuth } from "../../store/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom"; // Import NavLink
import { ArrowRight } from 'lucide-react'; // Import icon for consistency

export const PartnerSign = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const BG_STYLE = "bg-gradient-to-br from-gray-900 via-black to-gray-800";
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showMessage = (message, isError = false) => {
    console.log(isError ? `ERROR: ${message}` : `SUCCESS: ${message}`);
    // Integrate Toast/Modal UI here
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post(
            "/food-partner/register",
            formData,
      );

      // 1. Dispatch authentication state
      dispatch(setAuth({
        user: res.data.user,
        role: res.data.role
      }));

      showMessage("Partner registration successful! 🎉", false);
      console.log(res.data.role)
     
      navigate('/partner/login'); 
      
    } catch (error) {
      console.error("Partner Signup Error:", error);
      showMessage(error.response?.data?.message || "Registration Failed ❌", true);
    }
    setLoading(false);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${BG_STYLE} px-4`}>
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-xl border border-gray-700 shadow-xl rounded-2xl p-8">
        
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
          Partner Signup 🍽️
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="block font-medium text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="partner@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-300 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Min 6 characters"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold transition hover:bg-orange-700 disabled:bg-gray-700 disabled:cursor-not-allowed"
          >
            {loading ? "Registering..." : "Create Partner Account"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 pt-4">
          Already a partner?{" "}
          <NavLink to="/partner/login" className="text-orange-400 font-medium hover:underline">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};
