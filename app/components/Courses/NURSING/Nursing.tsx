
"use client";

import Link from "next/link";
import {
    ArrowRight,
    Award,
    CheckCircle2,
    HeartPulse,
    Microscope,
    Stethoscope,
    type LucideIcon,
} from "lucide-react";

import BreadcrumbBanner from "@/app/components/BreadcrumbBanner";

type NursingCourse = {
    number: string;
    title: string;
    shortTitle: string;
    description: string;
    image: string;
    href: string;
    icon: LucideIcon;
};

const nursingCourses: NursingCourse[] = [
    {
        number: "01",
        title: "GNM Nursing Courses",
        shortTitle: "GNM Nursing",
        description:
            "General Nursing and Midwifery (GNM) is a diploma-level nursing program that prepares students to provide patient care, assist medical professionals, and support healthcare services. Students can explore admission opportunities based on the eligibility criteria of the respective institutions.",
        image:
            "/images/nursing/nursing-1.jpg",
        href: "/nursingcolleges",
        icon: Stethoscope,
    },
    {
        number: "02",
        title: "B.Sc. Nursing Courses",
        shortTitle: "B.Sc. Nursing",
        description:
            "Bachelor of Science in Nursing is an undergraduate degree program that combines nursing theory, clinical practice, patient care, and healthcare education. It is suitable for students aspiring to build a professional career in nursing.",
        image:
            "/images/nursing/nursing-2.jpg",
        href: "/nursingcolleges",
        icon: HeartPulse,
    },
    {
        number: "03",
        title: "M.Sc. Nursing Courses",
        shortTitle: "M.Sc. Nursing",
        description:
            "Master of Science in Nursing is a postgraduate program for eligible nursing graduates who wish to advance their knowledge, specialise in nursing disciplines, and explore opportunities in clinical practice, education, research, and leadership.",
        image:
            "/images/nursing/nursing-3.jpg",
        href: "/nursingcolleges",
        icon: Microscope,
    },
    {
        number: "04",
        title: "P.B.B.Sc. Nursing Courses",
        shortTitle: "P.B.B.Sc. Nursing",
        description:
            "Post Basic B.Sc. Nursing is a degree program designed for eligible diploma-qualified nursing professionals who want to upgrade their qualifications, strengthen their professional knowledge, and explore further career opportunities.",
        image:
            "/images/nursing/nursing-4.jpg",
        href: "/nursingcolleges",
        icon: Award,
    },
];

export default function NursingCourses() {
    const featuredCourse = nursingCourses[0];

    return (
        <>
            <BreadcrumbBanner
                title="Nursing Courses"
                description="EXPLORE NURSING COURSES AND ADMISSION OPPORTUNITIES"
            />

            <section className="relative overflow-hidden bg-slate-50 py-16 md:py-20 lg:py-24">
                <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#a71320]/5" />

                <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#2E3281]/5" />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Introduction */}
                    <div className="mb-12 w-full">
                        <h2 className="text-3xl font-bold leading-tight text-[#2E3281] sm:text-4xl md:text-5xl">
                            Build Your Future in Nursing
                        </h2>

                        <p className="mt-6 text-[16px] leading-8 text-slate-600">
                            Nursing is one of the most respected and rewarding professions
                            in the healthcare sector. Nurses play a vital role in patient
                            care by monitoring health conditions, assisting doctors,
                            administering treatments, and supporting patient recovery.
                            Students interested in a nursing career can explore different
                            courses according to their educational qualifications and
                            professional goals.
                        </p>

                        <p className="mt-5 text-[16px] leading-8 text-slate-600">
                            Pragati Educational Consultancy provides admission guidance
                            to students seeking nursing courses in reputed colleges in
                            Bangalore. Nursing programs combine theoretical education
                            with practical clinical training to help students develop
                            the knowledge and skills required for professional healthcare
                            practice. We guide students in exploring suitable courses,
                            colleges, eligibility requirements, and admission procedures
                            to help them take the next step towards their nursing careers.
                        </p>
                    </div>

                    {/* Featured Nursing Course */}
                    <div className="group relative mb-8 min-h-[520px] overflow-hidden rounded-[2rem] shadow-xl">
                        <img
                            src={featuredCourse.image}
                            alt={featuredCourse.title}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-[#10162d]/70" />

                        <div className="absolute inset-0 bg-gradient-to-r from-[#10162d]/95 via-[#10162d]/70 to-transparent" />

                        <div className="relative flex min-h-[520px] items-end p-7 md:p-10 lg:p-14">
                            <div className="max-w-2xl">
                                <div className="mb-5 flex flex-wrap items-center gap-3">
                                    <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold tracking-[1.5px] text-[#a71320]">
                                        FEATURED COURSE
                                    </span>

                                    <span className="text-5xl font-bold text-white/25">
                                        {featuredCourse.number}
                                    </span>
                                </div>

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#a71320] text-white shadow-xl">
                                    <Stethoscope className="h-7 w-7" />
                                </div>

                                <h3 className="mt-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                                    {featuredCourse.title}
                                </h3>

                                <p className="mt-5 text-[16px] leading-8 text-white/75">
                                    {featuredCourse.description}
                                </p>

                                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-red-300" />
                                        Nursing Education
                                    </div>

                                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-red-300" />
                                        College Guidance
                                    </div>

                                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-red-300" />
                                        Admission Support
                                    </div>
                                </div>

                                <Link
                                    href={featuredCourse.href}
                                    className="group/link mt-8 inline-flex items-center gap-2 rounded-xl bg-[#a71320] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8d101c] hover:shadow-xl"
                                >
                                    Explore GNM Nursing

                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Nursing Course Cards */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {nursingCourses.slice(1).map((course) => {
                            const Icon = course.icon;

                            return (
                                <Link
                                    key={course.title}
                                    href={course.href}
                                    className="group relative min-h-[370px] overflow-hidden rounded-[1.75rem] shadow-lg"
                                >
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        loading="lazy"
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-[#10162d]/45 transition-all duration-500 group-hover:bg-[#10162d]/70" />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#10162d] via-[#10162d]/40 to-transparent" />

                                    <span className="absolute left-5 top-5 flex h-10 min-w-10 items-center justify-center rounded-full bg-white/95 px-3 text-xs font-bold text-[#a71320] shadow-lg">
                                        {course.number}
                                    </span>

                                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#a71320] text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                                            <Icon className="h-6 w-6" />
                                        </div>

                                        <h3 className="mt-5 text-2xl font-bold leading-tight text-white">
                                            {course.title}
                                        </h3>

                                        <p className="mt-3 max-h-0 overflow-hidden text-sm leading-7 text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-48 group-hover:opacity-100">
                                            {course.description}
                                        </p>

                                        <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-5">
                                            <span className="text-sm font-bold text-white">
                                                Explore Course
                                            </span>

                                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-[#a71320]">
                                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Admission Guidance */}
                    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
                        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                            <div className="max-w-3xl">
                                <h3 className="text-2xl font-bold text-[#2E3281] md:text-3xl">
                                    Need Guidance for Nursing Admissions?
                                </h3>

                                <p className="mt-4 text-base leading-8 text-slate-600">
                                    Connect with Pragati Educational Consultancy for guidance
                                    on nursing courses, college options, eligibility criteria,
                                    and the admission process in Bangalore.
                                </p>
                            </div>

                            <Link
                                href="/contact"
                                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#a71320] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8d101c] hover:shadow-lg"
                            >
                                Contact Us
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
