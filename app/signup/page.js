"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GraduationCap, Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import { auth } from "../firebase/page";
import Navbar from "../components/Navbar";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    try {
      setIsLoading(true);
      const userCredential = await auth.createUserWithEmailAndPassword(
        formData.email,
        formData.password
      );
      await userCredential.user.updateProfile({
        displayName: formData.name,
      });

      alert("Signup successful! Welcome to LearnHub.");
      router.push('/');
    } catch (error) {
      console.error(error);
      alert("Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white pb-15">
            <Navbar/>
      <div className="flex items-center justify-center pt-6 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <GraduationCap className="h-20 w-20 text-violet-500" />
              <span className="text-5xl font-bold tracking-wide text-cyan-400">LearnHub</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-cormorant)' }} className="text-3xl font-bold mb-2 text-white">Join LearnHub</h1>
            <p className="text-gray-400">Create your account and unlock futuristic learning</p>
          </div>

          <div className="bg-gray-900 border border-[#5b21b6] rounded-lg shadow-md shadow-violet-700/20 p-6">
          <h2 className="text-xl font-semibold text-center mb-4 text-cyan-300">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: "name", label: "Full Name", icon: <User /> },
                { id: "email", label: "Email Address", icon: <Mail /> },
              ].map(({ id, label, icon }) => (
                <div key={id} className="space-y-2">
                  <label htmlFor={id} className="text-sm font-medium text-white-300">{label}</label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      {icon}
                    </div>
                    <input
                      id={id}
                      name={id}
                      type={id === 'email' ? 'email' : 'text'}
                      placeholder={`Enter your ${label.toLowerCase()}`}
                      value={formData[id]}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-violet-700 rounded text-white placeholder-gray-500 focus:ring-2 focus:ring-violet-500"
                      required
                    />
                  </div>
                </div>
              ))}

              {[
                { id: "password", label: "Password", visible: showPassword, toggle: setShowPassword },
                { id: "confirmPassword", label: "Confirm Password", visible: showConfirmPassword, toggle: setShowConfirmPassword },
              ].map(({ id, label, visible, toggle }) => (
                <div key={id} className="space-y-2">
                  <label htmlFor={id} className="text-sm font-medium text-white-300">{label}</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      id={id}
                      name={id}
                      type={visible ? 'text' : 'password'}
                      placeholder={label}
                      value={formData[id]}
                      onChange={handleChange}
                      className="w-full pl-10 pr-10 py-2 bg-gray-800 border border-violet-700 rounded text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => toggle(!visible)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400"
                    >
                      {visible ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="rounded border-violet-600 bg-gray-800 text-cyan-400 focus:ring-cyan-400"
                  required
                />
                <label htmlFor="terms" className="text-sm text-cyan-300">
                  I agree to the{' '}
                  <Link href="#" className="text-cyan-400 hover:text-violet-400 underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="#" className="text-cyan-400 hover:text-violet-400 underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-400 via-violet-500 to-blue-500 text-black font-semibold py-3 rounded shadow-md shadow-cyan-400/30 hover:brightness-110 transition-all duration-300"
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link href="/login" className="text-violet-300 hover:text-violet-200 underline font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
