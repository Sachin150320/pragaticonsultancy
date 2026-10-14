
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

const collegeImage =
    "/images/Collges/bgs-college-of-engineering-and-technology.jpg";

const collegeLogo =
    "https://www.google.com/s2/favicons?domain=bgscet.ac.in&sz=256";

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
            "Study programming, algorithms, data structures, databases, software engineering, computer networks and modern computing technologies.",
    },
    {
        title: "Information Science & Engineering",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Explore information systems, software development, databases, networking, web technologies and modern digital applications.",
    },
    {
        title: "Computer Science & Design",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Combine computer science fundamentals with design thinking, user experience, digital interfaces and creative technology solutions.",
    },
    {
        title: "Artificial Intelligence & Machine Learning",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Learn artificial intelligence, machine learning, intelligent systems, predictive modelling and data-driven applications.",
    },
    {
        title: "Artificial Intelligence & Data Science",
        duration: "4 Years",
        type: "B.E.",
        description:
            "Explore data analytics, statistics, machine learning, data engineering and practical applications of artificial intelligence.",
    },
];

const eligibility: string[] = [
    "Candidates must satisfy the current eligibility criteria prescribed by the college, VTU and the applicable admission authority.",
    "Applicants should have passed 10+2 / PUC or an equivalent qualifying examination.",
    "Physics and Mathematics are required subjects, with an eligible additional subject such as Chemistry, Computer Science or Electronics, subject to current regulations.",
    "Candidates applying through KCET must satisfy the applicable KEA eligibility and counselling requirements.",
    "Candidates may apply through COMEDK UGET where eligible and subject to the current admission rules.",
    "Management quota admissions are subject to available seats, institutional admission procedures and applicable regulations.",
];

