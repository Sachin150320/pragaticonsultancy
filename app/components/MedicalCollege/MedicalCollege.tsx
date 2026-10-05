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
    name: "Bangalore Medical College and Research Institute",
    slug: "bangalore-medical-college-and-research-institute",
    location: "Bengaluru, Karnataka",
    type: "Government",
    description:
      "A leading government medical institution offering quality medical education with strong clinical exposure and healthcare facilities.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=bbmcri.karnataka.gov.in&sz=128",
  },
  {
    name: "Mysore Medical College and Research Institute",
    slug: "mysore-medical-college-and-research-institute",
    location: "Mysuru, Karnataka",
    type: "Government",
    description:
      "An established medical institution offering undergraduate and postgraduate medical education with practical clinical training.",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=mmcri.edu.in&sz=128",
  },
  {
    name: "Mandya Institute of Medical Sciences",
    slug: "mandya-institute-of-medical-sciences",
    location: "Mandya, Karnataka",
    type: "Government",
    description:
      "A government medical college providing medical education supported by hospital-based clinical learning and training.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=mimsmandya.karnataka.gov.in&sz=128",
  },
  {
    name: "Hassan Institute of Medical Sciences",
    slug: "hassan-institute-of-medical-sciences",
    location: "Hassan, Karnataka",
    type: "Government",
    description:
      "Government medical institution offering undergraduate medical education with clinical exposure and healthcare training.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=hims-hassan.karnataka.gov.in&sz=128",
  },
  {
    name: "Belagavi Institute of Medical Sciences",
    slug: "belagavi-institute-of-medical-sciences",
    location: "Belagavi, Karnataka",
    type: "Government",
    description:
      "A government medical institution providing undergraduate medical education and practical healthcare training.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=bimsbelgaum.karnataka.gov.in&sz=128",
  },
  {
    name: "Vijayanagar Institute of Medical Sciences",
    slug: "vijayanagar-institute-of-medical-sciences",
    location: "Ballari, Karnataka",
    type: "Government",
    description:
      "An established government medical institution offering medical education and clinical learning opportunities.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=vimsbellary.karnataka.gov.in&sz=128",
  },
  {
    name: "Shimoga Institute of Medical Sciences",
    slug: "shimoga-institute-of-medical-sciences",
    location: "Shivamogga, Karnataka",
    type: "Government",
    description:
      "A government medical college providing undergraduate education with clinical training through associated healthcare facilities.",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=sims-shimoga.karnataka.gov.in&sz=128",
  },
  {
    name: "Gulbarga Institute of Medical Sciences",
    slug: "gulbarga-institute-of-medical-sciences",
    location: "Kalaburagi, Karnataka",
    type: "Government",
    description:
      "A government medical institution offering medical education and practical healthcare training in North Karnataka.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=gims-gulbarga.karnataka.gov.in&sz=128",
  },
  {
    name: "Karnataka Institute of Medical Sciences",
    slug: "karnataka-institute-of-medical-sciences",
    location: "Hubballi, Karnataka",
    type: "Government",
    description:
      "A major government medical institution offering medical education, clinical training and postgraduate opportunities.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=kims.karnataka.gov.in&sz=128",
  },
  {
    name: "Kempegowda Institute of Medical Sciences",
    slug: "kempegowda-institute-of-medical-sciences",
    location: "Bengaluru, Karnataka",
    type: "Private",
    description:
      "A reputed Bengaluru medical institution offering medical education with academic, clinical and healthcare facilities.",
    image:
      "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=kimsbangalore.edu.in&sz=128",
  },
  {
    name: "M.S. Ramaiah Medical College",
    slug: "ms-ramaiah-medical-college",
    location: "Bengaluru, Karnataka",
    type: "Private",
    description:
      "A well-known medical college offering undergraduate and postgraduate programs with strong clinical exposure.",
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=msrmc.ac.in&sz=128",
  },
  {
    name: "JSS Medical College",
    slug: "jss-medical-college",
    location: "Mysuru, Karnataka",
    type: "Private",
    description:
      "A medical institution offering undergraduate and postgraduate education supported by teaching hospital facilities.",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=jssuni.edu.in&sz=128",
  },
  {
    name: "All India Institute of Medical Sciences, New Delhi",
    slug: "all-india-institute-of-medical-sciences-new-delhi",
    location: "New Delhi",
    type: "Government",
    description:
      "A premier medical institution offering undergraduate, postgraduate and advanced medical education and research.",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=aiims.edu&sz=128",
  },
  {
    name: "All India Institute of Medical Sciences, Kalyani",
    slug: "all-india-institute-of-medical-sciences-kalyani",
    location: "Kalyani, West Bengal",
    type: "Government",
    description:
      "A centrally established medical institution offering medical education along with clinical and healthcare facilities.",
    image:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=aiimskalyani.edu.in&sz=128",
  },
  {
    name: "All India Institute of Medical Sciences, Bibinagar",
    slug: "all-india-institute-of-medical-sciences-bibinagar",
    location: "Bibinagar, Telangana",
    type: "Government",
    description:
      "A central government medical institution offering medical education, healthcare services and clinical training.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=aiimsbibinagar.edu.in&sz=128",
  },
  {
    name: "All India Institute of Medical Sciences, Mangalagiri",
    slug: "all-india-institute-of-medical-sciences-mangalagiri",
    location: "Mangalagiri, Andhra Pradesh",
    type: "Government",
    description:
      "A central medical institution providing medical education with clinical exposure and modern healthcare facilities.",
    image:
      "https://images.unsplash.com/photo-1580281657527-47f249e8f8f5?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=aiimsmangalagiri.edu.in&sz=128",
  },
  {
    name: "All India Institute of Medical Sciences, Nagpur",
    slug: "all-india-institute-of-medical-sciences-nagpur",
    location: "Nagpur, Maharashtra",
    type: "Government",
    description:
      "A central government medical institution offering medical education, research and clinical healthcare training.",
    image:
      "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=aiimsnagpur.edu.in&sz=128",
  },
  {
    name: "All India Institute of Medical Sciences, Raebareli",
    slug: "all-india-institute-of-medical-sciences-raebareli",
    location: "Raebareli, Uttar Pradesh",
    type: "Government",
    description:
      "An AIIMS institution offering medical education with clinical training and comprehensive healthcare services.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=aiimsrbl.edu.in&sz=128",
  },
  {
    name: "All India Institute of Medical Sciences, Gorakhpur",
    slug: "all-india-institute-of-medical-sciences-gorakhpur",
    location: "Gorakhpur, Uttar Pradesh",
    type: "Government",
    description:
      "A central medical institution offering undergraduate and postgraduate education with hospital-based clinical training.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=aiimsgorakhpur.edu.in&sz=128",
  },
  {
    name: "All India Institute of Medical Sciences, Deoghar",
    slug: "all-india-institute-of-medical-sciences-deoghar",
    location: "Deoghar, Jharkhand",
    type: "Government",
    description:
      "A centrally funded medical institution providing medical education, clinical training and healthcare services.",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=aiimsdeoghar.edu.in&sz=128",
  },
  {
    name: "Postgraduate Institute of Medical Education and Research",
    slug: "postgraduate-institute-of-medical-education-and-research",
    location: "Chandigarh",
    type: "Government",
    description:
      "A leading medical education and research institution offering postgraduate and advanced medical programs.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=pgimer.edu.in&sz=128",
  },
  {
    name: "Jawaharlal Institute of Postgraduate Medical Education and Research",
    slug: "jawaharlal-institute-of-postgraduate-medical-education-and-research",
    location: "Puducherry",
    type: "Government",
    description:
      "A centrally administered medical institution offering postgraduate education, clinical training and research opportunities.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=jipmer.edu.in&sz=128",
  },
  {
    name: "All India Institute of Medical Sciences, Rishikesh",
    slug: "all-india-institute-of-medical-sciences-rishikesh",
    location: "Rishikesh, Uttarakhand",
    type: "Government",
    description:
      "An AIIMS institution offering medical education supported by advanced clinical departments and healthcare facilities.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=aiimsrishikesh.edu.in&sz=128",
  },
  {
    name: "All India Institute of Medical Sciences, Bhopal",
    slug: "all-india-institute-of-medical-sciences-bhopal",
    location: "Bhopal, Madhya Pradesh",
    type: "Government",
    description:
      "A central government medical institution providing medical education, clinical training and healthcare services.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=aiimsbhopal.edu.in&sz=128",
  },
  {
    name: "All India Institute of Medical Sciences, Bhubaneswar",
    slug: "all-india-institute-of-medical-sciences-bhubaneswar",
    location: "Bhubaneswar, Odisha",
    type: "Government",
    description:
      "An AIIMS institution offering medical education with clinical, healthcare and research facilities.",
    image:
      "https://images.unsplash.com/photo-1580281657527-47f249e8f8f5?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=aiimsbhubaneswar.nic.in&sz=128",
  },
  {
    name: "All India Institute of Medical Sciences, Jodhpur",
    slug: "all-india-institute-of-medical-sciences-jodhpur",
    location: "Jodhpur, Rajasthan",
    type: "Government",
    description:
      "A central medical institution offering medical education with academic, clinical and research opportunities.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=aiimsjodhpur.edu.in&sz=128",
  },
  {
    name: "All India Institute of Medical Sciences, Patna",
    slug: "all-india-institute-of-medical-sciences-patna",
    location: "Patna, Bihar",
    type: "Government",
    description:
      "A central government medical institution offering medical education and clinical training across multiple specialties.",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=aiimspatna.edu.in&sz=128",
  },
];

