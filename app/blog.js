'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Calendar, User, ArrowRight, Mail } from 'lucide-react';

export default function BlogPage() 
{
    const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState(''); 

    const categories = [
        'All',
        'Learning Tips',
        'Study Strategies',
        'Growth Mindset',
        'Tech in Education',
        'Student Stories',
        'Parent Guides',
      ]; 
      const blogData = [
        {
          id: 1,
          title: "10 Study Habits That Actually Work",
          excerpt: "Tired of reading for hours and not remembering anything? These science-backed study strategies will help you retain more in less time.",
          content: "Effective study strategies go beyond just reading and highlighting. Learn how spaced repetition, active recall, and focused study sessions can boost your learning.",
          image: "https://images.unsplash.com/photo-1584697964154-6d7ef1c3ee0d",
          author: "Sarah Johnson",
          date: "2024-01-18",
          category: "Study Strategies",
          readTime: "6 min read",
          tags: ["study", "habits", "retention"]
        },
        {
          id: 2,
          title: "How a Growth Mindset Can Change Your Learning",
          excerpt: "Believing you can improve is the first step to actually doing it. Learn how to develop a mindset that helps you grow through challenges.",
          content: "Having a growth mindset means viewing effort as the path to mastery. This blog shows how changing your beliefs about learning can unlock new potential.",
          image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
          author: "Michael Chen",
          date: "2024-01-14",
          category: "Growth Mindset",
          readTime: "5 min read",
          tags: ["mindset", "motivation", "learning"]
        },
        {
          id: 3,
          title: "The Future of Education: AI and Interactive Classrooms",
          excerpt: "Explore how AI, AR/VR, and smart tech are revolutionizing classrooms and making learning more engaging than ever.",
          content: "With personalized tutoring bots and interactive environments, tech is redefining the way students learn around the world. Here's how it all works.",
          image: "https://images.unsplash.com/photo-1603570417039-7b77c8e85c67",
          author: "Emily Rodriguez",
          date: "2024-01-11",
          category: "Tech in Education",
          readTime: "7 min read",
          tags: ["AI", "education", "technology"]
        },
        {
          id: 4,
          title: "From Struggle to Success: Riya's Learning Journey",
          excerpt: "Riya, a 10th grader from Rajasthan, turned her academic challenges into strengths using self-paced learning tools. Here’s her inspiring story.",
          content: "Riya shares how she overcame math anxiety with video lessons and consistent practice, and how digital tools helped her fall in love with learning.",
          image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
          author: "David Kim",
          date: "2024-01-08",
          category: "Student Stories",
          readTime: "4 min read",
          tags: ["student", "inspiration", "real stories"]
        },
        {
          id: 5,
          title: "Helping Your Child Succeed in Online Learning",
          excerpt: "As a parent, your role in your child's online education is more important than ever. Here’s how to support them effectively.",
          content: "From setting routines to understanding learning platforms, discover practical ways to guide your child's educational journey in a digital world.",
          image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
          author: "Jennifer Lee",
          date: "2024-01-05",
          category: "Parent Guides",
          readTime: "8 min read",
          tags: ["parenting", "support", "online learning"]
        },
        {
          id: 6,
          title: "Top 5 Tips to Stay Motivated While Learning Online",
          excerpt: "Losing focus? You're not alone. These expert-backed tips will help you stay on track and motivated throughout your online course.",
          content: "From setting goals to rewarding progress, learn how to keep your drive strong—even when motivation dips.",
          image: "https://images.unsplash.com/photo-1494599948593-3dafe8338d71",
          author: "Alex Thompson",
          date: "2024-01-03",
          category: "Learning Tips",
          readTime: "6 min read",
          tags: ["motivation", "tips", "focus"]
        }
      ];
      
    
    return (
    <div className="min-h-screen bg-black text-white">
      
      
      {/* top-most */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{
            backgroundImage: 'url("/img/blog-bg.jpeg")'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1  style={{ fontFamily: 'var(--font-merienda)' }} className="text-4xl md:text-7xl font-bold mb-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Blog
            </span>
          </h1>
          <p style={{ fontFamily: 'var(--font-cormorant)' }} 
          className="text-xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-bold mb-8">
         Insights & Knowledge for Your Learning Journey
          </p>
          <p style={{ fontFamily: 'var(--font-cormorant)' }} 
           className="text-lg text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest trends in technology, career advice, and learning strategies from our team of experts.
          </p>
        </div>
      </section>

      {/* search bar */}
      <section className="py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 h-5 w-5" />
            <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
        
            </div>
            <div className="flex gap-2 flex-wrap">
            {categories.map(category =>(
                <button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 text-sm rounded-md font-medium transition duration-200
                    ${selectedCategory === category
                      ? "bg-cyan-400 text-black hover:bg-cyan-500"
                      : "border border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"}
                  `}
                >
                    {category}
                </button>
            ))}
            </div>
            </div>
        </div>
      </section>

      {/* featured cards */}
      


      </div>)}