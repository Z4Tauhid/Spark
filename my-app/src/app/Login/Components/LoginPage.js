"use client";

import { useState } from "react";
import { Mail, Lock, AlertTriangle, Eye, EyeOff  } from "lucide-react";
import axios from "axios";
import { useUser } from "@/app/context/UserContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {setUser} = useUser()

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  const handleLogin = async (e) => {
    e.preventDefault();

    // 🔒 Password validation
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters, include uppercase, lowercase, and a number."
      );
      return;
    }

    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login", // your backend login route
        { email, password },
        { withCredentials: true } // important for cookies if you add JWT later
      );

      console.log(res.data)
      setUser(res.data.user);

      // ✅ Successful login
      alert(`Success! Welcome ${res.data.user.name}`);
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Login failed");
    }
  

    
  };

  const handleGoogleLogin = () => {
    console.log("Google login");
    // trigger Google auth here
  };


   const handleReset = () => {
    alert("Password reset flow goes here");
    // integrate Firebase or NextAuth reset
  };

  return (
    <section className="pt-5 pb-5  bg-[#f7f6f5] flex items-center justify-center px-4">
      
      {/* CARD */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8 md:p-10">
        
        {/* HEADER */}
        <div className="text-center mb-3">
          <h1 className="text-3xl font-bold text-gray-900">
            Employee Login
          </h1>
          <p className="text-gray-500 mt-2">
            Access is restricted to authorized staff
          </p>
        </div>

        {/*  WARNING */}
        <div className="flex items-start gap-3 bg-orange-50 border border-orange-200 text-orange-700 text-sm p-4 rounded-lg mb-3">
          <AlertTriangle size={18} className="mt-0.5" />
          <p>
            Only authorized employees can log in. Unauthorized access is restricted.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-2 ">

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <div className="mt-1 flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500">
              <Mail size={18} className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full outline-none text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <div className="mt-1 flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500">
              <Lock size={18} className="text-gray-400 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full outline-none text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* 👁 Toggle */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

           {/* ERROR MESSAGE */}
          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          {/* FORGOT PASSWORD */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleReset}
              className="text-sm text-orange-500 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Sign In
          </button>
        </form>

        
        

      </div>
    </section>
  );
}