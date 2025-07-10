'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Calendar, User, ArrowRight, Mail } from 'lucide-react';
import Navbar from "../components/navbar";

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
          image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5hTW8xMtl4CUKmLgZybpKa/5b600dd084322dad7221a44662bded74/GettyImages-1223282826.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=2&w=1000",
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
          image: "https://media.licdn.com/dms/image/v2/D5612AQE3sOeEjdzleQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1706415283994?e=2147483647&v=beta&t=q-I-ZK2mUp64nS5x3wqMgFM1LuWb_owmXdAv4uHOA9w",
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
          image: "https://www.asuprepdigital.org/wp-content/uploads/2025/07/help-your-child-succeed-in-virtual-elementary-school-learning-hero.jpg",
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
      
    
  const filteredPosts = blogData.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });  
    
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Successfully subscribed!",
      description: "You're now on the list for our latest updates.",
    });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
    return (
    
    <div className="min-h-screen bg-black text-white">
      <Navbar/>
      
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
      
      {filteredPosts.length > 0 && (
        <section className=" p-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 style={{ fontFamily: 'var(--font-cormorant)' }}  className="text-4xl font-bold mb-8">Featured Article</h2>
            <div className="rounded-xl border border-[#5e17eb] bg-gradient-to-br from-[#1a1a2e] via-[#0f0f1f] to-[#1a1a2e] p-5 shadow-[0_0_20px_#8a2be2] transition hover:shadow-[0_0_30px_#8a2be2]">
            <div className="md:flex">
            <div className="md:w-1/2 ">
            <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover object-center rounded-l-xl"
                  />
            </div>
            <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                  <span className="inline-block bg-[#5e17eb] text-black text-xs font-semibold px-2.5 py-1 rounded-full shadow-md hover:shadow-[#5e17eb] transition">
  {filteredPosts[0].category}
</span>
<span className="text-sm text-gray-400">{filteredPosts[0].readTime}</span>
</div>
        <h3 style={{ fontFamily: 'var(--font-cormorant)' }} className="text-2xl md:text-3xl font-bold mb-4 text-white hover:text-blue-600 transition-colors cursor-pointer">
                    {filteredPosts[0].title}
                  </h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}</p>


        <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-400">
        <div className="flex items-center">
        <User className="h-4 w-4 mr-1" />
        {filteredPosts[0].author}
        </div>
        <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(filteredPosts[0].date)}
            </div>
        </div>
        <button className="inline-flex items-center bg-[#5e17eb] hover:bg-[#5e17eb] text-white font-semibold px-4 py-2 rounded-md transition duration-200 shadow-md hover:shadow-[#5e17eb]">
  Read More
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ml-2 h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</button>


        </div>
                  </div>
            </div>
            </div>

            </div>
        </section>
      )}
{/* blog-post */}

<section className="py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-8">
<h2 style={{ fontFamily: 'var(--font-cormorant)' }} className="text-4xl font-bold">Latest Articles</h2>
<p className="text-gray-400">{filteredPosts.length} articles found</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    </div>{filteredPosts.slice(1).map(post => (
    <div
    key={post.id}
    className="rounded-xl border border-[#5e17eb] bg-gradient-to-br from-[#1a1a2e] via-[#0f0f1f] to-[#1a1a2e] hover:shadow-[0_0_30px_#8a2be2] shadow-[0_0_15px_#8a2be2] transition-all duration-300 group overflow-hidden"
  >
    <div className="relative">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />           
    </div>
    <div className="absolute top-4 left-4">
    <span className="bg-black/70 text-white">
      {post.category}
    </span></div>

  



   
    <button className="inline-flex items-center bg-[#8a2be2] hover:bg-violet-600 text-white text-sm font-semibold px-4 py-2 rounded-md transition">
      Read More
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ml-2 h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </button>
    </div>))}
</div>
</section>

{/* newsletter-signup */}
<section className="py-20 bg-gradient-to-r from-purple-500/10 to-cyan-500/10">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700">
<Mail className="h-12 w-12 text-violet-600 mx-auto mb-4" />
<h2 style={{ fontFamily: 'var(--font-cormorant)' }} className="text-4xl font-bold mb-4">Stay Updated</h2>
<p className="text-xl text-gray-300 mb-8">Subscribe to our newsletter and get the latest articles, tips, and insights delivered to your inbox.
</p>
<form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
<div className="flex gap-4">
<input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600"
                required
                />
    <button type="submit" className="bg-violet-500 hover:bg-violet-600 text-black rounded-md font-semibold px-6">
                  Subscribe
                </button>
</div>

<p className="text-sm text-gray-400 mt-3">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
</form>
</div></div></section>


</div>)}