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
    key: "state-mbbs",
    quota: "STATE QUOTA",
    course: "MBBS",
    description:
      "Explore MBBS colleges available through state counselling and understand your admission options.",
    colleges: [
      {
        name: "Bangalore Medical College and Research Institute",
        slug: "bangalore-medical-college-and-research-institute",
        location: "Bengaluru, Karnataka",
        type: "Government",
        description:
          "A leading government medical institution in Bengaluru offering undergraduate medical education with extensive clinical exposure.",
      },
      {
        name: "Mysore Medical College and Research Institute",
        slug: "mysore-medical-college-and-research-institute",
        location: "Mysuru, Karnataka",
        type: "Government",
        description:
          "An established government medical college providing MBBS education along with practical clinical training.",
      },
      {
        name: "Mandya Institute of Medical Sciences",
        slug: "mandya-institute-of-medical-sciences",
        location: "Mandya, Karnataka",
        type: "Government",
        description:
          "A government medical institution offering MBBS education supported by hospital-based clinical learning.",
      },
      {
        name: "Hassan Institute of Medical Sciences",
        slug: "hassan-institute-of-medical-sciences",
        location: "Hassan, Karnataka",
        type: "Government",
        description:
          "Government medical college providing undergraduate medical education and clinical exposure through its teaching facilities.",
      },
      {
        name: "Belagavi Institute of Medical Sciences",
        slug: "belagavi-institute-of-medical-sciences",
        location: "Belagavi, Karnataka",
        type: "Government",
        description:
          "A government medical institution providing undergraduate medical education and healthcare training.",
      },
      {
        name: "Vijayanagar Institute of Medical Sciences",
        slug: "vijayanagar-institute-of-medical-sciences",
        location: "Ballari, Karnataka",
        type: "Government",
        description:
          "An established government medical institution offering MBBS education and clinical learning opportunities.",
      },
      {
        name: "Shimoga Institute of Medical Sciences",
        slug: "shimoga-institute-of-medical-sciences",
        location: "Shivamogga, Karnataka",
        type: "Government",
        description:
          "A government medical college providing undergraduate education with clinical training through its associated facilities.",
      },
      {
        name: "Gulbarga Institute of Medical Sciences",
        slug: "gulbarga-institute-of-medical-sciences",
        location: "Kalaburagi, Karnataka",
        type: "Government",
        description:
          "Government medical institution offering MBBS education and practical healthcare training in North Karnataka.",
      },
    ],
  },

  {
    key: "state-pg",
    quota: "STATE QUOTA",
    course: "MD/MS",
    description:
      "Explore postgraduate medical colleges and programs available through state counselling.",
    colleges: [
      {
        name: "Bangalore Medical College and Research Institute",
        slug: "bangalore-medical-college-and-research-institute-pg",
        location: "Bengaluru, Karnataka",
        type: "Government",
        description:
          "A prominent medical institution offering postgraduate medical education across multiple clinical and non-clinical specialties.",
      },
      {
        name: "Mysore Medical College and Research Institute",
        slug: "mysore-medical-college-and-research-institute-pg",
        location: "Mysuru, Karnataka",
        type: "Government",
        description:
          "Established medical college providing postgraduate education with extensive clinical and academic exposure.",
      },
      {
        name: "Karnataka Institute of Medical Sciences",
        slug: "karnataka-institute-of-medical-sciences",
        location: "Hubballi, Karnataka",
        type: "Government",
        description:
          "A government medical institution offering postgraduate medical education and hospital-based clinical training.",
      },
      {
        name: "Vijayanagar Institute of Medical Sciences",
        slug: "vijayanagar-institute-of-medical-sciences-pg",
        location: "Ballari, Karnataka",
        type: "Government",
        description:
          "Medical institution offering postgraduate programs supported by clinical departments and teaching facilities.",
      },
      {
        name: "Mysore Medical College",
        slug: "mysore-medical-college",
        location: "Mysuru, Karnataka",
        type: "Government",
        description:
          "An established medical education centre with postgraduate opportunities and clinical learning facilities.",
      },
      {
        name: "Kempegowda Institute of Medical Sciences",
        slug: "kempegowda-institute-of-medical-sciences",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "A Bengaluru medical institution providing postgraduate medical education with academic and clinical facilities.",
      },
      {
        name: "M.S. Ramaiah Medical College",
        slug: "ms-ramaiah-medical-college",
        location: "Bengaluru, Karnataka",
        type: "Private",
        description:
          "Medical college in Bengaluru offering postgraduate medical education across a range of specialties.",
      },
      {
        name: "JSS Medical College",
        slug: "jss-medical-college",
        location: "Mysuru, Karnataka",
        type: "Private",
        description:
          "Medical institution offering postgraduate education supported by teaching hospital and clinical departments.",
      },
    ],
  },

  {
    key: "central-mbbs",
    quota: "CENTRAL QUOTA",
    course: "MBBS",
    description:
      "Explore medical colleges and understand MBBS admission opportunities through central counselling.",
    colleges: [
      {
        name: "Bangalore Medical College and Research Institute",
        slug: "bangalore-medical-college-and-research-institute-central",
        location: "Bengaluru, Karnataka",
        type: "Government",
        description:
          "A major government medical institution in Bengaluru providing undergraduate medical education and clinical training.",
      },
      {
        name: "All India Institute of Medical Sciences, Kalyani",
        slug: "all-india-institute-of-medical-sciences-kalyani",
        location: "Kalyani, West Bengal",
        type: "Government",
        description:
          "An AIIMS institution offering undergraduate medical education along with comprehensive healthcare and clinical training.",
      },
      {
        name: "All India Institute of Medical Sciences, Bibinagar",
        slug: "all-india-institute-of-medical-sciences-bibinagar",
        location: "Bibinagar, Telangana",
        type: "Government",
        description:
          "A centrally established medical institution offering undergraduate medical education and advanced healthcare facilities.",
      },
      {
        name: "All India Institute of Medical Sciences, Mangalagiri",
        slug: "all-india-institute-of-medical-sciences-mangalagiri",
        location: "Mangalagiri, Andhra Pradesh",
        type: "Government",
        description:
          "A central government medical institution providing undergraduate medical education and clinical exposure.",
      },
      {
        name: "All India Institute of Medical Sciences, Nagpur",
        slug: "all-india-institute-of-medical-sciences-nagpur",
        location: "Nagpur, Maharashtra",
        type: "Government",
        description:
          "Central government medical institution providing medical education, research and clinical healthcare training.",
      },
      {
        name: "All India Institute of Medical Sciences, Raebareli",
        slug: "all-india-institute-of-medical-sciences-raebareli",
        location: "Raebareli, Uttar Pradesh",
        type: "Government",
        description:
          "An AIIMS institution offering medical education with clinical training and healthcare services.",
      },
      {
        name: "All India Institute of Medical Sciences, Gorakhpur",
        slug: "all-india-institute-of-medical-sciences-gorakhpur",
        location: "Gorakhpur, Uttar Pradesh",
        type: "Government",
        description:
          "A central medical institution offering undergraduate medical education and hospital-based clinical training.",
      },
      {
        name: "All India Institute of Medical Sciences, Deoghar",
        slug: "all-india-institute-of-medical-sciences-deoghar",
        location: "Deoghar, Jharkhand",
        type: "Government",
        description:
          "A centrally funded medical institution offering undergraduate medical education and healthcare training.",
      },
    ],
  },

  {
    key: "central-pg",
    quota: "CENTRAL QUOTA",
    course: "MD/MS",
    description:
      "Explore postgraduate medical institutions and understand opportunities through central counselling.",
    colleges: [
      {
        name: "All India Institute of Medical Sciences, New Delhi",
        slug: "all-india-institute-of-medical-sciences-new-delhi",
        location: "New Delhi",
        type: "Government",
        description:
          "A premier central medical institution offering postgraduate medical education across numerous specialties.",
      },
      {
        name: "Postgraduate Institute of Medical Education and Research",
        slug: "postgraduate-institute-of-medical-education-and-research",
        location: "Chandigarh",
        type: "Government",
        description:
          "A leading medical education and research institution offering postgraduate and super-specialty programs.",
      },
      {
        name: "Jawaharlal Institute of Postgraduate Medical Education and Research",
        slug: "jawaharlal-institute-of-postgraduate-medical-education-and-research",
        location: "Puducherry",
        type: "Government",
        description:
          "A centrally administered medical institution offering postgraduate medical education and clinical training.",
      },
      {
        name: "All India Institute of Medical Sciences, Rishikesh",
        slug: "all-india-institute-of-medical-sciences-rishikesh",
        location: "Rishikesh, Uttarakhand",
        type: "Government",
        description:
          "An AIIMS institution providing postgraduate medical education supported by advanced clinical departments.",
      },
      {
        name: "All India Institute of Medical Sciences, Bhopal",
        slug: "all-india-institute-of-medical-sciences-bhopal",
        location: "Bhopal, Madhya Pradesh",
        type: "Government",
        description:
          "Central government medical institution providing postgraduate education and clinical healthcare training.",
      },
      {
        name: "All India Institute of Medical Sciences, Bhubaneswar",
        slug: "all-india-institute-of-medical-sciences-bhubaneswar",
        location: "Bhubaneswar, Odisha",
        type: "Government",
        description:
          "An AIIMS institution offering postgraduate medical education with clinical and research facilities.",
      },
      {
        name: "All India Institute of Medical Sciences, Jodhpur",
        slug: "all-india-institute-of-medical-sciences-jodhpur",
        location: "Jodhpur, Rajasthan",
        type: "Government",
        description:
          "Central medical institution offering postgraduate programs with academic, clinical and research opportunities.",
      },
      {
        name: "All India Institute of Medical Sciences, Patna",
        slug: "all-india-institute-of-medical-sciences-patna",
        location: "Patna, Bihar",
        type: "Government",
        description:
          "A central government medical institution offering postgraduate medical education and clinical training.",
      },
    ],
  },
];

