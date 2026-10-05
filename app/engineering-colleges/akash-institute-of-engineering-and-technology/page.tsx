"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  GraduationCap,
  IndianRupee,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Trophy,
  Users,
  BriefcaseBusiness,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";

/* =========================================================
   OFFICIAL AKASH INSTITUTE OF ENGINEERING & TECHNOLOGY
   IMAGE + LOGO
   ========================================================= */

const collegeImage =
  "https://akashiet.com/wp-content/uploads/2026/02/cam-gal.png";

const collegeLogo =
  "https://akashiet.com/wp-content/uploads/2026/01/logo-1.svg";

/* =========================================================
   TYPES
   ========================================================= */

type Course = {
  title: string;
  duration: string;
  type: string;
  description: string;
};

type EligibilityItem = string;

type AdmissionStep = {
  number: string;
  title: string;
  description: string;
};

type Highlight = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type FeeRow = {
  category: string;
  course: string;
  tuition: string;
  college: string;
  university: string;
  total: string;
};

/* =========================================================
   COURSES
   ========================================================= */

const courses: Course[] = [
  {
    title: "Computer Science & Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "A comprehensive programme covering programming, algorithms, databases, software engineering, computer networks and modern computing technologies.",
  },
  {
    title: "Information Science & Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Covers programming, software development, databases, information systems, networking and modern digital technologies.",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Focuses on artificial intelligence, machine learning, intelligent systems, automation and data-driven applications.",
  },
  {
    title: "Artificial Intelligence & Data Science",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Combines computer science, artificial intelligence, statistics, data analytics and machine learning for data-driven solutions.",
  },
  {
    title: "Computer Science Engineering – Cyber Security",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Covers cybersecurity, network security, ethical security practices, digital forensics and secure software development.",
  },
  {
    title: "Computer Science Engineering – Data Science",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Combines computer science fundamentals with data analytics, statistics, machine learning and modern data technologies.",
  },
  {
    title: "Electronics & Communication Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Provides knowledge in electronics, communication systems, embedded systems, digital technologies and signal processing.",
  },
  {
    title: "Mechanical Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Focuses on mechanical design, manufacturing, thermal engineering, materials, production and industrial applications.",
  },
  {
    title: "Master of Business Administration",
    duration: "2 Years",
    type: "MBA",
    description:
      "A postgraduate management programme designed to develop business, leadership, strategic thinking and professional management skills.",
  },
  {
    title: "Master of Computer Applications",
    duration: "2 Years",
    type: "MCA",
    description:
      "A postgraduate programme focused on software development, computer applications, programming, databases and modern IT technologies.",
  },
];

/* =========================================================
   ELIGIBILITY
   ========================================================= */

const eligibility: EligibilityItem[] = [
  "Candidates must satisfy the eligibility requirements prescribed by the applicable admission authority and Government of Karnataka.",
  "Candidates seeking B.E. admission should have completed 10+2 / PUC or an equivalent qualification with the required subjects.",
  "Candidates should meet the prescribed subject and qualifying examination requirements for the selected engineering programme.",
  "Eligible candidates may participate through the applicable KCET / KEA counselling process.",
  "Candidates may also seek admission through COMEDK UGET where applicable.",
  "Management quota admission may be available subject to the institute's current admission rules and applicable regulations.",
  "Minimum qualifying marks, subject combinations and entrance requirements may vary according to the admission category and programme.",
];

/* =========================================================
   ADMISSION PROCESS
   ========================================================= */

