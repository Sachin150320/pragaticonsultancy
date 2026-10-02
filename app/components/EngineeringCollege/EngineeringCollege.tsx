"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  Search,
  GraduationCap,
  Cpu,
} from "lucide-react";

import BreadcrumbBanner from "@/app/components/BreadcrumbBanner";

type College = {
  id: number;
  name: string;
  slug: string;
  location: string;
  type: string;
  description: string;
};

type Category = {
  id: string;
  quota: string;
  course: string;
  description: string;
  colleges: College[];
};

const categories: Category[] = [
  {
    id: "state-be",
    quota: "STATE QUOTA",
    course: "B.E / B.TECH",
    description:
      "Explore engineering colleges and undergraduate programs available through state counselling.",
    colleges: [
      {
        id: 101,
        name: "University Visvesvaraya College of Engineering",
        slug: "university-visvesvaraya-college-of-engineering",
        location: "Bengaluru, Karnataka",
        type: "Government",
        description:
          "An established engineering institution in Bengaluru offering undergraduate and postgraduate programs across multiple engineering disciplines.",
      },
      {
        id: 102,
        name: "Bangalore Institute of Technology",
        slug: "bangalore-institute-of-technology",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "An engineering institution offering undergraduate programs in engineering, technology and related disciplines.",
      },
      {
        id: 103,
        name: "B.M.S. College of Engineering",
        slug: "bms-college-of-engineering",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "An established engineering college offering undergraduate engineering programs with academic and practical learning opportunities.",
      },
      {
        id: 104,
        name: "R.V. College of Engineering",
        slug: "rv-college-of-engineering",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "A prominent engineering institution offering undergraduate programs across several engineering and technology disciplines.",
      },
      {
        id: 105,
        name: "PES University",
        slug: "pes-university",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "A Bengaluru-based university offering engineering and technology programs with modern academic infrastructure.",
      },
      {
        id: 106,
        name: "M.S. Ramaiah Institute of Technology",
        slug: "ms-ramaiah-institute-of-technology",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "A well-known engineering institution offering undergraduate and postgraduate programs in engineering and technology.",
      },
      {
        id: 107,
        name: "Dayananda Sagar College of Engineering",
        slug: "dayananda-sagar-college-of-engineering",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "An engineering college providing undergraduate and postgraduate education across various technical disciplines.",
      },
      {
        id: 108,
        name: "New Horizon College of Engineering",
        slug: "new-horizon-college-of-engineering",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "An engineering institution offering undergraduate technology programs with academic and industry-oriented learning.",
      },
    ],
  },

  {
    id: "state-me",
    quota: "STATE QUOTA",
    course: "M.E / M.TECH",
    description:
      "Explore postgraduate engineering colleges and technical programs available through state counselling.",
    colleges: [
      {
        id: 201,
        name: "University Visvesvaraya College of Engineering",
        slug: "university-visvesvaraya-college-of-engineering",
        location: "Bengaluru, Karnataka",
        type: "Government",
        description:
          "An established engineering institution offering postgraduate technical education across multiple engineering specializations.",
      },
      {
        id: 202,
        name: "B.M.S. College of Engineering",
        slug: "bms-college-of-engineering",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "An established engineering institution offering postgraduate programs in engineering and technology.",
      },
      {
        id: 203,
        name: "R.V. College of Engineering",
        slug: "rv-college-of-engineering",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "An engineering institution offering postgraduate programs supported by academic and technical facilities.",
      },
      {
        id: 204,
        name: "M.S. Ramaiah Institute of Technology",
        slug: "ms-ramaiah-institute-of-technology",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "A technical institution offering postgraduate engineering programs across various specializations.",
      },
      {
        id: 205,
        name: "Bangalore Institute of Technology",
        slug: "bangalore-institute-of-technology",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "An engineering college providing postgraduate education in selected engineering and technology disciplines.",
      },
      {
        id: 206,
        name: "PES University",
        slug: "pes-university",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "A university offering postgraduate engineering and technology programs with modern academic facilities.",
      },
      {
        id: 207,
        name: "Dayananda Sagar College of Engineering",
        slug: "dayananda-sagar-college-of-engineering",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "An engineering institution offering postgraduate technical programs with academic and practical learning.",
      },
      {
        id: 208,
        name: "Nitte Meenakshi Institute of Technology",
        slug: "nitte-meenakshi-institute-of-technology",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "An engineering institution offering postgraduate programs in engineering and technology disciplines.",
      },
    ],
  },

  {
    id: "central-be",
    quota: "CENTRAL QUOTA",
    course: "B.E / B.TECH",
    description:
      "Explore engineering institutions and undergraduate programs available through national-level admission routes.",
    colleges: [
      {
        id: 301,
        name: "Indian Institute of Technology Bombay",
        slug: "indian-institute-of-technology-bombay",
        location: "Mumbai, Maharashtra",
        type: "Government",
        description:
          "A centrally funded technical institution offering undergraduate, postgraduate and research programs in engineering and technology.",
      },
      {
        id: 302,
        name: "Indian Institute of Technology Delhi",
        slug: "indian-institute-of-technology-delhi",
        location: "New Delhi",
        type: "Government",
        description:
          "A leading technical institution offering undergraduate engineering education along with postgraduate and research programs.",
      },
      {
        id: 303,
        name: "Indian Institute of Technology Madras",
        slug: "indian-institute-of-technology-madras",
        location: "Chennai, Tamil Nadu",
        type: "Government",
        description:
          "A centrally funded technical institution offering engineering, technology and research programs.",
      },
      {
        id: 304,
        name: "Indian Institute of Technology Kanpur",
        slug: "indian-institute-of-technology-kanpur",
        location: "Kanpur, Uttar Pradesh",
        type: "Government",
        description:
          "A major technical institution offering undergraduate engineering education and advanced technology programs.",
      },
      {
        id: 305,
        name: "Indian Institute of Technology Kharagpur",
        slug: "indian-institute-of-technology-kharagpur",
        location: "Kharagpur, West Bengal",
        type: "Government",
        description:
          "An established technical institution offering undergraduate engineering and technology programs across multiple disciplines.",
      },
      {
        id: 306,
        name: "Indian Institute of Technology Hyderabad",
        slug: "indian-institute-of-technology-hyderabad",
        location: "Hyderabad, Telangana",
        type: "Government",
        description:
          "A centrally funded technical institution offering undergraduate engineering and technology programs.",
      },
      {
        id: 307,
        name: "Indian Institute of Technology Guwahati",
        slug: "indian-institute-of-technology-guwahati",
        location: "Guwahati, Assam",
        type: "Government",
        description:
          "A leading technical institution providing undergraduate and postgraduate education in engineering and technology.",
      },
      {
        id: 308,
        name: "Indian Institute of Technology Roorkee",
        slug: "indian-institute-of-technology-roorkee",
        location: "Roorkee, Uttarakhand",
        type: "Government",
        description:
          "An established technical institution offering engineering education, research and technology programs.",
      },
      {
        id: 309,
        name: "National Institute of Technology Karnataka",
        slug: "national-institute-of-technology-karnataka",
        location: "Surathkal, Karnataka",
        type: "Government",
        description:
          "A centrally funded technical institution offering undergraduate and postgraduate engineering education.",
      },
      {
        id: 310,
        name: "National Institute of Technology Tiruchirappalli",
        slug: "national-institute-of-technology-tiruchirappalli",
        location: "Tiruchirappalli, Tamil Nadu",
        type: "Government",
        description:
          "A centrally funded technical institution offering undergraduate and postgraduate programs in engineering and technology.",
      },
    ],
  },

  {
    id: "central-me",
    quota: "CENTRAL QUOTA",
    course: "M.E / M.TECH",
    description:
      "Explore postgraduate engineering institutions and technical programs available through national-level admission routes.",
    colleges: [
      {
        id: 401,
        name: "Indian Institute of Technology Bombay",
        slug: "indian-institute-of-technology-bombay",
        location: "Mumbai, Maharashtra",
        type: "Government",
        description:
          "A leading technical institution offering postgraduate engineering education across numerous specializations.",
      },
      {
        id: 402,
        name: "Indian Institute of Technology Delhi",
        slug: "indian-institute-of-technology-delhi",
        location: "New Delhi",
        type: "Government",
        description:
          "A centrally funded institute offering postgraduate engineering programs with strong academic and research facilities.",
      },
      {
        id: 403,
        name: "Indian Institute of Technology Madras",
        slug: "indian-institute-of-technology-madras",
        location: "Chennai, Tamil Nadu",
        type: "Government",
        description:
          "A technical institution offering postgraduate engineering programs across a wide range of specializations.",
      },
      {
        id: 404,
        name: "Indian Institute of Technology Kanpur",
        slug: "indian-institute-of-technology-kanpur",
        location: "Kanpur, Uttar Pradesh",
        type: "Government",
        description:
          "A leading technical institution providing postgraduate engineering education and research opportunities.",
      },
      {
        id: 405,
        name: "Indian Institute of Technology Kharagpur",
        slug: "indian-institute-of-technology-kharagpur",
        location: "Kharagpur, West Bengal",
        type: "Government",
        description:
          "A major technical institution offering postgraduate programs in engineering, technology and research.",
      },
      {
        id: 406,
        name: "Indian Institute of Technology Hyderabad",
        slug: "indian-institute-of-technology-hyderabad",
        location: "Hyderabad, Telangana",
        type: "Government",
        description:
          "A centrally funded technical institution offering postgraduate engineering and technology programs.",
      },
      {
        id: 407,
        name: "National Institute of Technology Karnataka",
        slug: "national-institute-of-technology-karnataka",
        location: "Surathkal, Karnataka",
        type: "Government",
        description:
          "A leading technical institution offering postgraduate engineering education and research opportunities.",
      },
      {
        id: 408,
        name: "National Institute of Technology Warangal",
        slug: "national-institute-of-technology-warangal",
        location: "Warangal, Telangana",
        type: "Government",
        description:
          "A centrally funded technical institution offering postgraduate engineering and technology programs.",
      },
      {
        id: 409,
        name: "National Institute of Technology Calicut",
        slug: "national-institute-of-technology-calicut",
        location: "Kozhikode, Kerala",
        type: "Government",
        description:
          "A centrally funded technical institution offering postgraduate programs in engineering and technology.",
      },
      {
        id: 410,
        name: "National Institute of Technology Rourkela",
        slug: "national-institute-of-technology-rourkela",
        location: "Rourkela, Odisha",
        type: "Government",
        description:
          "An established technical institution offering postgraduate engineering education and research programs.",
      },
    ],
  },
];