export default function MedicalCollegesPage() {
  const [activeCategory, setActiveCategory] = useState("state-mbbs");
  const [search, setSearch] = useState("");

  const activeData =
    categories.find((category) => category.key === activeCategory) ||
    categories[0];

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
      <BreadcrumbBanner
        title="Medical Colleges"
        description="Explore medical colleges, courses and admission opportunities"
      />

      <section className="bg-[#f8f9fc] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#2E3281]/10 px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] text-[#2E3281]">
              <GraduationCap size={16} />
              Medical Admissions
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-[#2E3281] sm:text-4xl md:text-5xl">
              Find The Right Medical{" "}
              <span className="text-[#2E3281]">College</span>
            </h1>

            <p className="mt-5 text-[16px] leading-7 text-slate-600">
              Explore medical colleges based on your preferred course
              and admission quota. Select an option below to view
              the relevant college list.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
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
                    href="/contact-us"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-[#a71320] transition hover:bg-slate-100"
                  >
                    Talk To Us
                    <ArrowRight size={16} />
                  </Link>

                </div>
              </div>
            </aside>

            <div>
              <div className="mb-7 rounded-2xl border border-slate-200 bg-[#f8f9fc] p-5">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#a71320]">
                      {activeData.quota}
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-[#2E3281]">
                      {activeData.course} Colleges
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {activeData.description}
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
                      onChange={(event) =>
                        setSearch(event.target.value)
                      }
                      placeholder="Search college..."
                      className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#2E3281] focus:ring-2 focus:ring-[#2E3281]/10"
                    />
                  </div>
                </div>
              </div>

              {filteredColleges.length > 0 ? (
                <div className="grid gap-5 md:grid-cols-2">
                  {filteredColleges.map((college) => (
                    <div
                      key={college.slug}
                      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2E3281]/30 hover:shadow-xl"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2E3281]/10 text-[#2E3281] transition-colors group-hover:bg-[#2E3281] group-hover:text-white">
                          <Building2 size={23} />
                        </div>

                        <span className="rounded-full bg-[#a71320]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#a71320]">
                          {college.type}
                        </span>
                      </div>

                      <h3 className="mt-5 text-xl font-bold leading-snug text-[#2E3281]">
                        {college.name}
                      </h3>

                      <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                        <MapPin
                          size={16}
                          className="shrink-0 text-[#a71320]"
                        />
                        <span>{college.location}</span>
                      </div>

                      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                        {college.description}
                      </p>

                      <Link
                        href={`/medical-colleges/${college.slug}`}
                        className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-[#2E3281] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#a71320]"
                      >
                        View Details
                        <ArrowRight
                          size={17}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-[#f8f9fc] px-6 py-16 text-center">
                  <Search
                    size={32}
                    className="mx-auto text-slate-400"
                  />

                  <h3 className="mt-4 text-xl font-bold text-[#2E3281]">
                    No Colleges Found
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Try searching with another college name, location
                    or institution type.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fc] py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-3xl bg-[#2E3281] px-6 py-10 text-center sm:px-10 sm:py-14">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
              <GraduationCap size={27} />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
              Need Help Choosing A Medical College?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
              Get guidance on medical courses, counselling,
              eligibility and admission opportunities.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#2E3281] transition hover:bg-[#a71320] hover:text-white"
            >
              Talk To Our Counsellor
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}