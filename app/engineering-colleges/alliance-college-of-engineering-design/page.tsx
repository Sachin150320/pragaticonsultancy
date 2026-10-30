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

const collegeImage = "/images/Engg-collegs/31.webp";

const collegeLogo = "/images/Engg-collegs/logo/31.webp";

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
        title: "Computer Science & Engineering – Data Science",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Combines computer science fundamentals with data analytics, machine learning, statistics and practical data science applications.",
    },
    {
        title: "Computer Science & Engineering – Cyber Security",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Covers cybersecurity, network security, ethical hacking, secure software development and modern information security practices.",
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
            "Focuses on electrical systems, electronics, power systems, control systems, electrical machines and modern energy technologies.",
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
            "Covers structural engineering, construction, transportation, environmental engineering, surveying and infrastructure development.",
    },
    {
        title: "Aeronautical Engineering",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Provides fundamentals of aircraft systems, aerodynamics, propulsion, aviation structures and aerospace engineering technologies.",
    },
    {
        title: "Biotechnology",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Combines engineering principles with biological sciences, biotechnology applications, laboratory techniques and industrial processes.",
    },
    {
        title: "Mechatronics Engineering",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Integrates mechanical engineering, electronics, automation, robotics, control systems and intelligent manufacturing technologies.",
    },
    {
        title: "Robotics & Artificial Intelligence",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Focuses on robotics, automation, artificial intelligence, machine learning, sensors, control systems and intelligent machines.",
    },
];

const eligibility: string[] = [
    "Candidates must satisfy the eligibility requirements prescribed by the applicable admission authority and the institute.",
    "Candidates seeking undergraduate engineering admission should check the required 10+2 / PUC qualification and subject combination.",
    "Entrance examination requirements depend on the programme and the applicable admission route.",
    "Candidates considering KCET / KEA counselling should verify the current eligibility and seat-allotment rules.",
    "Candidates considering COMEDK UGET should confirm whether the programme and admission category are covered by the current process.",
    "Minimum qualifying marks, subject combinations and admission requirements may vary according to the programme and category.",
];

const feeRows: FeeRow[] = [
    {
        category: "Confirm with Institute",
        course: "Undergraduate Programmes",
        tuition: "Confirm officially",
        college: "Confirm officially",
        university: "Confirm officially",
        total: "Confirm officially",
    },
    {
        category: "Other Admission Routes",
        course: "Applicable Programmes",
        tuition: "Confirm officially",
        college: "Confirm officially",
        university: "Confirm officially",
        total: "Confirm officially",
    },
];

const requiredDocuments = [
    "10th / SSLC Marks Card",
    "12th / PUC Marks Card",
    "Entrance Exam Rank Card, if applicable",
    "Admission / Allotment Letter, if applicable",
    "Transfer Certificate",
    "Study Certificate, if required",
    "Migration Certificate, if applicable",
    "Income / Caste Certificate, if applicable",
    "Aadhaar Card or accepted identity proof",
    "Passport-size photographs",
];

