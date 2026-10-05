"use client";

import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Factory,
  GraduationCap,
  HardHat,
  Laptop,
  Microscope,
  Plane,
  Radio,
  Settings,
  Zap,
} from "lucide-react";

import BreadcrumbBanner from "@/app/components/BreadcrumbBanner";

const engineeringCourses = [
  {
    number: "01",
    title: "Information Science Engineering",
    shortTitle: "Information Science",
    description:
      "Information Science and Engineering is a discipline that combines computer science, information technology and engineering concepts to prepare students for careers in the technology sector.",
    image: "https://www.pragaticonsultancy.com/img/post-1.jpg",
    href: "/engineering-college",
    icon: Laptop,
  },
  {
    number: "02",
    title: "Computer Science Engineering",
    shortTitle: "Computer Science",
    description:
      "Computer Science Engineering is a four-year degree program that focuses on computer systems, software development, programming and modern information technologies.",
    image: "https://www.pragaticonsultancy.com/img/post-5.jpg",
    href: "/engineering-college",
    icon: Cpu,
  },
  {
    number: "03",
    title: "Electronics and Communication Engineering",
    shortTitle: "Electronics & Communication",
    description:
      "Electronics and Communication Engineering focuses on electronic systems, communication technologies, circuits and modern digital communication applications.",
    image: "https://www.pragaticonsultancy.com/img/post-1.jpg",
    href: "/engineering-college",
    icon: Radio,
  },
  {
    number: "04",
    title: "Electrical & Electronics Engineering",
    shortTitle: "Electrical & Electronics",
    description:
      "Electrical and Electronics Engineering provides knowledge of electrical systems, electronics, power systems, control systems and modern electrical technologies.",
    image: "https://www.pragaticonsultancy.com/img/post-2.jpg",
    href: "/engineering-college",
    icon: Zap,
  },
  {
    number: "05",
    title: "Telecom Engineering",
    shortTitle: "Telecom Engineering",
    description:
      "Telecommunication Engineering focuses on communication networks, wireless systems, transmission technologies and the development of modern telecommunications infrastructure.",
    image: "https://www.pragaticonsultancy.com/img/post-3.jpg",
    href: "/engineering-college",
    icon: Radio,
  },
  {
    number: "06",
    title: "Mechanical Engineering",
    shortTitle: "Mechanical",
    description:
      "Mechanical Engineering deals with the design, development, manufacturing and maintenance of machines, mechanical systems and industrial technologies.",
    image: "https://www.pragaticonsultancy.com/img/post-4.jpg",
    href: "/engineering-college",
    icon: Settings,
  },
  {
    number: "07",
    title: "Civil Engineering",
    shortTitle: "Civil",
    description:
      "Civil Engineering focuses on planning, designing and developing buildings, infrastructure, transportation systems and other structures for a sustainable environment.",
    image: "https://www.pragaticonsultancy.com/img/post-4.jpg",
    href: "/engineering-college",
    icon: HardHat,
  },
  {
    number: "08",
    title: "Aerospace Engineering",
    shortTitle: "Aerospace",
    description:
      "Aerospace Engineering is one of the most specialised engineering disciplines, focusing on the design, development and maintenance of aircraft and aerospace systems.",
    image: "https://www.pragaticonsultancy.com/img/post-6.jpg",
    href: "/engineering-college",
    icon: Plane,
  },
  {
    number: "09",
    title: "Biotech Engineering",
    shortTitle: "Biotech",
    description:
      "Biotechnology Engineering combines engineering and biological sciences to develop technologies and applications in healthcare, agriculture, biotechnology and related industries.",
    image: "https://www.pragaticonsultancy.com/img/post-6.jpg",
    href: "/engineering-college",
    icon: Microscope,
  },
  {
    number: "10",
    title: "Chemical Engineering",
    shortTitle: "Chemical",
    description:
      "Chemical Engineering focuses on chemical processes, manufacturing systems, industrial production and the development of technologies used across various industries.",
    image: "https://www.pragaticonsultancy.com/img/post-6.jpg",
    href: "/engineering-college",
    icon: Factory,
  },
  {
    number: "11",
    title: "Instrumentation & Control",
    shortTitle: "Instrumentation",
    description:
      "Instrumentation and Control Engineering focuses on measurement, automation, process control and technologies used to monitor and control industrial systems.",
    image: "https://www.pragaticonsultancy.com/img/post-6.jpg",
    href: "/engineering-college",
    icon: Settings,
  },
  {
    number: "12",
    title: "BTech / BE (Lateral Entry)",
    shortTitle: "BTech / BE Lateral",
    description:
      "BTech and BE lateral entry programs provide eligible diploma students with an opportunity to enter engineering degree programs through the appropriate admission pathway.",
    image: "https://www.pragaticonsultancy.com/img/post-6.jpg",
    href: "/engineering-college",
    icon: GraduationCap,
  },
];

