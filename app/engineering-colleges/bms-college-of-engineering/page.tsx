
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
  Award,
  FileText,
  Landmark,
} from "lucide-react";

const collegeImage = "/images/Collges/4.jpg";
const collegeLogo =
  "https://www.google.com/s2/favicons?domain=bmsce.ac.in&sz=256";

type Tab =
  | "admission"
  | "courses"
  | "eligibility"
  | "placements"
  | "contact"
  | "reviews";

type Course = {
  title: string;
  duration: string;
  type: string;
  description: string;
};

type FeeRow = {
  course: string;
  managementFee: string;
  comedkFee: string;
};

const courses: Course[] = [
  {
    title: "Computer Science and Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Study programming, algorithms, operating systems, databases, software engineering, computer networks and modern computing technologies.",
  },
  {
    title: "Artificial Intelligence and Machine Learning",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Explore machine learning, intelligent systems, deep learning, automation and AI-based applications.",
  },
  {
    title: "Artificial Intelligence and Data Science",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Learn data analytics, statistical modelling, artificial intelligence, machine learning and data-driven decision-making.",
  },
  {
    title: "Computer Science and Engineering (Data Science)",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Develop skills in data engineering, analytics, programming, database systems and intelligent applications.",
  },
  {
    title: "CSE - IoT and Cyber Security",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Explore connected devices, network security, cybersecurity, blockchain technologies and secure computing.",
  },
  {
    title: "Computer Science and Business Systems",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Combine computing, software development, business processes, analytics and technology management.",
  },
  {
    title: "Electronics and Communication Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Study electronic circuits, communication networks, embedded systems, signal processing and digital electronics.",
  },
  {
    title: "Electrical and Electronics Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Learn electrical machines, power systems, electrical circuits, control systems and energy technologies.",
  },
  {
    title: "Mechanical Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Explore mechanical design, manufacturing, materials, thermal engineering, production and industrial systems.",
  },
  {
    title: "Civil Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Study structural engineering, construction, transportation, environmental engineering and infrastructure.",
  },
  {
    title: "Chemical Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Learn chemical process design, process control, thermodynamics, industrial chemistry and process engineering.",
  },
  {
    title: "Biotechnology",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Explore biological systems, biotechnology, bioprocessing, molecular biology and related engineering applications.",
  },
  {
    title: "Industrial Engineering and Management",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Combine engineering principles with operations, productivity, quality management and business processes.",
  },
];

const feeRows: FeeRow[] = [
  {
    course: "Computer Science and Engineering",
    managementFee: "₹15,00,000",
    comedkFee: "₹3,01,100",
  },
  {
    course: "Artificial Intelligence and Machine Learning",
    managementFee: "₹12,50,000",
    comedkFee: "₹3,01,100",
  },
  {
    course: "Artificial Intelligence and Data Science",
    managementFee: "₹12,00,000",
    comedkFee: "₹3,01,100",
  },
  {
    course: "CSE - Data Science",
    managementFee: "₹12,00,000",
    comedkFee: "₹3,01,100",
  },
  {
    course: "CSE - IoT and Cyber Security",
    managementFee: "₹12,00,000",
    comedkFee: "₹3,01,100",
  },
  {
    course: "Computer Science and Business Systems",
    managementFee: "₹10,00,000",
    comedkFee: "Not verified",
  },
  {
    course: "Electronics and Communication Engineering",
    managementFee: "₹9,00,000",
    comedkFee: "₹3,01,100",
  },
  {
    course: "Electrical and Electronics Engineering",
    managementFee: "₹6,00,000",
    comedkFee: "Check official fee notice",
  },
  {
    course: "Mechanical Engineering",
    managementFee: "₹6,00,000",
    comedkFee: "₹3,01,100",
  },
  {
    course: "Civil Engineering",
    managementFee: "₹6,00,000",
    comedkFee: "Check official fee notice",
  },
  {
    course: "Chemical Engineering",
    managementFee: "₹4,00,000",
    comedkFee: "Not verified",
  },
  {
    course: "Biotechnology",
    managementFee: "₹7,00,000",
    comedkFee: "₹2,29,390",
  },
  {
    course: "Industrial Engineering and Management",
    managementFee: "₹6,00,000",
    comedkFee: "Not verified",
  },
];

