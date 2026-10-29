"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  GraduationCap,
  MapPin,
  Search,
} from "lucide-react";

import BreadcrumbBanner from "@/app/components/BreadcrumbBanner";

type College = {
  id: number;
  name: string;
  slug: string;
  location: string;
  type: string;
  course: string;
  description: string;
  image: string;
  logo: string;
};

const colleges: College[] = [
  {
    id: 1,
    name: "Ramaiah Institute of Nursing Education and Research (RINER)",
    slug: "ramaiah-institute-of-nursing-education-and-research",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A nursing education institution offering nursing studies and professional healthcare learning opportunities.",
    image: "/images/nursing-colleges/1.webp",
    logo: "/images/nursing-colleges/logo/1.webp",
  },
  {
    id: 2,
    name: "RV College of Nursing",
    slug: "rv-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A nursing college focused on nursing education, clinical learning and healthcare professional development.",
    image: "/images/nursing-colleges/2.webp",
    logo: "/images/nursing-colleges/logo/2.webp",
  },
  {
    id: 3,
    name: "Dr. B R Ambedkar Institute of Nursing",
    slug: "dr-br-ambedkar-institute-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing / GNM",
    description:
      "An institution offering nursing education and foundational preparation for professional healthcare careers.",
    image: "/images/nursing-colleges/3.webp",
    logo: "/images/nursing-colleges/logo/3.webp",
  },
  {
    id: 4,
    name: "Karnataka College of Nursing",
    slug: "karnataka-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing / GNM",
    description:
      "A nursing college providing nursing education and practical preparation for healthcare services.",
    image: "/images/nursing-colleges/4.webp",
    logo: "/images/nursing-colleges/logo/4.webp",
  },
  {
    id: 5,
    name: "PES University (PESU)",
    slug: "pes-university",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing / B.Pharmacy",
    description:
      "A Bengaluru-based university offering professional education across selected academic and technical disciplines.",
    image: "/images/nursing-colleges/5.webp",
    logo: "/images/nursing-colleges/logo/5.webp",
  },
  {
    id: 6,
    name: "East West College of Nursing (EWCN)",
    slug: "east-west-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing / GNM",
    description:
      "A nursing education college focused on academic study and clinical preparation for nursing careers.",
    image: "/images/nursing-colleges/6.webp",
    logo: "/images/nursing-colleges/logo/6.webp",
  },
  {
    id: 7,
    name: "The Oxford College of Nursing",
    slug: "the-oxford-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A nursing college providing healthcare education and practical learning in nursing and patient care.",
    image: "/images/nursing-colleges/7.webp",
    logo: "/images/nursing-colleges/logo/7.webp",
  },
  {
    id: 8,
    name: "Sapthagiri Institute of Medical Sciences and Research Centre (SIMSRC)",
    slug: "sapthagiri-institute-of-medical-sciences",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing / GNM",
    description:
      "A medical and healthcare institution associated with professional education and clinical learning.",
    image: "/images/nursing-colleges/8.webp",
    logo: "/images/nursing-colleges/logo/8.webp",
  },
  {
    id: 9,
    name: "Rajarajeswari Medical College and Hospital (RRMCH)",
    slug: "rajarajeswari-medical-college-and-hospital",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A medical education and hospital institution supporting healthcare education and clinical exposure.",
    image: "/images/nursing-colleges/9.webp",
    logo: "/images/nursing-colleges/logo/9.webp",
  },
  {
    id: 10,
    name: "VIMS Bangalore",
    slug: "vims-bangalore",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A healthcare education institution offering learning opportunities in medical and allied healthcare fields.",
    image: "/images/nursing-colleges/10.webp",
    logo: "/images/nursing-colleges/logo/10.webp",
  },
  {
    id: 11,
    name: "MVM Group of Institutions",
    slug: "mvm-group-of-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing / GNM / B.Pharmacy",
    description:
      "A group of educational institutions offering professional courses in healthcare and related disciplines.",
    image: "/images/nursing-colleges/11.webp",
    logo: "/images/nursing-colleges/logo/11.webp",
  },
  {
    id: 12,
    name: "Aakash Group of Institutions",
    slug: "aakash-group-of-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing / B.Pharmacy",
    description:
      "An educational group offering professional and healthcare-related study opportunities.",
    image: "/images/nursing-colleges/12.webp",
    logo: "/images/nursing-colleges/logo/12.webp",
  },
  {
    id: 13,
    name: "RR College of Nursing",
    slug: "rr-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A nursing college focused on professional nursing education and healthcare skills development.",
    image: "/images/nursing-colleges/13.webp",
    logo: "/images/nursing-colleges/logo/13.webp",
  },
  {
    id: 14,
    name: "Manjunatha College of Nursing",
    slug: "manjunatha-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A nursing education institution providing academic instruction and practical healthcare learning.",
    image: "/images/nursing-colleges/14.webp",
    logo: "/images/nursing-colleges/logo/14.webp",
  },
  {
    id: 15,
    name: "Harsha Institutions",
    slug: "harsha-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing / B.Pharmacy",
    description:
      "An educational institution group offering professional courses, including healthcare-related programs.",
    image: "/images/nursing-colleges/15.webp",
    logo: "/images/nursing-colleges/logo/15.webp",
  },
  {
    id: 16,
    name: "VYMAK Group of Institutions",
    slug: "vymak-group-of-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "An educational group offering professional education and training in selected disciplines.",
    image: "/images/nursing-colleges/16.webp",
    logo: "/images/nursing-colleges/logo/16.webp",
  },
  {
    id: 17,
    name: "Sapthagiri NPS University",
    slug: "sapthagiri-nps-university",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A higher education institution offering academic programs and professional learning opportunities.",
    image: "/images/nursing-colleges/17.webp",
    logo: "/images/nursing-colleges/logo/17.webp",
  },
  {
    id: 18,
    name: "East Point Group of Institutions (EPGI)",
    slug: "east-point-group-of-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing / B.Pharmacy",
    description:
      "An educational group offering professional and healthcare-related programs in Bengaluru.",
    image: "/images/nursing-colleges/18.webp",
    logo: "/images/nursing-colleges/logo/18.webp",
  },
  {
    id: 19,
    name: "Acharya Institute of Health Sciences (AIHS)",
    slug: "acharya-institute-of-health-sciences",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "An institution focused on healthcare education and preparation for professional healthcare careers.",
    image: "/images/nursing-colleges/19.webp",
    logo: "/images/nursing-colleges/logo/19.webp",
  },
  {
    id: 20,
    name: "Smt. Nagarathnamma College of Nursing (SNCN)",
    slug: "smt-nagarathnamma-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A nursing college providing academic education and clinical preparation for nursing students.",
    image: "/images/nursing-colleges/20.webp",
    logo: "/images/nursing-colleges/logo/20.webp",
  },
  {
    id: 21,
    name: "MVJ College of Nursing (MVJCON)",
    slug: "mvj-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A nursing college offering professional education and practical preparation for healthcare careers.",
    image: "/images/nursing-colleges/21.webp",
    logo: "/images/nursing-colleges/logo/21.webp",
  },
  {
    id: 22,
    name: "Krupanidhi College of Nursing (KCON)",
    slug: "krupanidhi-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing / GNM",
    description:
      "A nursing education institution offering professional learning in nursing and patient care.",
    image: "/images/nursing-colleges/22.webp",
    logo: "/images/nursing-colleges/logo/22.webp",
  },
  {
    id: 23,
    name: "Vydehi Institute of Nursing Sciences and Research Centre",
    slug: "vydehi-institute-of-nursing-sciences",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A healthcare education institution offering nursing studies and clinical learning opportunities.",
    image: "/images/nursing-colleges/23.webp",
    logo: "/images/nursing-colleges/logo/23.webp",
  },
  {
    id: 24,
    name: "SJB College of Nursing",
    slug: "sjb-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A nursing college providing academic and practical education for aspiring healthcare professionals.",
    image: "/images/nursing-colleges/24.webp",
    logo: "/images/nursing-colleges/logo/24.webp",
  },
  {
    id: 25,
    name: "Sri Lakshmi College of Nursing",
    slug: "sri-lakshmi-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A nursing college focused on nursing education and professional healthcare development.",
    image: "/images/nursing-colleges/25.webp",
    logo: "/images/nursing-colleges/logo/25.webp",
  },
  {
    id: 26,
    name: "Spurthy College of Nursing",
    slug: "spurthy-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "An institution offering nursing education and professional preparation in healthcare services.",
    image: "/images/nursing-colleges/26.webp",
    logo: "/images/nursing-colleges/logo/26.webp",
  },
  {
    id: 27,
    name: "Little Flower Group of Institutions",
    slug: "little-flower-group-of-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "An educational group offering professional learning opportunities, including healthcare-related education.",
    image: "/images/nursing-colleges/27.webp",
    logo: "/images/nursing-colleges/logo/27.webp",
  },
  {
    id: 28,
    name: "M.S. Ramaiah University of Applied Sciences (MSRUAS)",
    slug: "ms-ramaiah-university-of-applied-sciences",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "GNM / B.Pharmacy",
    description:
      "A university offering professional education across applied sciences and selected healthcare disciplines.",
    image: "/images/nursing-colleges/28.webp",
    logo: "/images/nursing-colleges/logo/28.webp",
  },
  {
    id: 29,
    name: "Padmashree Group of Institutions",
    slug: "padmashree-group-of-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "GNM",
    description:
      "An educational group offering professional courses and learning opportunities in selected disciplines.",
    image: "/images/nursing-colleges/29.webp",
    logo: "/images/nursing-colleges/logo/29.webp",
  },
  {
    id: 30,
    name: "Goutham College",
    slug: "goutham-college",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "GNM",
    description:
      "An educational institution offering professional learning opportunities in healthcare-related fields.",
    image: "/images/nursing-colleges/30.webp",
    logo: "/images/nursing-colleges/logo/30.webp",
  },
  {
    id: 31,
    name: "Krupanidhi Group of Institutions",
    slug: "krupanidhi-group-of-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "GNM",
    description:
      "An educational group offering professional programs and academic learning opportunities.",
    image: "/images/nursing-colleges/31.webp",
    logo: "/images/nursing-colleges/logo/31.webp",
  },
  {
    id: 32,
    name: "SB Group of Institutions",
    slug: "sb-group-of-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "GNM",
    description:
      "An educational institution group offering professional education and career-focused programs.",
    image: "/images/nursing-colleges/32.webp",
    logo: "/images/nursing-colleges/logo/32.webp",
  },
  {
    id: 33,
    name: "Acharya & BM Reddy College of Pharmacy (ABMRCP)",
    slug: "acharya-bm-reddy-college-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A pharmacy college focused on pharmaceutical education, laboratory learning and professional development.",
    image: "/images/nursing-colleges/33.webp",
    logo: "/images/nursing-colleges/logo/33.webp",
  },
  {
    id: 34,
    name: "Dayananda Sagar University (DSU)",
    slug: "dayananda-sagar-university",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A university offering higher education and professional learning across selected academic disciplines.",
    image: "/images/nursing-colleges/34.webp",
    logo: "/images/nursing-colleges/logo/34.webp",
  },
  {
    id: 35,
    name: "The Oxford College of Pharmacy",
    slug: "the-oxford-college-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A pharmacy institution offering pharmaceutical education and professional learning in drug sciences.",
    image: "/images/nursing-colleges/35.webp",
    logo: "/images/nursing-colleges/logo/35.webp",
  },
  {
    id: 36,
    name: "T. John College of Pharmacy",
    slug: "t-john-college-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A pharmacy college providing academic and practical learning in pharmaceutical sciences.",
    image: "/images/nursing-colleges/36.webp",
    logo: "/images/nursing-colleges/logo/36.webp",
  },
  {
    id: 37,
    name: "Aditya Group of Institutions",
    slug: "aditya-group-of-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "An educational group offering professional education in selected academic and career-focused fields.",
    image: "/images/nursing-colleges/37.webp",
    logo: "/images/nursing-colleges/logo/37.webp",
  },
  {
    id: 38,
    name: "RR College of Pharmacy (RRCP)",
    slug: "rr-college-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A pharmacy college offering pharmaceutical studies and practical learning opportunities.",
    image: "/images/nursing-colleges/38.webp",
    logo: "/images/nursing-colleges/logo/38.webp",
  },
  {
    id: 39,
    name: "Oxbridge Group of Institutions",
    slug: "oxbridge-group-of-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "An educational group offering professional courses and career-oriented learning opportunities.",
    image: "/images/nursing-colleges/39.webp",
    logo: "/images/nursing-colleges/logo/39.webp",
  },
  {
    id: 40,
    name: "Vivekananda College of Pharmacy (VCP)",
    slug: "vivekananda-college-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A pharmacy college focused on pharmaceutical education and professional skill development.",
    image: "/images/nursing-colleges/40.webp",
    logo: "/images/nursing-colleges/logo/40.webp",
  },
  {
    id: 41,
    name: "Gautham College of Pharmacy (GCP)",
    slug: "gautham-college-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A pharmacy college offering academic education in pharmaceutical sciences and related professional areas.",
    image: "/images/nursing-colleges/41.webp",
    logo: "/images/nursing-colleges/logo/41.webp",
  },
  {
    id: 42,
    name: "Mallige College of Pharmacy",
    slug: "mallige-college-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A pharmacy institution offering pharmaceutical education and professional learning.",
    image: "/images/nursing-colleges/42.webp",
    logo: "/images/nursing-colleges/logo/42.webp",
  },
  {
    id: 43,
    name: "East West College of Pharmacy",
    slug: "east-west-college-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A pharmacy college providing academic and practical education in pharmaceutical sciences.",
    image: "/images/nursing-colleges/43.webp",
    logo: "/images/nursing-colleges/logo/43.webp",
  },
  {
    id: 44,
    name: "Vydehi Institute of Pharmacy (VIP)",
    slug: "vydehi-institute-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "An institution offering pharmacy education and professional learning in pharmaceutical sciences.",
    image: "/images/nursing-colleges/44.webp",
    logo: "/images/nursing-colleges/logo/44.webp",
  },
  {
    id: 45,
    name: "Nargund College of Pharmacy",
    slug: "nargund-college-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A pharmacy college focused on pharmaceutical education and practical professional preparation.",
    image: "/images/nursing-colleges/45.webp",
    logo: "/images/nursing-colleges/logo/45.webp",
  },
  {
    id: 46,
    name: "Spurthy College of Pharmacy (SCP)",
    slug: "spurthy-college-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A pharmacy college providing professional education in pharmaceutical sciences and related subjects.",
    image: "/images/nursing-colleges/46.webp",
    logo: "/images/nursing-colleges/logo/46.webp",
  },
];

