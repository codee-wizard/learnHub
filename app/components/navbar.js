"use client"

import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Menu, X, Search, GraduationCap } from 'lucide-react';

  

export default function Navbar() {
    const pathname = usePathname();

    return(
        <nav className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-2 text-white hover:text-violet-500 transition-colors">
  <GraduationCap className="h-12 w-12 text-violet-500" />
  <span className="text-xl font-bold">LearnHub</span>
</a>
{/* pages */}
<div className="hidden md:flex items-center space-x-8">
      <Link
        href="/home"
        className={`transition-colors font-medium ${
          pathname === '/home'
            ? 'text-transparent bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text'
            : 'text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-violet-500 hover:bg-clip-text'
        }`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`transition-colors font-medium ${
          pathname === '/about'
            ? 'text-transparent bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text'
            : 'text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-violet-500 hover:bg-clip-text'
        }`}
      >
        About
      </Link>
      <Link
        href="/courses"
        className={`transition-colors font-medium ${
          pathname === '/courses'
            ? 'text-transparent bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text'
            : 'text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-violet-500 hover:bg-clip-text'
        }`}
      >
        Courses
      </Link>
      <Link
        href="/blog"
        className={`transition-colors font-medium ${
          pathname === '/blog'
            ? 'text-transparent bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text'
            : 'text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-violet-500 hover:bg-clip-text'
        }`}
      >
        Blog
      </Link>
    </div>


    <div className="flex items-center space-x-4 md:space-x-6">
  <Link
    href="/login"
    className="text-white font-medium hover:text-violet-500"
  >
    Login
  </Link>
  <Link
    href="/signup"
    className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-800"
  >
    Sign up
  </Link>

  <div className="md:hidden">
    <button>
      <Menu size={28} className="text-white" />
    </button>
  </div>
</div>


            </div>
            </div>
        </nav>
    )
}
