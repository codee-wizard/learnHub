'use client';

import { useState } from 'react';
import Link from 'next/link';

const featuredCourses = [
  {
    title: 'Introduction to Programming',
    description: 'Learn the fundamentals of programming with interactive lessons and hands-on projects.',
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d',
    students: 1234,
    duration: '6 weeks',
    rating: 4.8,
  },
  {
    title: 'Web Development Bootcamp',
    description: 'Master HTML, CSS, JavaScript, and React to build modern web applications.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d',
    students: 856,
    duration: '12 weeks',
    rating: 4.9,
  },
  {
    title: 'Data Science Fundamentals',
    description: 'Explore data analysis, visualization, and machine learning concepts.',
    image: 'https://images.unsplash.com/photo-1581090700227-1e8e1f18fabe',
    students: 567,
    duration: '8 weeks',
    rating: 4.7,
  },
  {
    title: 'Digital Marketing Mastery',
    description: 'Learn modern marketing strategies and tools to grow your business online.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    students: 789,
    duration: '4 weeks',
    rating: 4.6,
  },
];
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    content: "LearnHub transformed my career. The interactive lessons made complex concepts easy to understand.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    name: "Michael Chen",
    role: "Data Analyst",
    content: "The quiz system helped reinforce my learning. I landed my dream job after completing the data science course.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    content: "Excellent platform with practical, real-world applications. Highly recommend for professional development.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  }
];

export default function HomePage() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setContactForm({ name: '', email: '', message: '' });
  };
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % featuredCourses.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + featuredCourses.length) % featuredCourses.length);
  };
  return (
    <div className="min-h-screen  text-white">
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[800px] text-white flex items-center justify-center px-4"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1627260119201-dea52faff0ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Empowering Minds Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Interactive Learning
              </span>
            </h1>
            <p className="text-lg text-gray-300 mt-6">
              Discover a new way to learn with our cutting-edge platform. Interactive lessons, engaging quizzes, and
              personalized progress tracking to help you achieve your goals.
            </p>
            <div className="flex gap-4 mt-8 flex-col sm:flex-row">
              <Link href="/services" className="bg-green-400 hover:bg-green-500 text-black font-semibold px-6 py-3 text-lg rounded-md text-center">
              Start Learning Today →
            </Link>
            <Link href="/about" className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-6 py-3 text-lg rounded-md text-center">
              Learn More
            </Link>
          </div>

          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-black/60 p-8 rounded-2xl backdrop-blur-md border border-gray-700 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400"
                required
              />
              <textarea
                placeholder="Your Message"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 min-h-[100px] resize-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-black text-white py-20 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">Featured Courses</h2>
        <p className="text-gray-400 mt-2">
          Discover our most popular and highly-rated courses
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Course Slide */}
        <div className="relative bg-gray-800 rounded-xl overflow-hidden shadow-xl transition-all duration-300 transform hover:scale-110">

          <img
            src={featuredCourses[current].image}
            alt={featuredCourses[current].title}
            className="w-full h-[250px] object-cover"
          />

          {/* Course Info Overlay */}
          <div className="bg-gray-900 p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">{featuredCourses[current].title}</h3>
                <p className="text-gray-400 mt-1">{featuredCourses[current].description}</p>
                <p className="mt-4 text-sm text-gray-400">
                  👥 {featuredCourses[current].students} students &nbsp;&nbsp;&nbsp; ⏱ {featuredCourses[current].weeks} weeks
                </p>
              </div>
              <div className="bg-yellow-400 text-black text-sm px-2 py-1 rounded-lg font-semibold mt-2">
                ⭐ {featuredCourses[current].rating}
              </div>
            </div>
            <button className="mt-6 w-full bg-green-400 hover:bg-green-500 text-black font-semibold py-2 rounded-md">
              Start Learning
            </button>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-full"
        >
          ›
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {featuredCourses.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === idx ? 'bg-green-400' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
    <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">Interactive Learning Experience</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Our platform combines cutting-edge technology with proven educational methods. 
                Experience hands-on learning through interactive lessons, real-time quizzes, 
                and personalized feedback that adapts to your learning style.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Interactive lessons with multimedia content
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Real-time progress tracking and analytics
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Personalized learning paths and recommendations
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Interactive Learning"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1722963220475-979db2dbf216?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Community Learning"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold mb-6">Learn with a Global Community</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Join thousands of learners from around the world. Share knowledge, 
                collaborate on projects, and get support from our vibrant community 
                of educators and fellow students.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  24/7 community support and discussion forums
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  Peer-to-peer learning and collaboration tools
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                  Expert mentorship and career guidance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Students Say</h2>
      <p className="text-xl text-gray-400">Real stories from real learners</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <h4 className="font-semibold text-white">{testimonial.name}</h4>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          </div>
          <p className="text-gray-300 italic">"{testimonial.content}"</p>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}