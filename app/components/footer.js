"use client"

import React  from 'react';
import Link from "next/link";
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer(){
    return(
<footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">


{/* logo and description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">LearnHub</span>
            </div>
            <p className="text-gray-400">
              Dive into interactive learning that actually sticks. Join thousands of learners shaping their future with us.
            </p>
          </div>

          {/* quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-violet-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* contact inf */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-cyan-400" />
                support@learnhub.com
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-cyan-400" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-cyan-400" />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} LearnHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
    )
}