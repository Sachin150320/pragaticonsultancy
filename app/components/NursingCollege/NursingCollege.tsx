"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  GraduationCap,

  HeartPulse,
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
  description: string;
  image: string;
  logo: string;
};

const colleges: College[] = [
  {
    id: 101,
    name: "Government College of Nursing, Bengaluru",
    slug: "government-college-of-nursing-bengaluru",
    location: "Bengaluru, Karnataka",
    type: "Government",
    description:
      "A government nursing institution offering quality nursing education with clinical and practical training.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=karunadu.karnataka.gov.in&sz=128",
  },
  {
    id: 102,
    name: "Government College of Nursing, Mysuru",
    slug: "government-college-of-nursing-mysuru",
    location: "Mysuru, Karnataka",
    type: "Government",
    description:
      "A government nursing college providing undergraduate education with clinical and healthcare learning.",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=karunadu.karnataka.gov.in&sz=128",
  },
  {
    id: 103,
    name: "Government College of Nursing, Hassan",
    slug: "government-college-of-nursing-hassan",
    location: "Hassan, Karnataka",
    type: "Government",
    description:
      "A nursing institution offering professional education with practical and hospital-based training.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=karunadu.karnataka.gov.in&sz=128",
  },
  {
    id: 104,
    name: "Government College of Nursing, Mandya",
    slug: "government-college-of-nursing-mandya",
    location: "Mandya, Karnataka",
    type: "Government",
    description:
      "A government nursing college offering nursing education with practical healthcare exposure.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=karunadu.karnataka.gov.in&sz=128",
  },
  {
    id: 105,
    name: "Government College of Nursing, Ballari",
    slug: "government-college-of-nursing-ballari",
    location: "Ballari, Karnataka",
    type: "Government",
    description:
      "A government nursing institution providing nursing education and clinical training opportunities.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=karunadu.karnataka.gov.in&sz=128",
  },
  {
    id: 106,
    name: "Government College of Nursing, Shivamogga",
    slug: "government-college-of-nursing-shivamogga",
    location: "Shivamogga, Karnataka",
    type: "Government",
    description:
      "A nursing education institution offering undergraduate nursing programs with clinical exposure.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=karunadu.karnataka.gov.in&sz=128",
  },
  {
    id: 107,
    name: "Government College of Nursing, Belagavi",
    slug: "government-college-of-nursing-belagavi",
    location: "Belagavi, Karnataka",
    type: "Government",
    description:
      "A government nursing institution providing nursing education and practical healthcare training.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=karunadu.karnataka.gov.in&sz=128",
  },
  {
    id: 108,
    name: "Government College of Nursing, Kalaburagi",
    slug: "government-college-of-nursing-kalaburagi",
    location: "Kalaburagi, Karnataka",
    type: "Government",
    description:
      "A government nursing institution offering nursing education with clinical learning opportunities.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=karunadu.karnataka.gov.in&sz=128",
  },

  {
    id: 109,
    name: "Bangalore Baptist Hospital College of Nursing",
    slug: "bangalore-baptist-hospital-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    description:
      "A nursing institution associated with a healthcare facility offering academic and clinical learning.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=bbh.org.in&sz=128",
  },
  {
    id: 110,
    name: "St. John's College of Nursing",
    slug: "st-johns-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    description:
      "A professional nursing institution offering nursing education with strong clinical learning opportunities.",
    image:
      "https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=stjohns.in&sz=128",
  },
  {
    id: 111,
    name: "Vydehi Institute of Nursing Sciences",
    slug: "vydehi-institute-of-nursing-sciences",
    location: "Bengaluru, Karnataka",
    type: "Private",
    description:
      "A nursing institution offering professional education supported by academic and clinical facilities.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=vydehi.edu.in&sz=128",
  },

  {
    id: 112,
    name: "AIIMS New Delhi",
    slug: "aiims-new-delhi-bsc-nursing",
    location: "New Delhi",
    type: "Government",
    description:
      "A leading central medical institution offering nursing education with extensive clinical learning facilities.",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=aiims.edu&sz=128",
  },
  {
    id: 113,
    name: "AIIMS Rishikesh",
    slug: "aiims-rishikesh-bsc-nursing",
    location: "Rishikesh, Uttarakhand",
    type: "Government",
    description:
      "A central medical institution providing nursing education supported by hospital-based clinical learning.",
    image:
      "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=aiimsrishikesh.edu.in&sz=128",
  },
  {
    id: 114,
    name: "AIIMS Bhopal",
    slug: "aiims-bhopal-bsc-nursing",
    location: "Bhopal, Madhya Pradesh",
    type: "Government",
    description:
      "A centrally funded medical institution offering nursing education and clinical healthcare training.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=aiimsbhopal.edu.in&sz=128",
  },
  {
    id: 115,
    name: "AIIMS Bhubaneswar",
    slug: "aiims-bhubaneswar-bsc-nursing",
    location: "Bhubaneswar, Odisha",
    type: "Government",
    description:
      "A central medical institution offering nursing programs with academic and clinical facilities.",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=aiimsbhubaneswar.nic.in&sz=128",
  },
  {
    id: 116,
    name: "AIIMS Jodhpur",
    slug: "aiims-jodhpur-bsc-nursing",
    location: "Jodhpur, Rajasthan",
    type: "Government",
    description:
      "A central medical institution providing nursing education and healthcare training opportunities.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=aiimsjodhpur.edu.in&sz=128",
  },
  {
    id: 117,
    name: "AIIMS Patna",
    slug: "aiims-patna-bsc-nursing",
    location: "Patna, Bihar",
    type: "Government",
    description:
      "A central government institution offering nursing education with clinical and practical training.",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=aiimspatna.edu.in&sz=128",
  },
  {
    id: 118,
    name: "AIIMS Raipur",
    slug: "aiims-raipur-bsc-nursing",
    location: "Raipur, Chhattisgarh",
    type: "Government",
    description:
      "A centrally funded medical institution offering nursing education and healthcare training.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=aiimsraipur.edu.in&sz=128",
  },
  {
    id: 119,
    name: "AIIMS Deoghar",
    slug: "aiims-deoghar-bsc-nursing",
    location: "Deoghar, Jharkhand",
    type: "Government",
    description:
      "A central medical institution offering nursing education and practical healthcare learning.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=aiimsdeoghar.edu.in&sz=128",
  },

  {
    id: 120,
    name: "PGIMER Chandigarh",
    slug: "pgimer-msc-nursing",
    location: "Chandigarh",
    type: "Government",
    description:
      "A major medical education and research institution offering advanced nursing education and clinical training.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=pgimer.edu.in&sz=128",
  },
  {
    id: 121,
    name: "JIPMER Puducherry",
    slug: "jipmer-msc-nursing",
    location: "Puducherry",
    type: "Government",
    description:
      "A centrally administered medical institution offering advanced nursing education and clinical learning.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=jipmer.edu.in&sz=128",
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
        college.type.toLowerCase().includes(value)
    );
  }, [search]);

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

            <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-7 text-slate-600">
              Explore nursing colleges and choose the right institution
              based on your preferred course, location and admission
              requirements.
            </p>

          </div>

        </div>

      </section>

      {/* COLLEGE SECTION */}

      <section className="bg-white py-14 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* HEADER */}





          <div className="mb-8 rounded-2xl border border-slate-200 bg-[#f8f9fc] p-5">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#a71320]">
                  Nursing Education
                </p>

                <h2 className="mt-1 text-2xl font-bold text-[#2E3281] sm:text-3xl">
                  Nursing Colleges
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Explore government and private nursing colleges offering
                  undergraduate and postgraduate nursing programs.
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
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search college..."
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#2E3281] focus:ring-2 focus:ring-[#2E3281]/10"
                />
              </div>
            </div>
          </div>





          {/* RESULT COUNT */}

          <div className="mb-6 flex items-center justify-between">


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

                  <div className="relative h-44 overflow-hidden bg-slate-100">

                    <img
                      src={college.image}
                      alt={college.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* TYPE */}

                    <span
                      className={`absolute right-3 top-3 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide ${college.type === "Government"
                          ? "bg-[#2E3281] text-white"
                          : "bg-[#a71320] text-white"
                        }`}
                    >
                      {college.type}
                    </span>

                  </div>

                  {/* CONTENT */}

                  <div className="relative flex flex-1 flex-col p-5">

                    {/* LOGO */}

                    <div className="-mt-12 mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border-4 border-white bg-white shadow-md">

                      <img
                        src={college.logo}
                        alt={`${college.name} logo`}
                        className="h-10 w-10 object-contain"
                        loading="lazy"
                      />

                    </div>

                    {/* NAME */}

                    <h3 className="text-lg font-bold leading-7 text-[#2E3281] transition-colors duration-300 group-hover:text-[#a71320]">
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
                        <ArrowRight size={14} />
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
                We could not find a nursing college matching your
                search. Try searching with a different name or location.
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
                college options, counselling and admission procedures.
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