const admissionSteps: AdmissionStep[] = [
  {
    number: "01",
    title: "Complete 10+2 / PUC",
    description:
      "Complete the required qualifying examination with Physics, Mathematics and the prescribed additional subject for the selected programme.",
  },
  {
    number: "02",
    title: "Take Entrance Exam",
    description:
      "Appear for the applicable entrance examination such as KCET or COMEDK UGET, wherever applicable.",
  },
  {
    number: "03",
    title: "Counselling",
    description:
      "Register for the applicable counselling process and select Akash Institute of Engineering and Technology and your preferred branch.",
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

const highlights: Highlight[] = [
  {
    icon: Award,
    title: "VTU Affiliated",
    description:
      "Akash Institute of Engineering and Technology is affiliated with Visvesvaraya Technological University, Belagavi.",
  },
  {
    icon: ShieldCheck,
    title: "AICTE Approved",
    description:
      "The institute's engineering programmes are approved under the applicable AICTE framework.",
  },
  {
    icon: Building2,
    title: "50-Acre Main Campus",
    description:
      "The institute's campus ecosystem includes modern academic facilities, laboratories, classrooms and student amenities.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry Exposure",
    description:
      "Students receive opportunities for internships, projects, certifications, industry interaction and practical learning.",
  },
];

/* =========================================================
   WHY CHOOSE
   ========================================================= */

const whyChoose: Highlight[] = [
  {
    icon: Trophy,
    title: "Modern Engineering Education",
    description:
      "AIET provides engineering education across core disciplines and emerging technology areas such as AI, Data Science and Cyber Security.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Research",
    description:
      "The institute encourages innovation, research, project-based learning and technology-focused development.",
  },
  {
    icon: FlaskConical,
    title: "Practical Learning",
    description:
      "Students receive practical exposure through laboratories, workshops, projects and technology-oriented academic activities.",
  },
  {
    icon: Users,
    title: "Industry Interaction",
    description:
      "Industry interaction, internships, certifications and professional exposure help students connect academic learning with career requirements.",
  },
];

/* =========================================================
   FEE STRUCTURE
   Current official fee figures are not stated here because
   fees can vary by route, category, programme and academic year.
   ========================================================= */

const feeRows: FeeRow[] = [
  {
    category: "KCET / KEA",
    course: "B.E.",
    tuition: "Contact College",
    college: "As Applicable",
    university: "As Applicable",
    total: "Verify Current Fee",
  },
  {
    category: "COMEDK",
    course: "B.E.",
    tuition: "As Applicable",
    college: "As Applicable",
    university: "As Applicable",
    total: "Verify Current Fee",
  },
  {
    category: "PG",
    course: "MBA / MCA",
    tuition: "Contact College",
    college: "As Applicable",
    university: "As Applicable",
    total: "Verify Current Fee",
  },
];

/* =========================================================
   REQUIRED DOCUMENTS
   ========================================================= */

const requiredDocuments = [
  "10th / SSLC Marks Card",
  "12th / PUC Marks Card",
  "KCET / COMEDK Rank Card where applicable",
  "KEA / COMEDK Allotment Letter where applicable",
  "Transfer Certificate",
  "Study Certificate",
  "Migration Certificate where applicable",
  "Income / Caste Certificate where applicable",
  "Aadhaar Card",
  "Passport-size photographs",
];

/* =========================================================
   PAGE
   ========================================================= */

export default function AkashInstituteOfEngineeringAndTechnologyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f9fc] text-slate-800">
      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative w-full overflow-hidden">
        <div className="relative h-[360px] w-full sm:h-[440px] md:h-[540px] lg:h-[620px] xl:h-[680px]">
          <img
            src={collegeImage}
            alt="Akash Institute of Engineering and Technology campus"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#061321] via-[#061321]/55 to-transparent" />

          {/* Top Badge */}
          <div className="absolute left-0 right-0 top-0 z-10">
            <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-8 lg:px-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] text-[#2E3281] shadow-xl">
                <GraduationCap className="h-4 w-4" />
                Engineering College
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 sm:pb-14 md:pb-16 lg:px-10 lg:pb-20">
              <div className="max-w-5xl">
                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#a71320] px-4 py-2 text-xs font-bold text-white shadow-lg">
                    AIET
                  </span>

                  <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#2E3281] shadow-lg">
                    Devanahalli
                  </span>

                  <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#2E3281] shadow-lg">
                    VTU Affiliated
                  </span>

                  <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#2E3281] shadow-lg">
                    AICTE Approved
                  </span>
                </div>

                <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Akash Institute
                  <span className="block text-[#f2b5bd]">
                    of Engineering & Technology
                  </span>
                </h1>

                <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-medium text-white/90">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#f2b5bd]" />
                    Devanahalli, Bengaluru
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

      {/* =====================================================
          COLLEGE INTRO / LOGO CARD
          ===================================================== */}

      <section className="relative z-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative -mt-10 sm:-mt-14">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.14)] sm:p-7 md:p-8">
              <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  {/* Official AIET Logo */}
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-lg sm:h-32 sm:w-32">
                    <img
                      src={collegeLogo}
                      alt="Akash Institute of Engineering and Technology logo"
                      className="h-full w-full object-contain p-1"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[2px] text-[#a71320]">
                      Akash Institute of Engineering & Technology
                    </p>

                    <h2 className="mt-2 text-2xl font-extrabold text-[#2E3281] sm:text-3xl">
                      AIET Bengaluru
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-[#a71320]" />
                        Devanahalli, Bengaluru
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

                <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[220px]">
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

      {/* =====================================================
          QUICK INFO
          ===================================================== */}

      <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Affiliation", "VTU"],
            ["Main Campus", "50 Acres"],
            ["Approval", "AICTE"],
            ["Location", "Devanahalli"],
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
      </section>

      {/* =====================================================
          ABOUT COLLEGE
          ===================================================== */}

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
                Akash Institute of Engineering and Technology (AIET) is part
                of the Akash Group of Institutions and is located in
                Devanahalli, Bengaluru, near Kempegowda International
                Airport. The institute is affiliated with Visvesvaraya
                Technological University (VTU), Belagavi.
              </p>

              <p>
                AIET provides engineering education across computer science,
                information science, artificial intelligence, data science,
                cyber security, electronics and communication and mechanical
                engineering.
              </p>

              <p>
                The institute's campus ecosystem includes modern classrooms,
                laboratories, workshops, library facilities and student
                amenities. The main campus is spread across approximately
                50 acres, providing an environment for academic and
                extracurricular activities.
              </p>

              <p>
                AIET also focuses on industry interaction, internships,
                certifications, practical projects, innovation, research and
                entrepreneurship to help students develop technical and
                professional skills.
              </p>
            </div>
          </div>

          {/* At a Glance */}
          <div className="rounded-3xl bg-[#2E3281] p-7 text-white shadow-xl sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Award className="h-7 w-7 text-white" />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[1.5px] text-white/60">
              AIET at a Glance
            </p>

            <h3 className="mt-2 text-3xl font-extrabold">
              Engineering & Technology
            </h3>

            <p className="mt-4 leading-7 text-white/75">
              AIET provides technical education in Devanahalli with
              engineering programmes covering both core disciplines and
              emerging technology areas.
            </p>

            <div className="mt-7 border-t border-white/15 pt-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/65">
                  Main Campus
                </span>

                <span className="font-bold">50 Acres</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-white/65">
                  University
                </span>

                <span className="font-bold">VTU</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-white/65">
                  Location
                </span>

                <span className="font-bold">Devanahalli</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HIGHLIGHTS
          ===================================================== */}

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
              Why AIET
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

      {/* =====================================================
          COURSES
          ===================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
              Courses Offered
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl md:text-5xl">
              Explore AIET
              <span className="block text-[#a71320]">
                Engineering Courses
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-500 md:text-right">
            Choose from engineering programmes across computer science,
            artificial intelligence, data science, cyber security,
            electronics, information science and mechanical engineering.
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

              <div className="mt-5 flex items-center border-t border-slate-100 pt-4">
                <span className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                  <GraduationCap className="h-4 w-4 text-[#a71320]" />
                  {course.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          ELIGIBILITY
          ===================================================== */}

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
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#2E3281] transition hover:bg-slate-100"
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

      {/* =====================================================
          FEE STRUCTURE
          ===================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
            Fee Structure
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl md:text-5xl">
            Understand the{" "}
            <span className="text-[#a71320]">Fees</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
            Fees may vary according to admission route, academic year,
            programme and category. Students should verify the latest
            applicable fee structure before admission.
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
                    key={`${row.category}-${row.course}`}
                    className={`border-b border-slate-100 ${
                      index % 2 === 0 ? "bg-white" : "bg-slate-50"
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
            Fee figures are not fixed in this page because the payable
            amount can vary by admission route, category, academic year
            and programme. Hostel, transportation, examination and other
            applicable charges may be separate. Please verify the current
            fee directly before admission.
          </p>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE
          ===================================================== */}

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
              Why Choose AIET
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl md:text-5xl">
              More Than Just{" "}
              <span className="text-[#a71320]">
                Engineering
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-[#f8f9fc] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
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

      {/* =====================================================
          ADMISSION PROCESS
          ===================================================== */}

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

      {/* =====================================================
          DOCUMENTS + LOCATION
          ===================================================== */}

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
              Students should keep their academic and supporting
              documents ready for counselling, verification and
              admission.
            </p>

            <div className="mt-7 space-y-3">
              {requiredDocuments.map((document) => (
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
              AIET Devanahalli
            </h2>

            <p className="mt-5 leading-8 text-white/70">
              Akash Institute of Engineering and Technology is located
              in Devanahalli, Bengaluru, near Kempegowda International
              Airport. The institute provides academic, laboratory and
              student facilities within its campus ecosystem.
            </p>

            <div className="mt-8 space-y-4">
              {/* Address */}
              <div className="flex gap-4 rounded-2xl bg-white/10 p-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#f2b5bd]" />

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                    Address
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/85">
                    Akash Institute of Engineering and Technology
                    <br />
                    Prasannahalli Road
                    <br />
                    Devanahalli, Near Kempegowda International Airport
                    <br />
                    Bengaluru, Karnataka - 562110
                  </p>
                </div>
              </div>

              {/* Admissions */}
              <div className="flex gap-4 rounded-2xl bg-white/10 p-4">
                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f2b5bd]" />

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                    Admissions
                  </p>

                  <p className="mt-1 text-sm text-white/85">
                    +91 9743803555
                  </p>

                  <p className="mt-1 text-sm text-white/85">
                    +91 9743873555
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    info@akashiet.com
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Akash+Institute+of+Engineering+and+Technology+Devanahalli+Bengaluru"
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

      {/* =====================================================
          FINAL CTA
          ===================================================== */}

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
                  Interested in Akash Institute of Engineering & Technology?
                </h2>

                <p className="mt-5 leading-7 text-white/80">
                  Get professional guidance for course selection,
                  eligibility, KCET / COMEDK counselling and the AIET
                  admission process.
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