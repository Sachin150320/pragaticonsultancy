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
  BriefcaseBusiness,
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
    id: "state-bba",
    quota: "STATE QUOTA",
    course: "BBA",
    description:
      "Explore undergraduate management colleges and business administration programs available through state admission routes.",
    colleges: [
      {
        id: 101,
        name: "Christ University",
        slug: "christ-university",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "A well-established university offering undergraduate management and business administration programs with a broad academic environment.",
      },
      {
        id: 102,
        name: "Mount Carmel College",
        slug: "mount-carmel-college",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "An established institution offering undergraduate programs in management, commerce and related business disciplines.",
      },
      {
        id: 103,
        name: "Kristu Jayanti College",
        slug: "kristu-jayanti-college",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "A Bengaluru-based institution offering undergraduate management and business-focused programs with academic and practical learning.",
      },
      {
        id: 104,
        name: "Jain University",
        slug: "jain-university",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "A private university offering undergraduate programs in business administration, management and related disciplines.",
      },
      {
        id: 105,
        name: "Presidency University",
        slug: "presidency-university",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "A university offering undergraduate management and business programs supported by modern academic facilities.",
      },
      {
        id: 106,
        name: "Alliance University",
        slug: "alliance-university",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "A university offering undergraduate business and management education across various areas of specialization.",
      },
      {
        id: 107,
        name: "Acharya Institute of Graduate Studies",
        slug: "acharya-institute-of-graduate-studies",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "An institution offering undergraduate programs in management, commerce and other business-related disciplines.",
      },
      {
        id: 108,
        name: "Reva University",
        slug: "reva-university",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "A university offering undergraduate business administration and management programs with industry-oriented learning opportunities.",
      },
    ],
  },

  {
    id: "state-mba",
    quota: "STATE QUOTA",
    course: "MBA",
    description:
      "Explore postgraduate management colleges and MBA programs available through state-level admission routes.",
    colleges: [
      {
        id: 201,
        name: "Christ University",
        slug: "christ-university",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "A university offering postgraduate management education across various business and management specializations.",
      },
      {
        id: 202,
        name: "Bangalore University",
        slug: "bangalore-university",
        location: "Bengaluru, Karnataka",
        type: "Government",
        description:
          "A public university offering postgraduate management education and business-related academic programs.",
      },
      {
        id: 203,
        name: "Bangalore Institute of Technology",
        slug: "bangalore-institute-of-technology",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "An established institution offering postgraduate management education alongside technical and professional programs.",
      },
      {
        id: 204,
        name: "B.M.S. College of Engineering",
        slug: "bms-college-of-engineering",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "An established institution providing postgraduate management education and professional programs.",
      },
      {
        id: 205,
        name: "M.S. Ramaiah University of Applied Sciences",
        slug: "ms-ramaiah-university-of-applied-sciences",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "A university offering postgraduate business and management programs with practical and application-oriented education.",
      },
      {
        id: 206,
        name: "Jain University",
        slug: "jain-university",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "A private university offering MBA and postgraduate management programs across multiple business disciplines.",
      },
      {
        id: 207,
        name: "Alliance University",
        slug: "alliance-university",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "A university offering postgraduate management education with programs covering various areas of business administration.",
      },
      {
        id: 208,
        name: "Acharya Institute of Graduate Studies",
        slug: "acharya-institute-of-graduate-studies",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "An institution offering postgraduate management education and business-related professional programs.",
      },
    ],
  },

  {
    id: "central-bba",
    quota: "CENTRAL QUOTA",
    course: "BBA",
    description:
      "Explore management institutions and undergraduate business programs available through national-level admission routes.",
    colleges: [
      {
        id: 301,
        name: "Indian Institute of Management Indore",
        slug: "indian-institute-of-management-indore",
        location: "Indore, Madhya Pradesh",
        type: "Government",
        description:
          "A centrally funded management institution offering integrated and postgraduate management education.",
      },
      {
        id: 302,
        name: "Indian Institute of Management Rohtak",
        slug: "indian-institute-of-management-rohtak",
        location: "Rohtak, Haryana",
        type: "Government",
        description:
          "A centrally funded management institution offering integrated and postgraduate programs in management.",
      },
      {
        id: 303,
        name: "Indian Institute of Management Jammu",
        slug: "indian-institute-of-management-jammu",
        location: "Jammu, Jammu and Kashmir",
        type: "Government",
        description:
          "A management institution offering integrated and postgraduate management education.",
      },
      {
        id: 304,
        name: "Indian Institute of Management Bodh Gaya",
        slug: "indian-institute-of-management-bodh-gaya",
        location: "Bodh Gaya, Bihar",
        type: "Government",
        description:
          "A centrally funded management institution offering integrated and postgraduate management programs.",
      },
      {
        id: 305,
        name: "Indian Institute of Management Ranchi",
        slug: "indian-institute-of-management-ranchi",
        location: "Ranchi, Jharkhand",
        type: "Government",
        description:
          "A management institution providing undergraduate-level integrated and postgraduate management education.",
      },
      {
        id: 306,
        name: "Indian Institute of Management Amritsar",
        slug: "indian-institute-of-management-amritsar",
        location: "Amritsar, Punjab",
        type: "Government",
        description:
          "A centrally funded management institution offering management education and professional programs.",
      },
      {
        id: 307,
        name: "Indian Institute of Management Visakhapatnam",
        slug: "indian-institute-of-management-visakhapatnam",
        location: "Visakhapatnam, Andhra Pradesh",
        type: "Government",
        description:
          "A management institution offering professional and postgraduate education in business and management.",
      },
      {
        id: 308,
        name: "Indian Institute of Management Sirmaur",
        slug: "indian-institute-of-management-sirmaur",
        location: "Sirmaur, Himachal Pradesh",
        type: "Government",
        description:
          "A centrally funded management institution offering programs in business administration and management.",
      },
    ],
  },

  {
    id: "central-mba",
    quota: "CENTRAL QUOTA",
    course: "MBA",
    description:
      "Explore leading management institutions and postgraduate business programs available through national-level admission routes.",
    colleges: [
      {
        id: 401,
        name: "Indian Institute of Management Ahmedabad",
        slug: "indian-institute-of-management-ahmedabad",
        location: "Ahmedabad, Gujarat",
        type: "Government",
        description:
          "A premier management institution offering postgraduate management education, executive programs and research opportunities.",
      },
      {
        id: 402,
        name: "Indian Institute of Management Bangalore",
        slug: "indian-institute-of-management-bangalore",
        location: "Bengaluru, Karnataka",
        type: "Government",
        description:
          "A leading management institution offering postgraduate, executive and research programs in management.",
      },
      {
        id: 403,
        name: "Indian Institute of Management Calcutta",
        slug: "indian-institute-of-management-calcutta",
        location: "Kolkata, West Bengal",
        type: "Government",
        description:
          "A centrally funded management institution offering postgraduate management education and research programs.",
      },
      {
        id: 404,
        name: "Indian Institute of Management Lucknow",
        slug: "indian-institute-of-management-lucknow",
        location: "Lucknow, Uttar Pradesh",
        type: "Government",
        description:
          "A management institution offering postgraduate programs across various areas of business and management.",
      },
      {
        id: 405,
        name: "Indian Institute of Management Kozhikode",
        slug: "indian-institute-of-management-kozhikode",
        location: "Kozhikode, Kerala",
        type: "Government",
        description:
          "A centrally funded management institution offering postgraduate and executive management education.",
      },
      {
        id: 406,
        name: "Indian Institute of Management Indore",
        slug: "indian-institute-of-management-indore",
        location: "Indore, Madhya Pradesh",
        type: "Government",
        description:
          "A management institution offering postgraduate programs in management, business administration and related disciplines.",
      },
      {
        id: 407,
        name: "Indian Institute of Management Shillong",
        slug: "indian-institute-of-management-shillong",
        location: "Shillong, Meghalaya",
        type: "Government",
        description:
          "A centrally funded management institution offering postgraduate and executive management programs.",
      },
      {
        id: 408,
        name: "Indian Institute of Management Udaipur",
        slug: "indian-institute-of-management-udaipur",
        location: "Udaipur, Rajasthan",
        type: "Government",
        description:
          "A management institution offering postgraduate business education and research opportunities.",
      },
      {
        id: 409,
        name: "Indian Institute of Management Tiruchirappalli",
        slug: "indian-institute-of-management-tiruchirappalli",
        location: "Tiruchirappalli, Tamil Nadu",
        type: "Government",
        description:
          "A centrally funded management institution offering postgraduate and executive education in management.",
      },
      {
        id: 410,
        name: "Indian Institute of Management Ranchi",
        slug: "indian-institute-of-management-ranchi",
        location: "Ranchi, Jharkhand",
        type: "Government",
        description:
          "A management institution offering postgraduate management education across business and professional disciplines.",
      },
    ],
  },
];

