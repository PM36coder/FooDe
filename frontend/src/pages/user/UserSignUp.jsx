import React, { useState } from "react";
import { API } from "../../utils/Axios";
import { setAuth } from "../../store/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const UserSignup = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: ""
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
            "/user/register",
            form,
            
          );
          dispatch(setAuth({
            user: res.data.user,
            role: res.data.role
          }))
    
      alert("Signup Successful ✅");
      navigate('/user/login')
    } catch (error) {
      alert(error.response?.data?.message || "Signup Failed ❌");
    }

    setLoading(false);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-black to-gray-800 px-4">
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-xl border border-gray-700 shadow-xl rounded-2xl p-8">

        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
          Create Account ✨
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="text-gray-300 text-sm">Full Name</label>
            <input
              name="fullname"
              type="text"
              placeholder="Enter full name"
              className="w-full mt-1 p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              value={form.fullname}
              onChange={handleChange}
              required
            />
          </div>

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
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

          <p className="text-gray-400 text-sm text-center pt-2">
            Already have an account?{" "}
            <a href="/user/login" className="text-purple-400 hover:underline">
              Login
            </a>
          </p>

        </form>
      </div>
    </div>
  );
};
