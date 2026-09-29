'use client';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  LocationOn,
  Assignment,
  AttachMoney,
  HomeRepairService,

  Phone,
 
} from '@mui/icons-material';

interface College {
  id: number;
  name: string;
  category: string;
  type: string;
  location: string;
  established: string;
  image: string;
}

export default function CollegesSection(): React.ReactElement {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

 const colleges: College[] = [
  {
    id: 1,
    name: 'Kempegowda Institute of Medical Sciences, Bengaluru Urban',
    category: 'KIMS Bangalore',
    type: 'Private',
    location: 'Bengaluru Urban, Karnataka',
    established: '1980',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCmLXMmbxujCyahUq2kEJESGYjwFcJ5JKgqKh6Covug&s=10',
  },
  {
    id: 2,
    name: 'Dr. B R Ambedkar Medical College & Hospital, Bengaluru Urban',
    category: 'Ambedkar Medical College',
    type: 'Private',
    location: 'Bengaluru Urban, Karnataka',
    established: '1981',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKWZNfCDR3p2m52EXV1YOcv83hWDAv-FBf9yPBF1cnw&s=10',
  },
  {
    id: 3,
    name: 'National Institute of Mental Health and Neuro Sciences (NIMHANS), Bengaluru',
    category: 'NIMHANS Bangalore',
    type: 'Central Govt',
    location: 'Bengaluru Urban, Karnataka',
    established: '1974',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLTe0YiLE1Pv7yNi0C0zDdqKaEzW7Fv0X3WOj7MwyYw&s=10',
  },
  {
    id: 4,
    name: 'Mysore Medical College & Research Institute, Mysuru',
    category: 'Mysore Medical College',
    type: 'State Govt',
    location: 'Mysuru, Karnataka',
    established: '1924',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_PLeyEHINWp6UcU6bp9be5CER9YTtXn26-w7C91YfvA&s=10',
  },
  {
    id: 5,
    name: 'St. John’s Medical College, Bengaluru',
    category: 'St. John’s Medical',
    type: 'Autonomous',
    location: 'Bengaluru, Karnataka',
    established: '1963',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQorOk_CVfwX5K6c2325lajjbBSeBfiwZ_25VO_L8muwA&s=10',
  },
  {
    id: 6,
    name: 'Kasturba Medical College, Mangaluru',
    category: 'Kasturba Medical',
    type: 'Deemed University',
    location: 'Mangaluru, Karnataka',
    established: '1953',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-gC63leIZE6CF9bAbWG-l-4PeFL1O2p56eBrKJ0uzQw&s=10',
  },

  // 7
  {
    id: 7,
    name: 'Bangalore Medical College and Research Institute, Bengaluru',
    category: 'BMCRI',
    type: 'State Govt',
    location: 'Bengaluru, Karnataka',
    established: '1955',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqen3E1mDVghbhN8WKRgeKKbjWV-_BvOUrE5W37IIAQg&s=10',
  },

  // 8
  {
    id: 8,
    name: 'Jawaharlal Nehru Medical College, Belagavi',
    category: 'JNMC Belagavi',
    type: 'Private',
    location: 'Belagavi, Karnataka',
    established: '1963',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Gi4TNuJTx-lNhrRXvnZUNZInV-kv01_IDI9Njjuv3Q&s=10',
  },

  // 9
  {
    id: 9,
    name: 'Karnataka Institute of Medical Sciences, Hubballi',
    category: 'KIMS Hubballi',
    type: 'State Govt',
    location: 'Hubballi, Karnataka',
    established: '1957',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wZ-9W4mlG8Cr6H0SNS9nM1E2DkF4nkgI4ZyaNowxkA&s=10',
  },

  // 10
  {
    id: 10,
    name: 'Vydehi Institute of Medical Sciences and Research Centre, Bengaluru',
    category: 'Vydehi Medical College',
    type: 'Private',
    location: 'Bengaluru, Karnataka',
    established: '2000',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ01C1idf1UhvCqcFPEP0HHHrT92RP7Q9gEWmrN4XeLVg&s=10',
  },

  // 11
  {
    id: 11,
    name: 'M. S. Ramaiah Medical College, Bengaluru',
    category: 'Ramaiah Medical College',
    type: 'Private',
    location: 'Bengaluru, Karnataka',
    established: '1985',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7LakpL3Gtg606r6Ia1anD8b8aBGwriuqNn-I8eAHXQ&s=10',
  },

  // 12
  {
    id: 12,
    name: 'JSS Medical College, Mysuru',
    category: 'JSS Medical College',
    type: 'Deemed University',
    location: 'Mysuru, Karnataka',
    established: '1984',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYGavuZXO0GlzSk7SFHva_3RwsiqYE1q4peH5E0PLGzg&s',
  },

  // 13
  {
    id: 13,
    name: 'Manipal College of Medical Sciences, Manipal',
    category: 'Manipal Medical College',
    type: 'Deemed University',
    location: 'Manipal, Karnataka',
    established: '1953',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
  },

  // 14
  {
    id: 14,
    name: 'KLE Academy of Higher Education and Research, Belagavi',
    category: 'KLE Medical College',
    type: 'Deemed University',
    location: 'Belagavi, Karnataka',
    established: '2006',
    image:
      'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&h=400&fit=crop',
  },

  // 15
  {
    id: 15,
    name: 'AJ Institute of Medical Sciences and Research Centre, Mangaluru',
    category: 'AJ Medical College',
    type: 'Private',
    location: 'Mangaluru, Karnataka',
    established: '2002',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
  },

  // 16
  {
    id: 16,
    name: 'Father Muller Medical College, Mangaluru',
    category: 'Father Muller Medical College',
    type: 'Private',
    location: 'Mangaluru, Karnataka',
    established: '1999',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRF1fnU2d8xmikBCFMaclu8aXT1nqwG7zLyH0OL9R4lw&s=10',
  },

  // 17
  {
    id: 17,
    name: 'SDM College of Medical Sciences and Hospital, Dharwad',
    category: 'SDM Medical College',
    type: 'Private',
    location: 'Dharwad, Karnataka',
    established: '2003',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4coR52kTF147ChLsjZEYpUPTVT-3aMFnTYpSildvMA&s=10',
  },

  // 18
  {
    id: 18,
    name: 'Rajarajeswari Medical College and Hospital, Bengaluru',
    category: 'Rajarajeswari Medical College',
    type: 'Private',
    location: 'Bengaluru, Karnataka',
    established: '2005',
    image:
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop',
  },
]
  // Auto-scroll functionality
  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 50) {
          container.scrollLeft = 0;
        } else {
          container.scrollBy({
            left: 350,
            behavior: 'smooth'
          });
        }
      }
    }, 5000);

    return () => clearInterval(autoScroll);
  }, []);

  // Manual scroll
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -350 : 350,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full bg-white py-16 sm:py-20 md:py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-12 md:mb-16">
          <div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Popular MBBS Colleges in <span className="text-blue-900">Karnataka 2025</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Explore top-rated MBBS colleges in Karnataka recognized by WHO & NMC — courses, facilities, gallery, FAQs and apply in one place.
            </p>
          </div>

            <Link
                href="/colleges"
                className="explore-colleges-btn"
              >
                <span>Explore Colleges</span>

                <ChevronRight
                  className="explore-colleges-icon"
                  fontSize="small"
                />
              </Link>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {colleges.map((college) => (
              <div
                key={college.id}
                onMouseEnter={() => setHoveredCard(college.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-center"
                style={{
                  perspective: '1000px',
                }}
              >
                <div
                  className="relative rounded-2xl overflow-hidden bg-white h-full transition-all duration-500"
                  style={{
                    transform:
                      hoveredCard === college.id
                        ? 'translateY(-12px) scale(1.02)'
                        : 'translateY(0px) scale(1)',
                    boxShadow: hoveredCard === college.id
                      ? '0 30px 60px rgba(59, 130, 246, 0.2)'
                      : '0 2px 12px rgba(0, 0, 0, 0.1)'
                  } as React.CSSProperties}
                >
                  {/* Image Section */}
                  <div className="relative h-56 w-full overflow-hidden bg-gray-300">
                    {/* Image Background */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                      style={{
                        backgroundImage: `url('${college.image}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    ></div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>

                    {/* Established Year Badge - Top Left */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-md font-bold text-xs">
                      Esth {college.established}
                    </div>

                  
                  </div>

                  {/* Content Section */}
                  <div className="p-5 sm:p-6 space-y-4">
                    {/* College Name */}
                    <h3 className="text-base text-[12px] font-bold text-gray-900 line-clamp-2 leading-tight">
                      {college.name}
                    </h3>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                        {college.category}
                      </span>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2.5 py-1 rounded-full">
                        {college.type}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-2 text-gray-600 text-sm">
                      <LocationOn className="flex-shrink-0 text-[rgb(46,50,129)] mt-0.5" fontSize="small" />
                      <span className="line-clamp-1 text-[11px] ">{college.location}</span>
                    </div>

                    {/* Stats Icons */}
                    <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-600 pt-2 pb-2 border-t border-gray-100">
                      <div className="flex items-center gap-1">
                        <Assignment className="text-[rgb(46,50,129)]" fontSize="small" />
                        <span className='text-[10px] '>Cutoff</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <AttachMoney className="text-[rgb(46,50,129)]" fontSize="small" />
                        <span className='text-[10px] '>Fees</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HomeRepairService className="text-[rgb(46,50,129)]" fontSize="small" />
                        <span className='text-[10px] '>Facilities</span>
                      </div>
                     
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-2">
                      <button className="flex-1 bg-[rgb(46_50_129)] hover:from-blue-800 hover:to-indigo-800 text-white font-bold   rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-[13px] ">
                        Apply Now
                      </button>
                      <button className="flex-none w-[35px] h-[35px] bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-bold rounded-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center shadow-sm">
                        <Phone fontSize="small" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-6 sm:-left-8 top-1/3 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-blue-700 hover:text-white hover:scale-110 border border-gray-200 hover:border-blue-700"
          >
            <ChevronLeft className="text-xl" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute -right-6 sm:-right-8 top-1/3 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-blue-700 hover:text-white hover:scale-110 border border-gray-200 hover:border-blue-700"
          >
            <ChevronRight className="text-xl" />
          </button>
        </div>

        {/* Scroll Hint */}
        {/* <p className="text-center text-gray-500 text-xs sm:text-sm mt-6">
          ← Scroll to explore more colleges →
        </p> */}
      </div>

      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
