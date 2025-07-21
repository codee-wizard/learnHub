'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from "../../components/Footer"

const testimonials = [
  {
    name: "Ananya Gupta",
    role: "Class 9 Student, Delhi Public School",
    content: "I always found maths hard, but LearnHub explained things so well! The quizzes feel like games, and I actually enjoy studying now.",
    image: "https://i.pinimg.com/736x/95/69/32/9569324a7d06af100af1a2fcbbd024cb.jpg"
  },
  {
    name: "Rohan Patel",
    role: "Class 7 Student, Kendriya Vidyalaya Ahmedabad",
    content: "Science is my favorite now! The animations and lessons are super cool. I even beat my old score in the quiz this week!",
    image: "https://i.pinimg.com/736x/d0/b3/e5/d0b3e58e159bcf22d439d6bee2fafaab.jpg"
  },
  {
    name: "Meera Nair",
    role: "Class 10 Student, Bhavans Kochi",
    content: "LearnHub helped me revise all my subjects before exams. It explains tough topics in such a simple way. I feel more confident now!",
    image: "https://i.pinimg.com/736x/68/7b/ef/687bef6a96f8f5e3d0fce53b684bd97a.jpg"
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

  return (
    <div className="min-h-screen text-white">
        <Navbar/>
      {/* first-sec */}
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[800px] text-white flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/img/bg-web.jpg')"
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div>
          <h1
            style={{ fontFamily: 'var(--font-merienda)' }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Empowering Minds Through{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Interactive Learning
            </span>
          </h1>
          <p
            style={{ fontFamily: 'var(--font-cormorant)' }}
            className="text-2xl text-white mt-6"
          >
            Discover a new way to learn with our cutting-edge platform. Interactive lessons, engaging quizzes, and
            personalized progress tracking to help you achieve your goals.
          </p>
          <div className="flex gap-4 mt-8 flex-col sm:flex-row">
            <Link
              href="/services"
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 hover:bg-green-500 text-black font-semibold px-6 py-3 text-lg rounded-md text-center"
            >
              Start Learning Today →
            </Link>
            <Link
              href="/about"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 text-lg rounded-md text-center"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-black/30 p-8 rounded-2xl backdrop-blur-md border border-gray-700 shadow-2xl">
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
              className="w-full bg-gradient-to-r from-indigo-800 via-purple-800 to-indigo-900 text-white font-semibold py-3 rounded-md shadow-lg hover:shadow-purple-500/50 transition duration-300 hover:scale-105 border border-purple-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>

        {/* para-sec */}
        <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3  style={{ fontFamily: 'var(--font-cormorant)' }} className="text-4xl font-bold mb-6">Interactive Learning Experience</h3>
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
                src="https://i.pinimg.com/736x/79/a7/67/79a7673de7bb36559242669ad6da7bac.jpg" 
                alt="Interactive Learning"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://i.pinimg.com/736x/76/32/1d/76321d05f19029170ab7abb7d34c95f3.jpg" 
                alt="Community Learning"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3  style={{ fontFamily: 'var(--font-cormorant)' }} className="text-4xl font-bold mb-6">Learn with a Global Community</h3>
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

    {/* student-testimonials */}
    <section className="py-20 bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2  style={{ fontFamily: 'var(--font-cormorant)' }} className="text-6xl md:text-6xl font-bold mb-4 text-white">What Our Students Say</h2>
      <p className="text-xl text-gray-400">Real stories from real learners</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-gray-800 border border-indigo-500/30 
           rounded-xl shadow-[0_0_20px_#818cf8] p-8 text-center transition-all 
           hover:shadow-[0_0_30px_#a5b4fc]">
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

<Footer/>
  </div>
);
}
