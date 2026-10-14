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

const collegeLogo =
    "https://www.google.com/s2/favicons?domain=msrit.edu&sz=256";

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
        type: "B.E.",
        description:
            "Covers programming, algorithms, databases, software engineering, computer networks and modern computing technologies.",
    },
    {
        title: "Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Focuses on computer science, artificial intelligence, machine learning, intelligent systems and data-driven applications.",
    },
    {
        title: "Computer Science & Engineering (Cyber Security)",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Introduces secure software development, network security, cybersecurity principles and information protection.",
    },
    {
        title: "Artificial Intelligence & Data Science",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Combines artificial intelligence, data analysis, machine learning and statistical methods for data-driven problem solving.",
    },
    {
        title: "Information Science & Engineering",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Covers software development, information systems, databases, networking and modern computing technologies.",
    },
    {
        title: "Electronics & Communication Engineering",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Covers electronic circuits, communication systems, signal processing, embedded systems and digital technologies.",
    },
    {
        title: "Electrical & Electronics Engineering",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Focuses on electrical machines, power systems, electronics, control systems and electrical engineering applications.",
    },
    {
        title: "Mechanical Engineering",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Covers mechanical design, manufacturing, thermal engineering, materials and industrial engineering applications.",
    },
    {
        title: "Civil Engineering",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Introduces structural engineering, construction, transportation, environmental engineering and infrastructure development.",
    },
    {
        title: "Aerospace Engineering",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Covers the fundamentals of aerodynamics, aircraft structures, propulsion and aerospace engineering systems.",
    },
    {
        title: "Biotechnology",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Combines engineering principles and biological sciences with laboratory, research and biotechnology applications.",
    },
    {
        title: "Chemical Engineering",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Covers chemical processes, process design, thermodynamics, mass transfer and industrial process engineering.",
    },
    {
        title: "Electronics & Instrumentation Engineering",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Focuses on measurement systems, sensors, instrumentation, process control and electronic systems.",
    },
    {
        title: "Electronics & Telecommunication Engineering",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Covers communication networks, electronic systems, signal processing and telecommunication technologies.",
    },
    {
        title: "Industrial Engineering & Management",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Combines engineering, operations, production systems, quality management and industrial decision-making.",
    },
    {
        title: "Medical Electronics Engineering",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Combines electronics and engineering principles with medical instruments, biomedical systems and healthcare technology.",
    },
];

const eligibility: string[] = [
    "Candidates must satisfy the current MSRIT admission requirements and applicable regulatory guidelines.",
    "B.E. applicants should have passed 10+2 / PUC or an equivalent qualifying examination.",
    "Physics and Mathematics are compulsory subjects; the additional subject requirements must be checked in the current admission notification.",
    "KEA and COMEDK UGET are listed among the entrance routes for undergraduate engineering admissions.",
    "The applicable admission route depends on the candidate's category and the current counselling rules.",
    "Minimum marks, subject combinations, seat availability and document requirements should be verified before applying.",
];

const feeRows: FeeRow[] = [
    {
        category: "KEA / State Counselling",
        course: "B.E. programmes",
        tuition: "Confirm officially",
        college: "Confirm officially",
        university: "Confirm officially",
        total: "Confirm officially",
    },
    {
        category: "COMEDK UGET",
        course: "B.E. programmes",
        tuition: "Confirm officially",
        college: "Confirm officially",
        university: "Confirm officially",
        total: "Confirm officially",
    },
];

const requiredDocuments = [
    "10th / SSLC Marks Card",
    "12th / PUC Marks Card",
    "KCET / COMEDK Rank Card, if applicable",
    "KEA / COMEDK Allotment Letter, if applicable",
    "Transfer Certificate",
    "Study Certificate, if required",
    "Migration Certificate, if applicable",
    "Income / Caste Certificate, if applicable",
    "Aadhaar Card or valid identity proof",
    "Passport-size photographs",
];

const tabs: { id: Tab; label: string; icon: typeof GraduationCap }[] = [
    {
        id: "admission",
        label: "Admission 2026-27",
        icon: GraduationCap,
    },
    {
        id: "courses",
        label: "Courses & Fees",
        icon: Building2,
    },
    {
        id: "eligibility",
        label: "Eligibility & Exams",
        icon: CheckCircle2,
    },
    {
        id: "placements",
        label: "Placements",
        icon: BriefcaseBusiness,
    },
    {
        id: "contact",
        label: "Contact",
        icon: Phone,
    },
    {
        id: "reviews",
        label: "Reviews",
        icon: Star,
    },
];

