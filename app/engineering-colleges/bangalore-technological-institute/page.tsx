
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  GraduationCap,
  IndianRupee,
  MapPin,
  Phone,
  Mail,
  Star,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

const collegeImage = "/images/Collges/bti.jpg";
const collegeLogo =
  "https://www.google.com/s2/favicons?domain=btibangalore.org&sz=256";

type Tab =
  | "admission"
  | "courses"
  | "eligibility"
  | "placements"
  | "contact"
  | "reviews";

const courses = [
  {
    title: "Computer Science & Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Study programming, algorithms, software development, databases, computer networks and modern computing technologies.",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Explore artificial intelligence, machine learning, intelligent systems and data-driven applications.",
  },
  {
    title: "Electronics & Communication Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Learn electronic circuits, communication systems, embedded systems, signal processing and digital electronics.",
  },
  {
    title: "Mechanical Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Explore mechanical design, manufacturing, thermal engineering, materials and industrial production.",
  },
  {
    title: "Civil Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Study structural engineering, construction technology, infrastructure and environmental engineering.",
  },
  {
    title: "Robotics & Artificial Intelligence",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Learn robotics, automation, intelligent machines, control systems and AI applications.",
  },
  {
    title: "Computer Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Develop foundations in computer hardware, software, programming and computing systems.",
  },
  {
    title: "Computer Science & Engineering (Data Science)",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Explore data analytics, databases, statistical methods, machine learning and data processing.",
  },
  {
    title: "Information Science & Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Study information systems, software engineering, databases, cloud technologies and networking.",
  },
];




const feeRows = [
  {
    course: "Computer Science & Engineering (CSE)",
    duration: "4 Years",
    fees: "Approx. ₹7.4 Lakhs",
  },
  {
    course: "Artificial Intelligence & Machine Learning",
    duration: "4 Years",
    fees: "Approx. ₹7.4 Lakhs",
  },
  {
    course: "Electronics & Communication Engineering",
    duration: "4 Years",
    fees: "Approx. ₹5 Lakhs",
  },
  {
    course: "Robotics & Artificial Intelligence",
    duration: "4 Years",
    fees: "Approx. ₹5 Lakhs",
  },
  {
    course: "Computer Science & Engineering (Data Science)",
    duration: "4 Years",
    fees: "Approx. ₹4.36 Lakhs",
  },
  {
    course: "Information Science & Engineering",
    duration: "4 Years",
    fees: "Approx. ₹5 Lakhs",
  },
  {
    course: "Mechanical Engineering",
    duration: "4 Years",
    fees: "Approx. ₹3 Lakhs",
  },
  {
    course: "Civil Engineering",
    duration: "4 Years",
    fees: "Approx. ₹3 Lakhs",
  },
  {
    course: "Computer Engineering",
    duration: "4 Years",
    fees: "Confirm with college",
  },
];

const eligibility = [
  "Candidates must meet the current eligibility rules prescribed by the Karnataka admission authorities and the institution.",
  "For first-year B.E. admission, candidates must have passed 2nd PUC / Class 12 or an equivalent recognised examination.",
  "Physics, Chemistry and Mathematics are required core subjects for the applicable engineering admission route.",
  "The published general eligibility criteria specify a minimum aggregate of 45% in the prescribed subjects. The applicable minimum for reserved categories should be confirmed under current rules.",
  "KCET / KEA and COMEDK UGET are admission routes for eligible candidates.",
  "Management quota, NRI and lateral-entry options may be available subject to current eligibility and seat availability.",
  "Admission requirements, fees, intake and seat availability may change by academic year. Verify the latest official notification before applying.",
];

const requiredDocuments = [
  "10th / SSLC Marks Card",
  "12th / PUC Marks Card",
  "KCET / COMEDK Rank Card, if applicable",
  "KEA / COMEDK Allotment Letter, if applicable",
  "Transfer Certificate",
  "Study Certificate, if required",
  "Migration Certificate, if applicable",
  "Caste / Income Certificate, if applicable",
  "Aadhaar Card",
  "Passport-size photographs",
];

