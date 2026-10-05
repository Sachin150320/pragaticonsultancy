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
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

const courses = [
  {
    title: "Computer Science & Engineering",
    duration: "4 Years",
    type: "B.Tech",
    description:
      "Build strong foundations in programming, software development, algorithms, databases, computer networks and modern computing technologies.",
  },
  {
    title: "Information Science & Engineering",
    duration: "4 Years",
    type: "B.Tech",
    description:
      "A technology-focused engineering programme covering software systems, information management, programming and emerging digital technologies.",
  },
  {
    title: "Artificial Intelligence",
    duration: "4 Years",
    type: "B.Tech",
    description:
      "Focuses on artificial intelligence, machine learning, data-driven systems, programming and intelligent computing applications.",
  },
  {
    title: "Electronics & Communication Engineering",
    duration: "4 Years",
    type: "B.Tech",
    description:
      "Covers electronics, communication systems, embedded systems, digital technologies and related engineering applications.",
  },
  {
    title: "Electrical & Electronics Engineering",
    duration: "4 Years",
    type: "B.Tech",
    description:
      "Provides knowledge in electrical systems, power systems, electronics, control systems and electrical engineering applications.",
  },
  {
    title: "Mechanical Engineering",
    duration: "4 Years",
    type: "B.Tech",
    description:
      "Covers mechanical design, manufacturing, thermal engineering, materials, production and industrial engineering fundamentals.",
  },
  {
    title: "Civil Engineering",
    duration: "4 Years",
    type: "B.Tech",
    description:
      "Includes structural engineering, construction, transportation, environmental engineering, water resources and infrastructure development.",
  },
  {
    title: "Architecture",
    duration: "5 Years",
    type: "B.Arch",
    description:
      "A professional architecture programme focused on architectural design, planning, construction technology and built-environment studies.",
  },
];

const eligibility = [
  "Candidates must satisfy the eligibility conditions prescribed by KEA and the Government of Karnataka.",
  "For undergraduate engineering admission, candidates are selected through the prescribed CET/KEA counselling process.",
  "Candidates should have completed the required 10+2 / PUC or equivalent qualification with the required subjects.",
  "Admission is based on merit, eligibility, reservation rules and seat allotment through the applicable counselling process.",
  "Architecture applicants must satisfy the applicable B.Arch admission requirements and examination criteria.",
];

const admissionSteps = [
  {
    number: "01",
    title: "Appear for CET",
    description:
      "Complete the applicable Karnataka CET examination and counselling process.",
  },
  {
    number: "02",
    title: "KEA Counselling",
    description:
      "Register for KEA counselling and participate in the engineering seat-allotment process.",
  },
  {
    number: "03",
    title: "Choose UVCE",
    description:
      "Select University Visvesvaraya College of Engineering and the preferred eligible course.",
  },
  {
    number: "04",
    title: "Complete Admission",
    description:
      "After seat allotment, report to the college with the required original documents and complete formal admission.",
  },
];

const highlights = [
  {
    icon: Award,
    title: "Established in 1917",
    description:
      "One of the oldest engineering institutions in Karnataka.",
  },
  {
    icon: ShieldCheck,
    title: "Autonomous Institution",
    description:
      "A long-standing institution with an established academic legacy.",
  },
  {
    icon: Users,
    title: "3300+ Students",
    description:
      "A large academic community across engineering programmes.",
  },
  {
    icon: Building2,
    title: "Two Campuses",
    description:
      "City campus at K.R. Circle and engineering campus at Jnana Bharathi.",
  },
];

const feeRows = [
  {
    year: "II Year",
    course: "B.Tech / B.Arch",
    admission: "₹1,100",
    tuition: "₹19,090",
    other: "₹3,700",
    total: "₹23,890",
  },
  {
    year: "III Year",
    course: "B.Tech / B.Arch",
    admission: "₹1,100",
    tuition: "₹16,000",
    other: "₹3,700",
    total: "₹20,800",
  },
  {
    year: "IV Year",
    course: "B.Tech / B.Arch",
    admission: "₹1,100",
    tuition: "₹15,000",
    other: "₹3,700",
    total: "₹19,800",
  },
  {
    year: "V Year",
    course: "B.Arch",
    admission: "₹1,100",
    tuition: "₹15,000",
    other: "₹3,700",
    total: "₹19,800",
  },
];

