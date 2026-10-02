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
  HeartPulse,
} from "lucide-react";

import BreadcrumbBanner from "@/app/components/BreadcrumbBanner";

type College = {
  name: string;
  slug: string;
  location: string;
  type: string;
  description: string;
};

type Category = {
  key: string;
  quota: string;
  course: string;
  description: string;
  colleges: College[];
};

const categories: Category[] = [
  {
    key: "state-bsc-nursing",
    quota: "STATE QUOTA",
    course: "B.SC NURSING",
    description:
      "Explore B.Sc Nursing colleges available through state counselling and understand your nursing admission options.",
    colleges: [
      {
        name: "Government College of Nursing, Bengaluru",
        slug: "government-college-of-nursing-bengaluru",
        location: "Bengaluru, Karnataka",
        type: "Government",
        description:
          "A government nursing institution in Bengaluru offering undergraduate nursing education with clinical and practical training.",
      },
      {
        name: "Government College of Nursing, Mysuru",
        slug: "government-college-of-nursing-mysuru",
        location: "Mysuru, Karnataka",
        type: "Government",
        description:
          "A government nursing institution offering undergraduate nursing education supported by clinical learning and healthcare training.",
      },
      {
        name: "Government College of Nursing, Hassan",
        slug: "government-college-of-nursing-hassan",
        location: "Hassan, Karnataka",
        type: "Government",
        description:
          "A nursing institution providing undergraduate education with practical training and exposure to healthcare services.",
      },
      {
        name: "Government College of Nursing, Mandya",
        slug: "government-college-of-nursing-mandya",
        location: "Mandya, Karnataka",
        type: "Government",
        description:
          "A government nursing college offering undergraduate nursing education and clinical learning opportunities.",
      },
      {
        name: "Government College of Nursing, Ballari",
        slug: "government-college-of-nursing-ballari",
        location: "Ballari, Karnataka",
        type: "Government",
        description:
          "A government nursing institution providing nursing education with practical and hospital-based training.",
      },
      {
        name: "Government College of Nursing, Shivamogga",
        slug: "government-college-of-nursing-shivamogga",
        location: "Shivamogga, Karnataka",
        type: "Government",
        description:
          "A nursing education institution offering undergraduate nursing programs with clinical exposure.",
      },
      {
        name: "Government College of Nursing, Belagavi",
        slug: "government-college-of-nursing-belagavi",
        location: "Belagavi, Karnataka",
        type: "Government",
        description:
          "A government nursing institution providing undergraduate nursing education and practical healthcare training.",
      },
      {
        name: "Government College of Nursing, Kalaburagi",
        slug: "government-college-of-nursing-kalaburagi",
        location: "Kalaburagi, Karnataka",
        type: "Government",
        description:
          "A government nursing institution offering undergraduate nursing education and clinical learning opportunities.",
      },
    ],
  },

  {
    key: "state-gnm",
    quota: "STATE QUOTA",
    course: "GNM",
    description:
      "Explore General Nursing and Midwifery colleges available through state admission routes.",
    colleges: [
      {
        name: "Government College of Nursing, Bengaluru",
        slug: "government-college-of-nursing-bengaluru-gnm",
        location: "Bengaluru, Karnataka",
        type: "Government",
        description:
          "A nursing institution offering nursing education and practical training for students pursuing healthcare careers.",
      },
      {
        name: "Government College of Nursing, Mysuru",
        slug: "government-college-of-nursing-mysuru-gnm",
        location: "Mysuru, Karnataka",
        type: "Government",
        description:
          "A government nursing institution providing nursing education supported by clinical and practical learning.",
      },
      {
        name: "Government College of Nursing, Hassan",
        slug: "government-college-of-nursing-hassan-gnm",
        location: "Hassan, Karnataka",
        type: "Government",
        description:
          "An institution offering nursing education with practical exposure to hospital and healthcare environments.",
      },
      {
        name: "Government College of Nursing, Mandya",
        slug: "government-college-of-nursing-mandya-gnm",
        location: "Mandya, Karnataka",
        type: "Government",
        description:
          "A nursing education institution providing theoretical and practical healthcare training.",
      },
      {
        name: "Government College of Nursing, Ballari",
        slug: "government-college-of-nursing-ballari-gnm",
        location: "Ballari, Karnataka",
        type: "Government",
        description:
          "A government nursing institution offering nursing education with clinical and practical training opportunities.",
      },
      {
        name: "Bangalore Baptist Hospital College of Nursing",
        slug: "bangalore-baptist-hospital-college-of-nursing",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "A nursing institution associated with a healthcare facility offering nursing education and clinical exposure.",
      },
      {
        name: "St. John's College of Nursing",
        slug: "st-johns-college-of-nursing",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "A nursing institution offering professional nursing education supported by clinical and practical learning.",
      },
      {
        name: "Vydehi Institute of Nursing Sciences",
        slug: "vydehi-institute-of-nursing-sciences",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "A nursing institution offering nursing education with access to academic and clinical learning facilities.",
      },
    ],
  },

  {
    key: "central-bsc-nursing",
    quota: "CENTRAL QUOTA",
    course: "B.SC NURSING",
    description:
      "Explore nursing institutions and undergraduate nursing programs available through national-level admission routes.",
    colleges: [
      {
        name: "All India Institute of Medical Sciences, New Delhi",
        slug: "aiims-new-delhi-bsc-nursing",
        location: "New Delhi",
        type: "Government",
        description:
          "A centrally funded medical institution offering nursing education along with comprehensive healthcare and clinical training.",
      },
      {
        name: "All India Institute of Medical Sciences, Rishikesh",
        slug: "aiims-rishikesh-bsc-nursing",
        location: "Rishikesh, Uttarakhand",
        type: "Government",
        description:
          "A central medical institution providing nursing education supported by hospital-based clinical learning.",
      },
      {
        name: "All India Institute of Medical Sciences, Bhopal",
        slug: "aiims-bhopal-bsc-nursing",
        location: "Bhopal, Madhya Pradesh",
        type: "Government",
        description:
          "A centrally funded medical institution offering nursing education and clinical healthcare training.",
      },
      {
        name: "All India Institute of Medical Sciences, Bhubaneswar",
        slug: "aiims-bhubaneswar-bsc-nursing",
        location: "Bhubaneswar, Odisha",
        type: "Government",
        description:
          "A central medical institution offering nursing education supported by academic and clinical facilities.",
      },
      {
        name: "All India Institute of Medical Sciences, Jodhpur",
        slug: "aiims-jodhpur-bsc-nursing",
        location: "Jodhpur, Rajasthan",
        type: "Government",
        description:
          "A centrally funded institution providing nursing education and healthcare training opportunities.",
      },
      {
        name: "All India Institute of Medical Sciences, Patna",
        slug: "aiims-patna-bsc-nursing",
        location: "Patna, Bihar",
        type: "Government",
        description:
          "A central government institution offering nursing education with clinical and practical training.",
      },
      {
        name: "All India Institute of Medical Sciences, Raipur",
        slug: "aiims-raipur-bsc-nursing",
        location: "Raipur, Chhattisgarh",
        type: "Government",
        description:
          "A centrally funded medical institution offering nursing education and healthcare training.",
      },
      {
        name: "All India Institute of Medical Sciences, Deoghar",
        slug: "aiims-deoghar-bsc-nursing",
        location: "Deoghar, Jharkhand",
        type: "Government",
        description:
          "A central medical institution offering nursing education and practical healthcare learning.",
      },
    ],
  },

  {
    key: "central-msc-nursing",
    quota: "CENTRAL QUOTA",
    course: "M.SC NURSING",
    description:
      "Explore postgraduate nursing institutions and M.Sc Nursing programs available through central admission routes.",
    colleges: [
      {
        name: "All India Institute of Medical Sciences, New Delhi",
        slug: "aiims-new-delhi-msc-nursing",
        location: "New Delhi",
        type: "Government",
        description:
          "A leading central medical institution offering postgraduate nursing education across various nursing specializations.",
      },
      {
        name: "Postgraduate Institute of Medical Education and Research",
        slug: "pgimer-msc-nursing",
        location: "Chandigarh",
        type: "Government",
        description:
          "A major medical education and research institution offering advanced nursing education and clinical training.",
      },
      {
        name: "Jawaharlal Institute of Postgraduate Medical Education and Research",
        slug: "jipmer-msc-nursing",
        location: "Puducherry",
        type: "Government",
        description:
          "A centrally administered medical institution offering postgraduate nursing education and clinical learning.",
      },
      {
        name: "All India Institute of Medical Sciences, Rishikesh",
        slug: "aiims-rishikesh-msc-nursing",
        location: "Rishikesh, Uttarakhand",
        type: "Government",
        description:
          "A central medical institution offering postgraduate nursing education supported by clinical facilities.",
      },
      {
        name: "All India Institute of Medical Sciences, Bhopal",
        slug: "aiims-bhopal-msc-nursing",
        location: "Bhopal, Madhya Pradesh",
        type: "Government",
        description:
          "A centrally funded medical institution providing postgraduate nursing education and clinical training.",
      },
      {
        name: "All India Institute of Medical Sciences, Bhubaneswar",
        slug: "aiims-bhubaneswar-msc-nursing",
        location: "Bhubaneswar, Odisha",
        type: "Government",
        description:
          "A central medical institution offering postgraduate nursing programs with academic and clinical facilities.",
      },
      {
        name: "All India Institute of Medical Sciences, Jodhpur",
        slug: "aiims-jodhpur-msc-nursing",
        location: "Jodhpur, Rajasthan",
        type: "Government",
        description:
          "A central medical institution providing postgraduate nursing education and clinical learning opportunities.",
      },
      {
        name: "All India Institute of Medical Sciences, Patna",
        slug: "aiims-patna-msc-nursing",
        location: "Patna, Bihar",
        type: "Government",
        description:
          "A centrally funded medical institution offering postgraduate nursing education and healthcare training.",
      },
    ],
  },
];

