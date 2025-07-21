"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { Star ,ChevronDown} from "lucide-react";
import Image from "next/image";
import Footer from '../components/Footer'
import courseData from '../data/courses.json'

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
   
   
  ];
  
  const faqs = [
    {
      question: "How do the interactive lessons work?",
      answer: "Our interactive lessons combine video content, hands-on exercises, code editors, and real-time feedback. You'll practice what you learn immediately, making the experience engaging and effective."
    },
    {
      question: "What happens if I don't pass a quiz?",
      answer: "Don't worry! You can retake quizzes as many times as needed. Each quiz provides detailed explanations for all answers, helping you learn from mistakes and improve your understanding."
    },
    {
      question: "Can I access courses on mobile devices?",
      answer: "Yes! Our platform is fully responsive and works seamlessly on all devices - desktop, tablet, and mobile. You can learn anywhere, anytime."
    },
    {
      question: "Do I get a certificate upon completion?",
      answer: "Absolutely! Upon completing a course and passing all quizzes with a minimum score of 70%, you'll receive a verified certificate that you can share on LinkedIn and add to your resume."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with your course experience, you can request a full refund within 30 days of enrollment."
    },
    {
      question: "How long do I have access to course materials?",
      answer: "Once you enroll in a course, you have lifetime access to all materials, including future updates. You can learn at your own pace and revisit content whenever needed."
    }
  ];

  
export default function CourseslistCourseslistPage() {


    const subjects = Object.keys(courseData)

    const [openIndex, setOpenIndex] = useState(null);

const toggle = (index) => {

      setOpenIndex(openIndex === index ? null : index);
    };

    
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
      <div className="overflow-x-auto hide-scrollbar py-4 px-6">
  <div className="flex gap-9 min-w-max ">
    {Courseslist.map((course) => (
      <div
        key={course.id}
        className="bg-gradient-to-br from-violet-600/10 to-indigo-600/10 border border-indigo-500/30 
           rounded-xl shadow-[0_0_20px_#818cf8] p-8 transition-all 
           hover:shadow-[0_0_30px_#a5b4fc] min-w-[400px] max-w-[400px]"
      >
        <div className="relative h-60 w-full ">
          <Image
            src={course.image}
            alt={course.subject}
            width={400}
            height={180}
            className="rounded-t-xl object-cover w-full h-55"
          />
        </div>
        <div className="p-4 space-y-2">
          <div className="text-sm text-cyan-400 font-semibold">{course.level}</div>
          <div className="text-xl font-semibold">{course.subject}</div>
          <div className="text-violet-400 font-bold">{course.price}</div>
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
          <div className="text-center mt-4">
      <Link
        href={`/lessons?subject=${encodeURIComponent(course.subject)}`}
        className="inline-block bg-gradient-to-r from-purple-600 to-cyan-400 hover:bg-violet-600 text-white px-4 py-2 rounded"
      >
        Enroll in {course.subject}
      </Link>
    </div>
         

      
        </div>
      </div>
    ))}
  </div>
</div>
<section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 style={{ fontFamily: 'var(--font-cormorant)' }} className="text-4xl md:text-4xl font-bold mb-4">Got Questions? We've Got Answers.</h2>
          <p className="text-lg text-gray-400">
            Here’s everything you might be wondering about before getting started.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg px-6 py-4"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left text-lg font-medium hover:text-violet-400 transition"
              >
                {faq.question}
                <ChevronDown
                  size={20}
                  className={`ml-2 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="mt-3 text-gray-300 leading-relaxed text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
    <Footer/>
    </div>

  );
}
