
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import UpdateIcon from '@mui/icons-material/Update';
import PeopleIcon from '@mui/icons-material/People';
import StarIcon from '@mui/icons-material/Star';


import {

  ChevronRight,

} from '@mui/icons-material';


interface Feature {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function PredictorSection(): React.ReactElement {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features: Feature[] = [
    {
      id: 1,
      icon: TrendingUpIcon,
      title: 'Smart Predictions',
      description: 'Rank-based college matching',
    },
    {
      id: 2,
      icon: StarIcon,
      title: '90% Accuracy',
      description: 'Powered by smart predictions',
    },
    {
      id: 3,
      icon: UpdateIcon,
      title: 'Latest Cutoff',
      description: 'Real-time data updates',
    },
    {
      id: 4,
      icon: PeopleIcon,
      title: 'Trusted by Students',
      description: 'Used by 50,000+ NEET aspirants',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gray-100 py-12 sm:py-14 md:py-16 lg:py-20">
      {/* Background decorative glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/20 blur-3xl" />
      </div>

      {/* Main container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12 md:mb-14">
          <h2 className="mb-3 text-3xl font-bold text-blue-900 sm:text-4xl md:text-5xl">
            College Predictor
          </h2>

          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
            Find the best medical colleges based on your NEET rank,
            category and preferred state.
          </p>
        </div>

        {/* Image + Content */}
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">

          {/* LEFT IMAGE */}
          <div className="relative flex w-full items-center justify-center min-h-[280px] sm:min-h-[340px] md:min-h-[380px] lg:min-h-[430px]">

            {/* Image glow */}
            <div className="absolute h-[220px] w-[220px] rounded-full bg-blue-100/70 blur-3xl sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px] lg:h-[400px] lg:w-[400px]" />

            {/* Outer decorative circle */}
            <div className="absolute h-[250px] w-[250px] rounded-full border border-blue-100/70 sm:h-[330px] sm:w-[330px] md:h-[390px] md:w-[390px] lg:h-[430px] lg:w-[430px]" />

            {/* Inner decorative circle */}
            <div className="absolute h-[205px] w-[205px] rounded-full border border-cyan-100/70 sm:h-[285px] sm:w-[285px] md:h-[340px] md:w-[340px] lg:h-[370px] lg:w-[370px]" />

            {/* Main Image */}
            <img
              src="/images/banner-3.jpg"
              alt="College Predictor"
              className="
            relative z-10
            w-full
            max-w-[520px]
            sm:max-w-[480px]
            md:max-w-[520px]
            lg:max-w-[560px]
            xl:max-w-[600px]
            h-auto
            max-h-[620px]
            object-cover
            rounded-2xl
            shadow-2xl
            transition-transform
            duration-500
            hover:scale-[1.03]
          "
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full max-w-xl mx-auto lg:mx-0">

            {/* Trusted Students */}
            <div className="mb-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
                <span className="h-2 w-2 rounded-full bg-red-600" />
                Trusted by 50,000+ NEET aspirants
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">

              {features.map((feature) => {
                const IconComponent = feature.icon;
                const isHovered = hoveredCard === feature.id;

                return (
                  <div
                    key={feature.id}
                    onMouseEnter={() => setHoveredCard(feature.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`
                  group
                  relative
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  bg-white
                  p-4
                  sm:p-5
                  cursor-pointer
                  transition-all
                  duration-300
                  ${isHovered
                        ? 'border-blue-400 shadow-xl shadow-blue-100/60 scale-[1.02]'
                        : 'border-red-100 shadow-sm'
                      }
                `}
                  >
                    {/* Card content */}
                    <div className="relative z-10 flex items-start gap-3 sm:gap-4">

                      <div
                        className={`
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      transition-all
                      duration-300
                      sm:h-12
                      sm:w-12
                      ${isHovered
                            ? 'rotate-3 scale-110 bg-blue-600 text-white'
                            : 'bg-red-50 text-red-600'
                          }
                    `}
                      >
                        <IconComponent fontSize="medium" />
                      </div>

                      <div className="min-w-0">
                        <h3
                          className={`
                        text-base
                        font-bold
                        transition-colors
                        duration-300
                        md:text-lg
                        ${isHovered
                              ? 'text-blue-700'
                              : 'text-gray-900'
                            }
                      `}
                        >
                          {feature.title}
                        </h3>

                        <p className="mt-1 text-xs leading-relaxed text-gray-500 sm:text-sm">
                          {feature.description}
                        </p>
                      </div>

                    </div>
                  </div>
                );
              })}

            </div>

            {/* CTA */}
            <div className="mt-6 flex justify-center lg:justify-start">
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

          </div>
        </div>
      </div>
    </section>
  );
}