export default function NursingCollegesPage() {
  const [activeCategory, setActiveCategory] =
    useState("state-bsc-nursing");

  const [search, setSearch] = useState("");

  const activeData =
    categories.find(
      (category) => category.key === activeCategory
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

  const handleCategoryChange = (key: string) => {
    setActiveCategory(key);
    setSearch("");
  };

  return (
    <main className="min-h-screen bg-white">

      {/* BREADCRUMB */}

      <BreadcrumbBanner
        title="Nursing Colleges"
        description="Explore nursing colleges, courses and admission opportunities"
      />

      {/* INTRO */}

      <section className="bg-[#f8f9fc] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="w-full text-center">

            <span className="inline-flex items-center gap-2 rounded-full bg-[#2E3281]/10 px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] text-[#2E3281]">
              <HeartPulse size={16} />
              Nursing Admissions
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-[#2E3281] sm:text-4xl md:text-5xl">
              Find The Right Nursing College
            </h1>

            <p className="mt-5 text-[16px] leading-7 text-slate-600">
              Explore nursing colleges based on your preferred
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
                      activeCategory === category.key;

                    return (
                      <button
                        key={category.key}
                        type="button"
                        onClick={() =>
                          handleCategoryChange(category.key)
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
                    <HeartPulse size={21} />
                  </div>

                  <h3 className="mt-4 font-bold">
                    Need Guidance?
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-red-100">
                    Get guidance on nursing courses, colleges,
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

              {/* SEARCH HEADER */}

              <div className="mb-7 rounded-2xl border border-slate-200 bg-[#f8f9fc] p-5">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#a71320]">
                      {activeData.quota}
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-[#2E3281] sm:text-3xl">
                      {activeData.course} Nursing Colleges
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
                      onChange={(event) =>
                        setSearch(event.target.value)
                      }
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
                      key={college.slug}
                      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2E3281]/30 hover:shadow-xl"
                    >

                      {/* TOP BORDER */}

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

                      {/* CARD FOOTER */}

                      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">

                        <span className="text-xs font-medium text-slate-400">
                          {activeData.course} Admission
                        </span>

                        <Link
                          href={`/nursing-colleges/${college.slug}`}
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

                /* NO RESULTS */

                <div className="rounded-2xl border border-dashed border-slate-300 bg-[#f8f9fc] px-6 py-16 text-center">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2E3281]/10 text-[#2E3281]">

                    <Search size={24} />

                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#2E3281]">
                    No Colleges Found
                  </h3>

                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                    We could not find a nursing college matching
                    your search. Try searching with a different
                    name or location.
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
                <HeartPulse size={28} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                Need Help Choosing Your Nursing College?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                Get personalised guidance on nursing courses,
                college options, counselling and admission
                procedures.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#2E3281] transition-all hover:bg-[#a71320] hover:text-white"
              >
                Get Nursing Admission Guidance
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}