export default function EngineeringCollegesPage() {
  const [activeCategory, setActiveCategory] =
    useState("state-be");

  const [search, setSearch] = useState("");

  const activeData =
    categories.find(
      (category) => category.id === activeCategory
    ) || categories[0];

  const filteredColleges = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return activeData.colleges;
    }

    return activeData.colleges.filter(
      (college) =>
        college.name.toLowerCase().includes(value) ||
        college.location.toLowerCase().includes(value) ||
        college.type.toLowerCase().includes(value)
    );
  }, [activeData, search]);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setSearch("");
  };

  return (
    <main className="min-h-screen bg-white">

      <BreadcrumbBanner
        title="Engineering Colleges"
        description="Explore engineering colleges, courses and admission opportunities"
      />

      {/* INTRO */}

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

            <p className="mt-5 text-[16px] leading-7 text-slate-600">
              Explore engineering colleges based on your preferred
              course and admission quota. Select an option below to
              view the relevant college list.
            </p>

          </div>

        </div>
      </section>

      {/* COLLEGE FINDER */}

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">

            {/* LEFT FILTER */}

            <aside className="h-fit lg:sticky lg:top-24">

              <div className="rounded-2xl border border-slate-200 bg-[#f8f9fc] p-4 shadow-sm">

                <div className="mb-5 px-2 pt-1">

                  <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#a71320]">
                    Choose Admission
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-[#2E3281]">
                    Course & Quota
                  </h2>

                </div>

                <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">

                  {categories.map((category) => {
                    const isActive =
                      activeCategory === category.id;

                    return (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() =>
                          handleCategoryChange(category.id)
                        }
                        className={`group relative overflow-hidden rounded-xl border p-4 text-left transition-all duration-300 ${isActive
                            ? "border-[#2E3281] bg-[#2E3281] shadow-lg"
                            : "border-slate-200 bg-white hover:border-[#2E3281] hover:shadow-md"
                          }`}
                      >

                        <div className="flex items-center justify-between gap-2">

                          <div>

                            <p
                              className={`text-[11px] font-bold tracking-[1px] ${isActive
                                  ? "text-blue-100"
                                  : "text-[#a71320]"
                                }`}
                            >
                              {category.quota}
                            </p>

                            <p
                              className={`mt-1 text-lg font-bold ${isActive
                                  ? "text-white"
                                  : "text-[#2E3281]"
                                }`}
                            >
                              {category.course}
                            </p>

                          </div>

                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${isActive
                                ? "bg-white/15 text-white"
                                : "bg-[#2E3281]/10 text-[#2E3281]"
                              }`}
                          >
                            {isActive ? (
                              <CheckCircle2 size={18} />
                            ) : (
                              <ArrowRight
                                size={17}
                                className="transition-transform group-hover:translate-x-1"
                              />
                            )}
                          </div>

                        </div>

                      </button>
                    );
                  })}

                </div>

                {/* GUIDANCE */}

                <div className="mt-5 overflow-hidden rounded-xl bg-[#a71320] p-5 text-white">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
                    <GraduationCap size={21} />
                  </div>

                  <h3 className="mt-4 font-bold">
                    Need Guidance?
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-red-100">
                    Get guidance on engineering courses, colleges,
                    counselling and admission procedures.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-[#a71320] transition hover:bg-slate-100"
                  >
                    Talk To Us
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </div>

            </aside>

            {/* RIGHT LIST */}

            <div className="min-w-0">

              <div className="mb-7 rounded-2xl border border-slate-200 bg-[#f8f9fc] p-5">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#a71320]">
                      {activeData.quota}
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-[#2E3281] sm:text-3xl">
                      {activeData.course} Engineering Colleges
                    </h2>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                      {activeData.description}
                    </p>

                  </div>

                  {/* SEARCH */}

                  <div className="relative w-full sm:max-w-xs">

                    <Search
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search college..."
                      className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#2E3281] focus:ring-2 focus:ring-[#2E3281]/10"
                    />

                  </div>

                </div>

              </div>

              {/* COLLEGE CARDS */}

              {filteredColleges.length > 0 ? (
                <div className="grid gap-5 md:grid-cols-2">

                  {filteredColleges.map((college) => (
                    <article
                      key={college.id}
                      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2E3281]/30 hover:shadow-xl"
                    >

                      <div className="absolute left-0 top-0 h-1 w-full bg-[#2E3281] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="flex items-start justify-between gap-3">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2E3281]/10 text-[#2E3281] transition-all duration-300 group-hover:bg-[#2E3281] group-hover:text-white">
                          <Building2 size={22} />
                        </div>

                        <span
                          className={`rounded-full px-3 py-1.5 text-[11px] font-bold ${college.type === "Government"
                              ? "bg-[#2E3281]/10 text-[#2E3281]"
                              : "bg-[#a71320]/10 text-[#a71320]"
                            }`}
                        >
                          {college.type}
                        </span>

                      </div>

                      <h3 className="mt-5 text-lg font-bold leading-7 text-[#2E3281] transition-colors group-hover:text-[#a71320]">
                        {college.name}
                      </h3>

                      <div className="mt-3 flex items-start gap-2 text-sm text-slate-500">

                        <MapPin
                          size={16}
                          className="mt-0.5 shrink-0 text-[#a71320]"
                        />

                        <span>
                          {college.location}
                        </span>

                      </div>

                      <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
                        {college.description}
                      </p>

                      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">

                        <span className="text-xs font-medium text-slate-400">
                          {activeData.course} Admission
                        </span>

                        <Link
                          href={`/engineering-colleges/${college.slug}`}
                          className="inline-flex items-center gap-2 rounded-lg bg-[#2E3281] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#a71320]"
                        >
                          View Details
                          <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </Link>

                      </div>

                    </article>
                  ))}

                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-[#f8f9fc] px-6 py-16 text-center">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2E3281]/10 text-[#2E3281]">
                    <Search size={24} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#2E3281]">
                    No Colleges Found
                  </h3>

                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                    We could not find a college matching your
                    search. Try searching with a different name
                    or location.
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
                <Cpu size={28} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                Need Help Choosing Your Engineering College?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                Get personalised guidance on engineering courses,
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