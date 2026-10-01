
"use client";
import Link from 'next/link';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Building2,
  Globe2,
  CalendarDays,
} from "lucide-react";

function AnimatedCounter({
  end,
  suffix = "",
  duration = 1800,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6F0E2] from-blue-50 via-white to-cyan-50 py-8 md:py-16 lg:py-10">

      {/* Background Decorations */}
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="container-responsive relative z-10">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div className="animate-fade-in-up">

            {/* Welcome Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">

              <span className="flex h-2.5 w-2.5 rounded-full bg-green-500" />

              <span className="text-sm font-semibold text-blue-700">
                Your Trusted Education Consultancy
              </span>

            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl md:text-5xl lg:text-5xl">

              Shape Your Future With

              <span className="mt-1 mb-3 block bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent py-2">
                Pragati Consultancy
              </span>

              Services

            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
              Pragati Consultancy Services provides personalized education
              guidance to help students choose the right course, college,
              university, and career pathway in India and abroad.
            </p>

            {/* Feature List */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">

              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
                Course &amp; Career Guidance
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
                College &amp; University Selection
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
                Admission Assistance
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
                Study Abroad Guidance
              </div>

            </div>

            {/* =====================================================
                STATS
            ====================================================== */}
           <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">

              {/* Students */}
              <div className="banner-number group rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5">

                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Users className="h-5 w-5" />
                </div>

                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  <AnimatedCounter
                    end={5000}
                    suffix="+"
                  />
                </p>

                <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                  Students Guided
                </p>

              </div>

              {/* Universities */}
              <div className="banner-number  group rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5">

                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <Building2 className="h-5 w-5" />
                </div>

                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  <AnimatedCounter
                    end={100}
                    suffix="+"
                  />
                </p>

                <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                  Institutions
                </p>

              </div>

              {/* Countries */}
              <div className="banner-number  group rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5">

                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                  <Globe2 className="h-5 w-5" />
                </div>

                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  <AnimatedCounter
                    end={15}
                    suffix="+"
                  />
                </p>

                <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                  Study Destinations
                </p>

              </div>
              <div className="banner-number group rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5">

                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                  <CalendarDays className="h-5 w-5" />
                </div>

                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                 
                  <AnimatedCounter
                    end={2002}
                  />
                </p>

                <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                   Since
                </p>

              </div>

            </div>

            {/* =====================================================
                BUTTONS
            ====================================================== */}
             <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#2e3281]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-[#2e3281]/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#4b8fc5]
                  hover:shadow-xl
                "
              >
                Talk to Our Experts

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </Link>

              <Link
                href="/courses"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-[#2e3281]/15
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-[#2e3281]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#4b8fc5]
                  hover:text-[#4b8fc5]
                  hover:shadow-lg
                "
              >
                Explore Opportunities
              </Link>

            </div>

          </div>

          {/* =====================================================
              RIGHT IMAGE
          ====================================================== */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">

            {/* Main Image */}
            <div className="relative h-[380px] overflow-hidden rounded-[2rem] shadow-2xl sm:h-[450px] lg:h-[560px]">

              <Image
                src="/images/banner-1.jpg"
                alt="Pragati Consultancy Services - Education Guidance"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-950/10 to-transparent" />

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
{/* 
                <div className="max-w-sm rounded-2xl border border-white/20 bg-white/15 p-5 shadow-lg backdrop-blur-md">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-700">
                      <GraduationCap className="h-6 w-6" />
                    </div>

                    <div>

                      <p className="text-sm font-semibold text-white">
                        Your Future Starts Here
                      </p>

                      <p className="text-xs text-blue-100">
                        Expert Education Guidance
                      </p>

                    </div>

                  </div>

                </div> */}

              </div>

            </div>

            {/* =================================================
                FLOATING CARD - TOP
            ================================================== */}
            <div className="absolute -left-4 top-8 hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:block lg:-left-8">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <CheckCircle2 className="h-6 w-6" />
                </div>

                <div>

                  <p className="text-sm font-bold text-gray-900">
                    Personalized Guidance
                  </p>

                  <p className="text-xs text-gray-500">
                    From Choice to Admission
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                FLOATING CARD - BOTTOM
            ================================================== */}
            <div className="absolute -bottom-5 -right-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:-right-6">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Globe2 className="h-6 w-6" />
                </div>

                <div>

                  <p className="text-xl font-extrabold text-gray-900">
                    15+
                  </p>

                  <p className="text-xs text-gray-500">
                    Study Destinations
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