const eligibility = [
  "Candidates should have passed 2nd PUC / Class 12 or an equivalent qualification.",
  "Physics and Mathematics are compulsory subjects for B.E. admission.",
  "Candidates must have Chemistry, Biotechnology, Biology, Computer Science or Electronics as an eligible optional subject under the applicable rules.",
  "The official BMSCE eligibility page specifies 45% aggregate in the prescribed subjects for general merit candidates.",
  "The published eligibility page specifies 40% for the listed reserved categories, subject to applicable rules.",
  "Candidates must qualify in the applicable KEA / KCET or COMEDK examination for the relevant admission route.",
  "Management-quota candidates must also satisfy the college's current entrance examination and admission requirements.",
  "Diploma holders may qualify for lateral-entry admission subject to the applicable eligibility conditions.",
];

const requiredDocuments = [
  "SSLC / Class 10 marks card",
  "2nd PUC / Class 12 marks card",
  "KCET / COMEDK rank card",
  "Entrance examination scorecard",
  "KEA / COMEDK allotment letter",
  "Transfer certificate",
  "Study certificate",
  "Migration certificate, if applicable",
  "Caste / income certificate, if applicable",
  "Aadhaar card and photographs",
];

const tabs: { id: Tab; label: string; icon: typeof GraduationCap }[] = [
  { id: "admission", label: "Admission", icon: GraduationCap },
  { id: "courses", label: "Courses & Fees", icon: Building2 },
  { id: "eligibility", label: "Eligibility & Exams", icon: CheckCircle2 },
  { id: "placements", label: "Placements", icon: BriefcaseBusiness },
  { id: "contact", label: "Contact", icon: Phone },
  { id: "reviews", label: "Reviews", icon: Star },
];

