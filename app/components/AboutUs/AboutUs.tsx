
import BreadcrumbBanner from "@/app/components/BreadcrumbBanner";
import Image from "next/image";

const courses = [
    "MBBS",
    "MS",
    "MD",
    "BDS",
    "MDS",
    "B-Tech",
    "M-Tech",
    "BCA",
    "MCA",
    "BBM",
    "MBA",
    "Pharmacy",
    "LLB",
    "Polytechnic",
    "Nursing",
    "B.Sc.(all courses)",
    "M.Sc (all courses)",
];

const facts = [
    {
        icon: "/images/f-icons/icon1.png",
        title: "Expert Mentors",
        description:
            "Our Pragati consultancy team is having expert mentors. Who can give expert knowledge in regarding these concepts for the mentored person.",
    },
    {
        icon: "/images/f-icons/icon2.png",
        title: "3500+ Courses",
        description:
            "Our company is having a vast range of experience in this field, Our Company is avered in these many courses with the topmost colleges in the city.",
    },
    {
        icon: "/images/f-icons/icon3.png",
        title: "2500+ Colleges",
        description:
            "Our consultancy is having 15 years of experience; we are having bonding with the top colleges and universities in India. Which are having a unique reputation.",
    },
    {
        icon: "/images/f-icons/icon4.png",
        title: "Scholarship",
        description:
            "For scholarship students, we are providing the scholarship according to the category wise in consideration of State and the central government reorganizations.",
    },
    {
        icon: "/images/f-icons/icon5.png",
        title: "Grievance Center",
        description:
            "We are having multiple centers throughout India. Our one of the main Grievance center is in Bangalore. Visit there and you can get brief details.",
    },
    {
        icon: "/images/f-icons/icon6.png",
        title: "Live Support",
        description:
            "Pragati consultancy is also providing live support with live chat, customer care center number for the students and the Parents for getting details.",
    },
];

