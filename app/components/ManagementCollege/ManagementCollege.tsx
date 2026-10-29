"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  BriefcaseBusiness,
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
    id: 101,
    name: "Christ University",
    slug: "christ-university",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "BBA / MBA / B.Com / BBA LLB",
    description:
      "A well-established university offering management and business programs with a strong academic and professional learning environment.",
    image: "/images/Management-Colleges/1.webp",
    logo: "/images/Management-Colleges/logo/1.webp",
  },
  {
    id: 102,
    name: "Mount Carmel College",
    slug: "mount-carmel-college",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "BBA / B.Com",
    description:
      "An established Bengaluru institution offering undergraduate programs in management, commerce and business-related disciplines.",
    image: "/images/Management-Colleges/2.webp",
    logo: "/images/Management-Colleges/logo/2.webp",
  },
  {
    id: 103,
    name: "Kristu Jayanti College",
    slug: "kristu-jayanti-college",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "BBA / MBA / B.Com",
    description:
      "A Bengaluru-based institution offering business and management programs with academic learning and practical exposure.",
    image: "/images/Management-Colleges/3.webp",
    logo: "/images/Management-Colleges/logo/3.webp",
  },
  {
    id: 104,
    name: "Jain University",
    slug: "jain-university",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "BBA / MBA / B.Com / BBA LLB",
    description:
      "A private university offering undergraduate and postgraduate programs in business administration and management.",
    image: "/images/Management-Colleges/4.webp",
    logo: "/images/Management-Colleges/logo/4.webp",
  },
  {
    id: 105,
    name: "Presidency University",
    slug: "presidency-university",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "BBA / MBA / B.Com",
    description:
      "A modern university offering management and business programs supported by contemporary academic facilities.",
    image: "/images/Management-Colleges/5.webp",
    logo: "/images/Management-Colleges/logo/5.webp",
  },
  {
    id: 106,
    name: "Alliance University",
    slug: "alliance-university",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "BBA / MBA / B.Com / BBA LLB",
    description:
      "A university offering business and management education across multiple areas with an industry-oriented learning approach.",
    image: "/images/Management-Colleges/6.webp",
    logo: "/images/Management-Colleges/logo/6.webp",
  },
  {
    id: 107,
    name: "Acharya Institute of Graduate Studies",
    slug: "acharya-institute-of-graduate-studies",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "BBA / B.Com",
    description:
      "An institution offering management, commerce and business-related programs with a focus on academic and professional development.",
    image: "/images/Management-Colleges/7.webp",
    logo: "/images/Management-Colleges/logo/7.webp",
  },
  {
    id: 108,
    name: "REVA University",
    slug: "reva-university",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "BBA / MBA / B.Com",
    description:
      "A university offering business administration and management programs with practical and industry-oriented learning opportunities.",
    image: "/images/Management-Colleges/8.webp",
    logo: "/images/Management-Colleges/logo/8.webp",
  },
  {
    id: 109,
    name: "Bangalore University",
    slug: "bangalore-university",
    location: "Bengaluru, Karnataka",
    type: "Government",
    course: "MBA",
    description:
      "A public university offering postgraduate management education and business-related academic programs.",
    image: "/images/Management-Colleges/9.webp",
    logo: "/images/Management-Colleges/logo/9.webp",
  },
  {
    id: 110,
    name: "Bangalore Institute of Technology",
    slug: "bangalore-institute-of-technology",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "MBA",
    description:
      "An established Bengaluru institution offering postgraduate management education alongside professional and technical programs.",
    image: "/images/Management-Colleges/10.webp",
    logo: "/images/Management-Colleges/logo/10.webp",
  },
  {
    id: 111,
    name: "B.M.S. College of Engineering",
    slug: "bms-college-of-engineering",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "MBA",
    description:
      "An established institution offering professional and postgraduate management education in Bengaluru.",
    image: "/images/Management-Colleges/11.webp",
    logo: "/images/Management-Colleges/logo/11.webp",
  },
  {
    id: 112,
    name: "M.S. Ramaiah University of Applied Sciences",
    slug: "ms-ramaiah-university-of-applied-sciences",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "MBA / B.Com / BBA LLB",
    description:
      "A university offering business and management programs with practical and application-oriented education.",
    image: "/images/Management-Colleges/12.webp",
    logo: "/images/Management-Colleges/logo/12.webp",
  },
  {
    id: 113,
    name: "Indian Institute of Management Ahmedabad",
    slug: "indian-institute-of-management-ahmedabad",
    location: "Ahmedabad, Gujarat",
    type: "Government",
    course: "MBA",
    description:
      "A premier management institution offering postgraduate management education, executive programs and research opportunities.",
    image: "/images/Management-Colleges/13.webp",
    logo: "/images/Management-Colleges/logo/13.webp",
  },
  {
    id: 114,
    name: "Indian Institute of Management Bangalore",
    slug: "indian-institute-of-management-bangalore",
    location: "Bengaluru, Karnataka",
    type: "Government",
    course: "MBA",
    description:
      "A leading management institution offering postgraduate, executive and research programs in business and management.",
    image: "/images/Management-Colleges/14.webp",
    logo: "/images/Management-Colleges/logo/14.webp",
  },
  {
    id: 115,
    name: "Indian Institute of Management Calcutta",
    slug: "indian-institute-of-management-calcutta",
    location: "Kolkata, West Bengal",
    type: "Government",
    course: "MBA",
    description:
      "A premier management institution offering postgraduate business education, executive programs and research opportunities.",
    image: "/images/Management-Colleges/15.webp",
    logo: "/images/Management-Colleges/logo/15.webp",
  },
  {
    id: 116,
    name: "Indian Institute of Management Lucknow",
    slug: "indian-institute-of-management-lucknow",
    location: "Lucknow, Uttar Pradesh",
    type: "Government",
    course: "MBA",
    description:
      "A leading management institution offering postgraduate programs across business, management and related disciplines.",
    image: "/images/Management-Colleges/16.webp",
    logo: "/images/Management-Colleges/logo/16.webp",
  },
  {
    id: 117,
    name: "Indian Institute of Management Kozhikode",
    slug: "indian-institute-of-management-kozhikode",
    location: "Kozhikode, Kerala",
    type: "Government",
    course: "MBA",
    description:
      "A centrally funded management institution offering postgraduate, executive and professional management education.",
    image: "/images/Management-Colleges/17.webp",
    logo: "/images/Management-Colleges/logo/17.webp",
  },
  {
    id: 118,
    name: "Indian Institute of Management Indore",
    slug: "indian-institute-of-management-indore",
    location: "Indore, Madhya Pradesh",
    type: "Government",
    course: "BBA / MBA",
    description:
      "A leading management institution offering integrated and postgraduate programs in business and management.",
    image: "/images/Management-Colleges/18.webp",
    logo: "/images/Management-Colleges/logo/18.webp",
  },
  {
    id: 119,
    name: "Indian Institute of Management Rohtak",
    slug: "indian-institute-of-management-rohtak",
    location: "Rohtak, Haryana",
    type: "Government",
    course: "BBA / MBA",
    description:
      "A management institution offering integrated and postgraduate management programs with a professional academic environment.",
    image: "/images/Management-Colleges/19.webp",
    logo: "/images/Management-Colleges/logo/19.webp",
  },
  {
    id: 120,
    name: "Indian Institute of Management Jammu",
    slug: "indian-institute-of-management-jammu",
    location: "Jammu, Jammu and Kashmir",
    type: "Government",
    course: "BBA / MBA",
    description:
      "A management institution offering integrated and postgraduate education in business and management.",
    image: "/images/Management-Colleges/20.webp",
    logo: "/images/Management-Colleges/logo/20.webp",
  },
  {
    id: 121,
    name: "Indian Institute of Management Bodh Gaya",
    slug: "indian-institute-of-management-bodh-gaya",
    location: "Bodh Gaya, Bihar",
    type: "Government",
    course: "BBA / MBA",
    description:
      "A centrally funded management institution offering integrated and postgraduate management education.",
    image: "/images/Management-Colleges/21.webp",
    logo: "/images/Management-Colleges/logo/21.webp",
  },
  {
    id: 122,
    name: "Indian Institute of Management Ranchi",
    slug: "indian-institute-of-management-ranchi",
    location: "Ranchi, Jharkhand",
    type: "Government",
    course: "BBA / MBA",
    description:
      "A management institution providing integrated and postgraduate education across business and professional disciplines.",
    image: "/images/Management-Colleges/22.webp",
    logo: "/images/Management-Colleges/logo/22.webp",
  },
  {
    id: 123,
    name: "Indian Institute of Management Amritsar",
    slug: "indian-institute-of-management-amritsar",
    location: "Amritsar, Punjab",
    type: "Government",
    course: "BBA / MBA",
    description:
      "A centrally funded management institution offering professional management education and business programs.",
    image: "/images/Management-Colleges/23.webp",
    logo: "/images/Management-Colleges/logo/23.webp",
  },
  {
    id: 124,
    name: "Indian Institute of Management Visakhapatnam",
    slug: "indian-institute-of-management-visakhapatnam",
    location: "Visakhapatnam, Andhra Pradesh",
    type: "Government",
    course: "MBA",
    description:
      "A management institution offering postgraduate and professional education in business and management.",
    image: "/images/Management-Colleges/24.webp",
    logo: "/images/Management-Colleges/logo/24.webp",
  },
  {
    id: 125,
    name: "Indian Institute of Management Shillong",
    slug: "indian-institute-of-management-shillong",
    location: "Shillong, Meghalaya",
    type: "Government",
    course: "MBA",
    description:
      "A centrally funded management institution offering postgraduate and executive programs in management.",
    image: "/images/Management-Colleges/25.webp",
    logo: "/images/Management-Colleges/logo/25.webp",
  },
  {
    id: 126,
    name: "Indian Institute of Management Udaipur",
    slug: "indian-institute-of-management-udaipur",
    location: "Udaipur, Rajasthan",
    type: "Government",
    course: "MBA",
    description:
      "A management institution offering postgraduate business education, research and professional learning opportunities.",
    image: "/images/Management-Colleges/26.webp",
    logo: "/images/Management-Colleges/logo/26.webp",
  },
  {
    id: 127,
    name: "Indian Institute of Management Tiruchirappalli",
    slug: "indian-institute-of-management-tiruchirappalli",
    location: "Tiruchirappalli, Tamil Nadu",
    type: "Government",
    course: "MBA",
    description:
      "A centrally funded management institution offering postgraduate and executive education in business and management.",
    image: "/images/Management-Colleges/27.webp",
    logo: "/images/Management-Colleges/logo/27.webp",
  },
];