export default function BMSCollegeOfEngineeringPage() {
  const [activeTab, setActiveTab] = useState<Tab>("admission");

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-[#061321]">
        <div className="relative h-[390px] w-full sm:h-[480px] md:h-[560px] lg:h-[660px]">
          <img
            src={collegeImage}
            alt="BMS College of Engineering campus in Bengaluru"
            className="absolute inset-0 h-full w-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061321] via-[#061321]/60 to-transparent" />

          <div className="absolute left-0 right-0 top-0">
            <div className="mx-auto max-w-7xl px-5 pt-7 sm:px-8 lg:px-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[1.5px] text-[#2E3281] shadow-xl">
                <GraduationCap className="h-4 w-4" />
                Engineering College
              </span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <div className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 md:pb-16 lg:px-10 lg:pb-20">
              <div className="max-w-5xl">
                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#a71320] px-4 py-2 text-xs font-bold text-white">
                    BMSCE
                  </span>
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#2E3281]">
                    Bengaluru
                  </span>
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#2E3281]">
                    Autonomous Institution
                  </span>
                </div>

                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  BMS College of
                  <span className="block text-[#f2b5bd]">
                    Engineering
                  </span>
                </h1>

                <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-white/90">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#f2b5bd]" />
                    Bull Temple Road, Basavanagudi, Bengaluru
                  </span>
                  <span className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-[#f2b5bd]" />
                    Engineering and Technology
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
          <div className="relative -mt-10 pb-8 sm:-mt-14">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.14)] sm:p-8">
              <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:h-32 sm:w-32">
                    <img
                      src={collegeLogo}
                      alt="BMS College of Engineering logo"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[2px] text-[#a71320]">
                      BMS Educational Institution
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold text-[#2E3281] sm:text-3xl">
                      BMS College of Engineering
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-[#a71320]" />
                        Basavanagudi, Bengaluru
                      </span>
                      <span className="flex items-center gap-1.5">
                        <GraduationCap className="h-4 w-4 text-[#a71320]" />
                        Undergraduate Engineering
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[230px]">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#a71320] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#8e101c]"
                  >
                    Apply for Admission <ArrowRight className="h-4 w-4" />
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
              ["Institution", "BMSCE"],
              ["Location", "Bengaluru"],
              ["Programme", "B.E."],
              ["Duration", "4 Years"],
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

      {/* STICKY TABS */}
      <section className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-10">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex min-w-max items-center gap-2 border-b-4 px-4 py-4 text-sm font-bold transition sm:px-5 ${
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
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16 lg:px-10">
          {/* ADMISSION */}
          {activeTab === "admission" && (
            <div className="space-y-10">
              <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-10">
                <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
                  Admission 2026–27
                </p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#2E3281] sm:text-4xl md:text-5xl">
                  BMS College of Engineering
                  <span className="block text-[#a71320]">
                    Admission Guidance
                  </span>
                </h2>
                <div className="mt-7 max-w-5xl space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    BMS College of Engineering (BMSCE) is an engineering
                    institution located on Bull Temple Road in Basavanagudi,
                    Bengaluru, Karnataka. The institution offers undergraduate
                    engineering programmes in computer science, electronics,
                    electrical, mechanical, civil and other specialised fields.
                  </p>
                  <p>
                    B.E. admissions are available through the applicable
                    KEA/KCET, COMEDK and management admission routes, subject
                    to eligibility, entrance examination requirements, seat
                    availability and current admission regulations.
                  </p>
                  <p>
                    Students should compare the course curriculum, eligibility
                    criteria, fee category and career opportunities before
                    selecting a programme.
                  </p>
                </div>
                <a
                  href="https://www.bmsce.ac.in/home/Under-Graduation"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 font-bold text-[#2E3281] hover:text-[#a71320]"
                >
                  View Official Undergraduate Admission Details
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {[
                  {
                    icon: GraduationCap,
                    title: "Engineering Programmes",
                    text: "Explore undergraduate engineering disciplines and specialised computing programmes.",
                    style: "bg-[#2E3281] text-white",
                  },
                  {
                    icon: Building2,
                    title: "Bengaluru Campus",
                    text: "Located in Basavanagudi, Bengaluru, Karnataka.",
                    style: "bg-white text-[#2E3281]",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Admission Guidance",
                    text: "Get help understanding eligibility, counselling routes, fees and documents.",
                    style: "bg-[#a71320] text-white",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={`rounded-2xl p-7 shadow-sm ${item.style}`}
                    >
                      <Icon className="h-8 w-8" />
                      <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 opacity-80">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
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
                    ["01", "Choose Course", "Select a programme based on your interests."],
                    ["02", "Check Eligibility", "Verify Class 12 subjects and eligibility."],
                    ["03", "Entrance Exam", "Check the applicable KCET, COMEDK or other accepted examination requirements."],
                    ["04", "Complete Admission", "Follow counselling, document verification and fee payment instructions."],
                  ].map(([number, title, text]) => (
                    <div
                      key={number}
                      className="rounded-2xl border border-slate-200 bg-white p-6"
                    >
                      <span className="text-3xl font-extrabold text-[#a71320]">
                        {number}
                      </span>
                      <h3 className="mt-4 font-bold text-[#2E3281]">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* COURSES AND FEES */}
          {activeTab === "courses" && (
            <div className="space-y-10">
              <div>
                <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
                  Courses Offered
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl md:text-5xl">
                  Explore BMSCE
                  <span className="block text-[#a71320]">
                    Engineering Courses
                  </span>
                </h2>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-500">
                  Browse undergraduate engineering courses associated with
                  BMS College of Engineering. Confirm current intake and
                  programme availability directly with the institution.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course, index) => (
                  <div
                    key={course.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#2E3281]/30 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2E3281]/10 text-sm font-extrabold text-[#2E3281]">
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
                  Published Fee Information
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl">
                  Understand the <span className="text-[#a71320]">Fees</span>
                </h2>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-500">
                  The fee figures below should be treated as indicative
                  information and verified against the latest official fee
                  notice for the relevant academic year and admission route.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px] border-collapse text-left">
                    <thead>
                      <tr className="bg-[#2E3281] text-white">
                        <th className="px-5 py-4 text-sm font-bold">Course</th>
                        <th className="px-5 py-4 text-sm font-bold">
                          Management Quota (Listed)
                        </th>
                        <th className="px-5 py-4 text-sm font-bold">
                          COMEDK (Listed)
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
                          <td className="px-5 py-4 text-sm font-semibold text-[#2E3281]">
                            {row.course}
                          </td>
                          <td className="px-5 py-4 text-sm font-bold text-[#a71320]">
                            {row.managementFee}
                            <span className="block text-xs font-normal text-slate-500">
                              Verify fee period with the college
                            </span>
                          </td>
                          <td className="px-5 py-4 text-sm text-slate-600">
                            {row.comedkFee}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex gap-3 rounded-xl border border-[#a71320]/10 bg-[#a71320]/5 p-5">
                <IndianRupee className="mt-0.5 h-5 w-5 shrink-0 text-[#a71320]" />
                <div className="text-sm leading-7 text-slate-600">
                  <p>
                    The fee amounts displayed here have not been independently
                    verified in this code. They may vary by branch, quota,
                    counselling authority and academic year.
                  </p>
                  <p className="mt-2">
                    Additional charges, hostel fees and payment conditions may
                    apply. Confirm the exact course, quota, academic year and
                    payable amount with the official admission office before
                    making a payment.
                  </p>
                  <a
                    href="https://www.bmsce.ac.in/home/Under-Graduation"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 font-bold text-[#2E3281] underline"
                  >
                    Check Official Admission Details
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
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
                <p className="mt-6 max-w-3xl leading-8 text-white/75">
                  Eligibility depends on the course, category, entrance
                  examination and admission route. Check the latest official
                  rules before applying.
                </p>
              </div>

              <div className="grid gap-4">
                {eligibility.map((item) => (
                  <div
                    key={item}
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
                  <Landmark className="h-8 w-8 text-[#2E3281]" />
                  <h3 className="mt-5 text-2xl font-extrabold text-[#2E3281]">
                    KCET / KEA
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Karnataka candidates may participate in the applicable
                    KEA counselling process according to the current
                    eligibility, rank, seat and reservation rules.
                  </p>
                </div>
                <div className="rounded-3xl bg-[#f7eef0] p-7 sm:p-9">
                  <Building2 className="h-8 w-8 text-[#a71320]" />
                  <h3 className="mt-5 text-2xl font-extrabold text-[#2E3281]">
                    COMEDK UGET
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Candidates should check the current COMEDK counselling
                    schedule, eligibility conditions, seat matrix and
                    applicable fee details.
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
                  for counselling and verification.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {requiredDocuments.map((document) => (
                    <div
                      key={document}
                      className="flex items-center gap-3 rounded-xl bg-[#f8f9fc] p-3.5"
                    >
                      <FileText className="h-5 w-5 shrink-0 text-[#a71320]" />
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
                  Career Opportunities
                </p>
                <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl md:text-5xl">
                  BMSCE Placements
                  <span className="block text-[#f2b5bd]">
                    & Career Development
                  </span>
                </h2>
                <p className="mt-6 max-w-3xl leading-8 text-white/75">
                  Students can explore career preparation, technical
                  development, internships and recruitment activities through
                  the institution&apos;s placement and training resources.
                </p>
                <a
                  href="https://www.bmsce.ac.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#2E3281] hover:bg-slate-100"
                >
                  Visit Official Website <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {[
                  {
                    icon: BriefcaseBusiness,
                    title: "Career Preparation",
                    text: "Develop professional skills, technical knowledge and interview readiness.",
                  },
                  {
                    icon: Users,
                    title: "Industry Interaction",
                    text: "Explore industry engagement and professional development opportunities.",
                  },
                  {
                    icon: Award,
                    title: "Projects and Internships",
                    text: "Build practical experience through projects and relevant internships.",
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
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-3xl border border-[#a71320]/10 bg-[#a71320]/5 p-7 sm:p-9">
                <h3 className="text-2xl font-extrabold text-[#2E3281]">
                  Placement Statistics
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Highest package, average package, placement percentage and
                  recruiter information should be taken from the latest
                  official placement report. Figures are not estimated here.
                </p>
                <a
                  href="https://www.bmsce.ac.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 font-bold text-[#2E3281] underline"
                >
                  Find Official Placement Information
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-9">
                <h3 className="text-2xl font-extrabold text-[#2E3281]">
                  Career Support Areas
                </h3>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    "Technical skill development",
                    "Resume and interview preparation",
                    "Industry-oriented projects",
                    "Internship opportunities",
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

          {/* CONTACT — SINGLE CORRECTED SECTION */}
          {activeTab === "contact" && (
            <div className="space-y-10">
              <div className="rounded-3xl bg-[#2E3281] p-7 text-white sm:p-10">
                <p className="text-sm font-bold uppercase tracking-[2px] text-[#f2b5bd]">
                  Contact and Admission Support
                </p>
                <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl md:text-5xl">
                  Get Admission
                  <span className="block text-[#f2b5bd]">Guidance</span>
                </h2>
                <p className="mt-5 max-w-3xl leading-8 text-white/75">
                  Pragati Educational Consultancy helps students understand
                  course selection, college admissions, eligibility,
                  counselling, fees and documentation requirements.
                </p>
              </div>

              <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
                {/* SERVICES */}
                <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-9">
                  <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
                    Our Services
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl">
                    How We Can Help
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-slate-500">
                    Our consultancy team supports students and parents
                    throughout their college admission journey.
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
                      "Complete Admission Support",
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

                {/* PRAGATI CONSULTANCY CONTACT DETAILS */}
                <div className="rounded-3xl bg-[#a71320] p-7 text-white shadow-sm sm:p-9">
                  <p className="text-sm font-bold uppercase tracking-[2px] text-white/70">
                    Contact Information
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                    Pragati Educational Consultancy
                  </h2>

                  <div className="mt-8 space-y-6">
                    {/* ADDRESS */}
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                          Office Address
                        </p>
                        <p className="mt-2 text-sm leading-7 text-white/90">
                          #17, 1st Floor, Opp. F.M. Silks,
                          <br />
                          3rd Main, 3rd Cross, RMV II Stage,
                          <br />
                          New BEL Road, Bangalore - 560 094.
                        </p>
                      </div>
                    </div>

                    {/* PHONE */}
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
                          className="mt-2 block text-sm font-bold text-white transition hover:text-white/80"
                        >
                          080 - 4851 8464
                        </a>
                        <p className="mt-1 text-sm text-white/70">
                          Monday to Friday · 9:00 AM to 6:00 PM
                        </p>
                      </div>
                    </div>

                    {/* EMAIL */}
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                          Email Us
                        </p>
                        <a
                          href="mailto:info@pragaticonsultancy.com"
                          className="mt-2 block break-all text-sm font-bold text-white transition hover:text-white/80"
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
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* REVIEWS */}
          {activeTab === "reviews" && (
            <div className="space-y-10">
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
                  Student Experience
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl md:text-5xl">
                  BMS College of Engineering
                  <span className="block text-[#a71320]">
                    Student Reviews
                  </span>
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                  Check recent, verified student feedback before making your
                  admission decision.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
                <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#2E3281]/10">
                    <Star className="h-8 w-8 text-[#2E3281]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E3281]">
                      Read Verified Reviews
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      Review campus facilities, teaching, academic experience,
                      placements and student support using current public
                      reviews.
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/search?q=BMS+College+of+Engineering+Bengaluru+reviews"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#2E3281] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#232764]"
                >
                  View Google Reviews <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-3xl bg-[#f7eef0] p-7 text-center sm:p-10">
                <Star className="mx-auto h-10 w-10 text-[#a71320]" />
                <h3 className="mt-5 text-2xl font-extrabold text-[#2E3281]">
                  Need Help Choosing the Right Course?
                </h3>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                  Speak with Pragati Educational Consultancy for guidance
                  about engineering courses, eligibility, fees and admissions.
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
                  Interested in BMS College of Engineering?
                </h2>
                <p className="mt-5 leading-7 text-white/80">
                  Get guidance on course selection, eligibility, entrance
                  examinations, fees and the admission process.
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