const tabs = [
  { id: "admission" as Tab, label: "Admission 2026-27", icon: GraduationCap },
  { id: "courses" as Tab, label: "Courses & Fees", icon: Building2 },
  { id: "eligibility" as Tab, label: "Eligibility & Exams", icon: CheckCircle2 },
  { id: "placements" as Tab, label: "Placements", icon: BriefcaseBusiness },
  { id: "contact" as Tab, label: "Contact", icon: Phone },
  { id: "reviews" as Tab, label: "Reviews", icon: Star },
];

export default function BangaloreTechnologicalInstitutePage() {
  const [activeTab, setActiveTab] = useState<Tab>("admission");

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-[#061321]">
        <div className="relative h-[360px] w-full sm:h-[440px] md:h-[540px] lg:h-[620px] xl:h-[680px]">
          <img
            src={collegeImage}
            alt="Bangalore Technological Institute campus"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061321] via-[#061321]/55 to-transparent" />

          <div className="absolute left-0 right-0 top-0 z-10">
            <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-8 lg:px-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] text-[#2E3281] shadow-xl">
                <GraduationCap className="h-4 w-4" />
                Engineering College
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8 sm:pb-14 md:pb-16 lg:px-10 lg:pb-20">
              <div className="max-w-5xl">
                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#a71320] px-4 py-2 text-xs font-bold text-white shadow-lg">
                    BTI Bengaluru
                  </span>
                  <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#2E3281] shadow-lg">
                    Established 2010
                  </span>
                  <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#2E3281] shadow-lg">
                    VTU & AICTE
                  </span>
                </div>

                <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Bangalore
                  <span className="block text-[#f2b5bd]">
                    Technological Institute
                  </span>
                </h1>

                <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-medium text-white/90">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#f2b5bd]" />
                    Kodathi, Off Sarjapur Road, Bengaluru
                  </span>
                  <span className="hidden text-white/30 sm:block">|</span>
                  <span className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-[#f2b5bd]" />
                    Engineering & Technology
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLEGE INTRO */}
      <section className="relative z-20 bg-[#f4f1e8]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative -mt-10 sm:-mt-14">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.14)] sm:p-7 md:p-8">
              <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-lg sm:h-32 sm:w-32">
                    <img
                      src={collegeLogo}
                      alt="Bangalore Technological Institute logo"
                      className="h-full w-full object-contain p-1"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[2px] text-[#a71320]">
                      Bangalore Technological Institute
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold text-[#2E3281] sm:text-3xl">
                      BTI Bengaluru
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-[#a71320]" />
                        Kodathi, Sarjapur Road
                      </span>
                      <span className="hidden text-slate-300 sm:block">|</span>
                      <span className="flex items-center gap-1.5">
                        <GraduationCap className="h-4 w-4 text-[#a71320]" />
                        Affiliated to VTU
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[220px]">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#a71320] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#a71320]/20 transition hover:-translate-y-0.5 hover:bg-[#8e101c]"
                  >
                    Apply Now <ArrowRight className="h-4 w-4" />
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

      {/* QUICK FACTS */}
      <section className="bg-[#eef2f8] py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Established", "2010"],
              ["Campus", "Sarjapur Road"],
              ["Affiliation", "VTU"],
              ["CET Code", "E-204"],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`p-5 ${
                  index < 3
                    ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {label}
                </p>
                <p className="mt-1 text-xl font-extrabold text-[#2E3281]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-10">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex min-w-max items-center gap-2 border-b-4 px-4 py-4 text-sm font-bold transition-all duration-300 sm:px-5 ${
                    isActive
                      ? "border-[#a71320] bg-[#a71320] text-white"
                      : "border-transparent text-slate-500 hover:bg-[#2E3281] hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* TAB CONTENT */}
      <section className="bg-[#f6f7fa]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20 lg:px-10">
          {/* ADMISSION */}
          {activeTab === "admission" && (
            <div className="space-y-10">
              <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-10">
                <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
                  Admission 2026-27
                </p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#2E3281] sm:text-4xl md:text-5xl">
                  Bangalore Technological Institute
                  <span className="block text-[#a71320]">
                    Admission Guidance
                  </span>
                </h2>

                <div className="mt-7 max-w-5xl space-y-5 text-[16px] leading-8 text-slate-600">
                  <p>
                    Bangalore Technological Institute (BTI) is an engineering
                    institution established in 2010 by Aditya Educational Trust.
                    The campus is located at Kodathi, off Sarjapur Road,
                    Bengaluru, Karnataka.
                  </p>
                  <p>
                    BTI is affiliated with Visvesvaraya Technological
                    University (VTU), Belagavi, and is approved by AICTE.
                    The institute offers undergraduate engineering programmes
                    across computing, electronics and core engineering
                    disciplines.
                  </p>
                  <p>
                    Students can explore Computer Science and Engineering,
                    Artificial Intelligence and Machine Learning, Electronics
                    and Communication Engineering, Mechanical Engineering,
                    Civil Engineering, Robotics and Artificial Intelligence,
                    Computer Engineering, Data Science and Information Science.
                  </p>
                  <p>
                    Admission options include KCET / KEA counselling, COMEDK
                    UGET and other applicable routes subject to eligibility
                    and seat availability. Confirm the current programme
                    intake, fees and admission requirements before applying.
                  </p>
                </div>

               
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl bg-[#2E3281] p-7 text-white">
                  <GraduationCap className="h-8 w-8 text-[#f2b5bd]" />
                  <h3 className="mt-5 text-xl font-bold">Engineering Courses</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    Explore undergraduate programmes in computing, AI,
                    electronics, robotics and core engineering.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-7 shadow-sm">
                  <Building2 className="h-8 w-8 text-[#a71320]" />
                  <h3 className="mt-5 text-xl font-bold text-[#2E3281]">
                    Bengaluru Campus
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    Kodathi, Off Sarjapur Road, Near Wipro Corporate Office,
                    Bengaluru, Karnataka 560035.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#a71320] p-7 text-white">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                  <h3 className="mt-5 text-xl font-bold">Admission Support</h3>
                  <p className="mt-3 text-sm leading-7 text-white/75">
                    Get guidance on course selection, eligibility,
                    counselling, documents and admission procedures.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-[#fffaf3] p-7 sm:p-10">
                <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
                  Admission Process
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl">
                  How Admission Works
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-4">
                  {[
                    [
                      "01",
                      "Choose Course",
                      "Select a programme based on your interests and career goals.",
                    ],
                    [
                      "02",
                      "Check Eligibility",
                      "Review academic requirements and entrance exam rules.",
                    ],
                    [
                      "03",
                      "Counselling",
                      "Follow the applicable KCET / KEA or COMEDK process.",
                    ],
                    [
                      "04",
                      "Complete Admission",
                      "Submit documents and complete the prescribed formalities.",
                    ],
                  ].map(([number, title, description]) => (
                    <div
                      key={number}
                      className="rounded-2xl border border-slate-200 bg-white p-6"
                    >
                      <span className="text-3xl font-extrabold text-[#a71320]">
                        {number}
                      </span>
                      <h3 className="mt-4 font-bold text-[#2E3281]">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* COURSES AND FEES */}
          {activeTab === "courses" && (
            <div className="space-y-12">
              <div>
                <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
                  Courses Offered
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl md:text-5xl">
                  Explore BTI
                  <span className="block text-[#a71320]">
                    Engineering Courses
                  </span>
                </h2>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-500">
                  Explore the undergraduate engineering programmes listed
                  by BTI. Confirm current intake and availability with the
                  institute before applying.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
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

                    <h3 className="mt-5 text-xl font-bold leading-snug text-[#2E3281]">
                      {course.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {course.description}
                    </p>
                    <div className="mt-5 flex items-center border-t border-slate-100 pt-4">
                      <span className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                        <GraduationCap className="h-4 w-4 text-[#a71320]" />
                        {course.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
                  Fee Structure
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl">
                  Understand the <span className="text-[#a71320]">Fees</span>
                </h2>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-500">
                  BTI's current official fee notification should be checked
                  before making an admission decision. The table below lists
                  course duration and directs students to confirm the exact
                  fees for their admission route.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[700px] border-collapse text-left">
                    <thead>
                      <tr className="bg-[#2E3281] text-white">
                        <th className="px-5 py-4 text-sm font-bold">Course</th>
                        <th className="px-5 py-4 text-sm font-bold">
                          Duration
                        </th>
                        <th className="px-5 py-4 text-sm font-bold">
                          Fee Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeRows.map((row, index) => (
                        <tr
                          key={row.course}
                          className={`border-b border-slate-100 ${
                            index % 2 === 0 ? "bg-white" : "bg-slate-50"
                          }`}
                        >
                          <td className="px-5 py-5 text-sm font-bold text-[#2E3281]">
                            {row.course}
                          </td>
                          <td className="px-5 py-5 text-sm text-slate-600">
                            {row.duration}
                          </td>
                          <td className="px-5 py-5 text-sm font-bold text-[#a71320]">
                            {row.fees}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex gap-3 rounded-xl border border-[#a71320]/10 bg-[#a71320]/5 p-5">
                <IndianRupee className="mt-0.5 h-5 w-5 shrink-0 text-[#a71320]" />
                <p className="text-sm leading-6 text-slate-600">
                  Third-party education listings report an indicative total
                  B.E. fee range of approximately ₹3 lakh to ₹7.4 lakh,
                  depending on the course and admission route. This is not
                  an official BTI fee quotation. Tuition, counselling,
                  category, hostel and other charges can vary. Contact the
                  college to confirm the current 2026-27 fee schedule.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#a71320] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#8e101c]"
              >
                Get Fee & Admission Guidance
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}

          {/* ELIGIBILITY */}
          {activeTab === "eligibility" && (
            <div className="space-y-10">
              <div className="rounded-3xl bg-[#2E3281] p-7 text-white sm:p-10">
                <p className="text-sm font-bold uppercase tracking-[2px] text-[#f2b5bd]">
                  Admission Eligibility
                </p>
                <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl md:text-5xl">
                  Check Your
                  <span className="block text-[#f2b5bd]">Eligibility</span>
                </h2>
                <p className="mt-6 max-w-3xl leading-8 text-white/70">
                  Eligibility depends on your selected programme,
                  academic qualifications, admission category and current
                  counselling rules.
                </p>
              </div>

              <div className="grid gap-4">
                {eligibility.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#a71320]">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl bg-[#eef2f8] p-7 sm:p-9">
                  <GraduationCap className="h-8 w-8 text-[#2E3281]" />
                  <h3 className="mt-5 text-2xl font-extrabold text-[#2E3281]">
                    KCET / KEA
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    BTI's published KCET institution code is E-204.
                    Eligible candidates should participate in KEA counselling
                    and follow the current allotment and verification process.
                  </p>
                </div>

                <div className="rounded-3xl bg-[#f7eef0] p-7 sm:p-9">
                  <Building2 className="h-8 w-8 text-[#a71320]" />
                  <h3 className="mt-5 text-2xl font-extrabold text-[#2E3281]">
                    COMEDK UGET
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    BTI's published COMEDK institution code is E-020.
                    Check the current counselling schedule, seat matrix
                    and eligibility rules before applying.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-9">
                <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
                  Documents
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl">
                  Documents Required
                </h2>
                <p className="mt-5 text-sm leading-7 text-slate-500">
                  Keep the required academic and supporting documents ready
                  for counselling, verification and admission.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {requiredDocuments.map((document) => (
                    <div
                      key={document}
                      className="flex items-center gap-3 rounded-xl bg-[#f8f9fc] p-3.5"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#a71320]" />
                      <span className="text-sm font-medium text-slate-600">
                        {document}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PLACEMENTS */}
          {activeTab === "placements" && (
            <div className="space-y-10">
              <div className="rounded-3xl bg-[#2E3281] p-7 text-white sm:p-10">
                <p className="text-sm font-bold uppercase tracking-[2px] text-[#f2b5bd]">
                  Placements
                </p>
                <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl md:text-5xl">
                  Career & Placement
                  <span className="block text-[#f2b5bd]">Opportunities</span>
                </h2>
                <p className="mt-6 max-w-3xl leading-8 text-white/70">
                  Students can prepare for professional opportunities through
                  technical learning, practical projects, internships and
                  placement-related activities.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {[
                  {
                    icon: BriefcaseBusiness,
                    title: "Career Preparation",
                    description:
                      "Develop technical knowledge, communication skills and professional readiness.",
                  },
                  {
                    icon: Users,
                    title: "Industry Exposure",
                    description:
                      "Build experience through technical activities, projects and industry interaction.",
                  },
                  {
                    icon: GraduationCap,
                    title: "Internships & Projects",
                    description:
                      "Complement classroom learning with practical work and project experience.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-white p-7 shadow-sm"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2E3281]/10">
                        <Icon className="h-6 w-6 text-[#2E3281]" />
                      </div>
                      <h3 className="mt-5 text-xl font-bold text-[#2E3281]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-3xl border border-[#a71320]/10 bg-[#a71320]/5 p-7 sm:p-9">
                <h3 className="text-2xl font-extrabold text-[#2E3281]">
                  Placement Information
                </h3>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600">
                  BTI provides training and placement support. Highest
                  package, average package, branch-wise placement percentage
                  and recruiter information should be verified against the
                  latest institutional placement report before publication.
                </p>
                <a
                  href="https://btibangalore.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#2E3281] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#222665]"
                >
                  Visit Official Website <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:placements@btibangalore.org"
                  className="ml-0 mt-3 inline-flex items-center gap-2 rounded-xl border-2 border-[#2E3281] px-6 py-3 text-sm font-bold text-[#2E3281] transition hover:bg-[#2E3281] hover:text-white sm:ml-3 sm:mt-0"
                >
                  Contact Placement Cell
                </a>
              </div>

              <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-9">
                <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
                  Career Support
                </p>
                <h3 className="mt-3 text-3xl font-extrabold text-[#2E3281]">
                  Prepare for Your Future
                </h3>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    "Technical skill development",
                    "Resume and interview preparation",
                    "Industry-oriented projects",
                    "Internship guidance",
                    "Communication and soft skills",
                    "Career planning",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-[#f8f9fc] p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#a71320]" />
                      <span className="text-sm font-semibold text-slate-600">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CONTACT: PRAGATI + COLLEGE */}
          {activeTab === "contact" && (
            <div className="space-y-10">
              <div className="rounded-3xl bg-[#2E3281] p-7 text-white sm:p-10">
                <p className="text-sm font-bold uppercase tracking-[2px] text-[#f2b5bd]">
                  Pragati Educational Consultancy
                </p>
                <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl md:text-5xl">
                  Get Admission
                  <span className="block text-[#f2b5bd]">Guidance</span>
                </h2>
                <p className="mt-5 max-w-3xl leading-8 text-white/70">
                  Pragati Educational Consultancy helps students and parents
                  understand course options, college admissions, eligibility,
                  counselling, fees and admission procedures.
                </p>
              </div>

              <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
                {/* PRAGATI CONSULTANCY */}
                <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-9">
                  <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
                    Our Services
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl">
                    Pragati Consultancy
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-slate-500">
                    Get assistance with course selection, engineering
                    admissions, entrance examinations, eligibility,
                    fee information and the next steps in your admission
                    journey.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {[
                      "Course & Career Guidance",
                      "College Admission Counselling",
                      "Engineering Admission Assistance",
                      "KCET / COMEDK Guidance",
                      "Eligibility & Admission Guidance",
                      "Fee & Scholarship Guidance",
                      "Document Verification Assistance",
                      "Admission Process Support",
                    ].map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-3 rounded-xl bg-[#f8f9fc] p-4"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#a71320]" />
                        <span className="text-sm font-semibold text-slate-600">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* EXISTING PRAGATI CONTACT DETAILS */}
                <div className="rounded-3xl bg-[#a71320] p-7 text-white shadow-sm sm:p-9">
                  <p className="text-sm font-bold uppercase tracking-[2px] text-white/70">
                    Pragati Contact Information
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                    Visit Our Office
                  </h2>

                  <div className="mt-8 space-y-6">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                          Office Address
                        </p>
                        <p className="mt-2 text-sm leading-7 text-white/90">
                          #17, 1st Floor, Opp. F.M. Silks
                          <br />
                          3rd Main, 3rd Cross, RMV II Stage
                          <br />
                          New BEL Road, Bengaluru - 560094, Karnataka, India
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                          Call Us
                        </p>
                        <a
                          href="tel:08048518464"
                          className="mt-2 block text-sm font-bold text-white hover:text-white/80"
                        >
                          080 - 4851 8464
                        </a>
                        <p className="mt-1 text-sm text-white/70">
                          Mon to Fri · 9am to 6pm
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                          Email Us
                        </p>
                        <a
                          href="mailto:info@pragaticonsultancy.com"
                          className="mt-2 block break-all text-sm font-bold text-white hover:text-white/80"
                        >
                          info@pragaticonsultancy.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#a71320] transition hover:bg-slate-100"
                  >
                    Contact Pragati <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* COLLEGE CONTACT */}
              <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-9">
                <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
                  College Contact
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281]">
                  Bangalore Technological Institute
                </h2>

                <div className="mt-7 grid gap-5 md:grid-cols-3">
                  <div className="rounded-2xl bg-[#eef2f8] p-5">
                    <MapPin className="h-6 w-6 text-[#2E3281]" />
                    <h3 className="mt-4 font-bold text-[#2E3281]">
                      College Address
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Kodathi, Off Sarjapur Road, Near Wipro Corporate Office,
                      Chikkanayakanahalli Dinne, Bengaluru, Karnataka 560035.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7eef0] p-5">
                    <Phone className="h-6 w-6 text-[#a71320]" />
                    <h3 className="mt-4 font-bold text-[#2E3281]">
                      College Phone
                    </h3>
                    <a
                      href="tel:+917090404050"
                      className="mt-2 block text-sm leading-7 text-slate-600 hover:text-[#a71320]"
                    >
                      +91 70904 04050
                    </a>
                    <p className="mt-1 text-xs text-slate-500">
                      Monday–Saturday, 9 AM–5 PM
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#eef2f8] p-5">
                    <Mail className="h-6 w-6 text-[#2E3281]" />
                    <h3 className="mt-4 font-bold text-[#2E3281]">
                      College Email
                    </h3>
                    <a
                      href="mailto:principal@btibangalore.org"
                      className="mt-2 block break-all text-sm leading-7 text-slate-600 hover:text-[#a71320]"
                    >
                      principal@btibangalore.org
                    </a>
                  </div>
                </div>

                <a
                  href="https://btibangalore.org/contact/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#2E3281] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#222665]"
                >
                  Official College Contact <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          )}

          {/* REVIEWS */}
          {activeTab === "reviews" && (
            <div className="space-y-10">
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
                  Student Reviews
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl md:text-5xl">
                  Student Campus
                  <span className="block text-[#a71320]">
                    Experience at BTI
                  </span>
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                  Add genuine student reviews and verified ratings here.
                  The sample cards below are review categories, not actual
                  student testimonials or ratings.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {[
                  {
                    title: "Academic Experience",
                    description:
                      "Include verified feedback about teaching, faculty support and academic learning.",
                  },
                  {
                    title: "Campus Experience",
                    description:
                      "Include genuine feedback about campus facilities, activities and student life.",
                  },
                  {
                    title: "Career Experience",
                    description:
                      "Include verified feedback about internships, career preparation and placement support.",
                  },
                ].map((review) => (
                  <div
                    key={review.title}
                    className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                  >
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 text-slate-300"
                        />
                      ))}
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-[#2E3281]">
                      {review.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {review.description}
                    </p>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <p className="font-bold text-[#2E3281]">
                        Verified feedback pending
                      </p>
                      <p className="mt-1 text-xs font-medium text-slate-400">
                        Add a genuine student review before publishing
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl bg-[#f7eef0] p-7 text-center sm:p-10">
                <Star className="mx-auto h-10 w-10 text-[#a71320]" />
                <h3 className="mt-5 text-2xl font-extrabold text-[#2E3281]">
                  Need Help Choosing the Right College?
                </h3>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                  Speak with Pragati Educational Consultancy for guidance
                  on engineering courses, eligibility, counselling, fees
                  and admission procedures.
                </p>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#a71320] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#8e101c]"
                >
                  Talk to a Counsellor <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#f7eef0] px-5 py-16 sm:px-8 md:py-20 lg:px-10">
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
                  Interested in Bangalore Technological Institute?
                </h2>
                <p className="mt-5 leading-7 text-white/80">
                  Get guidance for course selection, eligibility,
                  KCET / COMEDK counselling, fee details and the BTI
                  admission process through Pragati Educational Consultancy.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#a71320] shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Apply Now <ArrowRight className="h-4 w-4" />
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
