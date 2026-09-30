"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    BookOpen,
    CheckCircle2,
    GraduationCap,
    Lightbulb,
    School,
    Target,
    Users,
} from "lucide-react";

import BreadcrumbBanner from "@/app/Components/BreadcrumbBanner";

export default function EducationalServices() {
    return (
        <>
            {/* =========================================================
          BREADCRUMB
      ========================================================= */}
            <BreadcrumbBanner
                title="Educational Services"
                description="PRAGATI CONSULTANCY SERVICES"
            />

            {/* =========================================================
          INTRODUCTION
      ========================================================= */}
            <section className="bg-white py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        {/* Image */}
                        <div className="relative">
                            <div className="absolute -left-3 -top-3 h-20 w-20 rounded-2xl bg-[rgb(167_19_32_/_8%)]" />

                            <div className="relative overflow-hidden rounded-2xl">
                                <Image
                                    src="/images/banner-1.jpg"
                                    alt="Educational Services"
                                    width={900}
                                    height={600}
                                    className="h-[320px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[400px]"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="pt-5 lg:pt-0">
                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-[2px] w-9 bg-[#a71320]" />

                                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#a71320]">
                                    Educational Services
                                </span>
                            </div>

                            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                                Guiding Students Towards the
                                <span className="block text-[#a71320]">
                                    Right Career Path
                                </span>
                            </h2>

                            <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600 sm:text-base">
                                <p>
                                    Pragati Consultancy Services has launched a unique career
                                    counseling program to help you make a wise career decision.
                                    This program is aimed at guiding the students towards a
                                    career path that best suits their interests, aptitude and
                                    capability.
                                </p>

                                <p>
                                    Pragati Consultancy Services attempts to address this
                                    crucial issue of career selection and development procedures
                                    by designing a systematic and step-by-step process of career
                                    development.
                                </p>

                                <p>
                                    It is one of the oldest and leading ISO 9001-2008 certified
                                    Educational consultancy in Bangalore with presence in over
                                    10 cities across India and also in Nepal. We have guided
                                    thousands of aspiring students towards achieving their goals.
                                </p>

                                <p>
                                    We have also proved our global presence by guiding aspiring
                                    MBBS students to prominent universities in China.
                                </p>
                            </div>

                            {/* Features */}
                            <div className="mt-7 grid gap-3 sm:grid-cols-2">
                                <Feature text="Career Counselling" />
                                <Feature text="Course Selection Guidance" />
                                <Feature text="College Selection" />
                                <Feature text="Admission Assistance" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          OUR APPROACH
      ========================================================= */}
            <section className="bg-[#f8f8f8] py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    {/* Heading */}
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="mb-3 flex items-center justify-center gap-3">
                            <span className="h-[2px] w-8 bg-[#a71320]" />

                            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#a71320]">
                                Our Services
                            </span>

                            <span className="h-[2px] w-8 bg-[#a71320]" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                            Our Educational Approach
                        </h2>

                        <p className="mt-4 text-[15px] leading-7 text-slate-600">
                            We provide structured guidance to help students understand
                            their options and move towards the right educational path.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <ServiceCard
                            icon={<Lightbulb size={24} />}
                            title="Career Counselling"
                            description="Helping students understand their interests, aptitude and suitable career opportunities."
                        />

                        <ServiceCard
                            icon={<BookOpen size={24} />}
                            title="Course Guidance"
                            description="Guidance to identify courses that match the student's academic goals and interests."
                        />

                        <ServiceCard
                            icon={<School size={24} />}
                            title="College Selection"
                            description="Helping students explore and select suitable colleges and educational institutions."
                        />

                        <ServiceCard
                            icon={<GraduationCap size={24} />}
                            title="Admission Support"
                            description="Supporting students throughout the admission process and helping them understand available options."
                        />

                        <ServiceCard
                            icon={<Target size={24} />}
                            title="Career Planning"
                            description="A systematic approach to help students plan their educational and career development."
                        />

                        <ServiceCard
                            icon={<Users size={24} />}
                            title="Student Support"
                            description="Providing assistance and guidance to students and parents during their education journey."
                        />
                    </div>
                </div>
            </section>

            {/* =========================================================
          HOW WE HELP
      ========================================================= */}
            <section className="bg-white py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                        {/* Left */}
                        <div>
                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-[2px] w-9 bg-[#a71320]" />

                                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#a71320]">
                                    Our Process
                                </span>
                            </div>

                            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                                How We Help Students
                            </h2>

                            <p className="mt-5 text-[15px] leading-7 text-slate-600">
                                Our career development process follows a systematic approach
                                to understand student requirements and guide them towards
                                suitable educational opportunities.
                            </p>

                            <Link
                                href="/contact-us"
                                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#a71320] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8d101b]"
                            >
                                Talk To Us
                                <ArrowRight size={18} />
                            </Link>
                        </div>

                        {/* Steps */}
                        <div className="space-y-4">
                            <ProcessStep
                                number="01"
                                title="Understand the Student"
                                description="We understand the student's interests, aptitude, academic background and requirements."
                            />

                            <ProcessStep
                                number="02"
                                title="Explore Suitable Options"
                                description="We help students explore courses, colleges and educational opportunities."
                            />

                            <ProcessStep
                                number="03"
                                title="Identify the Right Direction"
                                description="Students receive guidance to identify a career path that matches their interests and capabilities."
                            />

                            <ProcessStep
                                number="04"
                                title="Move Towards Admission"
                                description="We provide support and guidance as students move forward with their educational admission process."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

/* =========================================================
   FEATURE
========================================================= */

function Feature({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3">
            <CheckCircle2
                size={19}
                className="shrink-0 text-[#a71320]"
            />

            <span className="text-sm font-medium text-slate-700">
                {text}
            </span>
        </div>
    );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="group rounded-xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#a71320]/30 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgb(167_19_32_/_8%)] text-[#a71320] transition group-hover:bg-[#a71320] group-hover:text-white">
                {icon}
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
                {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
            </p>
        </div>
    );
}

/* =========================================================
   PROCESS STEP
========================================================= */

function ProcessStep({
    number,
    title,
    description,
}: {
    number: string;
    title: string;
    description: string;
}) {
    return (
        <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-[#a71320]/30 hover:shadow-md">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#a71320] text-sm font-bold text-white">
                {number}
            </div>

            <div>
                <h3 className="text-base font-bold text-slate-900">
                    {title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                    {description}
                </p>
            </div>
        </div>
    );
}

/* =========================================================
   STAT
========================================================= */

function Stat({
    value,
    label,
}: {
    value: string;
    label: string;
}) {
    return (
        <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-center">
            <p className="text-2xl font-bold text-white sm:text-3xl">
                {value}
            </p>

            <p className="mt-1 text-xs leading-5 text-white/80">
                {label}
            </p>
        </div>
    );
}

/* =========================================================
   REASON
========================================================= */

function Reason({
    icon,
    title,
    text,
}: {
    icon: React.ReactNode;
    title: string;
    text: string;
}) {
    return (
        <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[rgb(167_19_32_/_8%)] text-[#a71320]">
                {icon}
            </div>

            <div>
                <h3 className="font-bold text-slate-900">
                    {title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                    {text}
                </p>
            </div>
        </div>
    );
}