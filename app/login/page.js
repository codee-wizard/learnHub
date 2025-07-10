"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GraduationCap, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/page"

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      router.push("/home");
    } catch (error) {
      alert("Login failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-2">
            <GraduationCap className="h-10 w-10 text-violet-500" />
            <span className="text-2xl font-bold text-cyan-400">LearnHub</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-cormorant)' }} className="text-3xl font-bold mt-4 text-white-300">Welcome Back</h1>
          <br></br>
          <p className="text-gray-400">Sign in to continue your learning journey</p>
        </div>

        <div className="rounded-xl bg-gray-900 border border-violet-800 p-6 shadow-lg shadow-violet-500/10">
          <h2 className="text-xl font-semibold text-center mb-4 text-cyan-300">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-10 py-2 rounded bg-gray-800 border border-violet-700 text-white placeholder-gray-500 focus:border-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-10 pr-10 py-2 rounded bg-gray-800 border border-violet-700 text-white placeholder-gray-500 focus:border-cyan-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-300"
                >
                  {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-400 via-violet-500 to-blue-500 hover:opacity-90 text-black font-semibold py-3 rounded shadow-md shadow-cyan-500/20"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <p className="text-center text-gray-400 text-sm mt-4">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-cyan-400 hover:text-cyan-300">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