export default function MSRamaiahInstituteOfTechnologyPage() {
    const [activeTab, setActiveTab] = useState<Tab>("admission");

    return (
        <main className="min-h-screen overflow-hidden bg-white text-slate-800">
            {/* HERO */}
            <section className="relative w-full overflow-hidden bg-[#061321]">
                <div className="relative h-[360px] w-full sm:h-[440px] md:h-[540px] lg:h-[620px] xl:h-[680px]">
                    <img
                        src={collegeImage}
                        alt="M. S. Ramaiah Institute of Technology campus in Bengaluru"
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/20" />
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
                                        MSRIT
                                    </span>

                                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#2E3281] shadow-lg">
                                        Bengaluru
                                    </span>

                                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#2E3281] shadow-lg">
                                        Autonomous · VTU
                                    </span>
                                </div>

                                <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                    M. S. Ramaiah Institute of Technology
                                    <span className="block text-[#f2b5bd]">
                                        Engineering & Technology
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
                                        Undergraduate & Postgraduate Programmes
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
                                            alt="M. S. Ramaiah Institute of Technology logo"
                                            className="h-full w-full object-contain p-1"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[2px] text-[#a71320]">
                                            M. S. Ramaiah Institute of Technology
                                        </p>

                                        <h2 className="mt-2 text-2xl font-extrabold text-[#2E3281] sm:text-3xl">
                                            MSRIT Bengaluru
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
                                                Autonomous engineering institute
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
                            ["Established", "1962"],
                            ["Institution Type", "Autonomous"],
                            ["Affiliation", "VTU"],
                            ["Location", "Bengaluru"],
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
                                    M. S. Ramaiah Institute of Technology
                                    <span className="block text-[#a71320]">
                                        Admission Guidance
                                    </span>
                                </h2>

                                <div className="mt-7 max-w-5xl space-y-5 text-[16px] leading-8 text-slate-600">
                                    <p>
                                        M. S. Ramaiah Institute of Technology (MSRIT) is an
                                        engineering institution located in Bengaluru,
                                        Karnataka. Established in 1962, the institute is
                                        associated with Visvesvaraya Technological University
                                        (VTU) and has autonomous academic status.
                                    </p>

                                    <p>
                                        MSRIT offers undergraduate and postgraduate programmes
                                        across engineering and related disciplines. Students
                                        should refer to the official admissions information for
                                        current programme availability and entry requirements.
                                    </p>

                                    <p>
                                        Undergraduate engineering programmes cover fields such
                                        as computer science, artificial intelligence, data
                                        science, cybersecurity, electronics, electrical,
                                        mechanical, civil, aerospace and other engineering
                                        specialisations.
                                    </p>

                                    <p>
                                        Admission depends on the programme, qualifying
                                        examination, entrance examination, counselling route
                                        and applicable eligibility requirements. Candidates
                                        should verify the latest official admission notification
                                        before making a decision.
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-5 md:grid-cols-3">
                                <div className="rounded-2xl bg-[#2E3281] p-7 text-white">
                                    <GraduationCap className="h-8 w-8 text-[#f2b5bd]" />

                                    <h3 className="mt-5 text-xl font-bold">
                                        Engineering Programmes
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-white/70">
                                        Undergraduate engineering courses across computing,
                                        electronics, electrical, mechanical, civil and other
                                        specialisations.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white p-7 shadow-sm">
                                    <Building2 className="h-8 w-8 text-[#a71320]" />

                                    <h3 className="mt-5 text-xl font-bold text-[#2E3281]">
                                        Bengaluru Campus
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-500">
                                        MSRIT is located in Bengaluru, Karnataka, and has a
                                        long-standing presence in technical education.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-[#a71320] p-7 text-white">
                                    <CheckCircle2 className="h-8 w-8 text-white" />

                                    <h3 className="mt-5 text-xl font-bold">
                                        Admission Support
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-white/75">
                                        Get guidance for course selection, eligibility,
                                        counselling and admission procedures.
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
                                            "Verify academic qualifications and the applicable entrance requirements.",
                                        ],
                                        [
                                            "03",
                                            "Entrance & Counselling",
                                            "Check the applicable KEA, COMEDK or other recognised admission route.",
                                        ],
                                        [
                                            "04",
                                            "Complete Admission",
                                            "Submit the required documents and complete the official admission process.",
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
                                    Explore MSRIT
                                    <span className="block text-[#a71320]">
                                        Engineering Courses
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-500">
                                    Explore undergraduate engineering programmes in computer
                                    science, artificial intelligence, data science,
                                    cybersecurity, electronics, mechanical, civil and other
                                    disciplines. Confirm current programme availability with
                                    the institute before applying.
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

                                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">
                                    Fees may differ by entrance route, admission category,
                                    programme and academic year. The figures below are marked
                                    for official confirmation rather than using unverified
                                    amounts.
                                </p>
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
                                    Confirm the latest programme-wise fee structure directly
                                    with MSRIT and the applicable admission authority before
                                    publishing or paying fees. Hostel, transport, examination
                                    and other charges may be separate.
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
                                    Eligibility varies according to the programme, entrance
                                    route, admission category and applicable counselling
                                    rules. Check the latest official requirements before
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
                                        KCET / KEA
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-600">
                                        Eligible candidates may apply through the relevant KEA
                                        counselling process, subject to the current admission
                                        rules, eligibility and seat-allocation procedures.
                                    </p>
                                </div>

                                <div className="rounded-3xl bg-[#f7eef0] p-7 sm:p-9">
                                    <Building2 className="h-8 w-8 text-[#a71320]" />

                                    <h3 className="mt-5 text-2xl font-extrabold text-[#2E3281]">
                                        COMEDK UGET
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-600">
                                        COMEDK UGET is another listed entrance route for
                                        undergraduate engineering admissions. Candidates
                                        should verify the current eligibility, counselling
                                        schedule and applicable rules.
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
                                    Keep your academic and supporting documents ready for
                                    counselling, verification and admission. The exact list
                                    may vary by admission route.
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
                                    Students can prepare for professional careers through
                                    technical learning, projects, internships, industry
                                    interaction and career preparation activities.
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
                                        Build technical knowledge, communication skills and
                                        professional readiness for future opportunities.
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
                                        Industry engagement can help students understand
                                        workplace practices and professional expectations.
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
                                        Academic projects and internship experiences can help
                                        students apply concepts to practical problems.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-[#a71320]/10 bg-[#a71320]/5 p-7 sm:p-9">
                                <h3 className="text-2xl font-extrabold text-[#2E3281]">
                                    Placement Information
                                </h3>

                                <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600">
                                    Placement percentages, salary packages, recruiter lists
                                    and department-wise statistics can change each year.
                                    Confirm the latest figures from MSRIT's official placement
                                    information before publishing specific numbers.
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
                                    guidance for students looking for course selection,
                                    eligibility, counselling and admission support.
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
                                        understand the admission process and available
                                        educational options.
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

                                {/* PRAGATI CONTACT INFORMATION */}
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
                                    Student Feedback
                                    <span className="block text-[#a71320]">
                                        & College Experiences
                                    </span>
                                </h2>

                                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                                    Verified student reviews can be added here after
                                    collecting genuine feedback. No unverified ratings or
                                    testimonials are displayed.
                                </p>
                            </div>

                            <div className="grid gap-5 md:grid-cols-3">
                                {[
                                    {
                                        title: "Student Feedback",
                                        description:
                                            "Verified student feedback will be added here after confirmation.",
                                    },
                                    {
                                        title: "Parent Feedback",
                                        description:
                                            "Verified parent feedback will be added here after confirmation.",
                                    },
                                    {
                                        title: "Academic Experience",
                                        description:
                                            "A verified account of the academic experience can be added here.",
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

                                        <p className="mt-5 text-sm leading-7 text-slate-600">
                                            {review.description}
                                        </p>

                                        <div className="mt-6 border-t border-slate-100 pt-5">
                                            <p className="font-bold text-[#2E3281]">
                                                {review.title}
                                            </p>

                                            <p className="mt-1 text-xs font-medium text-slate-400">
                                                Feedback pending verification
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
                                    on engineering courses, eligibility, counselling and
                                    admissions.
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
                                    Interested in M. S. Ramaiah Institute of Technology?
                                </h2>

                                <p className="mt-5 leading-7 text-white/80">
                                    Get guidance for course selection, eligibility,
                                    applicable entrance examinations and the MSRIT admission
                                    process.
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