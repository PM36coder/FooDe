import React, { useState } from "react";

export const PartnerSign = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Partner Signup Data:", formData);
    // TODO: API call for partner signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-black to-gray-800">
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-xl border border-gray-700 shadow-xl rounded-2xl p-8">
        
        <h2 className="text-2xl font-bold text-white text-center">
          Partner Signup 🍽️
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block font-medium text-white mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Restaurant / Shop name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-white border rounded-lg focus:ring focus:ring-indigo-300 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="partner@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-white border rounded-lg focus:ring focus:ring-indigo-300 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Min 6 characters"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-white border rounded-lg focus:ring focus:ring-indigo-300 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold transition hover:bg-indigo-700"
          >
            Create Partner Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already a partner?{" "}
          <a href="/partner-login" className="text-indigo-600 font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};
