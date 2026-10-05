"use client";

import Link from "next/link";

import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  IndianRupee,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Trophy,
  Users,
  BriefcaseBusiness,
  FlaskConical,
} from "lucide-react";

/* =========================================================
   OFFICIAL ACHARYA IMAGE URLS
   ========================================================= */

const collegeImage =
  "https://www.acharya.ac.in/img/institute-wise/ait1.webp";

const collegeImage2 =
  "https://www.acharya.ac.in/img/institute-wise/ait2.webp";

/*
  Google favicon is used only as a lightweight logo fallback.
  It belongs to the official acharya.ac.in domain.
*/
const collegeLogo =
  "https://www.google.com/s2/favicons?domain=acharya.ac.in&sz=256";

/* =========================================================
   COURSES
   ========================================================= */

const courses = [
  {
    title: "Computer Science & Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "A comprehensive programme covering programming, algorithms, databases, software engineering, computer networks and modern computing technologies.",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Focuses on artificial intelligence, machine learning, intelligent systems, data-driven applications and emerging technologies.",
  },
  {
    title: "Computer Science Engineering – Data Science",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Combines computer science fundamentals with data analytics, machine learning, statistics and data-driven decision making.",
  },
  {
    title: "Computer Science Engineering – Cyber Security",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Covers cybersecurity, network security, ethical hacking, digital forensics, secure software and modern information security practices.",
  },
  {
    title: "Information Science & Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Covers programming, software development, information systems, databases, networking and modern digital technologies.",
  },
  {
    title: "Electronics & Communication Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Provides knowledge in electronics, communication systems, embedded systems, digital technologies and signal processing.",
  },
  {
    title: "Electrical & Electronics Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Covers electrical systems, power engineering, electronics, control systems and modern electrical technologies.",
  },
  {
    title: "Mechanical Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Focuses on mechanical design, manufacturing, thermal engineering, materials, production and industrial applications.",
  },
  {
    title: "Civil Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Covers structural engineering, construction, transportation, environmental engineering and infrastructure development.",
  },
  {
    title: "Aeronautical Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "A specialised engineering programme covering aircraft systems, aerodynamics, propulsion, structures and aerospace technologies.",
  },
  {
    title: "Biotechnology Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Combines engineering principles with biotechnology, biological sciences, laboratory applications and industrial processes.",
  },
  {
    title: "Mechatronics Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Integrates mechanical engineering, electronics, automation, robotics, control systems and intelligent manufacturing.",
  },
  {
    title: "Robotics & Artificial Intelligence",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Combines robotics, artificial intelligence, automation, computer vision, control systems and intelligent machines.",
  },
];

/* =========================================================
   ELIGIBILITY
   ========================================================= */

const eligibility = [
  "Candidates must satisfy the eligibility requirements prescribed by the applicable admission authority and Government of Karnataka.",
  "Candidates seeking B.E. admission should have completed 10+2 / PUC or an equivalent qualification with the required subjects.",
  "For Karnataka admissions, eligible candidates can participate through the applicable KCET / KEA counselling process.",
  "Candidates may also seek admission through COMEDK UGET where applicable.",
  "Management quota admission may be available subject to the institute's current admission rules and applicable regulations.",
  "Minimum qualifying marks, subject combinations and entrance requirements can vary according to the admission category.",
];

/* =========================================================
   ADMISSION STEPS
   ========================================================= */

const admissionSteps = [
  {
    number: "01",
    title: "Complete 10+2 / PUC",
    description:
      "Complete the required qualifying examination with Physics, Mathematics and the prescribed additional subject.",
  },
  {
    number: "02",
    title: "Take Entrance Exam",
    description:
      "Appear for the applicable entrance examination such as KCET or COMEDK UGET.",
  },
  {
    number: "03",
    title: "Counselling",
    description:
      "Register for the applicable counselling process and select Acharya Institute of Technology and your preferred branch.",
  },
  {
    number: "04",
    title: "Confirm Admission",
    description:
      "Complete document verification, fee payment and the remaining admission formalities after seat allotment.",
  },
];

/* =========================================================
   HIGHLIGHTS
   ========================================================= */

const highlights = [
  {
    icon: Award,
    title: "Established in 2000",
    description:
      "A well-established engineering institution with more than two decades of academic experience.",
  },
  {
    icon: ShieldCheck,
    title: "NAAC & NBA Accredited",
    description:
      "AIT is accredited by NAAC and has NBA-accredited engineering programmes.",
  },
  {
    icon: Building2,
    title: "120-Acre Campus",
    description:
      "A large campus with modern classrooms, laboratories, library and student facilities.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry Exposure",
    description:
      "Students receive opportunities for internships, projects, certifications and industry interaction.",
  },
];