export default function EngineeringCourses() {
  return (
    <>
      <BreadcrumbBanner
        title="Engineering Courses"
        description="EXPLORE ENGINEERING COURSES AND ADMISSION OPPORTUNITIES"
      />

      <section className="relative overflow-hidden bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#a71320]/5" />

        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#2E3281]/5" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 w-full">
            <h2 className="text-3xl font-bold leading-tight text-[#2E3281] sm:text-4xl md:text-5xl">
              Build Your Future in Engineering
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-slate-600">
              Engineering students design and develop applications, structures,
              machines and innovative technologies that are controlled and used
              by people. Engineering is a responsible and highly demanded
              professional course with many different branches and career
              opportunities.
            </p>

            <p className="mt-5 text-[16px] leading-8 text-slate-600">
              Engineering has huge demand and strong competition among
              students. Choosing the right branch and college is therefore an
              important decision. For direct admission in top engineering
              colleges, contact Pragati Consultancy. We are committed to
              providing the right suggestions and guidance to help students
              choose the right path for building a successful career.
            </p>
          </div>

          <div className="group relative mb-8 min-h-[520px] overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src={engineeringCourses[0].image}
              alt={engineeringCourses[0].title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-[#10162d]/70" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#10162d]/95 via-[#10162d]/70 to-transparent" />

            <div className="relative flex min-h-[520px] items-end p-7 md:p-10 lg:p-14">
              <div className="max-w-3xl">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold tracking-[1.5px] text-[#a71320]">
                    FEATURED COURSE
                  </span>

                  <span className="text-5xl font-bold text-white/25">
                    {engineeringCourses[0].number}
                  </span>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#a71320] text-white shadow-xl">
                  <Laptop className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                  {engineeringCourses[0].title}
                </h3>

                <p className="mt-5 text-[16px] leading-8 text-white/75">
                  {engineeringCourses[0].description}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="text-red-300">✓</span>
                    Engineering Education
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="text-red-300">✓</span>
                    College Guidance
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="text-red-300">✓</span>
                    Admission Support
                  </div>
                </div>

                <Link
                  href={engineeringCourses[0].href}
                  className="group/link mt-8 inline-flex items-center gap-2 rounded-xl bg-[#a71320] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8d101c] hover:shadow-xl"
                >
                  View Colleges

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {engineeringCourses.slice(1).map((course) => {
              const Icon = course.icon;

              return (
                <Link
                  key={course.title}
                  href={course.href}
                  className="group relative min-h-[370px] overflow-hidden rounded-[1.75rem] shadow-lg"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-[#10162d]/45 transition-all duration-500 group-hover:bg-[#10162d]/70" />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#10162d] via-[#10162d]/40 to-transparent" />

                  <span className="absolute left-5 top-5 flex h-10 min-w-10 items-center justify-center rounded-full bg-white/95 px-3 text-xs font-bold text-[#a71320] shadow-lg">
                    {course.number}
                  </span>

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
        </div>
      </section>
    </>
  );
}