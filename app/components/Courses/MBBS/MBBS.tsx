"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,

  GraduationCap,
  HeartPulse,
  Hospital,
  Microscope,
  Pill,
  Stethoscope,
  Syringe,
} from "lucide-react";

import BreadcrumbBanner from "@/app/components/BreadcrumbBanner";

const medicalCourses = [
  {
    number: "01",
    title: "MBBS Courses",
    shortTitle: "MBBS",
    description:
      "Bachelor of Medicine and Bachelor of Surgery is a professional medical course for students who aspire to build a career in medicine and healthcare.",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1400&q=85",
    href: "/medical-college",
    icon: Stethoscope,
  },
  {
    number: "02",
    title: "BDS / MDS",
    shortTitle: "BDS / MDS",
    description:
      "Explore dental education opportunities and get guidance for selecting suitable colleges and courses in the dental field.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=85",
    href: "/medical-college",
    icon: HeartPulse,
  },
  {
    number: "03",
    title: "Dental Courses",
    shortTitle: "Dental",
    description:
      "Build your future in dental care with the right course and college selection guidance from experienced admission consultants.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=85",
    href: "/medical-college",
    icon: Syringe,
  },
  {
    number: "04",
    title: "Bachelor of Physiotherapy",
    shortTitle: "Physiotherapy",
    description:
      "Discover physiotherapy education options and receive guidance about suitable courses, colleges and admission opportunities.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85",
    href: "/medical-college",
    icon: Hospital,
  },
  {
    number: "05",
    title: "Medical Pharmacy",
    shortTitle: "Pharmacy",
    description:
      "Pharmacy course applicants can receive professional admission guidance to understand suitable educational options and colleges.",
    image:
      "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1400&q=85",
    href: "/medical-college",
    icon: Pill,
  },
  {
    number: "06",
    title: "MD Ayurveda",
    shortTitle: "Ayurveda",
    description:
      "Explore Ayurveda education and admission opportunities with guidance for selecting the right course and college.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=85",
    href: "/medical-college",
    icon: Microscope,
  },
  {
    number: "07",
    title: "Homeopathy",
    shortTitle: "Homeopathy",
    description:
      "Understand your options for homeopathy education and get personalised guidance for the admission process.",
    image:
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1400&q=85",
    href: "/medical-college",
    icon: Award,
  },
];


export default function MedicalCourses() {
  return (
    <>
      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <BreadcrumbBanner
        title="Medical Courses"
        description="EXPLORE MEDICAL COURSES AND ADMISSION OPPORTUNITIES"
      />

      {/* =====================================================
          HERO - BACKGROUND IMAGE
      ===================================================== */}



      {/* =====================================================
          COURSES
      ===================================================== */}

      <section
        id="medical-courses"
        className="relative overflow-hidden bg-slate-50 py-16 md:py-20 lg:py-24"
      >
        {/* Background Decoration */}

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#a71320]/5" />

        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#2E3281]/5" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* SECTION HEADING */}

          <div className="mb-12 w-full">


            <h2 className="text-3xl font-bold leading-tight text-[#2E3281] sm:text-4xl md:text-5xl">
              Find Your Path in{" "}
              <span>Medical Education</span>
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-slate-600">
              Bachelor of surgeon / Medicine is a professional course. Students After completion there PUC in the relevant sector their approach for these professional courses (MBBS). The tenure of this course is 5.5years in this tenure their select the specialization as a medicine or a surgeon related course. Our Pragati consultancy Aim is to provide the best and the quality education in the medical field by providing the admissions in top-rated colleges/universities in Bangalore. The colleges and courses are regulated by the Medical Council of India. Below are the several branches/courses regarding Medical? Approach Pragati consultants for getting the proper details about these courses. And take the admission in the best colleges from Bangalore.
            </p>
          </div>

          {/* FEATURED MBBS */}

          <div className="group relative mb-8 min-h-[520px] overflow-hidden rounded-[2rem] shadow-xl">
            {/* Background */}

            <img
              src={medicalCourses[0].image}
              alt={medicalCourses[0].title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-[#10162d]/70" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#10162d]/95 via-[#10162d]/70 to-transparent" />

            {/* Content */}

            <div className="relative flex min-h-[520px] items-end p-7 md:p-10 lg:p-14">
              <div className="max-w-2xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold tracking-[1.5px] text-[#a71320]">
                    FEATURED COURSE
                  </span>

                  <span className="text-5xl font-bold text-white/25">
                    {medicalCourses[0].number}
                  </span>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#a71320] text-white shadow-xl">
                  <Stethoscope className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                  {medicalCourses[0].title}
                </h3>

                <p className="mt-5 text-[16px] leading-8 text-white/75">
                  {medicalCourses[0].description}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-red-300" />
                    Medical Education
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-red-300" />
                    College Guidance
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-red-300" />
                    Admission Support
                  </div>
                </div>

                <Link
                  href={medicalCourses[0].href}
                  className="group/link mt-8 inline-flex items-center gap-2 rounded-xl bg-[#a71320] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8d101c] hover:shadow-xl"
                >
                  View MBBS Colleges

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* OTHER COURSES */}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {medicalCourses.slice(1).map((course) => {
              const Icon = course.icon;

              return (
                <Link
                  key={course.title}
                  href={course.href}
                  className="group relative min-h-[370px] overflow-hidden rounded-[1.75rem] shadow-lg"
                >
                  {/* Background Image */}

                  <img
                    src={course.image}
                    alt={course.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Base Overlay */}

                  <div className="absolute inset-0 bg-[#10162d]/45 transition-all duration-500 group-hover:bg-[#10162d]/70" />

                  {/* Gradient */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#10162d] via-[#10162d]/40 to-transparent" />

                  {/* Number */}

                  <span className="absolute left-5 top-5 flex h-10 min-w-10 items-center justify-center rounded-full bg-white/95 px-3 text-xs font-bold text-[#a71320] shadow-lg">
                    {course.number}
                  </span>

                  {/* Content */}

                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#a71320] text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-5 text-2xl font-bold text-white">
                      {course.title}
                    </h3>

                    <p className="mt-3 max-h-0 overflow-hidden text-sm leading-7 text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                      {course.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-5">
                      <span className="text-sm font-bold text-white">
                        View College
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-[#a71320]">
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE PRAGATI - BACKGROUND IMAGE
      ===================================================== */}

    </>
  );
}