export default function ManagementCollegesPage() {
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
        title="Top Management Colleges"
        description="Explore management colleges, courses and admission opportunities"
      />

      {/* INTRO */}
      <section className="bg-[#f8f9fc] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#2E3281]/10 px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] text-[#2E3281]">
              <BriefcaseBusiness size={16} />
              Management Admissions
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-[#2E3281] sm:text-4xl md:text-5xl">
              Find The Right Management College
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-7 text-slate-600">
              Explore management colleges and discover suitable BBA and MBA
              options based on your preferred location, course and college type.
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
                  Management Education
                </p>

                <h2 className="mt-1 text-2xl font-bold text-[#2E3281] sm:text-3xl">
                  Management Colleges
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Explore BBA, MBA, B.Com and BBA LLB colleges across India.
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
              management colleges
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
                        href={`/management-colleges/${college.slug}`}
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
                We could not find a management college matching your search.
                Try another college name, location or course.
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
  {/* Management Colleges CONTENT */}
      <section className="bg-[#f8f9fc] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full text-center">
            <h2 className="text-2xl font-bold text-[#2E3281] sm:text-3xl">
              Management Colleges
            </h2>

            <p className="mx-auto mt-5 w-full text-[16px] leading-7 text-slate-600">
              It is a Professional Post graduation / Graduation course which develops the students in modern society. In this course, the student studies how to progress their career in developing Management skills and leadership Qualities. After Course, completion students will get the placements in Top MNC companies.

For Joining Management courses in Bangalore, Pragati consultancy is providing the admissions in top universities in Bangalore. Visit the Pragati Consultants and take the expert decision for your career. Below are the different sectors in the Management courses opt any of that course get direct admissions and be a professional management student.
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
                <BriefcaseBusiness size={28} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                Need Help Choosing Your Management College?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                Get personalised guidance on BBA, MBA, B.Com, BBA LLB, college
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