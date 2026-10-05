"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  LineChart,
  Users,
} from "lucide-react";

import BreadcrumbBanner from "@/app/components/BreadcrumbBanner";

const managementCourses = [
  {
    number: "01",
    title: "MBA Course",
    shortTitle: "MBA",
    description:
      "Master of Business Administration is a professional postgraduate course that develops management skills, leadership qualities, business knowledge and career opportunities.",
    image:
      "https://www.pragaticonsultancy.com/img/post-1.jpg",
    href: "/management-college",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "BBA Course",
    shortTitle: "BBA",
    description:
      "Bachelor in Business Administration is a graduation course designed to develop business knowledge, management skills, leadership qualities and professional abilities.",
    image:
      "https://www.pragaticonsultancy.com/img/post-2.jpg",
    href: "/management-college",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "BBM Course",
    shortTitle: "BBM",
    description:
      "Bachelor of Business Management is a professional management course that helps students develop business, administration, leadership and organizational skills.",
    image:
      "https://www.pragaticonsultancy.com/img/post-3.jpg",
    href: "/management-college",
    icon: Users,
  },
  {
    number: "04",
    title: "PGDM Course",
    shortTitle: "PGDM",
    description:
      "Post Graduate Diploma in Management is a professional postgraduate management program designed to develop practical business knowledge, managerial skills and leadership abilities.",
    image:
      "https://www.pragaticonsultancy.com/img/post-4.jpg",
    href: "/management-college",
    icon: LineChart,
  },
];

const managementFeatures = [
  {
    icon: GraduationCap,
    title: "Course Selection",
    text: "Understand different management courses and choose a program that matches your academic interests and career goals.",
  },
  {
    icon: Award,
    title: "College Guidance",
    text: "Get assistance in exploring reputed management colleges and universities for your preferred course.",
  },
  {
    icon: CheckCircle2,
    title: "Admission Support",
    text: "Receive guidance about management admission procedures, eligibility, documentation and available opportunities.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Direction",
    text: "Get the right guidance to develop management skills and plan a successful professional career.",
  },
];

export default function ManagementCourses() {
  return (
    <>
      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <BreadcrumbBanner
        title="Management Courses"
        description="EXPLORE MANAGEMENT COURSES AND ADMISSION OPPORTUNITIES"
      />

      {/* =====================================================
          COURSES
      ===================================================== */}

      <section
        id="management-courses"
        className="relative overflow-hidden bg-slate-50 py-16 md:py-20 lg:py-24"
      >
        {/* Background Decorations */}

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#a71320]/5" />

        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#2E3281]/5" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* =================================================
              SECTION HEADING
          ================================================= */}

          <div className="mb-12 w-full">
            <h2 className="text-3xl font-bold leading-tight text-[#2E3281] sm:text-4xl md:text-5xl">
              Build Your Future in{" "}
              <span>
                Management
              </span>
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-slate-600">
              It is a Professional Post graduation / Graduation course which
              develops the students in modern society. In this course, the
              student studies how to progress their career in developing
              Management skills and leadership Qualities. After Course,
              completion students will get the placements in Top MNC
              companies.
            </p>

            <p className="mt-5 text-[16px] leading-8 text-slate-600">
              For Joining Management courses in Bangalore, Pragati consultancy
              is providing the admissions in top universities in Bangalore.
              Visit the Pragati Consultants and take the expert decision for
              your career. Below are the different sectors in the Management
              courses opt any of that course get direct admissions and be a
              professional management student.
            </p>
          </div>

          {/* =================================================
              FEATURED MANAGEMENT COURSE
          ================================================= */}

          <div className="group relative mb-8 min-h-[520px] overflow-hidden rounded-[2rem] shadow-xl">
            {/* Background Image */}

            <img
              src={managementCourses[0].image}
              alt={managementCourses[0].title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-[#10162d]/70" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#10162d]/95 via-[#10162d]/70 to-transparent" />

            {/* Content */}

            <div className="relative flex min-h-[520px] items-end p-7 md:p-10 lg:p-14">
              <div className="max-w-3xl">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold tracking-[1.5px] text-[#a71320]">
                    FEATURED COURSE
                  </span>

                  <span className="text-5xl font-bold text-white/25">
                    {managementCourses[0].number}
                  </span>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#a71320] text-white shadow-xl">
                  <BriefcaseBusiness className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                  {managementCourses[0].title}
                </h3>

                <p className="mt-5 text-[16px] leading-8 text-white/75">
                  {managementCourses[0].description}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-red-300" />
                    Management Education
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
                  href={managementCourses[0].href}
                  className="group/link mt-8 inline-flex items-center gap-2 rounded-xl bg-[#a71320] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8d101c] hover:shadow-xl"
                >
                  View Colleges

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* =================================================
              OTHER MANAGEMENT COURSES
          ================================================= */}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {managementCourses.slice(1).map((course) => {
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

                    <h3 className="mt-5 text-2xl font-bold leading-tight text-white">
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

          {/* =================================================
              MANAGEMENT SUPPORT
          ================================================= */}

          <div className="mt-16">
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[1.5px] text-[#a71320]">
                Expert Guidance
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#2E3281] sm:text-4xl">
                Why Choose Pragati for Management Admissions?
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {managementFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#a71320]/10 text-[#a71320] transition-all duration-300 group-hover:bg-[#a71320] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-[#2E3281]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}