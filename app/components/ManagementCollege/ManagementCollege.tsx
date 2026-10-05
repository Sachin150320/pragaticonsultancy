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
    course: "BBA / MBA",
    description:
      "A well-established university offering management and business programs with a strong academic and professional learning environment.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=christuniversity.in&sz=128",
  },
  {
    id: 102,
    name: "Mount Carmel College",
    slug: "mount-carmel-college",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "BBA",
    description:
      "An established Bengaluru institution offering undergraduate programs in management, commerce and business-related disciplines.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=mccblr.edu.in&sz=128",
  },
  {
    id: 103,
    name: "Kristu Jayanti College",
    slug: "kristu-jayanti-college",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "BBA",
    description:
      "A Bengaluru-based institution offering business and management programs with academic learning and practical exposure.",
    image:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=kristujayanti.edu.in&sz=128",
  },
  {
    id: 104,
    name: "Jain University",
    slug: "jain-university",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "BBA / MBA",
    description:
      "A private university offering undergraduate and postgraduate programs in business administration and management.",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=jainuniversity.ac.in&sz=128",
  },
  {
    id: 105,
    name: "Presidency University",
    slug: "presidency-university",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "BBA / MBA",
    description:
      "A modern university offering management and business programs supported by contemporary academic facilities.",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=presidencyuniversity.in&sz=128",
  },
  {
    id: 106,
    name: "Alliance University",
    slug: "alliance-university",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "BBA / MBA",
    description:
      "A university offering business and management education across multiple areas with an industry-oriented learning approach.",
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=alliance.edu.in&sz=128",
  },
  {
    id: 107,
    name: "Acharya Institute of Graduate Studies",
    slug: "acharya-institute-of-graduate-studies",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "BBA / MBA",
    description:
      "An institution offering management, commerce and business-related programs with a focus on academic and professional development.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=acharya.ac.in&sz=128",
  },
  {
    id: 108,
    name: "REVA University",
    slug: "reva-university",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "BBA / MBA",
    description:
      "A university offering business administration and management programs with practical and industry-oriented learning opportunities.",
    image:
      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=reva.edu.in&sz=128",
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
    image:
      "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=eng.bangaloreuniversity.ac.in&sz=128",
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
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=bit-bangalore.edu.in&sz=128",
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
    image:
      "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=bmsce.ac.in&sz=128",
  },
  {
    id: 112,
    name: "M.S. Ramaiah University of Applied Sciences",
    slug: "ms-ramaiah-university-of-applied-sciences",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "MBA",
    description:
      "A university offering postgraduate business and management programs with practical and application-oriented education.",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=msruas.ac.in&sz=128",
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
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=iima.ac.in&sz=128",
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
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=iimb.ac.in&sz=128",
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
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=iimcal.ac.in&sz=128",
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
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=iiml.ac.in&sz=128",
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
    image:
      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=iimk.ac.in&sz=128",
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
    image:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=iimidr.ac.in&sz=128",
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
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=iimrohtak.ac.in&sz=128",
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
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=iimj.ac.in&sz=128",
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
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=iimbg.ac.in&sz=128",
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
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=iimranchi.ac.in&sz=128",
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
    image:
      "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=iimamritsar.ac.in&sz=128",
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
    image:
      "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=iimv.ac.in&sz=128",
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
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=iimshillong.ac.in&sz=128",
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
    image:
      "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=iimu.ac.in&sz=128",
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
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    logo:
      "https://www.google.com/s2/favicons?domain=iimtrichy.ac.in&sz=128",
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

            <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-7 text-slate-600">
              Explore management colleges and discover suitable
              BBA and MBA options based on your preferred location,
              course and college type.
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
                  Explore BBA and MBA colleges across India.
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
                  placeholder="Search college..."
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

                    {/* COURSE */}

                    <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#2E3281]">
                      {college.course}
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

                      <span>
                        {college.location}
                      </span>

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
                We could not find a management college matching
                your search. Try another college name, location or
                course.
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
                <BriefcaseBusiness size={28} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                Need Help Choosing Your Management College?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                Get personalised guidance on BBA, MBA, college
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