export default function NursingCollegesPage() {
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
        college.type.toLowerCase().includes(value) ||
        college.course.toLowerCase().includes(value)
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-white">
      {/* BREADCRUMB */}
      <BreadcrumbBanner
        title="Top Nursing & Pharmacy Colleges"
        description="Explore nursing, GNM and pharmacy colleges and admission opportunities"
      />

      {/* INTRO */}
      <section className="bg-[#f8f9fc] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#2E3281]/10 px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] text-[#2E3281]">
              <GraduationCap size={16} />
              Healthcare Admissions
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-[#2E3281] sm:text-4xl md:text-5xl">
              Find The Right Nursing & Pharmacy College
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-7 text-slate-600">
              Explore colleges offering B.Sc Nursing, GNM and B.Pharmacy.
              Search for institutions based on course and location.
            </p>
          </div>
        </div>
      </section>

      {/* COLLEGE LIST */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* SEARCH */}
          <div className="mb-8 rounded-2xl border border-slate-200 bg-[#f8f9fc] p-5">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#a71320]">
                  Nursing & Pharmacy Education
                </p>

                <h2 className="mt-1 text-2xl font-bold text-[#2E3281] sm:text-3xl">
                  Nursing & Pharmacy Colleges
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Explore B.Sc Nursing, GNM and B.Pharmacy colleges in Bengaluru.
                </p>
              </div>

              <div className="relative w-full sm:max-w-xs">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search college or course..."
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#2E3281] focus:ring-2 focus:ring-[#2E3281]/10"
                />
              </div>
            </div>
          </div>

          {/* RESULT COUNT */}
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Showing{" "}
              <span className="font-bold text-[#2E3281]">
                {filteredColleges.length}
              </span>{" "}
              colleges
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

          {/* COLLEGE CARDS */}
          {filteredColleges.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredColleges.map((college) => (
                <article
                  key={college.id}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2E3281]/30 hover:shadow-xl"
                >
                  {/* IMAGE */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={college.image}
                      alt={college.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

                    {/* COURSE TAG */}
                    <span className="absolute top-3 left-3 max-w-[calc(100%-24px)] rounded-lg bg-white px-3 py-1.5 text-[10px] font-bold uppercase leading-4 tracking-wide text-[#2E3281] shadow-sm">
                      {college.course.split(" / ").map((course, index) => (
                        <span key={course}>
                          {index > 0 && " / "}
                          {course}
                        </span>
                      ))}
                    </span>

                    {/* TYPE */}
                    <span
                      className={`absolute right-3 top-3 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide ${
                        college.type === "Government"
                          ? "bg-white text-[#2E3281]"
                          : "bg-[#a71320] text-white"
                      }`}
                    >
                      {college.type}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col p-5">
                    {/* LOGO */}
                    <div className="-mt-11 relative z-10 mb-3 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border-4 border-white bg-white shadow-md">
                      <img
                        src={college.logo}
                        alt={`${college.name} logo`}
                        className="h-10 w-10 object-contain"
                      />
                    </div>

                    {/* NAME */}
                    <h3 className="text-lg font-bold leading-7 text-[#2E3281] transition-colors group-hover:text-[#a71320]">
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
                      <Link
                        href={`/nursing-colleges/${college.slug}`}
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#2E3281] px-3 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#a71320]"
                      >
                        View Details
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>

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
            /* NO RESULTS */
            <div className="rounded-2xl border border-dashed border-slate-300 bg-[#f8f9fc] px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2E3281]/10 text-[#2E3281]">
                <Search size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#2E3281]">
                No Colleges Found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                We could not find a college matching your search. Try another
                college name or course.
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
 {/*   Nursing Colleges CONTENT */}
      <section className="bg-[#f8f9fc] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full text-center">
            <h2 className="text-2xl font-bold text-[#2E3281] sm:text-3xl">
             Nursing Colleges
            </h2>

            <p className="mx-auto mt-5 w-full text-[16px] leading-7 text-slate-600">
           Nursing is one of the greatest professions. It is the sector they are continuously monitoring the patient’s condition and reporting to the Doctor's. For this course, students will apply after the SSC board of education. Pragati consultancy is one of the leading consultancies which provides the admission in top college who provides the physical training and also the theoretical classes to bringing the students in the high-level nursing staff. Students who are interested in these courses can consult Pragati education consultants their provide you the right path for your career and gives the right admission for the students in top colleges in Bangalore.
            </p>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-[#f8f9fc] py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-[#2E3281] px-6 py-12 text-center sm:px-10">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/5" />
            <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-white/5" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
                <GraduationCap size={28} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                Need Help Choosing Your College?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                Get guidance on B.Sc Nursing, GNM and B.Pharmacy courses,
                college options, counselling and admission procedures.
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