const feeRows: FeeRow[] = [
    {
        category: "KEA / KCET",
        course: "B.E. Programmes",
        tuition: "Confirm with KEA",
        college: "Confirm with college",
        university: "Confirm officially",
        total: "Verify current fee",
    },
    {
        category: "COMEDK",
        course: "B.E. Programmes",
        tuition: "Confirm with COMEDK",
        college: "Confirm with college",
        university: "Confirm officially",
        total: "Verify current fee",
    },
    {
        category: "Management",
        course: "B.E. Programmes",
        tuition: "Contact college",
        college: "Contact college",
        university: "Confirm officially",
        total: "Request fee details",
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
    "Caste / Income Certificate, if applicable",
    "Aadhaar Card or valid ID",
    "Passport-size photographs",
];

const tabs: {
    id: Tab;
    label: string;
    icon: typeof GraduationCap;
}[] = [
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

export default function BGSCollegeOfEngineeringAndTechnologyPage() {
    const [activeTab, setActiveTab] = useState<Tab>("admission");

    return (
        <main className="min-h-screen overflow-hidden bg-white text-slate-800">
            {/* HERO */}
            <section className="relative w-full overflow-hidden bg-[#061321]">
                <div className="relative h-[360px] w-full sm:h-[440px] md:h-[540px] lg:h-[620px] xl:h-[680px]">
                    <img
                        src={collegeImage}
                        alt="BGS College of Engineering and Technology campus"
                        className="absolute inset-0 h-full w-full object-cover object-center"
                        onError={(event) => {
                            event.currentTarget.style.display = "none";
                        }}
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
                                        BGSCET
                                    </span>

                                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#2E3281] shadow-lg">
                                        Bengaluru
                                    </span>

                                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#2E3281] shadow-lg">
                                        VTU & AICTE
                                    </span>
                                </div>

                                <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                    BGS College of Engineering and Technology
                                    <span className="block text-[#f2b5bd]">
                                        Bengaluru
                                    </span>
                                </h1>

                                <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-medium text-white/90">
                                    <span className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-[#f2b5bd]" />
                                        Mahalakshmipuram, Bengaluru
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
                                            alt="BGS College of Engineering and Technology logo"
                                            className="h-full w-full object-contain p-1"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[2px] text-[#a71320]">
                                            BGS College of Engineering and Technology
                                        </p>

                                        <h2 className="mt-2 text-2xl font-extrabold text-[#2E3281] sm:text-3xl">
                                            BGSCET Bengaluru
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
                                                VTU Affiliated
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[220px]">
                                    <Link
                                        href="/contact-us"
                                        className="flex items-center justify-center gap-2 rounded-xl bg-[#a71320] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#a71320]/20 transition hover:-translate-y-0.5 hover:bg-[#8e101c]"
                                    >
                                        Apply Now
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>

                                    <Link
                                        href="/contact-us"
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
                            ["Established", "2022"],
                            ["Programmes", "5 B.E. Courses"],
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
                                    BGS College of Engineering and Technology
                                    <span className="block text-[#a71320]">
                                        Admission Guidance
                                    </span>
                                </h2>

                                <div className="mt-7 max-w-5xl space-y-5 text-[16px] leading-8 text-slate-600">
                                    <p>
                                        BGS College of Engineering and Technology (BGSCET) is an
                                        engineering institution located in Mahalakshmipuram,
                                        Bengaluru, Karnataka. The college is approved by AICTE
                                        and affiliated with Visvesvaraya Technological University
                                        (VTU), Belagavi.
                                    </p>

                                    <p>
                                        Established in 2022, the institution is promoted by
                                        BGSKH Education Trust, a unit of Sri Adichunchanagiri
                                        Shikshana Trust. The campus is located adjacent to
                                        Mahalakshmi Metro Station, providing access to the
                                        surrounding Bengaluru area.
                                    </p>

                                    <p>
                                        BGSCET offers undergraduate engineering programmes in
                                        Computer Science and Engineering, Information Science
                                        and Engineering, Computer Science and Design, Artificial
                                        Intelligence and Machine Learning, and Artificial
                                        Intelligence and Data Science.
                                    </p>

                                    <p>
                                        Students can explore course options, eligibility
                                        requirements and applicable admission routes through
                                        KCET / KEA, COMEDK UGET or other permitted admission
                                        categories, subject to the current rules and availability
                                        of seats.
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
                                        Explore five undergraduate engineering programmes
                                        covering computer science, information science,
                                        design and artificial intelligence.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white p-7 shadow-sm">
                                    <Building2 className="h-8 w-8 text-[#a71320]" />

                                    <h3 className="mt-5 text-xl font-bold text-[#2E3281]">
                                        Bengaluru Campus
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-500">
                                        The college is situated in Mahalakshmipuram, West of
                                        Chord Road, adjacent to Mahalakshmi Metro Station.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-[#a71320] p-7 text-white">
                                    <CheckCircle2 className="h-8 w-8 text-white" />

                                    <h3 className="mt-5 text-xl font-bold">
                                        Admission Support
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-white/75">
                                        Get guidance for course selection, eligibility,
                                        counselling, document preparation and admission
                                        procedures.
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
                                            "Select an engineering programme based on your interests and career goals.",
                                        ],
                                        [
                                            "02",
                                            "Check Eligibility",
                                            "Verify your academic qualifications and applicable entrance requirements.",
                                        ],
                                        [
                                            "03",
                                            "Counselling",
                                            "Review the applicable KCET / KEA, COMEDK or other permitted admission route.",
                                        ],
                                        [
                                            "04",
                                            "Complete Admission",
                                            "Submit the required documents and complete admission formalities.",
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
                                    Explore BGS College of Engineering and Technology
                                    <span className="block text-[#a71320]">
                                        Engineering Courses
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-500">
                                    Explore undergraduate B.E. programmes in computing,
                                    information science, design, artificial intelligence
                                    and data science.
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
                                    Exact fees have not been inserted because they must
                                    be confirmed against the current official fee
                                    notification. Tuition, college, university, hostel,
                                    transport and other charges may vary by admission
                                    category and academic year.
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
                                    Eligibility varies by programme, admission category
                                    and counselling rules. Confirm the current
                                    requirements before applying.
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
                                        Eligible candidates can review the KCET / KEA
                                        counselling process, document requirements,
                                        eligibility rules and seat allotment procedures.
                                    </p>
                                </div>

                                <div className="rounded-3xl bg-[#f7eef0] p-7 sm:p-9">
                                    <Building2 className="h-8 w-8 text-[#a71320]" />

                                    <h3 className="mt-5 text-2xl font-extrabold text-[#2E3281]">
                                        COMEDK UGET
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-600">
                                        Eligible candidates may explore COMEDK UGET
                                        admissions, subject to the current eligibility
                                        requirements and counselling rules.
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
                                    Keep your academic and supporting documents ready
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
                                    <span className="block text-[#f2b5bd]">
                                        Opportunities
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-3xl leading-8 text-white/70">
                                    Develop technical knowledge, practical skills and
                                    professional competencies through academic projects,
                                    industry interaction and career preparation.
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
                                        Develop technical knowledge, communication
                                        skills and professional competencies for
                                        future employment.
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
                                        expectations, workplace practices and
                                        technology trends.
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
                                        Apply classroom learning through technical
                                        projects, practical assignments and
                                        relevant internship opportunities.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-[#a71320]/10 bg-[#a71320]/5 p-7 sm:p-9">
                                <h3 className="text-2xl font-extrabold text-[#2E3281]">
                                    Placement Information
                                </h3>

                                <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600">
                                    Current placement percentages, highest package,
                                    average package, recruiter lists and placement
                                    statistics should be confirmed through official
                                    college placement records before publication.
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
                                        "Communication and soft skills",
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
                                    Get assistance with engineering course selection,
                                    admission eligibility, counselling, documents
                                    and the admission process at BGSCET.
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
                                        Get support throughout the admission process
                                        with information about courses, eligibility
                                        and available admission routes.
                                    </p>

                                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                                        {[
                                            "Course & Career Guidance",
                                            "College Admission Counselling",
                                            "Engineering Admission Assistance",
                                            "KCET / KEA Guidance",
                                            "COMEDK UGET Guidance",
                                            "Fee Structure Information",
                                            "Document Preparation",
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
                                        College Contact Information
                                    </p>

                                    <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                                        Contact BGSCET
                                    </h2>

                                    <div className="mt-8 space-y-6">
                                        <div className="flex gap-4">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                                                <MapPin className="h-5 w-5 text-white" />
                                            </div>

                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                                                    College Address
                                                </p>

                                                <p className="mt-2 text-sm leading-7 text-white/90">
                                                    CA Site No. 6 & 7, 3rd Main,
                                                    Pipeline Road,
                                                    <br />
                                                    2nd Phase, 2nd Stage,
                                                    Mahalakshmipuram,
                                                    <br />
                                                    West of Chord Road, adjacent to
                                                    Mahalakshmi Metro Station,
                                                    <br />
                                                    Bengaluru - 560 086, Karnataka.
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
                                                    href="tel:+919964897207"
                                                    className="mt-2 block text-sm font-bold text-white hover:text-white/80"
                                                >
                                                    +91 99648 97207
                                                </a>

                                                <a
                                                    href="tel:+919731292555"
                                                    className="mt-1 block text-sm font-bold text-white hover:text-white/80"
                                                >
                                                    +91 97312 92555
                                                </a>
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
                                                    href="mailto:principal@bgscet.ac.in"
                                                    className="mt-2 block break-all text-sm font-bold text-white hover:text-white/80"
                                                >
                                                    principal@bgscet.ac.in
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <a
                                        href="https://bgscet.ac.in/contact-us/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#a71320] transition hover:bg-slate-100"
                                    >
                                        Official College Website
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
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
                                    Add verified student feedback and genuine ratings
                                    to this section when reviews are available.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
                                <div className="mx-auto max-w-2xl text-center">
                                    <Star className="mx-auto h-10 w-10 text-[#a71320]" />

                                    <h3 className="mt-5 text-2xl font-extrabold text-[#2E3281]">
                                        Share Your College Experience
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-500">
                                        Student experiences can help future applicants
                                        understand the academic environment, campus
                                        facilities, courses and admission process.
                                    </p>

                                    <a
                                        href="https://bgscet.ac.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#a71320] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#8e101c]"
                                    >
                                        Visit Official Website
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>

                            <div className="rounded-3xl bg-[#f7eef0] p-7 text-center sm:p-10">
                                <Star className="mx-auto h-10 w-10 text-[#a71320]" />

                                <h3 className="mt-5 text-2xl font-extrabold text-[#2E3281]">
                                    Need Help Choosing the Right Course?
                                </h3>

                                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                                    Get guidance on engineering programmes,
                                    eligibility, counselling and admissions at BGSCET.
                                </p>

                                <Link
                                    href="/contact-us"
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
                                    Interested in BGS College of Engineering and Technology?
                                </h2>

                                <p className="mt-5 leading-7 text-white/80">
                                    Get guidance for engineering course selection,
                                    eligibility, KCET / COMEDK counselling and
                                    the BGSCET admission process.
                                </p>
                            </div>

                            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
                                <Link
                                    href="/contact-us"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#a71320] shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100"
                                >
                                    Apply Now
                                    <ArrowRight className="h-4 w-4" />
                                </Link>

                                <Link
                                    href="/contact-us"
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
