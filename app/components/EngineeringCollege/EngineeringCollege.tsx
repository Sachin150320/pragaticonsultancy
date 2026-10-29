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

// Local images: /public/images/Engg-collegs/{id}.webp
// Local logos:  /public/images/Engg-collegs/logo/{id}.webp
const campusImage = (id: number) => `/images/Engg-collegs/${id}.webp`;

const collegeLogo = (id: number) => `/images/Engg-collegs/logo/${id}.webp`;

const collegeList = [
  ["Acharya Institute of Technology", "Soladevanahalli, Bengaluru", "Private", "acharya-institute-of-technology"],
  ["Akash Institute of Engineering and Technology", "Devanahalli, Bengaluru Rural", "Private", "akash-institute-of-engineering-and-technology"],
  ["AMC Engineering College", "Bannerghatta Road, Bengaluru", "Private", "amc-engineering-college"],
  ["Atria Institute of Technology", "Hebbal, Bengaluru", "Private", "atria-institute-of-technology"],
  ["Bangalore Institute of Technology", "V. V. Puram, Bengaluru", "Private", "bangalore-institute-of-technology"],
  ["Bangalore Technological Institute", "Chikkanayakanahalli Dinne, Bengaluru", "Private", "bangalore-technological-institute"],
  ["BMS College of Engineering", "Basavanagudi, Bengaluru", "Private", "bms-college-of-engineering"],
  ["BMS Institute of Technology & Management", "Yelahanka, Bengaluru", "Private", "bms-institute-of-technology-management"],
  ["Brindavan College of Engineering", "Yelahanka, Bengaluru", "Private", "brindavan-college-of-engineering"],
  ["C.M.R. Institute of Technology", "Brookefield, Bengaluru", "Private", "cmr-institute-of-technology"],
  ["Cambridge Institute of Technology", "K.R. Puram, Bengaluru", "Private", "cambridge-institute-of-technology"],
  ["Dayananda Sagar Academy of Technology & Management", "Kanakapura Road, Bengaluru", "Private", "dayananda-sagar-academy-of-technology-management"],
  ["Dayananda Sagar College of Engineering", "Kumaraswamy Layout, Bengaluru", "Private", "dayananda-sagar-college-of-engineering"],
  ["East Point College of Engineering and Technology", "Avalahalli, Bengaluru", "Private", "east-point-college-of-engineering-and-technology"],
  ["East West Institute of Technology", "BEL Layout, Bengaluru", "Private", "east-west-institute-of-technology"],
  ["JSS Academy of Technical Education", "Kengeri Main Road, Bengaluru", "Private", "jss-academy-of-technical-education"],
  ["M.S. Engineering College", "Sadahalli, Bengaluru", "Private", "ms-engineering-college"],
  ["M.S. Ramaiah Institute of Technology", "MSR Nagar, Bengaluru", "Private", "ms-ramaiah-institute-of-technology"],
  ["R.V. College of Engineering", "Mysore Road, Bengaluru", "Private", "rv-college-of-engineering"],
  ["R.R. Institute of Technology", "Chikkabanavara, Bengaluru", "Private", "rr-institute-of-technology"],
  ["Raja Rajeswari College of Engineering", "Kumbalgodu, Bengaluru", "Private", "raja-rajeswari-college-of-engineering"],
  ["SJB Institute of Technology", "Kengeri, Bengaluru", "Private", "sjb-institute-of-technology"],
  ["S.E.A. College of Engineering & Technology", "K.R. Puram, Bengaluru", "Private", "sea-college-of-engineering-technology"],
  ["Sambhram Institute of Technology", "Jalahalli East, Bengaluru", "Private", "sambhram-institute-of-technology"],
  ["Sapthagiri NPS University", "Hesaraghatta Main Road, Bengaluru", "University", "sapthagiri-nps-university"],
  ["Sir M. Visvesvaraya Institute of Technology", "Yelahanka, Bengaluru", "Private", "sir-m-visvesvaraya-institute-of-technology"],
  ["Sri Krishna Institute of Technology", "Chikkabanavara, Bengaluru", "Private", "sri-krishna-institute-of-technology"],
  ["Sri Venkateshwara College of Engineering", "KIAL Road, Bengaluru", "Private", "sri-venkateshwara-college-of-engineering"],
  ["T. John Institute of Technology", "Bannerghatta Road, Bengaluru", "Private", "t-john-institute-of-technology"],
  ["REVA University", "Yelahanka, Bengaluru", "University", "reva-university"],
  ["Alliance College of Engineering & Design, Alliance University", "Anekal, Bengaluru", "University", "alliance-college-of-engineering-design"],
  ["Presidency University", "Yelahanka, Bengaluru", "University", "presidency-university"],
  ["CMR University", "Bagalur Chagalatti, Bengaluru", "University", "cmr-university"],
  ["M.S. Ramaiah University of Applied Sciences", "MSR Nagar, Bengaluru", "University", "ms-ramaiah-university-of-applied-sciences"],
  ["R.V. Institute of Technology and Management", "J.P. Nagar, Bengaluru", "Private", "rv-institute-of-technology-and-management"],
  ["BGS College of Engineering and Technology", "Mahalaxmipuram, Bengaluru", "Private", "bgs-college-of-engineering-and-technology"],
  ["Aditya College of Engineering and Technology", "Yelahanka, Bengaluru", "Private", "aditya-college-of-engineering-and-technology"],
  ["CMN Institute of Technology", "Off Magadi Road, Herohalli, Bengaluru", "Private", "cmn-institute-of-technology"],
  ["Ramaiah University College of Engineering", "Jigani, Bengaluru", "University", "ramaiah-university-college-of-engineering"],
  ["RNS Institute of Technology (RNSIT)", "Bengaluru", "Private", "rns-institute-of-technology"],
  ["R.V. University", "Bengaluru", "University", "rv-university"],
  ["BMS University", "Bengaluru", "University", "bms-university"],
] as const;

