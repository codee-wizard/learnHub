"use client";

import React from "react";
import courses from "../data/courses.json"; 
import Link from "next/link";
import Navbar from "../components/Navbar";
import { Star } from "lucide-react";
import Image from "next/image";


const Courseslist = [
    {
      id: 1,
      subject: "HTML Basics",
      level: "Beginner",
      price: "$99",
      rating: 4.8,
      duration: "4 weeks",
      students: 1200,
      instructor: "John Doe",
      features: ["Live sessions", "Hands-on projects", "Certificate"],
      category: "Programming",
      image: "/img/html.jpg",
    },
    {
      id: 2,
      subject: "CSS Mastery",
      level: "Beginner",
      price: "$109",
      rating: 4.7,
      duration: "5 weeks",
      students: 980,
      instructor: "Jane Smith",
      features: ["Design projects", "Animations", "Flex/Grid"],
      category: "Design",
      image: "/img/css.png",
    },
    {
      id: 3,
      subject: "JavaScript Essentials",
      level: "Intermediate",
      price: "$129",
      rating: 4.9,
      duration: "6 weeks",
      students: 1432,
      instructor: "Alex Johnson",
      features: ["ES6+", "Async programming", "DOM Projects"],
      category: "Programming",
      image: "/img/js.png",
    },
    {
      id: 4,
      subject: "Python for Beginners",
      level: "Beginner",
      price: "$119",
      rating: 4.6,
      duration: "5 weeks",
      students: 875,
      instructor: "Michael Chen",
      features: ["Real projects", "Libraries", "Certification"],
      category: "Data Science",
      image: "/img/python.jpg",
    },
    {
      id: 5,
      subject: "Scratch Programming",
      level: "Beginner",
      price: "$89",
      rating: 4.5,
      duration: "3 weeks",
      students: 640,
      instructor: "Emily Rodriguez",
      features: ["Drag-n-drop", "Game dev", "Storytelling"],
      category: "Kids",
      image: "/img/scratch.png",
    },
  ];
  

  
export default function CourseslistCourseslistPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="relative h-[45vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://i.pinimg.com/1200x/82/5c/74/825c74e8f75d6254eee7f2a50a404238.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        {/* Heading */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <h1 style={{ fontFamily: 'var(--font-merienda)' }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Start your learning</span>{' '}
            <span className="text-white">journey</span>{' '}
            <span className="text-white">today</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-cormorant)' }} className="font-[var(--font-dancing-script)]  max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-200 ">
          Discover our comprehensive Courseslist designed by industry experts. Learn at your own pace with interactive lessons, quizzes, and hands-on projects.
          </p>
        </div>
      </section>
        {/* avail-Courseslist */}


        <div className="min-h-screen bg-black text-white py-10 px-4 md:px-10">
      <h1 style={{ fontFamily: 'var(--font-cormorant)' }} className="text-4xl font-bold mb-8">Available Courseslist - </h1>
      <div className="overflow-x-auto hide-scrollbar py-4">
  <div className="flex gap-9 min-w-max">
    {Courseslist.map((course) => (
      <div
        key={course.id}
        className="min-w-[300px] max-w-[300px] bg-[#1c1f26] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
      >
        <div className="relative h-44 w-full">
          <Image
            src={course.image}
            alt={course.subject}
            width={400}
            height={180}
            className="rounded-t-xl object-cover w-full h-44"
          />
        </div>
        <div className="p-4 space-y-2">
          <div className="text-sm text-green-400 font-semibold">{course.level}</div>
          <div className="text-xl font-semibold">{course.subject}</div>
          <div className="text-green-400 font-bold">{course.price}</div>
          <div className="text-gray-400 text-sm flex justify-between">
            <span>{course.students} students</span>
            <span>{course.duration}</span>
          </div>
          <div className="text-sm">
            Instructor: <span className="font-medium">{course.instructor}</span>
          </div>
          <ul className="text-sm text-gray-300 list-disc ml-5">
            {course.features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>
          <button className="w-full mt-3 bg-green-400 text-black font-semibold py-2 rounded hover:bg-green-500 transition">
            Enroll Now
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
    </div>
  );
}
