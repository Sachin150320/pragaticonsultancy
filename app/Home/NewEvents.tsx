
'use client'

import Image from 'next/image'
import { useRef } from 'react'
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  CalendarMonth,
  ArrowOutward,
  Newspaper,
} from '@mui/icons-material'

export default function NewsEventsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const newsEvents = [
    {
      id: 1,
      type: 'News',
      date: '29 Sep 2026',
      title: 'NEET UG 2026 Admission Updates',
      description:
        'Get the latest updates about NEET UG admission, counselling schedules and important notifications.',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
    },
    {
      id: 2,
      type: 'Event',
      date: '05 Oct 2026',
      title: 'Karnataka Medical Counselling',
      description:
        'Important information for students participating in Karnataka medical counselling and college selection.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wZ-9W4mlG8Cr6H0SNS9nM1E2DkF4nkgI4ZyaNowxkA&s=10',
    },
    {
      id: 3,
      type: 'News',
      date: '12 Oct 2026',
      title: 'Medical College Cutoff Updates',
      description:
        'Explore the latest college cutoff information to understand your admission possibilities.',
      image:
        'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&h=500&fit=crop',
    },
    {
      id: 4,
      type: 'Event',
      date: '18 Oct 2026',
      title: 'MBBS Admission Guidance Session',
      description:
        'Join our admission guidance session and learn about colleges, fees, counselling and seat selection.',
      image:
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
    },
    {
      id: 5,
      type: 'News',
      date: '24 Oct 2026',
      title: 'Government Medical College Updates',
      description:
        'Stay informed about government medical colleges, available seats and admission-related announcements.',
      image:
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop',
    },
    {
      id: 6,
      type: 'Event',
      date: '02 Nov 2026',
      title: 'Medical Admission Webinar',
      description:
        'Understand the complete medical admission process with useful guidance for NEET aspirants.',
      image:
        'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=500&fit=crop',
    },
  ]

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -380,
      behavior: 'smooth',
    })
  }

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 380,
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="news-events"
      className="relative overflow-hidden bg-[#f4f9fd] py-14 md:py-20 lg:py-24"
    >
      <div className="container-responsive mx-auto px-4">

        {/* ================= HEADER ================= */}
        <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">

          <div>
            

          
 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                     Updates
                </h2>
 <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
               Stay updated with the latest medical admission news,
              counselling updates, important dates and events.
            </p>
            
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={scrollLeft}
              aria-label="Previous news"
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-full
                border border-[#cfe5f2]
                bg-white
                text-[#2e3281]
                shadow-sm
                transition-all
                duration-300
                hover:bg-[#2e3281]
                hover:text-white
                hover:shadow-md
              "
            >
              <ArrowBackIosNew sx={{ fontSize: 16 }} />
            </button>

            <button
              onClick={scrollRight}
              aria-label="Next news"
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-full
                bg-[#2e3281]
                text-white
                shadow-md
                transition-all
                duration-300
                hover:bg-[#24276d]
                hover:shadow-lg
              "
            >
              <ArrowForwardIos sx={{ fontSize: 16 }} />
            </button>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="relative">

          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-[#f4f9fd] to-transparent md:w-20" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[#f4f9fd] to-transparent md:w-20" />

          <div
            ref={scrollRef}
            className="
              news-scroll
              flex
              gap-5
              overflow-x-auto
              scroll-smooth
              pb-5
              pt-2
            "
          >
            {newsEvents.map((item) => (
              <article
                key={item.id}
                className="
                  group
                  w-[310px]
                  flex-shrink-0
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#dcecf6]
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#b9dff4]
                  hover:shadow-xl
                  md:w-[360px]
                "
              >
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden md:h-[215px]">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="360px"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Category */}
                  <div className="absolute left-4 top-4">
                    <span
                      className={`
                        inline-flex items-center gap-1.5
                        rounded-full
                        px-3 py-1.5
                        text-xs
                        font-bold
                        shadow-sm
                        ${
                          item.type === 'Event'
                            ? 'bg-[#2e3281] text-white'
                            : 'bg-white text-[#2e3281]'
                        }
                      `}
                    >
                      {item.type === 'Event' ? (
                        <CalendarMonth sx={{ fontSize: 14 }} />
                      ) : (
                        <Newspaper sx={{ fontSize: 14 }} />
                      )}

                      {item.type}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-lg bg-white/95 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm">
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">

                  <h3 className="line-clamp-2 text-lg font-bold leading-7 text-[#1f2937] transition-colors group-hover:text-[#2e3281] md:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>

                  {/* Read More */}
                  <button
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-[#2e3281]
                      transition-all
                      hover:gap-3
                    "
                  >
                    Read More
                    <ArrowOutward sx={{ fontSize: 16 }} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Hide Scrollbar */}
        <style jsx>{`
          .news-scroll {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .news-scroll::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        

      </div>
    </section>
  )
}
