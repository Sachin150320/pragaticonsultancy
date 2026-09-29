'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  CalendarMonth,
  ArrowOutward,
} from '@mui/icons-material';

interface Blog {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

export default function BlogsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const blogs: Blog[] = [
    {
      id: 1,
      category: 'MBBS Admission',
      date: 'Sep 25, 2026',
      title: 'How to Get MBBS Admission in Karnataka',
      description:
        'Complete information about MBBS admission process, eligibility, counselling and important requirements in Karnataka.',
      image:
        'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=500&fit=crop',
    },
    {
      id: 2,
      category: 'NEET',
      date: 'Sep 20, 2026',
      title: 'NEET UG Counselling Guide for Karnataka',
      description:
        'Understand the Karnataka NEET UG counselling process, registration, choice filling and seat allotment.',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
    },
    {
      id: 3,
      category: 'Medical Colleges',
      date: 'Sep 15, 2026',
      title: 'Top Medical Colleges in Karnataka',
      description:
        'Explore important medical colleges in Karnataka and learn about courses, admission and academic opportunities.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJO3gXtxUzOTXeU5vynk6FE9L22KpJfZo2dDvALF2mIg&s=10',
    },
    {
      id: 4,
      category: 'Fees',
      date: 'Sep 10, 2026',
      title: 'MBBS Fees in Karnataka',
      description:
        'Learn about the different fee structures for government, private, deemed and management quota medical colleges.',
      image:
        'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&h=500&fit=crop',
    },
    {
      id: 5,
      category: 'NEET Cutoff',
      date: 'Sep 05, 2026',
      title: 'Understanding NEET Cut-Offs',
      description:
        'Know how NEET cut-offs work and what factors can affect your chances of getting a medical seat.',
      image:
        'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&h=500&fit=crop',
    },
    {
      id: 6,
      category: 'Admission Tips',
      date: 'Aug 30, 2026',
      title: 'Medical Admission Tips for Students',
      description:
        'Useful tips to help students plan their medical admission journey and make informed decisions.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7NybpSfWX7-jCk2oVTCa-Eb5aF4N97a0dg1MV4UiGQ&s=10',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    const amount = 380;

    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className=" py-16 md:py-20 overflow-hidden">
      <div className="container-responsive mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">

          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
               Blogs & Latest Updates
                </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Stay updated with the latest information about NEET,
              medical admissions, counselling.
            </p>


            
          </div>

          {/* Navigation */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous blogs"
              className="w-11 h-11 rounded-full border border-[#b9dff4] bg-white text-[#2e3281] flex items-center justify-center transition-all duration-300 hover:bg-[#2e3281] hover:text-white hover:border-[#2e3281] shadow-sm"
            >
              <ArrowBackIosNew sx={{ fontSize: 17 }} />
            </button>

            <button
              onClick={() => scroll('right')}
              aria-label="Next blogs"
              className="w-11 h-11 rounded-full border border-[#b9dff4] bg-white text-[#2e3281] flex items-center justify-center transition-all duration-300 hover:bg-[#2e3281] hover:text-white hover:border-[#2e3281] shadow-sm"
            >
              <ArrowForwardIos sx={{ fontSize: 17 }} />
            </button>
          </div>
        </div>

        {/* Blog Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-5 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="
                group
                min-w-[300px]
                sm:min-w-[340px]
                lg:min-w-[360px]
                bg-white
                rounded-3xl
                overflow-hidden
                border
                border-[#dcecf6]
                shadow-[0_8px_30px_rgba(46,50,129,0.07)]
                hover:shadow-[0_15px_40px_rgba(46,50,129,0.14)]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              {/* Image */}
              <div className="relative h-[210px] overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 90vw, 360px"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2e3281]/70 via-transparent to-transparent opacity-80" />

                {/* Category */}
                <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#2e3281] shadow-md">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-[#4b8fc5] font-medium">
                  <CalendarMonth sx={{ fontSize: 17 }} />
                  {blog.date}
                </div>

                {/* Title */}
                <h3 className="mt-3 text-xl font-bold leading-7 text-[#2e3281] group-hover:text-[#4b8fc5] transition-colors duration-300">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 text-sm leading-6 line-clamp-3">
                  {blog.description}
                </p>

                {/* Read More */}
                <button
                  className="
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-[#2e3281]
                    hover:text-[#4b8fc5]
                    transition-colors
                  "
                >
                  Read More
                  <ArrowOutward
                    sx={{ fontSize: 17 }}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-center">
          <button
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-[#2e3281]
              px-7
              py-3
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-[#2e3281]/20
              transition-all
              duration-300
              hover:bg-[#242866]
              hover:-translate-y-0.5
            "
          >
            View All Blogs
            <ArrowForwardIos
              sx={{ fontSize: 15 }}
              className="ml-2"
            />
          </button>
        </div>

      </div>
    </section>
  );
}