import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const blogPosts = [
  {
    title: "QUIS AUTEM VEA EUM IURE REPREHENDERIT",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "",
    date: { day: "07", month: "Feb" },
  },
  {
    title: "REPREHENDERIT IN VOUTA VELIT ESSE CILLUM",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "",
    date: { day: "12", month: "Mar" },
  },
  {
    title: "SOLUTA NOBIS OSE ALIGEN OPTIO CUMUE",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "",
    date: { day: "23", month: "Jan" },
  },
];

const BlogSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % Math.ceil(blogPosts.length / 3));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + Math.ceil(blogPosts.length / 3)) % Math.ceil(blogPosts.length / 3));
  };

  return (
    <section className="py-20" data-aos="fade-up">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h3 className="text-[#22c55e] text-xl mb-4">OUR NEWS</h3>
          <h2 className="text-4xl md:text-5xl font-bold">LATEST BLOG POSTS</h2>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto" data-aos="fade-up">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white group">
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt={post.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Date Overlay */}
                <div className="absolute left-6 bottom-6 w-16 h-16 bg-[#22c55e] rounded-full flex flex-col items-center justify-center text-white">
                  <span className="text-2xl font-bold leading-none">{post.date.day}</span>
                  <span className="text-sm">{post.date.month}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 group-hover:text-[#22c55e] transition-colors">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link to="/blog" className="text-[#22c55e] font-medium hover:text-[#22c55e]/80 transition-colors">
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-12" data-aos="fade-up">
          <button
            onClick={prevPage}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#22c55e] hover:text-white hover:border-[#22c55e] transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextPage}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#22c55e] hover:text-white hover:border-[#22c55e] transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