const tabs: { id: Tab; label: string; icon: typeof GraduationCap }[] = [
    {
        id: "admission",
        label: "Admission",
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

export default function AllianceCollegeOfEngineeringAndDesignPage() {
    const [activeTab, setActiveTab] = useState<Tab>("admission");

    return (
        <main className="min-h-screen overflow-hidden bg-white text-slate-800">
            {/* HERO */}
            <section className="relative w-full overflow-hidden bg-[#061321]">
                <div className="relative h-[360px] w-full sm:h-[440px] md:h-[540px] lg:h-[620px] xl:h-[680px]">
                    <img
                        src={collegeImage}
                        alt="Alliance College of Engineering & Design, Alliance University campus"
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
                                        ACED
                                    </span>

                                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#2E3281] shadow-lg">
                                        Bengaluru, Karnataka
                                    </span>

                                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#2E3281] shadow-lg">
                                        Engineering & Technology
                                    </span>
                                </div>

                                <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                    Alliance College of Engineering & Design
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
                                            alt="Alliance University logo"
                                            className="h-full w-full object-contain p-1"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[2px] text-[#a71320]">
                                            Alliance College of Engineering & Design
                                        </p>

                                        <h2 className="mt-2 text-2xl font-extrabold text-[#2E3281] sm:text-3xl">
                                            ACED Bengaluru
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
                            ["Institution", "Alliance University"],
                            ["Campus Location", "Karnataka"],
                            ["Academic Details", "Confirm Officially"],
                            ["Programmes", "Check Current List"],
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
                                    Alliance College of Engineering & Design
                                    <span className="block text-[#a71320]">
                                        Admission Guidance
                                    </span>
                                </h2>

                                <div className="mt-7 max-w-5xl space-y-5 text-[16px] leading-8 text-slate-600">
                                    <p>
                                        Alliance College of Engineering & Design is associated
                                        with Alliance University in Karnataka. Students should
                                        consult the university&apos;s official information to
                                        confirm the current academic structure, approvals,
                                        affiliation details and admission requirements.
                                    </p>

                                    <p>
                                        Prospective students should review the latest
                                        undergraduate programme list and confirm which
                                        engineering courses are available for the 2026-27
                                        academic year.
                                    </p>

                                    <p>
                                        Admission requirements, accepted entrance examinations,
                                        application procedures and selection criteria can vary
                                        by programme and admission category. Check the current
                                        official admission notification before applying.
                                    </p>

                                    <p>
                                        Students should also verify the latest information
                                        about campus facilities, practical learning,
                                        internships, industry interaction and career-development
                                        opportunities directly with the university.
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
                                        Review the current engineering programme list and
                                        confirm course availability, duration and entry
                                        requirements with the university.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white p-7 shadow-sm">
                                    <Building2 className="h-8 w-8 text-[#a71320]" />

                                    <h3 className="mt-5 text-xl font-bold text-[#2E3281]">
                                        Bengaluru Campus
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-500">
                                        Contact Alliance University to confirm the relevant
                                        campus location, facilities, student services and
                                        campus-visit arrangements.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-[#a71320] p-7 text-white">
                                    <CheckCircle2 className="h-8 w-8 text-white" />

                                    <h3 className="mt-5 text-xl font-bold">
                                        Admission Support
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-white/75">
                                        Get guidance for course selection, eligibility,
                                        entrance examinations and admission procedures.
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
                                            "Verify the academic qualifications and entrance requirements.",
                                        ],
                                        [
                                            "03",
                                            "Review Admission Route",
                                            "Confirm the applicable university or counselling admission process.",
                                        ],
                                        [
                                            "04",
                                            "Complete Admission",
                                            "Submit the required documents and complete the official formalities.",
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
                                    Explore Alliance College of Engineering & Design
                                    <span className="block text-[#a71320]">
                                        Engineering Courses
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-500">
                                    The following engineering disciplines are provided as a
                                    general course reference. This is not a verified list of
                                    programmes offered by Alliance College of Engineering &
                                    Design. Confirm the current programme names, availability
                                    and duration with the university before publishing or
                                    applying.
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
                                                Indicative duration: {course.duration}
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
                                    The fee amounts have intentionally been left unconfirmed
                                    to avoid publishing incorrect figures. Contact Alliance
                                    University and check the latest official fee notification
                                    for tuition, university charges, scholarships and any
                                    additional applicable fees.
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
                                    Eligibility varies according to the programme, admission
                                    category and applicable admission rules. Confirm the
                                    latest requirements with the university before applying.
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
                                        Candidates considering Karnataka counselling should
                                        verify whether their chosen programme participates in
                                        the current KCET / KEA admission process and check the
                                        applicable eligibility rules.
                                    </p>
                                </div>

                                <div className="rounded-3xl bg-[#f7eef0] p-7 sm:p-9">
                                    <Building2 className="h-8 w-8 text-[#a71320]" />

                                    <h3 className="mt-5 text-2xl font-extrabold text-[#2E3281]">
                                        Entrance Examinations
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-600">
                                        Entrance examination requirements can differ by
                                        programme and admission route. Confirm accepted
                                        examinations and selection criteria with the
                                        university&apos;s current admission office.
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
                                    Students should keep their academic and supporting
                                    documents ready for verification and admission. The final
                                    list must be confirmed with the university.
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
                                    Students can explore career development through academic
                                    learning, technical projects, internships and professional
                                    preparation. Current institute-specific placement details
                                    should be confirmed through official sources.
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
                                        Technical knowledge and professional preparation can
                                        help students build skills for future career
                                        opportunities.
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
                                        Industry exposure, where available, can help students
                                        understand workplace expectations and professional
                                        practices.
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
                                        Practical projects and internships, subject to
                                        programme availability, can complement academic
                                        learning.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-[#a71320]/10 bg-[#a71320]/5 p-7 sm:p-9">
                                <h3 className="text-2xl font-extrabold text-[#2E3281]">
                                    Placement Information
                                </h3>

                                <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600">
                                    Current placement statistics, highest and average
                                    packages, recruiter lists, internship opportunities and
                                    placement percentages have not been specified here.
                                    Confirm these details using the latest official
                                    university placement information before publishing.
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
                                    eligibility information, counselling and admission
                                    support.
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
                                        navigate the admission process with personalised
                                        guidance.
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
                                    Student & Parent
                                    <span className="block text-[#a71320]">
                                        Feedback
                                    </span>
                                </h2>

                                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                                    Verified student and parent feedback can be added here
                                    after the reviews have been collected and approved for
                                    publication.
                                </p>
                            </div>

                            <div className="grid gap-5 md:grid-cols-3">
                                {[
                                    {
                                        name: "Student Feedback",
                                        course: "Engineering Student",
                                        review:
                                            "Verified student feedback will be added here after confirmation.",
                                    },
                                    {
                                        name: "Parent Feedback",
                                        course: "Parent Review",
                                        review:
                                            "Verified parent feedback will be added here after confirmation.",
                                    },
                                    {
                                        name: "Student Feedback",
                                        course: "B.E. Aspirant",
                                        review:
                                            "Verified feedback about the admission process will be added here after confirmation.",
                                    },
                                ].map((review, index) => (
                                    <div
                                        key={`${review.name}-${review.course}-${index}`}
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
                                            {review.review}
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
                                    Interested in Alliance College of Engineering & Design?
                                </h2>

                                <p className="mt-5 leading-7 text-white/80">
                                    Get guidance for course selection, eligibility,
                                    admission requirements and the Alliance College of
                                    Engineering & Design admission process.
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