export default function AboutUs() {
    return (
        <>
            {/* =====================================================
          BREADCRUMB
      ====================================================== */}

            <BreadcrumbBanner
                title="About Us"
                description="A LITTLE BIT MORE ABOUT PRAGATI CONSULTANCY"
            />

            {/* =====================================================
          WHO WE ARE + QUOTE
      ====================================================== */}

            <section className="bg-white py-16 md:py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">

                        {/* LEFT CONTENT */}
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-[2px] w-10 bg-red-600" />

                                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
                                    Who We Are
                                </span>
                            </div>

                            <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-[42px]">
                                A LITTLE BIT MORE ABOUT{" "}
                                <span className="text-red-600">
                                    PRAGATI CONSULTANCY
                                </span>
                            </h2>

                            <p className="mt-7 text-[16px] leading-8 text-slate-600">
                                It is one of the oldest and leading ISO 9001-2008 certified
                                admission consultants in Bangalore with a presence in over 10
                                cities across India and also in Nepal. We have guided thousands
                                of aspiring students towards achieving their goals. We have
                                also proved our global presence by guiding aspiring MBBS
                                students to prominent universities in China.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-md">
                                    <p className="text-2xl font-bold text-red-600">10+</p>

                                    <p className="mt-1 text-sm text-slate-600">
                                        Cities across India
                                    </p>
                                </div>

                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-md">
                                    <p className="text-2xl font-bold text-red-600">
                                        Global Presence
                                    </p>

                                    <p className="mt-1 text-sm text-slate-600">
                                        India, Nepal & China
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT IMAGE AREA */}
                        <div className="relative">

                            {/* Decorative background */}
                            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-red-50" />
                            <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-2xl bg-red-100" />

                            {/* Main Image */}
                            <div className="relative overflow-hidden rounded-3xl">
                                <img
                                    src="/images/banner-1.jpg"
                                    alt="Pragati Consultancy"
                                    className="h-[430px] w-full object-cover transition-transform duration-700 hover:scale-105"
                                />

                                {/* Image overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                {/* Quote */}
                                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/95 p-5 shadow-xl backdrop-blur-md md:p-6">
                                    <div className="flex gap-3">
                                        <span className="text-4xl font-serif leading-none text-red-600">
                                            “
                                        </span>

                                        <div>
                                            <p className="text-sm leading-6 text-slate-700 md:text-base md:leading-7">
                                                The power of education extends beyond the development of
                                                skills we need for economic success. It can contribute to
                                                nation-building and reconciliation.
                                            </p>

                                            <div className="mt-3 flex items-center gap-3">
                                                <span className="h-[2px] w-7 bg-red-600" />

                                                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                                                    NELSON MANDELA
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Small floating image */}
                            <div className="absolute -bottom-8 -right-5 hidden w-36 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl md:block lg:-right-8">
                                <img
                                    src="/images/banner-1.jpg"
                                    alt="Education consultancy"
                                    className="h-32 w-full object-cover"
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* =====================================================
          CHOOSE YOUR COURSE AND COLLEGE
      ====================================================== */}

            <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="max-w-3xl">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-[2px] w-10 bg-red-600" />
                            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
                                CHOOSE YOUR COURSE AND COLLEGE
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                            CHOOSE YOUR COURSE AND COLLEGE
                        </h2>

                        <p className="mt-6 text-[16px] leading-8 text-slate-600">
                            Our team provide services to MBBS, MS,MD,BDS,MDS,B-Tech, M-Tech,
                            BCA, MCA, BBM, MBA, Pharmacy, LLB, Polytechnic, Nursing,
                            B.Sc.(all courses), M.Sc (all courses) and other course for
                            Under-graduate and Post-Graduate specialization.
                        </p>
                    </div>

                    {/* COURSES */}
                    <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {courses.map((course) => (
                            <div
                                key={course}
                                className="group rounded-xl border border-slate-200 bg-white px-4 py-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-600 hover:shadow-md"
                            >
                                <span className="text-sm font-semibold text-slate-700 transition-colors group-hover:text-red-600">
                                    {course}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* =====================================================
          JOURNEY
      ====================================================== */}

            <section className="bg-white py-16 md:py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mb-12 max-w-3xl">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-[2px] w-10 bg-red-600" />
                            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
                                OUR JOURNEY
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                            JOURNEY TOWARDS ACHIEVING OUR GREAT AMBITION
                        </h2>
                    </div>

                    <div className="relative grid gap-10 lg:grid-cols-[260px_1fr]">

                        {/* LEFT LABEL */}
                        <div>
                            <div className="sticky top-28 rounded-2xl bg-slate-900 p-7 text-white">
                                <span className="text-sm uppercase tracking-[0.15em] text-red-400">
                                    Our Journey
                                </span>

                                <div className="mt-4 h-[2px] w-10 bg-red-500" />

                                <p className="mt-5 text-3xl font-bold">
                                    12th
                                </p>

                                <p className="mt-1 text-sm text-slate-300">
                                    season
                                </p>
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="space-y-8">

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-9">
                                <p className="text-lg font-medium leading-8 text-slate-800">
                                    Founded on the principle of 'learning for living', we are now
                                    in our 12th season. Life in essence, is an education, and at
                                    the beginning of a new year, education must remain at the
                                    forefront of our minds.
                                </p>
                            </div>

                            <div className="space-y-6 text-[16px] leading-8 text-slate-600">

                                <p>
                                    With wide knowledge and experience of the Indian education
                                    system, we believe we are perfectly placed to provide you
                                    with exactly the right service and assistance. Our selections
                                    of Universities and colleges have been carefully selected to
                                    provide the right balance of options for you.
                                </p>

                                <p>
                                    Our educational partners provide us with a diverse range of
                                    locations, courses and prices to suit all needs and budgets.
                                    We have also taken time to ensure that each of our educational
                                    partners has the right facilities, the right reputation to go
                                    with them and the right progressive attitudes, that ensure
                                    that all our clients are given the type of support and
                                    assistance they require.
                                </p>

                                <p>
                                    We are also able to offer a carefully developed assistance and
                                    counseling, throughout the country, which is open to all our
                                    clients. With a network of counselors located at various
                                    parts, we can provide in city/ location counseling, which
                                    ensure that all our clients are given exactly the right
                                    introduction to India's education system and its Universities.
                                </p>

                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* =====================================================
          UNBOX YOUR THOUGHTS
      ====================================================== */}

            <section className="bg-red-600 py-16 md:py-20 lg:py-24">
                <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-3xl text-white">
                        “
                    </div>

                    <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">
                        UNBOX YOUR THOUGHTS
                    </h2>

                    <p className="mt-7 text-[16px] leading-8 text-white/90 md:text-lg">
                        Everyone has a right to choice what they actually want. Your great
                        thoughts makes you smarter, puts you in controls, and gives you
                        information what you need. Start your journey with Pragati
                        Consultancy, the leading, intelligent and top education consultants
                        in Bangalore to find your favourite courses and colleges and get
                        free consultant that actually makes you happy.
                    </p>

                </div>
            </section>

            {/* =====================================================
          FINAL QUOTES
      ====================================================== */}

            <section className="bg-white py-14 md:py-18">
                <div className="mx-auto max-w-5xl px-6 lg:px-8">

                    <div className="grid gap-5 md:grid-cols-2">

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                            <p className="text-lg font-semibold leading-8 text-slate-800">
                                " We look forward to welcoming you to the world of Pragati
                                Consultancy Services. "
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                            <p className="text-lg font-semibold leading-8 text-slate-800">
                                " We would be happy to render our services to you. Please do
                                call us for any further queries and feel free to visit us. "
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* =====================================================
          FACTS THAT MAKE US UNIQUE
      ====================================================== */}

            <section className="bg-slate-50 py-20">
                <div className="mx-auto max-w-7xl px-6">

                    {/* Heading */}
                    <div className="mb-14 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                            Facts that Make us Unique
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-red-600" />
                    </div>

                    {/* Facts Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        {/* Expert Mentors */}
                        <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="h-8 w-8"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>

                            <h3 className="mb-3 text-xl font-bold text-slate-900">
                                Expert Mentors
                            </h3>

                            <p className="leading-7 text-slate-600">
                                Our Pragati consultancy team is having expert mentors. Who can give
                                expert knowledge in regarding these concepts for the mentored person.
                            </p>
                        </div>

                        {/* 3500+ Courses */}
                        <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="h-8 w-8"
                                >
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
                                    <path d="M8 6h8" />
                                    <path d="M8 10h8" />
                                </svg>
                            </div>

                            <h3 className="mb-3 text-xl font-bold text-slate-900">
                                3500+ Courses
                            </h3>

                            <p className="leading-7 text-slate-600">
                                Our company is having a vast range of experience in this field, Our
                                Company is avered in these many courses with the topmost colleges in
                                the city.
                            </p>
                        </div>

                        {/* 2500+ Colleges */}
                        <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="h-8 w-8"
                                >
                                    <path d="M3 21h18" />
                                    <path d="M5 21V9l7-5 7 5v12" />
                                    <path d="M9 21v-8h6v8" />
                                    <path d="M8 10h.01" />
                                    <path d="M12 10h.01" />
                                    <path d="M16 10h.01" />
                                </svg>
                            </div>

                            <h3 className="mb-3 text-xl font-bold text-slate-900">
                                2500+ Colleges
                            </h3>

                            <p className="leading-7 text-slate-600">
                                Our consultancy is having 15 years of experience; we are having
                                bonding with the top colleges and universities in India. Which are
                                having a unique reputation.
                            </p>
                        </div>

                        {/* Scholarship */}
                        <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="h-8 w-8"
                                >
                                    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
                                    <path d="m5 11 7 4 7-4" />
                                    <path d="M5 16v3l7 3 7-3v-3" />
                                    <path d="M21 8v6" />
                                </svg>
                            </div>

                            <h3 className="mb-3 text-xl font-bold text-slate-900">
                                Scholarship
                            </h3>

                            <p className="leading-7 text-slate-600">
                                For scholarship students, we are providing the scholarship according
                                to the category wise in consideration of State and the central
                                government reorganizations.
                            </p>
                        </div>

                        {/* Grievance Center */}
                        <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="h-8 w-8"
                                >
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M12 8v4" />
                                    <path d="M12 16h.01" />
                                </svg>
                            </div>

                            <h3 className="mb-3 text-xl font-bold text-slate-900">
                                Grievance Center
                            </h3>

                            <p className="leading-7 text-slate-600">
                                We are having multiple centers throughout India. Our one of the main
                                Grievance center is in Bangalore. Visit there and you can get brief
                                details.
                            </p>
                        </div>

                        {/* Live Support */}
                        <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="h-8 w-8"
                                >
                                    <path d="M21 11.5a8.38 8.38 0 0 1-9 8.5 8.6 8.6 0 0 1-4.1-1L3 21l1.5-4.5A8.5 8.5 0 1 1 21 11.5Z" />
                                    <path d="M8 12h.01" />
                                    <path d="M12 12h.01" />
                                    <path d="M16 12h.01" />
                                </svg>
                            </div>

                            <h3 className="mb-3 text-xl font-bold text-slate-900">
                                Live Support
                            </h3>

                            <p className="leading-7 text-slate-600">
                                Pragati consultancy is also providing live support with live chat,
                                customer care center number for the students and the Parents for
                                getting details.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
