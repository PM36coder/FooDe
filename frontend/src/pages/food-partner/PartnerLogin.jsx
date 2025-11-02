import React, { useState } from "react";
import { API } from "../../utils/Axios";
// import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuth } from "../../store/UserSlice";

export const PartnerLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post(
        "/food-partner/login",
        form,
        
      );
dispatch(setAuth({
  user: res.data.user,
  role:res.data.role
}))
     // redirect food partner
     alert("Login ho gya hai")
     navigate('/partner/create-food')
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed ❌");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-black to-gray-800 px-4">
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-xl border border-gray-700 shadow-xl rounded-2xl p-8">

        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
          Food Partner Login 🍽️
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter email"
              className="w-full mt-1 p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              className="w-full mt-1 p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all p-3 rounded-lg font-semibold disabled:bg-gray-700 disabled:cursor-not-allowed"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

          <p className="text-gray-400 text-sm text-center pt-2">
            Not a partner yet?{" "}
            <a href="/partner/signup" className="text-purple-400 hover:underline">
              Register as Partner
            </a>
          </p>

        </form>
      </div>
    </div>
  );
};
