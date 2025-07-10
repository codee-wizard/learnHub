'use client'; 

import { Heart, Star, Eye, Target, Users , Award} from "lucide-react";
import React from 'react';

export default function AboutPage() {

  const milestones = [
    { year: "2020", event: "LearnHub founded with a vision to revolutionize online education" },
    { year: "2021", event: "Launched first interactive programming courses, reaching 1,000+ students" },
    { year: "2022", event: "Expanded to 10+ subjects with AI-powered personalized learning paths" },
    { year: "2023", event: "Reached 50,000+ active learners across 100+ countries" },
    { year: "2024", event: "Introduced advanced quiz system and community features" }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-400" />,
      title: "Passion for Learning",
      description: "We believe learning should be exciting, engaging, and accessible to everyone, regardless of background or location."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      title: "Community First",
      description: "Our platform brings learners together, fostering collaboration, support, and shared growth experiences."
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-400" />,
      title: "Excellence in Education",
      description: "We maintain the highest standards in content quality, teaching methods, and learning outcomes."
    }
  ];
  const teamMembers = [
    {
      name: "Dr. Ananya Iyer",
      role: "Founder & CEO",
      bio: "Former IIT professor with over 15 years in educational research. Passionate about revolutionizing digital learning in India.",
      image: "https://i.pinimg.com/736x/2c/e0/c8/2ce0c8e9423351561f91c33645141120.jpg",
      expertise: "Education Technology"
    },
    {
      name: "Rohit Mehra",
      role: "CTO",
      bio: "Seasoned tech leader with a decade of experience building scalable platforms at Flipkart and TCS.",
      image: "https://i.pinimg.com/736x/e0/97/32/e09732eecf2d3d43ff0e578b1d640724.jpg",
      expertise: "Full-Stack Development"
    },
    {
      name: "Meera Nambiar",
      role: "Head of Content",
      bio: "Curriculum expert with a deep focus on regional inclusivity and NEP-aligned content development.",
      image: "https://i.pinimg.com/736x/fb/bf/41/fbbf4106da9e154bda767abd4a8fa434.jpg",
      expertise: "Curriculum Strategy"
    },
    {
      name: "Arjun Verma",
      role: "Lead Designer",
      bio: "UI/UX expert known for blending cultural aesthetics with modern design to craft seamless user experiences.",
      image: "https://i.pinimg.com/736x/64/5b/9f/645b9fbec719e20f7c3f85e8f390114a.jpg",
      expertise: "Visual Design & UX"
    }
  ];
  

  return (
    <div className="min-h-screen bg-black text-white">

    
      {/* first-sec */}
      <section className="relative h-[45vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://i.pinimg.com/736x/f2/45/22/f2452232917dbb8a32be272ce53f6efa.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60" />
        </div>

        {/* Heading */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <h1 style={{ fontFamily: 'var(--font-merienda)' }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-white">Learn.</span>{' '}
            <span className="text-white">Grow.</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
  Succeed.
</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-cormorant)' }} className="font-[var(--font-dancing-script)]  max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-200 ">
            We're on a mission to make high-quality education accessible to everyone, anywhere in the world.
            Join thousands of learners who are transforming their lives through learning.
          </p>
        </div>
      </section>
      {/* our-story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
            <h2
  style={{ fontFamily: 'var(--font-cormorant)' }}
  className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent w-fit mx-auto"
>
  Our Story
</h2>

              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                LearnHub began with a simple insight: traditional education wasn’t meeting modern learning needs. Our team of educators and tech experts set out in 2020 to change that.
                </p>
                <p>
                We created a platform that blends expert teaching with innovative technology—making quality education accessible to everyone, regardless of location or schedule.
                </p>
                <p>
                Today, learners in over 100 countries grow with LearnHub through interactive courses, personalized paths, and a supportive global community.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://i.pinimg.com/736x/5d/d3/aa/5dd3aabe9b87408e9e3b398f7ccf066c.jpg" 
                alt="Our Story"
                className="rounded-2xl shadow-2xl "
              />
            </div>
          </div>
        </div>
      </section>
      {/* ourjourney-sec */}
      <section className="py-20 bg-black text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2  style={{ fontFamily: 'var(--font-cormorant)' }}
  className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent w-fit mx-auto">Our Journey</h2>
      <p className="text-xl text-gray-400">Key milestones in our mission to transform education</p>
    </div>

    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-500 transform md:-translate-x-1/2"></div>

      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full transform md:-translate-x-1/2 border-4 border-gray-900 z-10"></div>
            
            {/* Content Box */}
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg ml-8 md:ml-0">
                <div className="text-2xl font-bold text-purple-400 mb-2">{milestone.year}</div>
                <p className="text-gray-300">{milestone.event}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
<section className="py-20 bg-black text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      {/* Mission Card */}
<div className="bg-gradient-to-br from-violet-600/10 to-purple-500/10 border border-violet-500/30 rounded-xl shadow-[0_0_20px_#8b5cf6] p-8 transition-all hover:shadow-[0_0_30px_#a78bfa]">
  <div className="flex items-center mb-6">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 text-purple-400 mr-4">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
    <h3 className="text-2xl font-bold text-purple-300">Our Mission</h3>
  </div>
  <p className="text-gray-300 text-lg leading-relaxed">
  Our mission is to make quality education accessible and engaging for everyone through interactive, affordable learning that empowers people to grow and succeed.


  </p>
</div>

      {/* Vision Card */}
      <div className="bg-gradient-to-br from-blue-600/10 to-cyan-500/10 border border-blue-400/30 rounded-xl shadow-[0_0_20px_#60a5fa] p-8 transition-all hover:shadow-[0_0_30px_#38bdf8]">
        <div className="flex items-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 text-blue-400 mr-4">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M15 12a3 3 0 01-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <h3 className="text-2xl font-bold text-blue-300">Our Vision</h3>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
        We aim to be the world’s leading platform for lifelong learning — a place where people everywhere can discover, grow, and thrive through boundaryless, transformative education.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Values Section */}
<section className="py-20 bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2  style={{ fontFamily: 'var(--font-cormorant)' }}
  className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent w-fit mx-auto">
        Our Values
      </h2>
      <p className="text-xl text-gray-400">The principles that guide everything we do</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {values.map((value, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-violet-600/10 to-indigo-600/10 border border-indigo-500/30 
           rounded-xl shadow-[0_0_20px_#818cf8] p-8 text-center transition-all 
           hover:shadow-[0_0_30px_#a5b4fc]"

        >
          <div className="flex justify-center mb-4 text-purple-400">{value.icon}</div>
          <h3 className="text-xl font-bold mb-4 text-purple-300">{value.title}</h3>
          <p className="text-gray-300">{value.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Team Section */}
<section className="py-20 bg-black text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2  style={{ fontFamily: 'var(--font-cormorant)' }}
  className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent w-fit mx-auto">
        Meet Our Team
      </h2>
      <p className="text-xl text-gray-400">The passionate people behind LearnHub</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="bg-gray-800 border border-gray-700 hover:border-cyan-400 rounded-xl shadow-md overflow-hidden transition-all duration-300 group"
        >
          <div className="relative">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-60 object-cover rounded-t-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-xl"></div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold mb-1 text-white">{member.name}</h3>
            <p className="text-cyan-400 font-medium mb-2">{member.role}</p>
            <p className="text-sm text-gray-400 mb-3">{member.expertise}</p>
            <p className="text-sm text-gray-300 leading-relaxed">{member.bio}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* CTA Section */}
<section className="py-20 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
      Ready to Start Learning?
    </h2>
    <p className="text-xl text-gray-300 mb-8">
      Join thousands of learners who are already transforming their lives with LearnHub.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="flex items-center justify-center bg-gradient-to-r from-purple-400 to-cyan-400 text-black font-semibold px-8 py-3 text-lg rounded-md hover:opacity-90 transition">
        Browse Courses
        <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <button className="flex items-center justify-center border border-cyan-400 text-cyan-400 px-8 py-3 text-lg rounded-md hover:bg-cyan-400 hover:text-black transition">
        Contact Us
      </button>
    </div>
  </div>
</section>



    </div>
  );
}