export default function UniversityVisvesvarayaCollegeOfEngineeringPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] text-slate-800">

      {/* =========================================================
          FULL WIDTH COLLEGE IMAGE
      ========================================================== */}
      <section className="relative w-full overflow-hidden">

        <div className="relative h-[300px] sm:h-[390px] md:h-[480px] lg:h-[560px] w-full">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=90"
            alt="University Visvesvaraya College of Engineering"
            className="h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071425] via-[#071425]/45 to-black/10" />

          {/* Top small label */}
          <div className="absolute left-0 right-0 top-0">
            <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-8 lg:px-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] text-[#2E3281] shadow-lg backdrop-blur">
                <GraduationCap className="h-4 w-4" />
                Engineering College
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 md:pb-16 lg:px-10">

              <div className="max-w-4xl">

                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#a71320] px-4 py-2 text-xs font-bold text-white">
                    EST. 1917
                  </span>

                  <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#2E3281]">
                    Bengaluru
                  </span>

                  <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#2E3281]">
                    Autonomous Institution
                  </span>
                </div>

                <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  University Visvesvaraya
                  <span className="block text-[#f2b5bd]">
                    College of Engineering
                  </span>
                </h1>

                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-white/90">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#f2b5bd]" />
                    K.R. Circle, Bengaluru
                  </span>

                  <span className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-[#f2b5bd]" />
                    B.Tech & B.Arch
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOGO + COLLEGE INTRO
      ========================================================== */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="relative -mt-10 sm:-mt-14">

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:p-7 md:p-8">

              <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

                {/* Logo + Info */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                  <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:h-32 sm:w-32">
                    <img
                      src="https://www.google.com/s2/favicons?domain=uvce.ac.in&sz=128"
                      alt="UVCE Logo"
                      className="h-20 w-20 object-contain sm:h-24 sm:w-24"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[2px] text-[#a71320]">
                      University Visvesvaraya College of Engineering
                    </p>

                    <h2 className="mt-2 text-2xl font-extrabold text-[#2E3281] sm:text-3xl">
                      UVCE Bengaluru
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-600">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-[#a71320]" />
                        Bengaluru, Karnataka
                      </span>

                      <span className="hidden text-slate-300 sm:block">
                        |
                      </span>

                      <span className="flex items-center gap-1.5">
                        <GraduationCap className="h-4 w-4 text-[#a71320]" />
                        Engineering & Architecture
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[210px]">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#a71320] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#a71320]/20 transition hover:-translate-y-0.5 hover:bg-[#8e101c]"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 rounded-xl border-2 border-[#2E3281] px-6 py-3 text-sm font-bold text-[#2E3281] transition hover:bg-[#2E3281] hover:text-white"
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
              1917
            </p>
          </div>

          <div className="border-b border-slate-200 p-5 sm:border-l sm:border-l-slate-100 lg:border-b-0 lg:border-r">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Location
            </p>
            <p className="mt-1 text-xl font-extrabold text-[#2E3281]">
              Bengaluru
            </p>
          </div>

          <div className="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Programmes
            </p>
            <p className="mt-1 text-xl font-extrabold text-[#2E3281]">
              B.Tech / B.Arch
            </p>
          </div>

          <div className="p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Admission
            </p>
            <p className="mt-1 text-xl font-extrabold text-[#2E3281]">
              KEA / CET
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================
          ABOUT COLLEGE
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">

        <div className="w-full">

          <div>

            <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
              About College
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#2E3281] sm:text-4xl md:text-5xl">
              A Legacy of Engineering
              <span className="block text-[#a71320]">
                Excellence Since 1917
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-[16px] leading-8 text-slate-600">

              <p>
                University Visvesvaraya College of Engineering (UVCE) was
                established in 1917 by Bharat Ratna Sir M. Visvesvaraya. The
                institution has grown into one of Karnataka's most recognised
                engineering institutions with a long academic and engineering
                legacy.
              </p>

              <p>
                UVCE operates across its city campus at K.R. Circle and its
                engineering campus at Jnana Bharathi. The institution provides
                engineering programmes across areas such as Computer Science,
                Information Science, Artificial Intelligence, Electronics &
                Communication, Electrical & Electronics, Mechanical and Civil
                Engineering, along with Architecture.
              </p>

              <p>
                The college follows a merit-oriented admission process and
                provides students with opportunities for academic development,
                research, technical activities, industry interaction and
                campus recruitment.
              </p>

            </div>

          </div>

          {/* Side Card */}
         

        </div>
      </section>

      {/* =========================================================
          HIGHLIGHTS
      ========================================================== */}
      <section className="bg-white py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
              Why UVCE
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
                  className="group rounded-2xl border border-slate-200 bg-[#f8f9fc] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#a71320]/20 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#a71320]/10 text-[#a71320] transition group-hover:bg-[#a71320] group-hover:text-white">
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
              Engineering & Architecture
              <span className="block text-[#a71320]">
                Courses
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-500 md:text-right">
            Explore the major undergraduate programmes available at UVCE and
            choose a course based on your academic interests and career goals.
          </p>

        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">

          {courses.map((course, index) => (
            <div
              key={course.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#2E3281]/20 hover:shadow-xl"
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

                <span className="flex items-center gap-1 text-sm font-bold text-[#2E3281]">
                  View Course
                  <ChevronRight className="h-4 w-4" />
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
                Admission eligibility depends on the programme, applicable
                government rules and the counselling process. Candidates
                should verify the latest requirements before applying.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#2E3281] transition hover:bg-[#f5f5f5]"
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
            <span className="text-[#a71320]"> Fees</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
            The fee information below is provided as a reference based on
            published UVCE fee information. Actual fees can change according
            to the academic year, admission category and applicable government
            notifications.
          </p>

        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[760px] border-collapse text-left">

              <thead>
                <tr className="bg-[#2E3281] text-white">
                  <th className="px-5 py-4 text-sm font-bold">
                    Year
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Course
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Admission Fee
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Tuition Fee
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Other Fees
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Total
                  </th>
                </tr>
              </thead>

              <tbody>

                {feeRows.map((row, index) => (
                  <tr
                    key={row.year}
                    className={`border-b border-slate-100 ${
                      index % 2 === 0
                        ? "bg-white"
                        : "bg-slate-50"
                    }`}
                  >
                    <td className="px-5 py-5 text-sm font-bold text-[#2E3281]">
                      {row.year}
                    </td>

                    <td className="px-5 py-5 text-sm text-slate-600">
                      {row.course}
                    </td>

                    <td className="px-5 py-5 text-sm text-slate-600">
                      {row.admission}
                    </td>

                    <td className="px-5 py-5 text-sm text-slate-600">
                      {row.tuition}
                    </td>

                    <td className="px-5 py-5 text-sm text-slate-600">
                      {row.other}
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
            official notification before admission. Category-wise concessions,
            reimbursements and other applicable charges may vary.
          </p>

        </div>

      </section>

      {/* =========================================================
          ADMISSION PROCESS
      ========================================================== */}
      <section className="bg-white py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
              Admission Process
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl md:text-5xl">
              How to Get Admission
            </h2>

          </div>

          <div className="relative mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {admissionSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-slate-200 bg-[#f8f9fc] p-6"
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

        </div>

      </section>

      {/* =========================================================
          DOCUMENTS
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">

        <div className="grid gap-10 lg:grid-cols-2">

          <div className="rounded-3xl bg-[#f8f9fc] p-7 sm:p-9">

            <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
              Documents
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl">
              Documents Required
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Candidates should keep the required academic and supporting
              documents ready during the admission process.
            </p>

            <div className="mt-7 space-y-3">

              {[
                "KEA Seat Allotment Order",
                "10th / SSLC Marks Card",
                "12th / PUC Marks Card",
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

          <div className="rounded-3xl bg-[#2E3281] p-7 text-white sm:p-9">

            <p className="text-sm font-bold uppercase tracking-[2px] text-[#f2b5bd]">
              Location
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              UVCE Bengaluru
            </h2>

            <p className="mt-5 leading-8 text-white/70">
              The main city campus is located at K.R. Circle, Dr Ambedkar
              Veedhi, Bengaluru. Civil Engineering and Architecture activities
              are also associated with the Jnana Bharathi campus.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex gap-4 rounded-2xl bg-white/10 p-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#f2b5bd]" />

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                    Address
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/85">
                    K.R. Circle, Dr Ambedkar Veedhi,
                    <br />
                    Bengaluru, Karnataka 560001
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-white/10 p-4">
                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f2b5bd]" />

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                    Institution
                  </p>

                  <p className="mt-1 text-sm text-white/85">
                    University Visvesvaraya College of Engineering
                  </p>
                </div>
              </div>

            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=University+Visvesvaraya+College+of+Engineering+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#2E3281] transition hover:bg-slate-100"
            >
              View Location
              <ArrowRight className="h-4 w-4" />
            </a>

          </div>

        </div>

      </section>

      {/* =========================================================
          FINAL APPLY CTA
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
                  Interested in UVCE Bengaluru?
                </h2>

                <p className="mt-5 leading-7 text-white/80">
                  Get professional admission guidance for course selection,
                  eligibility, counselling and the application process.
                </p>

              </div>

              <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#a71320] shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/60 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
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