const colleges: College[] = collegeList.map(
  ([name, location, type, slug], index) => ({
    id: index + 1,
    name,
    location,
    type,
    description: `Explore courses, campus facilities and admission opportunities at ${name}. Contact Pragati Consultancy for guidance on college selection and admissions.`,
    image: campusImage(index + 1),
    logo: collegeLogo(index + 1),
    href: `/engineering-colleges/${slug}`,
  })
);

export default function EngineeringCollegesPage() {
  const [search, setSearch] = useState("");

  const filteredColleges = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) return colleges;

    return colleges.filter(
      (college) =>
        college.name.toLowerCase().includes(value) ||
        college.location.toLowerCase().includes(value) ||
        college.type.toLowerCase().includes(value)
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-white">
      <BreadcrumbBanner
        title="Top Engineering Colleges In Bangalore"
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

            <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-7 text-slate-600">
              Explore engineering colleges and universities across Bengaluru.
              Find the right institution based on your preferred course,
              location and admission requirements.
            </p>
          </div>
        </div>
      </section>

      {/* COLLEGE FINDER */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  aria-label="Search engineering colleges"
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

          {/* COLLEGE CARDS */}
          {filteredColleges.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredColleges.map((college) => (
                <article
                  key={college.id}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2E3281]/30 hover:shadow-xl"
                >
                  {/* CAMPUS IMAGE */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={college.image}
                      alt={`${college.name} campus`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

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
                    {/* COLLEGE LOGO */}
                    <div className="relative -mt-11 mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border-4 border-white bg-white shadow-md">
                      <img
                        src={college.logo}
                        alt={`${college.name} logo`}
                        className="h-11 w-11 object-contain"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>

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

      {/* ENGINEERING COLLEGES CONTENT */}
      <section className="bg-[#f8f9fc] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full text-center">
            <h2 className="text-2xl font-bold text-[#2E3281] sm:text-3xl">
              Engineering Colleges
            </h2>

            <p className="mx-auto mt-5 w-full text-[16px] leading-7 text-slate-600">
              Engineering offers opportunities across technology, computing,
              electronics, civil engineering, mechanical engineering and many
              other specialisations. Pragati Consultancy helps students explore
              suitable colleges, courses and admission pathways in Bengaluru.
              Contact our admission consultants for guidance with your college
              selection and application process.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
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