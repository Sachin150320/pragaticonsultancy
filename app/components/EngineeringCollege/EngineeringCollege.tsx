
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  GraduationCap,
  MapPin,
  Search,
} from "lucide-react";

import BreadcrumbBanner from "@/app/components/BreadcrumbBanner";

type College = {
  id: number;
  name: string;
  location: string;
  type: string;
  description: string;
  image: string;
  logo: string;
  href: string;
};

/* =========================================================
   ALL ENGINEERING COLLEGES
   URL STRUCTURE:
   /engineering-colleges/college-slug
========================================================= */

const colleges: College[] = [
  {
    id: 1,
    name: "Acharya Institute of Technology",
    location: "Soladevanahalli, Bengaluru",
    type: "Private",
    image: "/images/Collges/1.jpg",
    logo: "/images/Collges/logo/1.png",
    href: "/engineering-colleges/acharya-institute-of-technology",
    description:
      "An established engineering institution offering undergraduate and postgraduate programs in engineering, technology and related disciplines.",
  },
  {
    id: 2,
    name: "Akash Institute of Engineering and Technology",
    location: "Devanahalli, Bengaluru Rural",
    type: "Private",
    image: "/images/Collges/2.jpg",
    logo: "/images/Collges/logo/2.png",
    href: "/engineering-colleges/akash-institute-of-engineering-and-technology",
    description:
      "An engineering institution providing technical education with undergraduate programs and industry-oriented learning opportunities.",
  },
  {
    id: 3,
    name: "AMC Engineering College",
    location: "Bannerghatta Road, Bengaluru",
    type: "Private",
    image: "/images/Collges/3.jpg",
    logo: "/images/Collges/logo/3.png",
    href: "/engineering-colleges/amc-engineering-college",
    description:
      "A Bengaluru engineering college offering undergraduate and postgraduate technical education across multiple engineering disciplines.",
  },
  {
    id: 4,
    name: "Atria Institute of Technology",
    location: "Hebbal, Bengaluru",
    type: "Private",
    image: "/images/Collges/4.jpg",
    logo: "/images/Collges/logo/4.png",
    href: "/engineering-colleges/atria-institute-of-technology",
    description:
      "A technology-focused institution in Bengaluru offering engineering programs and opportunities for academic and professional development.",
  },
  {
    id: 5,
    name: "Bangalore Technological Institute",
    location: "Chikkanayakanahalli Dinne, Bengaluru",
    type: "Private",
    image: "/images/Collges/5.jpg",
    logo: "/images/Collges/logo/5.jpg",
    href: "/engineering-colleges/bangalore-technological-institute",
    description:
      "An engineering institution offering professional technical education and undergraduate engineering programs.",
  },
  {
    id: 6,
    name: "BMS College of Engineering",
    location: "Basavanagudi, Bengaluru",
    type: "Private",
    image: "/images/Collges/6.jpg",
    logo: "/images/Collges/logo/6.png",
    href: "/engineering-colleges/bms-college-of-engineering",
    description:
      "One of Bengaluru's established engineering institutions offering undergraduate, postgraduate and research programs.",
  },
  {
    id: 7,
    name: "BMS Institute of Technology & Management",
    location: "Yelahanka, Bengaluru",
    type: "Private",
    image: "/images/Collges/7.jpg",
    logo: "/images/Collges/logo/7.png",
    href: "/engineering-colleges/bms-institute-of-technology-management",
    description:
      "An engineering and technology institution providing undergraduate and postgraduate education with a focus on technical skills.",
  },
  {
    id: 8,
    name: "Brindavan College of Engineering",
    location: "Yelahanka, Bengaluru",
    type: "Private",
    image: "/images/Collges/8.jpg",
    logo: "/images/Collges/logo/8.png",
    href: "/engineering-colleges/brindavan-college-of-engineering",
    description:
      "An engineering college offering professional degree programs and technical education in a range of engineering disciplines.",
  },
  {
    id: 9,
    name: "C.M.R. Institute of Technology",
    location: "Brookefield, Bengaluru",
    type: "Private",
    image: "/images/Collges/9.jpg",
    logo: "/images/Collges/logo/9.png",
    href: "/engineering-colleges/cmr-institute-of-technology",
    description:
      "A prominent Bengaluru engineering institution offering undergraduate and postgraduate programs in engineering and technology.",
  },
  {
    id: 10,
    name: "Cambridge Institute of Technology",
    location: "K R Puram, Bengaluru",
    type: "Private",
    image: "/images/Collges/10.jpg",
    logo: "/images/Collges/logo/10.png",
    href: "/engineering-colleges/cambridge-institute-of-technology",
    description:
      "An engineering and technology institution offering undergraduate, postgraduate and research-oriented academic programs.",
  },
  {
    id: 11,
    name: "Dayananda Sagar Academy of Technology & Management",
    location: "Kanakapura Road, Bengaluru",
    type: "Private",
    image: "/images/Collges/11.jpg",
    logo: "/images/Collges/logo/11.png",
    href: "/engineering-colleges/dayananda-sagar-academy-of-technology-management",
    description:
      "A multidisciplinary institution offering engineering, technology and management education with modern academic facilities.",
  },
  {
    id: 12,
    name: "Dayananda Sagar College of Engineering",
    location: "Kumaraswamy Layout, Bengaluru",
    type: "Private",
    image: "/images/Collges/12.jpg",
    logo: "/images/Collges/logo/12.png",
    href: "/engineering-colleges/dayananda-sagar-college-of-engineering",
    description:
      "An established engineering institution offering undergraduate and postgraduate programs across several technical disciplines.",
  },
  {
    id: 13,
    name: "DON BOSCO Institute of Technology",
    location: "Kumbalgodu, Bengaluru",
    type: "Private",
    image: "/images/Collges/13.jpg",
    logo: "/images/Collges/logo/13.png",
    href: "/engineering-colleges/don-bosco-institute-of-technology",
    description:
      "An engineering institution providing professional technical education with undergraduate and postgraduate programs.",
  },
  {
    id: 14,
    name: "Dr. Ambedkar Institute of Technology",
    location: "Malathahalli, Bengaluru",
    type: "Government Aided",
    image: "/images/Collges/14.jpg",
    logo: "/images/Collges/logo/14.png",
    href: "/engineering-colleges/dr-ambedkar-institute-of-technology",
    description:
      "A well-established technical institution in Bengaluru offering engineering education and advanced technical programs.",
  },
  {
    id: 15,
    name: "East Point College of Engineering and Technology",
    location: "Avalahalli, Bengaluru",
    type: "Private",
    image: "/images/Collges/15.jpg",
    logo: "/images/Collges/logo/15.jpg",
    href: "/engineering-colleges/east-point-college-of-engineering-and-technology",
    description:
      "An engineering institution providing undergraduate and postgraduate technical education with industry-focused learning.",
  },
  {
    id: 16,
    name: "East West Institute of Technology",
    location: "BEL Layout, Bengaluru",
    type: "Private",
    image: "/images/Collges/16.jpg",
    logo: "/images/Collges/logo/16.png",
    href: "/engineering-colleges/east-west-institute-of-technology",
    description:
      "An engineering and technology institution offering professional degree programs and technical education.",
  },
  {
    id: 17,
    name: "Global Academy of Technology",
    location: "Rajarajeshwari Nagar, Bengaluru",
    type: "Private",
    image: "/images/Collges/17.jpg",
    logo: "/images/Collges/logo/17.jpg",
    href: "/engineering-colleges/global-academy-of-technology",
    description:
      "A Bengaluru engineering institution offering undergraduate and postgraduate programs with emphasis on technical excellence.",
  },
  {
    id: 18,
    name: "SS Academy of Technical Education",
    location: "Kengeri Main Road, Bengaluru",
    type: "Private",
    image: "/images/Collges/18.jpg",
    logo: "/images/Collges/logo/18.jpg",
    href: "/engineering-colleges/ss-academy-of-technical-education",
    description:
      "A technical education institution offering engineering programs and professional learning opportunities.",
  },
  {
    id: 19,
    name: "M.S. Engineering College",
    location: "Sadahalli, Bengaluru",
    type: "Private",
    image: "/images/Collges/19.jpg",
    logo: "/images/Collges/logo/19.jpg",
    href: "/engineering-colleges/ms-engineering-college",
    description:
      "An engineering institution near Bengaluru offering undergraduate technical education across multiple disciplines.",
  },
  {
    id: 20,
    name: "M.S. Ramaiah Institute of Technology",
    location: "MSR Nagar, Bengaluru",
    type: "Private",
    image: "/images/Collges/20.jpg",
    logo: "/images/Collges/logo/20.png",
    href: "/engineering-colleges/ms-ramaiah-institute-of-technology",
    description:
      "A renowned Bengaluru engineering institution offering undergraduate, postgraduate and research programs in technology.",
  },
  {
    id: 21,
    name: "Nagarjuna College of Engineering & Technology",
    location: "Devanahalli, Bengaluru",
    type: "Private",
    image: "/images/Collges/21.jpg",
    logo: "/images/Collges/logo/21.png",
    href: "/engineering-colleges/nagarjuna-college-of-engineering-technology",
    description:
      "An engineering college located near Bengaluru offering undergraduate and postgraduate programs in engineering and technology.",
  },
  {
    id: 22,
    name: "PES University",
    location: "Bengaluru, Karnataka",
    type: "University",
    image: "/images/Collges/22.jpg",
    logo: "/images/Collges/logo/22.png",
    href: "/engineering-colleges/pes-university",
    description:
      "A leading Bengaluru university offering engineering, technology, computer science and other professional programs.",
  },
  {
    id: 23,
    name: "R.V. College of Engineering",
    location: "Mysore Road, Bengaluru",
    type: "Private",
    image: "/images/Collges/23.jpg",
    logo: "/images/Collges/logo/23.png",
    href: "/engineering-colleges/rv-college-of-engineering",
    description:
      "A highly reputed engineering institution offering undergraduate, postgraduate and research opportunities across engineering disciplines.",
  },
  {
    id: 24,
    name: "R.R. Institute of Technology",
    location: "Chikkabanavara, Bengaluru",
    type: "Private",
    image: "/images/Collges/24.jpg",
    logo: "/images/Collges/logo/24.png",
    href: "/engineering-colleges/rr-institute-of-technology",
    description:
      "An engineering institution offering undergraduate and postgraduate technical programs with practical learning opportunities.",
  },
  {
    id: 25,
    name: "Raja Rajeswari College of Engineering",
    location: "Kumbalgodu, Bengaluru",
    type: "Private",
    image: "/images/Collges/25.jpg",
    logo: "/images/Collges/logo/25.png",
    href: "/engineering-colleges/raja-rajeswari-college-of-engineering",
    description:
      "An engineering college offering professional technical education and undergraduate and postgraduate engineering programs.",
  },
  {
    id: 26,
    name: "RNS Institute of Technology",
    location: "R R Nagar, Bengaluru",
    type: "Private",
    image: "/images/Collges/26.jpg",
    logo: "/images/Collges/logo/26.png",
    href: "/engineering-colleges/rns-institute-of-technology",
    description:
      "A well-known engineering institution offering undergraduate, postgraduate and research programs in engineering and technology.",
  },
  {
    id: 27,
    name: "SJB Institute of Technology",
    location: "Kengeri, Bengaluru",
    type: "Private",
    image: "/images/Collges/27.jpg",
    logo: "/images/Collges/logo/27.png",
    href: "/engineering-colleges/sjb-institute-of-technology",
    description:
      "An engineering and technology institution offering undergraduate and postgraduate professional programs.",
  },
  {
    id: 28,
    name: "S.E.A. College of Engineering & Technology",
    location: "K R Puram, Bengaluru",
    type: "Private",
    image: "/images/Collges/28.jpg",
    logo: "/images/Collges/logo/28.jpg",
    href: "/engineering-colleges/sea-college-of-engineering-technology",
    description:
      "An engineering college offering professional degree programs and technical education in several engineering disciplines.",
  },
  {
    id: 29,
    name: "Sambhram Institute of Technology",
    location: "Jalahalli East, Bengaluru",
    type: "Private",
    image: "/images/Collges/29.jpg",
    logo: "/images/Collges/logo/29.png",
    href: "/engineering-colleges/sambhram-institute-of-technology",
    description:
      "An engineering and technology institution providing professional education and technical learning opportunities.",
  },
  {
    id: 30,
    name: "SAPTHAGIRI NPS UNIVERSITY",
    location: "Hesaraghatta Main Road, Bengaluru",
    type: "University",
    image: "/images/Collges/30.jpg",
    logo: "/images/Collges/logo/30.png",
    href: "/engineering-colleges/sapthagiri-nps-university",
    description:
      "A Bengaluru university offering professional and technical education with programs across engineering and other disciplines.",
  },
  {
    id: 31,
    name: "Sir M. Visvesvaraya Institute of Technology",
    location: "Yelahanka, Bengaluru",
    type: "Private",
    image: "/images/Collges/31.jpg",
    logo: "/images/Collges/logo/31.jpg",
    href: "/engineering-colleges/sir-m-visvesvaraya-institute-of-technology",
    description:
      "A respected engineering institution offering undergraduate and postgraduate technical programs in Bengaluru.",
  },
  {
    id: 32,
    name: "Sri Krishna Institute of Technology",
    location: "Chikkabanavara, Bengaluru",
    type: "Private",
    image: "/images/Collges/32.jpg",
    logo: "/images/Collges/logo/32.jpg",
    href: "/engineering-colleges/sri-krishna-institute-of-technology",
    description:
      "An engineering institution offering undergraduate technical programs with practical and industry-oriented learning.",
  },
  {
    id: 33,
    name: "Sri Venkateshwara College of Engineering",
    location: "KIAL Road, Bengaluru",
    type: "Private",
    image: "/images/Collges/33.jpg",
    logo: "/images/Collges/logo/33.png",
    href: "/engineering-colleges/sri-venkateshwara-college-of-engineering",
    description:
      "An engineering institution near Bengaluru offering undergraduate and postgraduate education in engineering and technology.",
  },
  {
    id: 34,
    name: "T. John Institute of Technology",
    location: "Bannerghatta Road, Bengaluru",
    type: "Private",
    image: "/images/Collges/34.jpg",
    logo: "/images/Collges/logo/34.png",
    href: "/engineering-colleges/t-john-institute-of-technology",
    description:
      "An engineering college offering professional undergraduate programs with an emphasis on technical and practical education.",
  },
  {
    id: 35,
    name: "Cambridge Institute of Technology (North Campus)",
    location: "Kundana, Bengaluru",
    type: "Private",
    image: "/images/Collges/35.jpg",
    logo: "/images/Collges/logo/35.png",
    href: "/engineering-colleges/cambridge-institute-of-technology-north-campus",
    description:
      "The North Campus of Cambridge Institute of Technology offering professional engineering and technology education.",
  },
  {
    id: 36,
    name: "Reva University",
    location: "Yelahanka, Bengaluru",
    type: "University",
    image: "/images/Collges/36.jpg",
    logo: "/images/Collges/logo/36.png",
    href: "/engineering-colleges/reva-university",
    description:
      "A multidisciplinary university in Bengaluru offering engineering, technology and other professional higher education programs.",
  },
  {
    id: 37,
    name: "Alliance College of Engineering & Design, Alliance University",
    location: "Anekal, Bengaluru",
    type: "University",
    image: "/images/Collges/37.jpg",
    logo: "/images/Collges/logo/37.png",
    href: "/engineering-colleges/alliance-college-of-engineering-design",
    description:
      "A university-based engineering and design institution offering technology-focused professional education.",
  },
  {
    id: 38,
    name: "GITAM (Deemed to be University)",
    location: "Doddaballapur Taluk, Bengaluru",
    type: "University",
    image: "/images/Collges/38.jpg",
    logo: "/images/Collges/logo/38.png",
    href: "/engineering-colleges/gitam-deemed-to-be-university",
    description:
      "A deemed-to-be university offering engineering, technology and professional higher education programs.",
  },
  {
    id: 39,
    name: "Presidency University",
    location: "Yelahanka, Bengaluru",
    type: "University",
    image: "/images/Collges/39.jpg",
    logo: "/images/Collges/logo/39.jpg",
    href: "/engineering-colleges/presidency-university",
    description:
      "A multidisciplinary university in Bengaluru offering engineering, technology and professional academic programs.",
  },
  {
    id: 40,
    name: "CMR University",
    location: "Bagalur Chagalatti, Bengaluru",
    type: "University",
    image: "/images/Collges/40.jpg",
    logo: "/images/Collges/logo/40.jpg",
    href: "/engineering-colleges/cmr-university",
    description:
      "A Bengaluru-based multidisciplinary university offering engineering, technology and professional degree programs.",
  },
  {
    id: 41,
    name: "M.S. Ramaiah University of Applied Sciences",
    location: "MSR Nagar, Bengaluru",
    type: "University",
    image: "/images/Collges/41.jpg",
    logo: "/images/Collges/logo/41.jpg",
    href: "/engineering-colleges/ms-ramaiah-university-of-applied-sciences",
    description:
      "A university focused on applied sciences, engineering, technology and industry-oriented professional education.",
  },
  {
    id: 42,
    name: "R V Institute of Technology and Management",
    location: "J P Nagar, Bengaluru",
    type: "Private",
    image: "/images/Collges/42.jpg",
    logo: "/images/Collges/logo/42.png",
    href: "/engineering-colleges/rv-institute-of-technology-and-management",
    description:
      "An engineering and technology institution offering professional undergraduate and postgraduate programs in Bengaluru.",
  },
  {
    id: 43,
    name: "Amruta Institute of Engineering and Management Science",
    location: "Bidadi, Ramnagar Taluk, Bengaluru Rural",
    type: "Private",
    image: "/images/Collges/43.jpg",
    logo: "/images/Collges/logo/43.png",
    href: "/engineering-colleges/amruta-institute-of-engineering-and-management-science",
    description:
      "An engineering and management education institution offering professional programs in technical and management disciplines.",
  },
  {
    id: 44,
    name: "BGS College of Engineering and Technology",
    location: "Mahalaxmipuram, Bengaluru",
    type: "Private",
    image: "/images/Collges/44.jpg",
    logo: "/images/Collges/logo/44.jpg",
    href: "/engineering-colleges/bgs-college-of-engineering-and-technology",
    description:
      "An engineering and technology institution offering undergraduate and postgraduate programs with modern academic facilities.",
  },
  {
    id: 45,
    name: "Harsha Institute of Technology",
    location: "Nelamangala Taluk, Bengaluru Rural",
    type: "Private",
    image: "/images/Collges/45.jpg",
    logo: "/images/Collges/logo/45.png",
    href: "/engineering-colleges/harsha-institute-of-technology",
    description:
      "An engineering institution in the Bengaluru region providing professional technical education and career-focused learning.",
  },
  {
    id: 46,
    name: "Ramaiah University College of Engineering",
    location: "Jigani, Bengaluru",
    type: "University",
    image: "/images/Collges/46.jpg",
    logo: "/images/Collges/logo/46.jpg",
    href: "/engineering-colleges/ramaiah-university-college-of-engineering",
    description:
      "A university engineering college offering applied engineering and technology education with industry-oriented programs.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function EngineeringCollegesPage() {
  const [search, setSearch] = useState("");

  const filteredColleges = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return colleges;
    }

    return colleges.filter(
      (college) =>
        college.name.toLowerCase().includes(value) ||
        college.location.toLowerCase().includes(value) ||
        college.type.toLowerCase().includes(value)
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-white">

      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <BreadcrumbBanner
        title="Top Engineering Colleges In Bangalore"
        description="Explore engineering colleges, courses and admission opportunities"
      />

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="bg-[#f8f9fc] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="w-full text-center">

            <span className="inline-flex items-center gap-2 rounded-full bg-[#2E3281]/10 px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] text-[#2E3281]">
              <Cpu size={16} />
              Engineering Admissions
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-[#2E3281] sm:text-4xl md:text-5xl">
              Find The Right Engineering College
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-7 text-slate-600">
              Explore engineering colleges and universities across Bengaluru.
              Find the right institution based on your preferred course,
              location and admission requirements.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          COLLEGE FINDER
      ===================================================== */}

      <section className="bg-white py-14 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* SEARCH HEADER */}

          <div className="mb-8 rounded-2xl border border-slate-200 bg-[#f8f9fc] p-5 sm:p-6">

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#a71320]">
                  Engineering Colleges
                </p>

                <h2 className="mt-1 text-2xl font-bold text-[#2E3281] sm:text-3xl">
                  Explore Engineering Colleges
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Browse colleges and explore admission opportunities.
                </p>

              </div>

              {/* SEARCH */}

              <div className="relative w-full lg:max-w-sm">

                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search college or location..."
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#2E3281] focus:ring-2 focus:ring-[#2E3281]/10"
                />

              </div>

            </div>

          </div>

          {/* RESULT COUNT */}

          <div className="mb-6 flex min-h-[24px] items-center justify-between">

            <p className="text-sm font-medium text-slate-500">
              {filteredColleges.length}{" "}
              {filteredColleges.length === 1 ? "college" : "colleges"} found
            </p>

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="text-sm font-semibold text-[#a71320] transition hover:text-[#2E3281]"
              >
                Clear Search
              </button>
            )}

          </div>

          {/* =================================================
              COLLEGE CARDS
          ================================================= */}

          {filteredColleges.length > 0 ? (

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {filteredColleges.map((college) => (

                <article
                  key={college.id}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2E3281]/30 hover:shadow-xl"
                >

                  {/* COLLEGE IMAGE */}

                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">

                    <img
                      src={college.image}
                      alt={`${college.name} campus`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                    {/* TYPE */}

                    <span
                      className={`absolute right-3 top-3 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide backdrop-blur-sm ${
                        college.type === "Government" ||
                        college.type === "Government Aided"
                          ? "bg-[#2E3281]/90 text-white"
                          : "bg-[#a71320]/90 text-white"
                      }`}
                    >
                      {college.type}
                    </span>

                  </div>

                  {/* CARD CONTENT */}

                  <div className="relative flex flex-1 flex-col p-5">

                    {/* LOGO */}

                    <div className="relative -mt-11 mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border-4 border-white bg-white shadow-md">

                      <img
                        src={college.logo}
                        alt={`${college.name} logo`}
                        className="h-11 w-11 object-contain"
                        loading="lazy"
                      />

                    </div>

                    {/* NAME */}

                    <h3 className="text-lg font-bold leading-6 text-[#2E3281] transition-colors duration-300 group-hover:text-[#a71320]">
                      {college.name}
                    </h3>

                    {/* LOCATION */}

                    <div className="mt-3 flex items-start gap-2 text-sm text-slate-500">

                      <MapPin
                        size={16}
                        className="mt-0.5 shrink-0 text-[#a71320]"
                      />

                      <span>{college.location}</span>

                    </div>

                    {/* DESCRIPTION */}

                    <p className="mt-4 line-clamp-3 flex-1 text-sm leading-6 text-slate-600">
                      {college.description}
                    </p>

                    {/* BUTTONS */}

                    <div className="mt-6 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">

                      {/* INTERNAL NEXT.JS LINK */}

                      <Link
                        href={college.href}
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#2E3281] px-3 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-[#a71320]"
                      >
                        View Details

                        <ArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>

                      {/* ENQUIRY */}

                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#a71320] bg-[#a71320]/5 px-3 py-2.5 text-xs font-bold text-[#a71320] transition-all duration-300 hover:bg-[#a71320] hover:text-white"
                      >
                        Enquiry
                        <GraduationCap size={14} />
                      </Link>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            /* =================================================
               NO RESULTS
            ================================================= */

            <div className="rounded-2xl border border-dashed border-slate-300 bg-[#f8f9fc] px-6 py-16 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2E3281]/10 text-[#2E3281]">
                <Search size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#2E3281]">
                No Colleges Found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                We could not find a college matching your search.
              </p>

              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-5 rounded-lg bg-[#2E3281] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#a71320]"
              >
                Clear Search
              </button>

            </div>

          )}

        </div>

      </section>

      {/* =====================================================
          ENGINEERING COLLEGES CONTENT
      ===================================================== */}

      <section className="bg-[#f8f9fc] py-14 sm:py-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="w-full text-center">

            <h2 className="text-2xl font-bold text-[#2E3281] sm:text-3xl">
              Engineering Colleges
            </h2>

            <p className="mx-auto mt-5 w-full text-[16px] leading-7 text-slate-600">
              Engineering students design and develop applications or the
              structures of machines or other inventions controlled by humans.
              Engineering is a responsible course with huge demand and many
              specialised branches. For direct admission in top engineering
              colleges, contact Pragati Consultancy. Our admission consultants
              in Bangalore can help students choose suitable colleges,
              courses and admission pathways for building their careers.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-[#f8f9fc] py-14 sm:py-16">

        <div className="mx-auto max-w-5xl px-4 sm:px-6">

          <div className="relative overflow-hidden rounded-3xl bg-[#2E3281] px-6 py-12 text-center sm:px-10">

            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/5" />

            <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-white/5" />

            <div className="relative">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
                <Cpu size={28} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                Need Help Choosing Your Engineering College?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                Get personalised guidance on engineering courses, college
                options, counselling and admission procedures.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#2E3281] transition-all hover:bg-[#a71320] hover:text-white"
              >
                Get Admission Guidance
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
