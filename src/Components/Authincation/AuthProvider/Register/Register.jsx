import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let temp = {};
    if (!form.name) temp.name = "Name is required";
    if (!form.email) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) temp.email = "Email is invalid";
    if (!form.password) temp.password = "Password is required";
    if (form.password !== form.confirmPassword)
      temp.confirmPassword = "Passwords do not match";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration Successful!");
    }
  };

  return (
    <div className="mt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-200 to-orange-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden"
      >
        {/* Animated background bubbles */}
        <motion.div
          className="absolute -top-16 -left-16 w-40 h-40 bg-purple-300 rounded-full opacity-50 mix-blend-multiply animate-pulse"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-16 -right-16 w-56 h-56 bg-pink-300 rounded-full opacity-40 mix-blend-multiply animate-bounce"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center drop-shadow-lg">
          Create Account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className={`w-full px-4 py-3 rounded-xl border text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition ${
                errors.name ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1 absolute left-2 -bottom-5">
                {errors.name}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`w-full px-4 py-3 rounded-xl border text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition ${
                errors.email ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1 absolute left-2 -bottom-5">
                {errors.email}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className={`w-full px-4 py-3 rounded-xl border text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition ${
                errors.password ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1 absolute left-2 -bottom-5">
                {errors.password}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className={`w-full px-4 py-3 rounded-xl border text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition ${
                errors.confirmPassword ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-xs text-red-500 mt-1 absolute left-2 -bottom-5">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition-transform"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-gray-500 text-sm">
          Already have an account?{" "}
         <Link to='/login'> <span className="text-purple-500 font-semibold hover:underline cursor-pointer">
            Sign in
          </span>
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