/* =========================================================
   WHY CHOOSE
   ========================================================= */

const whyChoose = [
  {
    icon: Trophy,
    title: "Academic Excellence",
    description:
      "AIT provides a strong academic environment with engineering programmes aligned to industry and technology needs.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Incubation",
    description:
      "Innovation and incubation facilities encourage entrepreneurship, projects and technology development.",
  },
  {
    icon: FlaskConical,
    title: "Advanced Laboratories",
    description:
      "Students receive practical exposure through specialised laboratories and technology-focused learning.",
  },
  {
    icon: Users,
    title: "Industry Exposure",
    description:
      "Industry collaborations provide opportunities for internships, projects, certifications and professional exposure.",
  },
];

/* =========================================================
   FEE STRUCTURE
   ========================================================= */

const feeRows = [
  {
    category: "KEA / State Fee",
    course: "B.E.",
    tuition: "₹65,610",
    college: "₹20,000",
    university: "₹10,610",
    total: "₹96,220",
  },
  {
    category: "PG",
    course: "PG Programmes",
    tuition: "₹55,000",
    college: "Included",
    university: "₹42,800",
    total: "₹97,800",
  },
];

/* =========================================================
   PAGE
   ========================================================= */

export default function AcharyaInstituteOfTechnologyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f9fc] text-slate-800">

      {/* =========================================================
          HERO IMAGE
      ========================================================== */}

      <section className="relative w-full overflow-hidden">

        <div
          className="
            relative
            h-[360px]
            w-full
            sm:h-[440px]
            md:h-[540px]
            lg:h-[620px]
            xl:h-[680px]
          "
        >

          {/* Official AIT Image */}
          <img
            src={collegeImage}
            alt="Acharya Institute of Technology campus"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* Image readability overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Bottom dark gradient */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#061321]
              via-[#061321]/55
              to-transparent
            "
          />

          {/* Top badge */}
          <div className="absolute left-0 right-0 top-0 z-10">

            <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-8 lg:px-10">

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white/95
                  px-4
                  py-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[1.5px]
                  text-[#2E3281]
                  shadow-xl
                "
              >
                <GraduationCap className="h-4 w-4" />

                Engineering College
              </div>

            </div>

          </div>

          {/* Hero content */}
          <div className="absolute bottom-0 left-0 right-0 z-10">

            <div
              className="
                mx-auto
                max-w-7xl
                px-5
                pb-12
                sm:px-8
                sm:pb-14
                md:pb-16
                lg:px-10
                lg:pb-20
              "
            >

              <div className="max-w-5xl">

                {/* Tags */}
                <div className="mb-5 flex flex-wrap gap-2">

                  <span className="rounded-full bg-[#a71320] px-4 py-2 text-xs font-bold text-white shadow-lg">
                    EST. 2000
                  </span>

                  <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#2E3281] shadow-lg">
                    Bengaluru
                  </span>

                  <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#2E3281] shadow-lg">
                    NAAC & NBA
                  </span>

                </div>

                <h1
                  className="
                    text-4xl
                    font-extrabold
                    leading-[1.05]
                    tracking-tight
                    text-white
                    sm:text-5xl
                    md:text-6xl
                    lg:text-7xl
                  "
                >
                  Acharya Institute
                  <span className="block text-[#f2b5bd]">
                    of Technology
                  </span>
                </h1>

                <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-medium text-white/90">

                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#f2b5bd]" />
                    Soladevanahalli, Bengaluru
                  </span>

                  <span className="hidden text-white/30 sm:block">
                    |
                  </span>

                  <span className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-[#f2b5bd]" />
                    Engineering & Technology
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          LOGO + INTRO
      ========================================================== */}

      <section className="relative z-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="relative -mt-10 sm:-mt-14">

            <div
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-[0_20px_60px_rgba(15,23,42,0.14)]
                sm:p-7
                md:p-8
              "
            >

              <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

                {/* Logo + College information */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                  {/* Logo box */}
                  <div
                    className="
                      flex
                      h-28
                      w-28
                      shrink-0
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      p-3
                      shadow-lg
                      sm:h-32
                      sm:w-32
                    "
                  >

                    <img
                      src={collegeLogo}
                      alt="Acharya logo"
                      className="
                        h-full
                        w-full
                        object-contain
                        p-1
                      "
                    />

                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[2px] text-[#a71320]">
                      Acharya Institute of Technology
                    </p>

                    <h2 className="mt-2 text-2xl font-extrabold text-[#2E3281] sm:text-3xl">
                      AIT Bengaluru
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">

                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-[#a71320]" />
                        Bengaluru, Karnataka
                      </span>

                      <span className="hidden text-slate-300 sm:block">
                        |
                      </span>

                      <span className="flex items-center gap-1.5">
                        <GraduationCap className="h-4 w-4 text-[#a71320]" />
                        Engineering & Technology
                      </span>

                    </div>

                  </div>

                </div>

                {/* CTA */}
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[220px]">

                  <Link
                    href="/contact"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#a71320]
                      px-6
                      py-3.5
                      text-sm
                      font-bold
                      text-white
                      shadow-lg
                      shadow-[#a71320]/20
                      transition
                      hover:-translate-y-0.5
                      hover:bg-[#8e101c]
                    "
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border-2
                      border-[#2E3281]
                      px-6
                      py-3
                      text-sm
                      font-bold
                      text-[#2E3281]
                      transition
                      hover:bg-[#2E3281]
                      hover:text-white
                    "
                  >
                    Get Admission Guidance
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          QUICK INFORMATION
      ========================================================== */}

      <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-8 lg:px-10">

        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-4">

          <div className="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Established
            </p>

            <p className="mt-1 text-xl font-extrabold text-[#2E3281]">
              2000
            </p>
          </div>

          <div className="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Campus
            </p>

            <p className="mt-1 text-xl font-extrabold text-[#2E3281]">
              120 Acres
            </p>
          </div>

          <div className="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Accreditation
            </p>

            <p className="mt-1 text-xl font-extrabold text-[#2E3281]">
              NAAC & NBA
            </p>
          </div>

          <div className="p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Location
            </p>

            <p className="mt-1 text-xl font-extrabold text-[#2E3281]">
              Bengaluru
            </p>
          </div>

        </div>

      </section>

      {/* =========================================================
          ABOUT COLLEGE
      ========================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">

          <div>

            <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
              About College
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#2E3281] sm:text-4xl md:text-5xl">
              A Modern Engineering Campus
              <span className="block text-[#a71320]">
                Built for the Future
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-[16px] leading-8 text-slate-600">

              <p>
                Acharya Institute of Technology (AIT) was established in 2000
                and has grown into a prominent engineering institution in
                Bengaluru. The institute is affiliated with Visvesvaraya
                Technological University (VTU), approved by AICTE and
                accredited by NAAC and NBA.
              </p>

              <p>
                Located on a sprawling 120-acre campus at Soladevanahalli,
                AIT provides students with modern laboratories, smart
                classrooms, a centralised library, sports facilities,
                innovation spaces and a broad range of academic and
                extracurricular opportunities.
              </p>

              <p>
                The institute offers engineering programmes across core
                disciplines and emerging technology areas including Artificial
                Intelligence & Machine Learning, Data Science, Cyber Security,
                Robotics & AI and other specialised fields.
              </p>

              <p>
                AIT also focuses on industry interaction, internships,
                certifications, research, innovation and entrepreneurship to
                help students build practical skills alongside their academic
                knowledge.
              </p>

            </div>

          </div>

          {/* Side Card */}
          <div className="rounded-3xl bg-[#2E3281] p-7 text-white shadow-xl sm:p-8">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Award className="h-7 w-7 text-white" />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[1.5px] text-white/60">
              AIT at a Glance
            </p>

            <h3 className="mt-2 text-3xl font-extrabold">
              25+ Years
            </h3>

            <p className="mt-4 leading-7 text-white/75">
              Acharya Institute of Technology has been providing technical
              education in Bengaluru since 2000.
            </p>

            <div className="mt-7 border-t border-white/15 pt-6">

              <div className="flex items-center justify-between">
                <span className="text-sm text-white/65">
                  Campus
                </span>

                <span className="font-bold">
                  120 Acres
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-white/65">
                  Corporate Visits
                </span>

                <span className="font-bold">
                  200+
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-white/65">
                  Established
                </span>

                <span className="font-bold">
                  2000
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          HIGHLIGHTS
      ========================================================== */}

      <section className="bg-white py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
              Why AIT
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl md:text-5xl">
              College Highlights
            </h2>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {highlights.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-2xl
                    border
                    border-slate-200
                    bg-[#f8f9fc]
                    p-6
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#a71320]/20
                    hover:bg-white
                    hover:shadow-xl
                  "
                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#a71320]/10
                      text-[#a71320]
                      transition
                      group-hover:bg-[#a71320]
                      group-hover:text-white
                    "
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#2E3281]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          COURSES
      ========================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">

        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

          <div>

            <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
              Courses Offered
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl md:text-5xl">
              Explore Acharya
              <span className="block text-[#a71320]">
                Engineering Courses
              </span>
            </h2>

          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-500 md:text-right">
            Choose from core engineering disciplines and specialised
            programmes in artificial intelligence, data science, robotics,
            biotechnology and emerging technologies.
          </p>

        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">

          {courses.map((course, index) => (

            <div
              key={course.title}
              className="
                group
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition
                duration-300
                hover:-translate-y-1
                hover:border-[#2E3281]/20
                hover:shadow-xl
              "
            >

              <div className="flex items-start justify-between gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2E3281]/10 text-sm font-extrabold text-[#2E3281]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <span className="rounded-full bg-[#a71320]/10 px-3 py-1.5 text-xs font-bold text-[#a71320]">
                  {course.type}
                </span>

              </div>

              <h3 className="mt-5 text-xl font-bold text-[#2E3281]">
                {course.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {course.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                <span className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                  <GraduationCap className="h-4 w-4 text-[#a71320]" />
                  {course.duration}
                </span>

               

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* =========================================================
          ELIGIBILITY
      ========================================================== */}

      <section className="bg-[#2E3281] py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[2px] text-[#f2b5bd]">
                Admission Eligibility
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
                Check Your
                <span className="block text-[#f2b5bd]">
                  Eligibility
                </span>
              </h2>

              <p className="mt-6 leading-8 text-white/70">
                Eligibility varies according to the programme, admission
                category and applicable counselling rules. Students should
                verify the latest requirements before applying.
              </p>

              <Link
                href="/contact"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-[#2E3281]
                  transition
                  hover:bg-slate-100
                "
              >
                Check Eligibility
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

            <div className="space-y-4">

              {eligibility.map((item, index) => (

                <div
                  key={index}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
                >

                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#a71320]">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>

                  <p className="text-sm leading-7 text-white/80">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FEE STRUCTURE
      ========================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
            Fee Structure
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl md:text-5xl">
            Understand the
            <span className="text-[#a71320]">
              {" "}Fees
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
            The following figures are indicative. Actual payable fees may
            vary by admission route, academic year, programme and category.
          </p>

        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[850px] border-collapse text-left">

              <thead>

                <tr className="bg-[#2E3281] text-white">

                  <th className="px-5 py-4 text-sm font-bold">
                    Admission Category
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Course
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Tuition Fee
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    College Fee
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    University Fee
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Total
                  </th>

                </tr>

              </thead>

              <tbody>

                {feeRows.map((row, index) => (

                  <tr
                    key={row.category}
                    className={`border-b border-slate-100 ${
                      index % 2 === 0
                        ? "bg-white"
                        : "bg-slate-50"
                    }`}
                  >

                    <td className="px-5 py-5 text-sm font-bold text-[#2E3281]">
                      {row.category}
                    </td>

                    <td className="px-5 py-5 text-sm text-slate-600">
                      {row.course}
                    </td>

                    <td className="px-5 py-5 text-sm text-slate-600">
                      {row.tuition}
                    </td>

                    <td className="px-5 py-5 text-sm text-slate-600">
                      {row.college}
                    </td>

                    <td className="px-5 py-5 text-sm text-slate-600">
                      {row.university}
                    </td>

                    <td className="px-5 py-5 text-sm font-extrabold text-[#a71320]">
                      {row.total}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        <div className="mt-5 flex gap-3 rounded-xl border border-[#a71320]/10 bg-[#a71320]/5 p-5">

          <IndianRupee className="mt-0.5 h-5 w-5 shrink-0 text-[#a71320]" />

          <p className="text-sm leading-6 text-slate-600">
            Fee figures are indicative and should be verified with the latest
            official notification before admission. Hostel, transportation,
            examination and other applicable charges may be separate.
          </p>

        </div>

      </section>

      {/* =========================================================
          WHY CHOOSE AIT
      ========================================================== */}

      <section className="bg-white py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
              Why Choose AIT
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl md:text-5xl">
              More Than Just
              <span className="text-[#a71320]">
                {" "}Engineering
              </span>
            </h2>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {whyChoose.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-[#f8f9fc]
                    p-6
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white
                    hover:shadow-xl
                  "
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2E3281]/10 text-[#2E3281]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#2E3281]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          ADMISSION PROCESS
      ========================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
            Admission Process
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl md:text-5xl">
            How to Get Admission
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {admissionSteps.map((step, index) => (

            <div
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >

              <div className="flex items-center justify-between">

                <span className="text-4xl font-black text-[#2E3281]/10">
                  {step.number}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a71320] text-xs font-bold text-white">
                  {index + 1}
                </div>

              </div>

              <h3 className="mt-5 text-xl font-bold text-[#2E3281]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* =========================================================
          DOCUMENTS + LOCATION
      ========================================================== */}

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 md:pb-20 lg:px-10">

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Documents */}

          <div className="rounded-3xl bg-[#f8f9fc] p-7 sm:p-9">

            <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
              Documents
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl">
              Documents Required
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Students should keep their academic and supporting documents
              ready for counselling, verification and admission.
            </p>

            <div className="mt-7 space-y-3">

              {[
                "10th / SSLC Marks Card",
                "12th / PUC Marks Card",
                "KCET / COMEDK Rank Card",
                "KEA / COMEDK Allotment Letter",
                "Transfer Certificate",
                "Study Certificate",
                "Migration Certificate where applicable",
                "Income / Caste Certificate where applicable",
                "Aadhaar Card",
                "Passport-size photographs",
              ].map((document) => (

                <div
                  key={document}
                  className="flex items-center gap-3 rounded-xl bg-white p-3.5 shadow-sm"
                >

                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#a71320]" />

                  <span className="text-sm font-medium text-slate-600">
                    {document}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Location */}

          <div className="rounded-3xl bg-[#2E3281] p-7 text-white sm:p-9">

            <p className="text-sm font-bold uppercase tracking-[2px] text-[#f2b5bd]">
              Location
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Acharya Bengaluru
            </h2>

            <p className="mt-5 leading-8 text-white/70">
              Acharya Institute of Technology is located at Soladevanahalli,
              Bengaluru, on a large 120-acre campus with modern academic,
              laboratory and student facilities.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex gap-4 rounded-2xl bg-white/10 p-4">

                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#f2b5bd]" />

                <div>

                  <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                    Address
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/85">
                    Acharya Institute of Technology
                    <br />
                    Acharya Dr. S. Radhakrishnan Road
                    <br />
                    Acharya P.O., Soladevanahalli
                    <br />
                    Bengaluru, Karnataka - 560107
                  </p>

                </div>

              </div>

              <div className="flex gap-4 rounded-2xl bg-white/10 p-4">

                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f2b5bd]" />

                <div>

                  <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                    Admissions
                  </p>

                  <p className="mt-1 text-sm text-white/85">
                    +91 74066 44449
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    admissions@acharya.ac.in
                  </p>

                </div>

              </div>

            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Acharya+Institute+of+Technology+Soladevanahalli+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-white
                px-6
                py-3.5
                text-sm
                font-bold
                text-[#2E3281]
                transition
                hover:bg-slate-100
              "
            >
              View Location
              <ArrowRight className="h-4 w-4" />
            </a>

          </div>

        </div>

      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <section className="px-5 pb-16 sm:px-8 md:pb-20 lg:px-10">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#a71320]">

          <div className="relative px-6 py-12 sm:px-10 md:px-14 md:py-16">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />

            <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-black/10" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-2xl">

                <p className="text-sm font-bold uppercase tracking-[2px] text-white/70">
                  Start Your Admission Journey
                </p>

                <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                  Interested in Acharya Institute of Technology?
                </h2>

                <p className="mt-5 leading-7 text-white/80">
                  Get professional guidance for course selection, eligibility,
                  KCET / COMEDK counselling and the AIT admission process.
                </p>

              </div>

              <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-white
                    px-7
                    py-4
                    text-sm
                    font-bold
                    text-[#a71320]
                    shadow-xl
                    transition
                    hover:-translate-y-0.5
                    hover:bg-slate-100
                  "
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border-2
                    border-white/60
                    px-7
                    py-4
                    text-sm
                    font-bold
                    text-white
                    transition
                    hover:bg-white/10
                  "
                >
                  Contact Counsellor
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}