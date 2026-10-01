
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

import BreadcrumbBanner from "@/app/components/BreadcrumbBanner";

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

            <section className="bg-white py-16 md:py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">

                        {/* LEFT CONTENT */}

                        <div>
                            <h2 className="w-full text-3xl font-bold leading-tight text-[#2E3281] sm:text-4xl md:text-5xl">
                                Guiding Students Towards the{" "}
                                <span>
                                    Right Career Path
                                </span>
                            </h2>

                            <p className="mt-7 text-[16px] leading-8 text-slate-600">
                                Pragati Consultancy Services has launched a unique career
                                counseling program to help you make a wise career decision.
                                This program is aimed at guiding the students towards a
                                career path that best suits their interests, aptitude and
                                capability.
                            </p>

                            <p className="mt-4 text-[16px] leading-8 text-slate-600">
                                Pragati Consultancy Services attempts to address this
                                crucial issue of career selection and development procedures
                                by designing a systematic and step-by-step process of career
                                development.
                            </p>

                            <p className="mt-4 text-[16px] leading-8 text-slate-600">
                                It is one of the oldest and leading ISO 9001-2008 certified
                                Educational consultancy in Bangalore with presence in over
                                10 cities across India and also in Nepal. We have guided
                                thousands of aspiring students towards achieving their goals.
                            </p>

                            <p className="mt-4 text-[16px] leading-8 text-slate-600">
                                We have also proved our global presence by guiding aspiring
                                MBBS students to prominent universities in China.
                            </p>

                            {/* FEATURES */}

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                <Feature text="Career Counselling" />
                                <Feature text="Course Selection Guidance" />
                                <Feature text="College Selection" />
                                <Feature text="Admission Assistance" />
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}

                        <div className="relative">
                            {/* Decorative Background */}

                            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-red-50" />

                            <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-2xl bg-red-100" />

                            {/* Main Image */}

                            <div className="relative overflow-hidden rounded-3xl">
                                <Image
                                    src="/images/banner-1.jpg"
                                    alt="Educational Services"
                                    width={900}
                                    height={600}
                                    className="h-[430px] w-full object-cover transition-transform duration-700 hover:scale-105"
                                />

                                {/* Overlay */}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                {/* Quote */}

                                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/95 p-5 shadow-xl backdrop-blur-md md:p-6">
                                    <div className="flex gap-3">
                                        <span className="text-4xl font-serif leading-none">
                                            “
                                        </span>

                                        <div>
                                            <p className="text-sm leading-6 text-slate-700 md:text-base md:leading-7">
                                                The power of education extends beyond the
                                                development of skills we need for economic
                                                success. It can contribute to nation-building
                                                and reconciliation.
                                            </p>

                                            <div className="mt-3 flex items-center gap-3">
                                                <span className="h-[2px] w-7 bg-[#a71320]" />

                                                <span className="text-xs font-bold tracking-wider text-slate-900">
                                                    Nelson Mandela
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Image */}

                            <div className="absolute -bottom-8 -right-5 hidden w-36 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl md:block lg:-right-8">
                                <Image
                                    src="/images/banner-1.jpg"
                                    alt="Education consultancy"
                                    width={300}
                                    height={200}
                                    className="h-32 w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                OUR EDUCATIONAL APPROACH
            ========================================================= */}

            <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    {/* Heading */}

                    <div className="mb-12 w-full">
                        <h2 className="w-full text-3xl font-bold leading-tight text-[#2E3281] sm:text-4xl md:text-5xl">
                            Our Educational{" "}
                            <span >
                                Approach
                            </span>
                        </h2>

                        <p className="mt-6 w-full text-[16px] leading-8 text-slate-600">
                            We provide structured guidance to help students understand
                            their options and move towards the right educational path.
                        </p>
                    </div>

                    {/* SERVICE CARDS */}

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

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

            <section className="bg-white py-16 md:py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

                        {/* LEFT CONTENT */}

                        <div>
                            <h2 className="w-full text-3xl font-bold leading-tight text-[#2E3281] sm:text-4xl md:text-5xl">
                                How We Help{" "}
                                <span >
                                    Students
                                </span>
                            </h2>

                            <p className="mt-6 text-[16px] leading-8 text-slate-600">
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

                        {/* PROCESS STEPS */}

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

            {/* =========================================================
                CTA
            ========================================================= */}

            <section className="bg-[rgb(46_52_131)] py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-3xl text-white">
                        <GraduationCap size={32} />
                    </div>

                    <h2 className="mt-6 w-full text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                        Start Your{" "}
                        <span >
                            Educational Journey
                        </span>
                    </h2>

                    <p className="mt-7 text-[16px] leading-8 text-white/90 md:text-lg">
                        Get the right guidance to choose your course, college and
                        career path. Our team is here to support students and parents
                        throughout the admission journey.
                    </p>

                    <Link
                        href="/contact-us"
                        className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#2E3281] transition hover:bg-red-50"
                    >
                        Contact Us
                        <ArrowRight size={18} />
                    </Link>

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
        <div
            className="
                group
                rounded-xl
                border
                border-slate-200
                bg-white
                p-6
                transition
                duration-300
                hover:-translate-y-1
                hover:border-[#a71320]/30
                hover:shadow-lg
            "
        >

            {/* Icon */}

            <div
                className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-lg
                    bg-[rgb(167_19_32_/_8%)]
                    text-[#a71320]
                    transition
                    group-hover:bg-[#a71320]
                    group-hover:text-white
                "
            >
                {icon}
            </div>

            {/* Title */}

            <h3 className="mt-5 text-lg font-bold text-[#2E3281]">
                {title}
            </h3>

            {/* Description */}

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
        <div
            className="
                flex
                gap-4
                rounded-xl
                border
                border-slate-200
                bg-white
                p-5
                transition
                hover:border-[#a71320]/30
                hover:shadow-md
            "
        >

            {/* Number */}

            <div
                className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#a71320]
                    text-sm
                    font-bold
                    text-white
                "
            >
                {number}
            </div>

            {/* Content */}

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
