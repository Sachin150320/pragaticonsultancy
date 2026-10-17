
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

const collegeImage = "/images/Collges/1.jpg";
const collegeLogo = "/images/Collges/logo/rv-university.png";

type Course = {
    title: string;
    duration: string;
    type: string;
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

type Tab =
    | "admission"
    | "courses"
    | "eligibility"
    | "placements"
    | "contact"
    | "reviews";

const courses: Course[] = [
    {
        title: "Computer Science & Engineering",
        duration: "4 Years",
        type: "B.Tech",
        description:
            "Explore programming, algorithms, databases, software engineering, computer networks and modern computing technologies. Confirm current programme availability with the university.",
    },
    {
        title: "Artificial Intelligence & Machine Learning",
        duration: "4 Years",
        type: "B.Tech",
        description:
            "Learn about artificial intelligence, machine learning, intelligent systems, data-driven applications and emerging technologies. Confirm current programme availability with the university.",
    },
    {
        title: "Computer Science & Engineering – Data Science",
        duration: "4 Years",
        type: "B.Tech",
        description:
            "Explore computer science fundamentals, data analytics, machine learning, statistics and practical data science applications. Confirm the current specialisation with the university.",
    },
    {
        title: "Computer Science & Engineering – Cyber Security",
        duration: "4 Years",
        type: "B.Tech",
        description:
            "Learn about cybersecurity, network security, secure software development and information security practices. Confirm the current specialisation with the university.",
    },
    {
        title: "Information Science & Engineering",
        duration: "4 Years",
        type: "B.Tech",
        description:
            "Explore programming, software development, information systems, databases, networking and digital technologies. Confirm current programme availability with the university.",
    },
    {
        title: "Electronics & Communication Engineering",
        duration: "4 Years",
        type: "B.Tech",
        description:
            "Study electronics, communication systems, embedded systems, digital technologies and signal processing. Confirm current programme availability with the university.",
    },
    {
        title: "Electrical & Electronics Engineering",
        duration: "4 Years",
        type: "B.Tech",
        description:
            "Explore electrical systems, power systems, control systems, electrical machines and energy technologies. Confirm current programme availability with the university.",
    },
    {
        title: "Mechanical Engineering",
        duration: "4 Years",
        type: "B.Tech",
        description:
            "Study mechanical design, manufacturing, thermal engineering, materials, production and industrial applications. Confirm current programme availability with the university.",
    },
    {
        title: "Civil Engineering",
        duration: "4 Years",
        type: "B.Tech",
        description:
            "Explore structural engineering, construction, transportation, environmental engineering and infrastructure development. Confirm current programme availability with the university.",
    },
    {
        title: "Aeronautical Engineering",
        duration: "4 Years",
        type: "B.Tech",
        description:
            "Learn about aircraft systems, aerodynamics, propulsion, aviation structures and aerospace engineering technologies. Confirm current programme availability with the university.",
    },
    {
        title: "Biotechnology",
        duration: "4 Years",
        type: "B.Tech",
        description:
            "Explore biological sciences, biotechnology applications, laboratory techniques and industrial processes. Confirm current programme availability with the university.",
    },
    {
        title: "Mechatronics Engineering",
        duration: "4 Years",
        type: "B.Tech",
        description:
            "Study mechanical engineering, electronics, automation, robotics, control systems and intelligent manufacturing. Confirm current programme availability with the university.",
    },
    {
        title: "Robotics & Artificial Intelligence",
        duration: "4 Years",
        type: "B.Tech",
        description:
            "Explore robotics, automation, artificial intelligence, sensors, control systems and intelligent machines. Confirm current programme availability with the university.",
    },
];

const eligibility: string[] = [
    "Candidates must satisfy the eligibility requirements prescribed by RV University and the applicable admission authorities.",
    "Candidates seeking undergraduate engineering admission should have completed 10+2 / PUC or an equivalent qualification with the required subjects.",
    "Applicants must meet the current academic eligibility and minimum qualifying marks specified for their selected programme.",
    "Entrance examination requirements may vary according to the programme and admission category.",
    "Candidates should confirm the applicable entrance examination, selection process and admission route directly with RV University.",
    "Management or other admission categories, where available, are subject to the university's current admission rules and applicable regulations.",
];

const feeRows: FeeRow[] = [
    {
        category: "Undergraduate",
        course: "Engineering programmes",
        tuition: "Confirm officially",
        college: "Confirm officially",
        university: "Confirm officially",
        total: "Confirm officially",
    },
    {
        category: "Postgraduate",
        course: "Applicable PG programmes",
        tuition: "Confirm officially",
        college: "Confirm officially",
        university: "Confirm officially",
        total: "Confirm officially",
    },
];

const requiredDocuments = [
    "10th / SSLC Marks Card",
    "12th / PUC Marks Card",
    "Applicable entrance examination scorecard",
    "Admission offer / allotment letter",
    "Transfer Certificate",
    "Study Certificate, where required",
    "Migration Certificate, where applicable",
    "Income / Caste Certificate, where applicable",
    "Aadhaar Card or accepted identity proof",
    "Passport-size photographs",
];

const tabs = [
    {
        id: "admission" as Tab,
        label: "Admission",
        icon: GraduationCap,
    },
    {
        id: "courses" as Tab,
        label: "Courses & Fees",
        icon: Building2,
    },
    {
        id: "eligibility" as Tab,
        label: "Eligibility & Exams",
        icon: CheckCircle2,
    },
    {
        id: "placements" as Tab,
        label: "Placements",
        icon: BriefcaseBusiness,
    },
    {
        id: "contact" as Tab,
        label: "Contact",
        icon: Phone,
    },
    {
        id: "reviews" as Tab,
        label: "Reviews",
        icon: Star,
    },
];

export default function RVUniversityPage() {
    const [activeTab, setActiveTab] = useState<Tab>("admission");

    return (
        <main className="min-h-screen overflow-hidden bg-white text-slate-800">
            {/* HERO */}
            <section className="relative w-full overflow-hidden bg-[#061321]">
                <div className="relative h-[360px] w-full sm:h-[440px] md:h-[540px] lg:h-[620px] xl:h-[680px]">
                    <img
                        src={collegeImage}
                        alt="RV University campus"
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061321] via-[#061321]/55 to-transparent" />

                    <div className="absolute left-0 right-0 top-0 z-10">
                        <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-8 lg:px-10">
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] text-[#2E3281] shadow-xl">
                                <GraduationCap className="h-4 w-4" />
                                University Admissions
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 z-10">
                        <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8 sm:pb-14 md:pb-16 lg:px-10 lg:pb-20">
                            <div className="max-w-5xl">
                                <div className="mb-5 flex flex-wrap gap-2">
                                    <span className="rounded-full bg-[#a71320] px-4 py-2 text-xs font-bold text-white shadow-lg">
                                        RVU
                                    </span>

                                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#2E3281] shadow-lg">
                                        Bengaluru
                                    </span>

                                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#2E3281] shadow-lg">
                                        University Admissions
                                    </span>
                                </div>

                                <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                    RV University
                                    <span className="block text-[#f2b5bd]">
                                        Bengaluru
                                    </span>
                                </h1>

                                <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-medium text-white/90">
                                    <span className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-[#f2b5bd]" />
                                        Bengaluru, Karnataka
                                    </span>

                                    <span className="hidden text-white/30 sm:block">
                                        |
                                    </span>

                                    <span className="flex items-center gap-2">
                                        <GraduationCap className="h-4 w-4 text-[#f2b5bd]" />
                                        Higher Education
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
                                            alt="RV University logo"
                                            className="h-full w-full object-contain p-1"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[2px] text-[#a71320]">
                                            RV University
                                        </p>

                                        <h2 className="mt-2 text-2xl font-extrabold text-[#2E3281] sm:text-3xl">
                                            RV University Bengaluru
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
                                                University Admissions
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

            {/* QUICK FACTS */}
            <section className="bg-[#eef2f8] py-8">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            ["Institution", "RV University"],
                            ["Campus", "Bengaluru"],
                            ["Institution Type", "University"],
                            ["Location", "Karnataka"],
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
                                    Admission
                                </p>

                                <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#2E3281] sm:text-4xl md:text-5xl">
                                    RV University
                                    <span className="block text-[#a71320]">
                                        Admission Guidance
                                    </span>
                                </h2>

                                <div className="mt-7 max-w-5xl space-y-5 text-[16px] leading-8 text-slate-600">
                                    <p>
                                        RV University is a higher education institution located
                                        in Bengaluru, Karnataka. Students should refer to the
                                        university's official information for its current
                                        programmes, approvals and admission requirements.
                                    </p>

                                    <p>
                                        Applicants can explore the programmes available for
                                        their preferred academic year and review the applicable
                                        eligibility criteria, application deadlines and
                                        selection procedures before applying.
                                    </p>

                                    <p>
                                        Programme availability, admission routes, entrance
                                        examination requirements and fee structures may differ
                                        according to the course and applicant category.
                                    </p>

                                    <p>
                                        Get guidance with course selection, eligibility checks,
                                        application requirements and the next steps in the
                                        admission process.
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-5 md:grid-cols-3">
                                <div className="rounded-2xl bg-[#2E3281] p-7 text-white">
                                    <GraduationCap className="h-8 w-8 text-[#f2b5bd]" />

                                    <h3 className="mt-5 text-xl font-bold">
                                        Explore Programmes
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-white/70">
                                        Review available programmes and choose a course
                                        according to your interests and career goals.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white p-7 shadow-sm">
                                    <Building2 className="h-8 w-8 text-[#a71320]" />

                                    <h3 className="mt-5 text-xl font-bold text-[#2E3281]">
                                        Bengaluru Campus
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-500">
                                        Explore university information, campus facilities and
                                        the academic environment before applying.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-[#a71320] p-7 text-white">
                                    <CheckCircle2 className="h-8 w-8 text-white" />

                                    <h3 className="mt-5 text-xl font-bold">
                                        Admission Support
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-white/75">
                                        Get guidance for course selection, eligibility,
                                        applications and admission procedures.
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
                                            "Review academic qualifications and the current admission requirements.",
                                        ],
                                        [
                                            "03",
                                            "Submit Application",
                                            "Follow the application and selection process for your chosen programme.",
                                        ],
                                        [
                                            "04",
                                            "Complete Admission",
                                            "Submit the required documents and complete the applicable formalities.",
                                        ],
                                    ].map(([number, title, description]) => (
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
                                                {description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* COURSES & FEES */}
                    {activeTab === "courses" && (
                        <div className="space-y-12">
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[2px] text-[#a71320]">
                                    Courses Offered
                                </p>

                                <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl md:text-5xl">
                                    Explore RV University
                                    <span className="block text-[#a71320]">
                                        Courses & Programmes
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-500">
                                    Explore the programme information below as a starting
                                    point. The listed engineering subjects are illustrative;
                                    confirm the courses currently offered by RV University
                                    before publishing this information to prospective students.
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
                                    Understand the{" "}
                                    <span className="text-[#a71320]">Fees</span>
                                </h2>
                            </div>

                            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
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

                            <div className="flex gap-3 rounded-xl border border-[#a71320]/10 bg-[#a71320]/5 p-5">
                                <IndianRupee className="mt-0.5 h-5 w-5 shrink-0 text-[#a71320]" />

                                <p className="text-sm leading-6 text-slate-600">
                                    Fees are marked for official confirmation because they
                                    can vary by programme, academic year and admission
                                    category. Confirm the latest official fee structure
                                    directly with RV University before publishing or
                                    advising students. Hostel, transport, examination and
                                    other charges may be separate.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* ELIGIBILITY & EXAMS */}
                    {activeTab === "eligibility" && (
                        <div className="space-y-10">
                            <div className="rounded-3xl bg-[#2E3281] p-7 text-white sm:p-10">
                                <p className="text-sm font-bold uppercase tracking-[2px] text-[#f2b5bd]">
                                    Admission Eligibility
                                </p>

                                <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl md:text-5xl">
                                    Check Your
                                    <span className="block text-[#f2b5bd]">
                                        Eligibility
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-3xl leading-8 text-white/70">
                                    Eligibility varies according to the programme,
                                    admission category and current admission rules.
                                    Students should verify the latest requirements before
                                    applying.
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

                                        <p className="text-sm leading-7 text-slate-600">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid gap-5 md:grid-cols-2">
                                <div className="rounded-3xl bg-[#eef2f8] p-7 sm:p-9">
                                    <GraduationCap className="h-8 w-8 text-[#2E3281]" />

                                    <h3 className="mt-5 text-2xl font-extrabold text-[#2E3281]">
                                        Entrance Examinations
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-600">
                                        Check the entrance examinations accepted for
                                        your chosen programme and whether scores are
                                        required for the current admission cycle.
                                    </p>
                                </div>

                                <div className="rounded-3xl bg-[#f7eef0] p-7 sm:p-9">
                                    <Building2 className="h-8 w-8 text-[#a71320]" />

                                    <h3 className="mt-5 text-2xl font-extrabold text-[#2E3281]">
                                        Application Process
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-600">
                                        Follow RV University's current application,
                                        eligibility verification and selection process
                                        for the programme you intend to study.
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
                                    Keep the applicable academic and supporting
                                    documents ready for application, verification and
                                    admission. The final checklist depends on the
                                    programme and admission category.
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
                                    <span className="block text-[#f2b5bd]">
                                        Opportunities
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-3xl leading-8 text-white/70">
                                    Students can prepare for professional opportunities
                                    through academic learning, practical projects,
                                    internships and career development activities.
                                    Programme-specific placement information should be
                                    confirmed with the university.
                                </p>
                            </div>

                            <div className="grid gap-5 md:grid-cols-3">
                                <div className="rounded-2xl bg-white p-7 shadow-sm">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2E3281]/10">
                                        <BriefcaseBusiness className="h-6 w-6 text-[#2E3281]" />
                                    </div>

                                    <h3 className="mt-5 text-xl font-bold text-[#2E3281]">
                                        Career Preparation
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-500">
                                        Develop technical and professional skills
                                        relevant to your chosen field of study.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white p-7 shadow-sm">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#a71320]/10">
                                        <Users className="h-6 w-6 text-[#a71320]" />
                                    </div>

                                    <h3 className="mt-5 text-xl font-bold text-[#2E3281]">
                                        Industry Interaction
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-500">
                                        Explore opportunities to understand industry
                                        expectations and workplace practices.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white p-7 shadow-sm">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2E3281]/10">
                                        <GraduationCap className="h-6 w-6 text-[#2E3281]" />
                                    </div>

                                    <h3 className="mt-5 text-xl font-bold text-[#2E3281]">
                                        Internships & Projects
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-500">
                                        Build practical experience through relevant
                                        projects, internships and academic activities.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-[#a71320]/10 bg-[#a71320]/5 p-7 sm:p-9">
                                <h3 className="text-2xl font-extrabold text-[#2E3281]">
                                    Placement Information
                                </h3>

                                <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600">
                                    Current placement statistics, highest and average
                                    packages, recruiter lists and placement percentages
                                    have not been included because they require
                                    confirmation from the latest official university
                                    placement information.
                                </p>
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
                                        "Soft skill development",
                                        "Career counselling",
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

                    {/* CONTACT */}
                    {activeTab === "contact" && (
                        <div className="space-y-10">
                            <div className="rounded-3xl bg-[#2E3281] p-7 text-white sm:p-10">
                                <p className="text-sm font-bold uppercase tracking-[2px] text-[#f2b5bd]">
                                    Consultancy Services
                                </p>

                                <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl md:text-5xl">
                                    Get Admission
                                    <span className="block text-[#f2b5bd]">
                                        Guidance
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-3xl leading-8 text-white/70">
                                    Pragati Educational Consultancy provides admission
                                    guidance for students exploring courses, colleges,
                                    eligibility, applications and admission procedures.
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
                                        Our consultancy team helps students and parents
                                        understand the admission journey and available
                                        options.
                                    </p>

                                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                                        {[
                                            "Course & Career Guidance",
                                            "College Admission Counselling",
                                            "Engineering Admission Assistance",
                                            "Entrance Exam Guidance",
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

                                {/* CONTACT INFO */}
                                <div className="rounded-3xl bg-[#a71320] p-7 text-white shadow-sm sm:p-9">
                                    <p className="text-sm font-bold uppercase tracking-[2px] text-white/70">
                                        Contact Information
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
                                                    3rd Main, 3rd Cross, RMV II Stage,
                                                    <br />
                                                    New BEL Road,
                                                    <br />
                                                    Bangalore - 560 094.
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
                                                    className="mt-2 block text-sm font-bold text-white hover:text-white/80"
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
                                    Student Reviews
                                </p>

                                <h2 className="mt-3 text-3xl font-extrabold text-[#2E3281] sm:text-4xl md:text-5xl">
                                    What Students
                                    <span className="block text-[#a71320]">
                                        Say About Their Experience
                                    </span>
                                </h2>

                                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                                    Verified student reviews can be added here after
                                    collecting and confirming genuine feedback.
                                </p>
                            </div>

                            <div className="grid gap-5 md:grid-cols-3">
                                {[
                                    {
                                        name: "Student Feedback",
                                        course: "Verified review pending",
                                        review:
                                            "Verified student feedback will be added here after confirmation.",
                                    },
                                    {
                                        name: "Parent Feedback",
                                        course: "Verified review pending",
                                        review:
                                            "Verified parent feedback will be added here after confirmation.",
                                    },
                                    {
                                        name: "Admission Feedback",
                                        course: "Verified review pending",
                                        review:
                                            "Verified admission experience feedback will be added here after confirmation.",
                                    },
                                ].map((review) => (
                                    <div
                                        key={`${review.name}-${review.course}`}
                                        className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                                    >
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    className="h-4 w-4 text-[#a71320]"
                                                />
                                            ))}
                                        </div>

                                        <p className="mt-5 text-sm leading-7 text-slate-600">
                                            “{review.review}”
                                        </p>

                                        <div className="mt-6 border-t border-slate-100 pt-5">
                                            <p className="font-bold text-[#2E3281]">
                                                {review.name}
                                            </p>

                                            <p className="mt-1 text-xs font-medium text-slate-400">
                                                {review.course}
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
                                    Speak with Pragati Educational Consultancy for
                                    personalised guidance on courses, eligibility,
                                    applications and admissions.
                                </p>

                                <Link
                                    href="/contact"
                                    className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#a71320] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#8e101c]"
                                >
                                    Talk to a Counsellor
                                    <ArrowRight className="h-4 w-4" />
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
                                    Interested in RV University?
                                </h2>

                                <p className="mt-5 leading-7 text-white/80">
                                    Get guidance for course selection, eligibility,
                                    application requirements and the RV University
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