export default function ManagementCollegesPage() {
  const [activeCategory, setActiveCategory] =
    useState("state-bba");

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
        title="Management Colleges"
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

            <p className="mt-5 text-[16px] leading-7 text-slate-600">
              Explore management colleges based on your preferred
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
                        className={`group relative overflow-hidden rounded-xl border p-4 text-left transition-all duration-300 ${
                          isActive
                            ? "border-[#2E3281] bg-[#2E3281] shadow-lg"
                            : "border-slate-200 bg-white hover:border-[#2E3281] hover:shadow-md"
                        }`}
                      >

                        <div className="flex items-center justify-between gap-2">

                          <div>

                            <p
                              className={`text-[11px] font-bold tracking-[1px] ${
                                isActive
                                  ? "text-blue-100"
                                  : "text-[#a71320]"
                              }`}
                            >
                              {category.quota}
                            </p>

                            <p
                              className={`mt-1 text-lg font-bold ${
                                isActive
                                  ? "text-white"
                                  : "text-[#2E3281]"
                              }`}
                            >
                              {category.course}
                            </p>

                          </div>

                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                              isActive
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
                    Get guidance on management courses, colleges,
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

              <div className="mb-7">

                <p className="text-sm font-bold uppercase tracking-[1.5px] text-[#a71320]">
                  {activeData.quota}
                </p>

                <h2 className="mt-1 text-2xl font-bold text-[#2E3281] sm:text-3xl">
                  {activeData.course} Management Colleges
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  {activeData.description}
                </p>

                {/* SEARCH */}

                <div className="mt-6">

                  <div className="relative">

                    <Search
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      value={search}
                      onChange={(e) =>
                        setSearch(e.target.value)
                      }
                      placeholder="Search college by name, location or type..."
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
                          className={`rounded-full px-3 py-1.5 text-[11px] font-bold ${
                            college.type === "Government"
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
                          href={`/management-colleges/${college.slug}`}
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
                <BriefcaseBusiness size={28} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                Need Help Choosing Your Management College?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                Get personalised guidance on management courses,
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