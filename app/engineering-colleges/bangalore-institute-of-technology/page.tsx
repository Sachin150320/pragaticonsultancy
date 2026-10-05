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
  BriefcaseBusiness,
  Lightbulb,
  Trophy,
} from "lucide-react";

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
      "Focuses on artificial intelligence, machine learning, data-driven systems, intelligent applications and emerging computational technologies.",
  },
  {
    title: "Information Science & Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Covers software development, information systems, databases, programming, networking and modern information technologies.",
  },
  {
    title: "Electronics & Communication Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Provides knowledge of electronics, communication systems, embedded technologies, digital systems and communication engineering.",
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
    title: "Electronics & Instrumentation Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Combines electronics, instrumentation, measurement systems, automation and industrial control technologies.",
  },
  {
    title: "Electronics & Telecommunication Engineering",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Focuses on telecommunication systems, electronics, signal processing, wireless technologies and communication networks.",
  },
  {
    title: "Industrial Engineering & Management",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Combines engineering principles with management, operations, productivity, quality and industrial systems.",
  },
  {
    title: "Computer Science & Engineering – Data Science",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Provides foundations in data analytics, machine learning, programming, databases and data-driven decision making.",
  },
  {
    title: "CSE – IoT & Cyber Security",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Covers Internet of Things, cybersecurity, blockchain technologies, networks, embedded systems and secure computing.",
  },
  {
    title: "Robotics & Artificial Intelligence",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Combines robotics, automation, artificial intelligence, machine learning, sensors and intelligent systems.",
  },
  {
    title: "Electronics Engineering – VLSI Design & Technology",
    duration: "4 Years",
    type: "B.E.",
    description:
      "Focuses on VLSI design, digital electronics, semiconductor technologies, embedded systems and chip design.",
  },
];

const eligibility = [
  "Candidates must satisfy the eligibility requirements prescribed by the applicable admission authority and the Government of Karnataka.",
  "Candidates seeking B.E. admission should have completed 10+2 / PUC or an equivalent qualification with the required subjects.",
  "For engineering admissions through the Karnataka route, candidates can participate through the applicable KEA / KCET counselling process.",
  "Candidates can also seek admission through COMEDK counselling where applicable.",
  "Minimum qualifying marks and subject requirements may vary according to the admission category and current regulations.",
];

const admissionSteps = [
  {
    number: "01",
    title: "Complete 10+2 / PUC",
    description:
      "Complete the required qualifying examination with Physics, Mathematics and the prescribed additional subjects.",
  },
  {
    number: "02",
    title: "Entrance Examination",
    description:
      "Appear for the applicable entrance examination such as KCET or COMEDK UGET.",
  },
  {
    number: "03",
    title: "Counselling",
    description:
      "Register for the applicable counselling process and select Bangalore Institute of Technology and your preferred branch.",
  },
  {
    number: "04",
    title: "Confirm Admission",
    description:
      "After seat allotment, complete document verification, fee payment and college admission formalities.",
  },
];

const highlights = [
  {
    icon: Award,
    title: "Established in 1979",
    description:
      "A long-standing engineering institution in the heart of Bengaluru.",
  },
  {
    icon: ShieldCheck,
    title: "NAAC A+ Accredited",
    description:
      "BIT is accredited with an A+ grade and has multiple NBA-accredited UG programmes.",
  },
  {
    icon: Users,
    title: "5700+ Students",
    description:
      "A large student community across undergraduate and postgraduate programmes.",
  },
  {
    icon: BriefcaseBusiness,
    title: "200 Companies",
    description:
      "The official BIT website reports 200 companies visiting for campus recruitment.",
  },
];

const feeRows = [
  {
    category: "KCET / KEA",
    course: "B.E.",
    fee: "Approx. ₹83,526 / year*",
    duration: "4 Years",
  },
  {
    category: "COMEDK",
    course: "B.E.",
    fee: "Approx. ₹2.22 Lakh / year*",
    duration: "4 Years",
  },
  {
    category: "M.Tech",
    course: "M.Tech",
    fee: "Approx. ₹1.31 Lakh+ total*",
    duration: "2 Years",
  },
  {
    category: "MBA",
    course: "MBA",
    fee: "Approx. ₹1.11 Lakh+ total*",
    duration: "2 Years",
  },
  {
    category: "MCA",
    course: "MCA",
    fee: "Approx. ₹1.12 Lakh+ total*",
    duration: "2 Years",
  },
];

const whyChoose = [
  {
    icon: Trophy,
    title: "Academic Excellence",
    description:
      "BIT has a strong academic record with VTU ranks and gold medals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Startups",
    description:
      "Innovation, incubation, startup and idea-lab facilities support student entrepreneurship.",
  },
  {
    icon: Building2,
    title: "Centre of Excellence",
    description:
      "Departments have Centres of Excellence and industry-oriented learning initiatives.",
  },
  {
    icon: Users,
    title: "Student Activities",
    description:
      "More than 30 student activity clubs provide technical, cultural, sports and leadership opportunities.",
  },
];

export default function BangaloreInstituteOfTechnologyPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] text-slate-800">

      {/* =========================================================
          FULL WIDTH COLLEGE IMAGE
      ========================================================== */}
      <section className="relative w-full overflow-hidden">

        <div className="relative h-[300px] w-full sm:h-[390px] md:h-[480px] lg:h-[560px]">

          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=90"
            alt="Bangalore Institute of Technology"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071425] via-[#071425]/50 to-black/10" />

          {/* Top Badge */}
          <div className="absolute left-0 right-0 top-0">
            <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-8 lg:px-10">

              <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] text-[#2E3281] shadow-lg">
                <GraduationCap className="h-4 w-4" />
                Engineering College
              </div>

            </div>
          </div>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0">

            <div className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 md:pb-16 lg:px-10">

              <div className="max-w-5xl">

                <div className="mb-4 flex flex-wrap gap-2">

                  <span className="rounded-full bg-[#a71320] px-4 py-2 text-xs font-bold text-white">
                    EST. 1979
                  </span>

                  <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#2E3281]">
                    Bengaluru
                  </span>

                  <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#2E3281]">
                    NAAC A+
                  </span>

                </div>

                <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Bangalore Institute
                  <span className="block text-[#f2b5bd]">
                    of Technology
                  </span>
                </h1>

                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-white/90">

                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#f2b5bd]" />
                    K.R. Road, V.V. Puram, Bengaluru
                  </span>

                  <span className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-[#f2b5bd]" />
                    B.E. / M.Tech / MBA / MCA
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
                      src="https://www.google.com/s2/favicons?domain=bit-bangalore.edu.in&sz=128"
                      alt="Bangalore Institute of Technology Logo"
                      className="h-20 w-20 object-contain sm:h-24 sm:w-24"
                    />

                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[2px] text-[#a71320]">
                      Bangalore Institute of Technology
                    </p>

                    <h2 className="mt-2 text-2xl font-extrabold text-[#2E3281] sm:text-3xl">
                      BIT Bengaluru
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
                        Engineering & Technology
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
              1979
            </p>

          </div>

          <div className="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r">

            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Location
            </p>

            <p className="mt-1 text-xl font-extrabold text-[#2E3281]">
              Bengaluru
            </p>

          </div>

          <div className="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r">

            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Accreditation
            </p>

            <p className="mt-1 text-xl font-extrabold text-[#2E3281]">
              NAAC A+
            </p>

          </div>

          <div className="p-5">

            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              CET Code
            </p>

            <p className="mt-1 text-xl font-extrabold text-[#2E3281]">
              E008
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

              Building Careers Through
              <span className="block text-[#a71320]">
                Engineering Excellence
              </span>

            </h2>

            <div className="mt-7 space-y-5 text-[16px] leading-8 text-slate-600">

              <p>
                Bangalore Institute of Technology (BIT) is a prominent
                engineering institution located in V.V. Puram, Bengaluru.
                Established in 1979 under the aegis of Rajya Vokkaliga Sangha,
                the institution has developed a strong academic and technical
                ecosystem.
              </p>

              <p>
                BIT offers undergraduate engineering programmes across
                traditional engineering disciplines as well as emerging
                technology areas such as Artificial Intelligence & Machine
                Learning, Data Science, IoT & Cyber Security, Robotics &
                Artificial Intelligence and VLSI Design & Technology.
              </p>

              <p>
                The institute promotes experiential learning through
                Centres of Excellence, industry partnerships, student clubs,
                innovation activities, incubation facilities, startup support
                and skill development initiatives.
              </p>

              <p>
                According to BIT's official website, the institution has more
                than 200 companies visiting for campus recruitment and has
                maintained a strong record of VTU ranks and academic
                achievements.
              </p>

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
              Why BIT
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

              Explore BIT
              <span className="block text-[#a71320]">
                Engineering Courses
              </span>

            </h2>

          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-500 md:text-right">
            BIT offers undergraduate engineering programmes covering core
            engineering disciplines as well as emerging technology domains.
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
                  Course Details
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
                Eligibility depends on the programme, admission category and
                applicable government or counselling rules. Students should
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
            Fees vary depending on the admission route, category and programme.
            The figures below are indicative reference figures and should be
            verified against the latest official notification.
          </p>

        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[700px] border-collapse text-left">

              <thead>

                <tr className="bg-[#2E3281] text-white">

                  <th className="px-5 py-4 text-sm font-bold">
                    Admission Route
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Course
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Approx. Fee
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Duration
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

                    <td className="px-5 py-5 text-sm font-extrabold text-[#a71320]">
                      {row.fee}
                    </td>

                    <td className="px-5 py-5 text-sm text-slate-600">
                      {row.duration}
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
            *Fee figures are indicative and can change based on the academic
            year, counselling authority, category and programme. Hostel,
            transport, examination and other applicable charges may be
            separate. Please confirm the latest fee before admission.
          </p>

        </div>

      </section>

      {/* =========================================================
          WHY CHOOSE BIT
      ========================================================== */}
      <section className="bg-white py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
              Why Choose BIT
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl md:text-5xl">
              More Than Just
              <span className="text-[#a71320]"> Engineering</span>
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
              ready for the admission and counselling process.
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
              BIT Bengaluru
            </h2>

            <p className="mt-5 leading-8 text-white/70">
              Bangalore Institute of Technology is located on K.R. Road in
              V.V. Puram, Bengaluru, placing the campus close to the central
              areas of the city and major transport facilities.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex gap-4 rounded-2xl bg-white/10 p-4">

                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#f2b5bd]" />

                <div>

                  <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                    Address
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/85">
                    Bangalore Institute of Technology
                    <br />
                    K.R. Road, V.V. Puram
                    <br />
                    Bengaluru, Karnataka - 560004
                  </p>

                </div>

              </div>

              <div className="flex gap-4 rounded-2xl bg-white/10 p-4">

                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f2b5bd]" />

                <div>

                  <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                    CET Code
                  </p>

                  <p className="mt-1 text-sm text-white/85">
                    E008
                  </p>

                </div>

              </div>

            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Bangalore+Institute+of+Technology+K.R.+Road+Bengaluru"
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
                  Interested in Bangalore Institute of Technology?
                </h2>

                <p className="mt-5 leading-7 text-white/80">
                  Get professional guidance for course selection, eligibility,
                  KCET / COMEDK counselling and the BIT admission process.
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