export default function MedicalCollegesPage() {
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
        title="Medical Colleges"
        description="Explore medical colleges, courses and admission opportunities"
      />

      {/* INTRO */}

      <section className="bg-[#f8f9fc] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#2E3281]/10 px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] text-[#2E3281]">
              <GraduationCap size={16} />
              Medical Admissions
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-[#2E3281] sm:text-4xl md:text-5xl">
              Find The Right Medical College
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-7 text-slate-600">
              Explore medical colleges and discover suitable options for
              MBBS, MD and MS admissions based on your preferred location
              and college type.
            </p>
          </div>
        </div>
      </section>

      {/* COLLEGE LIST */}

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* SEARCH HEADER */}

          <div className="mb-8 rounded-2xl border border-slate-200 bg-[#f8f9fc] p-5">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#a71320]">
                  Medical Education
                </p>

                <h2 className="mt-1 text-2xl font-bold text-[#2E3281] sm:text-3xl">
                  Medical Colleges
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Explore government and private medical colleges
                  available for admission.
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

          {/* RESULT COUNT */}

          <div className="mb-5 flex items-center justify-between">
           

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
                  key={college.slug}
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
                        href={`/medical-colleges/${college.slug}`}
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
                We could not find a medical college matching your
                search. Try searching with a different name or
                location.
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
                <GraduationCap size={28} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                Need Help Choosing Your Medical College?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                Get personalised guidance on medical courses,
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