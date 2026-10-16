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

type CollegeInput = {
  name: string;
  location: string;
  type: string;
  domain?: string;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const campusImages = [
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1200&q=80",
];

const collegeData: CollegeInput[] = [
  // MEDICAL COLLEGES

  {
    name: "Bangalore Medical College and Research Institute",
    location: "Bengaluru, Karnataka",
    type: "Government",
    domain: "bmcri.karnataka.gov.in",
  },
  {
    name: "Mysore Medical College and Research Institute",
    location: "Mysuru, Karnataka",
    type: "Government",
    domain: "mmcri.karnataka.gov.in",
  },
  {
    name: "Karnataka Institute of Medical Sciences",
    location: "Hubballi, Karnataka",
    type: "Government",
    domain: "kimshubli.org",
  },
  {
    name: "Vijayanagar Institute of Medical Sciences",
    location: "Ballari, Karnataka",
    type: "Government",
    domain: "vims.ac.in",
  },
  {
    name: "Mandya Institute of Medical Sciences",
    location: "Mandya, Karnataka",
    type: "Government",
    domain: "mims.karnataka.gov.in",
  },
  {
    name: "Belgaum Institute of Medical Sciences",
    location: "Belagavi, Karnataka",
    type: "Government",
    domain: "bimsbelgaum.org",
  },
  {
    name: "Hassan Institute of Medical Sciences",
    location: "Hassan, Karnataka",
    type: "Government",
    domain: "hims-hassan.karnataka.gov.in",
  },
  {
    name: "Shimoga Institute of Medical Sciences",
    location: "Shivamogga, Karnataka",
    type: "Government",
    domain: "sims-shimoga.karnataka.gov.in",
  },
  {
    name: "Raichur Institute of Medical Sciences",
    location: "Raichur, Karnataka",
    type: "Government",
  },
  {
    name: "Bidar Institute of Medical Sciences",
    location: "Bidar, Karnataka",
    type: "Government",
  },
  {
    name: "Kidwai Cancer Institute",
    location: "Bengaluru, Karnataka",
    type: "Government",
    domain: "kidwai.karnataka.gov.in",
  },
  {
    name: "Indira Gandhi Institute of Child Health",
    location: "Bengaluru, Karnataka",
    type: "Government",
  },
  {
    name: "Employees State Insurance Corporation Medical College",
    location: "Kalaburagi, Karnataka",
    type: "Government",
  },
  {
    name: "Jaya Jagadguru Murugharajendra Medical College",
    location: "Davangere, Karnataka",
    type: "Private",
  },
  {
    name: "M.S. Ramaiah Medical College",
    location: "Bengaluru, Karnataka",
    type: "Private University",
    domain: "msrmc.ac.in",
  },
  {
    name: "Kempegowda Institute of Medical Sciences",
    location: "Bengaluru, Karnataka",
    type: "Private",
    domain: "kimsbangalore.edu.in",
  },
  {
    name: "Mahadevappa Rampure Medical College",
    location: "Kalaburagi, Karnataka",
    type: "Private",
    domain: "mrmedicalcollege.com",
  },
  {
    name: "Adichunchanagiri Institute of Medical Sciences",
    location: "Bellur, Mandya, Karnataka",
    type: "Private University",
    domain: "acsm.edu.in",
  },
  {
    name: "K. Venkataramana Gowda Medical College and Hospital",
    location: "Sullia, Karnataka",
    type: "Private",
    domain: "kvgmedicalcollege.org",
  },
  {
    name: "Dr. B.R. Ambedkar Medical College",
    location: "Bengaluru, Karnataka",
    type: "Private",
    domain: "bramc.org",
  },
  {
    name: "Shymanuru Shivashankarappa Institute of Medical Sciences",
    location: "Davangere, Karnataka",
    type: "Private",
  },
  {
    name: "S. Nijalingappa Medical College and Research Centre",
    location: "Bagalkot, Karnataka",
    type: "Private",
  },
  {
    name: "Sri Basaveshwara Medical College and Hospital",
    location: "Chitradurga, Karnataka",
    type: "Private",
  },
  {
    name: "Al-Ameen Medical College",
    location: "Vijayapura, Karnataka",
    type: "Private",
    domain: "alameenbgp.org",
  },
  {
    name: "Father Muller Institute of Medical Education and Research",
    location: "Mangaluru, Karnataka",
    type: "Private",
    domain: "fathermuller.edu.in",
  },
  {
    name: "Vydehi Institute of Medical Science and Research Centre",
    location: "Bengaluru, Karnataka",
    type: "Private",
    domain: "vydehi.org",
  },
  {
    name: "Sri Dharmasthala Manjunatheshwara Medical College",
    location: "Dharwad, Karnataka",
    type: "Private University",
    domain: "sdmmedicalcollege.org",
  },
  {
    name: "M.V.J. Medical College and Research Hospital",
    location: "Channasandra, Bengaluru, Karnataka",
    type: "Private",
    domain: "mvjmc.edu.in",
  },
  {
    name: "Navodaya Medical College",
    location: "Raichur, Karnataka",
    type: "Private",
    domain: "navodayamedicalcollege.com",
  },
  {
    name: "A.J. Institute of Medical Sciences",
    location: "Mangaluru, Karnataka",
    type: "Private",
    domain: "ajims.edu.in",
  },
  {
    name: "Kasturba Medical College, Mangalore",
    location: "Mangaluru, Karnataka",
    type: "Deemed",
    domain: "manipal.edu",
  },
  {
    name: "Kasturba Medical College, Manipal",
    location: "Manipal, Karnataka",
    type: "Deemed",
    domain: "manipal.edu",
  },
  {
    name: "Sanjay Gandhi Institute of Trauma and Orthopaedics",
    location: "Bengaluru, Karnataka",
    type: "Government",
  },
  {
    name: "Jagadguru Sri Shivarathreeswara Medical College",
    location: "Mysuru, Karnataka",
    type: "Deemed",
    domain: "jssuni.edu.in",
  },
  {
    name: "K.S. Hegde Medical Academy",
    location: "Mangaluru, Karnataka",
    type: "Deemed",
    domain: "kshema.edu.in",
  },
  {
    name: "Yenepoya Medical College",
    location: "Mangaluru, Karnataka",
    type: "Deemed",
    domain: "yenepoya.edu.in",
  },
  {
    name: "ESI Medical College, Bangalore",
    location: "Bengaluru, Karnataka",
    type: "Government",
  },
  {
    name: "Khaja Bande Navaz Institute of Medical Sciences",
    location: "Kalaburagi, Karnataka",
    type: "Private University",
    domain: "kbn.university",
  },
  {
    name: "B M Patil Medical College",
    location: "Vijayapura, Karnataka",
    type: "Government",
    domain: "bldeuniversity.ac.in",
  },
  {
    name: "Sapthagiri Institute of Medical Sciences",
    location: "Bengaluru, Karnataka",
    type: "Private University",
    domain: "simsrc.edu.in",
  },
  {
    name: "B G S Global Institute of Medical Sciences",
    location: "Bengaluru, Karnataka",
    type: "Private",
    domain: "bgsgims.edu.in",
  },
  {
    name: "Srinivas Institute of Medical Science and Research Centre",
    location: "Mangaluru, Karnataka",
    type: "Private University",
    domain: "srinivasgroup.com",
  },
  {
    name: "St. Johns Medical College",
    location: "Bengaluru, Karnataka",
    type: "Private",
    domain: "stjohns.in",
  },
  {
    name: "Dharwad Institute of Mental Health and Neurosciences",
    location: "Dharwad, Karnataka",
    type: "Government",
  },
  {
    name: "Gadag Institute of Medical Science",
    location: "Gadag, Karnataka",
    type: "Government",
  },
  {
    name: "SDS Tuberculosis Research Centre and Rajiv Gandhi Institute of Chest Diseases",
    location: "Bengaluru, Karnataka",
    type: "Government",
  },
  {
    name: "Akash Institute of Medical Sciences and Research Centre",
    location: "Bengaluru, Karnataka",
    type: "Private",
    domain: "aims.ac.in",
  },
  {
    name: "The Oxford Medical College Hospital and Research Centre",
    location: "Bengaluru, Karnataka",
    type: "Private",
    domain: "theoxfordmedicalcollege.org",
  },
  {
    name: "Sri Devi Institute of Medical Sciences and Research Centre",
    location: "Tumakuru, Karnataka",
    type: "Private",
  },
  {
    name: "Gulbarga Institute of Medical Science",
    location: "Kalaburagi, Karnataka",
    type: "Government",
  },
  {
    name: "Koppal Institute of Medical Science",
    location: "Koppal, Karnataka",
    type: "Government",
  },
  {
    name: "Kanachur Institute of Medical Science",
    location: "Mangaluru, Karnataka",
    type: "Private",
    domain: "kanachur.edu.in",
  },
  {
    name: "Subbaiah Institute of Medical Science",
    location: "Shivamogga, Karnataka",
    type: "Private",
    domain: "subbaiahmedicalcollege.com",
  },
  {
    name: "Karwar Institute of Medical Sciences",
    location: "Karwar, Karnataka",
    type: "Government",
  },
  {
    name: "Kodagu Institute of Medical Sciences",
    location: "Kodagu, Karnataka",
    type: "Government",
  },
  {
    name: "Chamarajanagar Institute of Medical Science",
    location: "Chamarajanagar, Karnataka",
    type: "Government",
  },
  {
    name: "East Point College of Medical Sciences",
    location: "Bengaluru, Karnataka",
    type: "Private",
    domain: "eastpoint.ac.in",
  },
  {
    name: "Shri Atal Bihari Vajpayee Institute of Medical Science",
    location: "Location not specified",
    type: "Government",
    domain: "abvims.edu.in",
  },
  {
    name: "Dr. Chandramma Dayananda Sagar Institute of Medical Education and Research",
    location: "Harohalli, Karnataka",
    type: "Private University",
    domain: "dscmch.com",
  },
  {
    name: "Chikkamagaluru Institute of Medical Sciences",
    location: "Chikkamagaluru, Karnataka",
    type: "Government",
  },
  {
    name: "Chikkaballapura Institute of Medical Sciences",
    location: "Chikkaballapura, Karnataka",
    type: "Government",
  },
  {
    name: "Haveri Institute of Medical Sciences",
    location: "Haveri, Karnataka",
    type: "Government",
  },
  {
    name: "Siddaganga Medical College and Research Institute",
    location: "Tumakuru, Karnataka",
    type: "Private",
    domain: "smctumkur.ac.in",
  },
  {
    name: "Sri Chamundeshwari Medical College Hospital and Research Institute",
    location: "Channapatna, Ramanagara, Karnataka",
    type: "Private",
  },
  {
    name: "Sri Madhusudan Sai Institute of Medical Sciences and Research",
    location: "Muddenahalli, Chikkaballapura, Karnataka",
    type: "Private University",
    domain: "smsimsr.org",
  },

  // DENTAL COLLEGES

  {
    name: "Government Dental College",
    location: "Fort, Bengaluru, Karnataka",
    type: "Government",
  },
  {
    name: "Bapuji Dental College and Hospital",
    location: "Davangere, Karnataka",
    type: "Private Unaided",
  },
  {
    name: "College of Dental Sciences",
    location: "Davangere, Karnataka",
    type: "Private Unaided",
  },
  {
    name: "Academy of Medical Education Dental College",
    location: "Raichur, Karnataka",
    type: "Private Unaided",
  },
  {
    name: "Dayananda Sagar College of Dental Sciences",
    location: "Kumaraswamy Layout, Bengaluru, Karnataka",
    type: "Private Unaided",
    domain: "dsce.edu.in",
  },
  {
    name: "HKE S Nijalingappa Dental College",
    location: "Kalaburagi, Karnataka",
    type: "Private Unaided",
  },
  {
    name: "Krishnadevaraya College of Dental Sciences",
    location: "H M Halli, Yelahanka, Bengaluru, Karnataka",
    type: "Private Unaided",
  },
  {
    name: "K. Venkataramana Gowda Dental College",
    location: "Sullia, Karnataka",
    type: "Private Unaided",
    domain: "kvgdentalcollege.org",
  },
  {
    name: "Dr. M.R. Ambedkar Dental College and Hospital",
    location: "Cooke Town, Bengaluru, Karnataka",
    type: "Private Unaided",
  },
  {
    name: "M.S. Ramaiah University of Applied Sciences",
    location: "MSR Nagar, Bengaluru, Karnataka",
    type: "Private/Deemed University",
    domain: "msruas.ac.in",
  },
  {
    name: "D.A. Pandu Memorial RV Dental College",
    location: "J P Nagar, Bengaluru, Karnataka",
    type: "Private Unaided",
    domain: "rvdentalcollege.org",
  },
  {
    name: "PM Nadagowda Memorial Dental College and Hospital",
    location: "Bagalkot, Karnataka",
    type: "Private Unaided",
  },
  {
    name: "Vokkaligara Sangha Dental College and Hospital",
    location: "V V Puram, Bengaluru, Karnataka",
    type: "Private Unaided",
  },
  {
    name: "K L E S Institute of Dental Sciences",
    location: "Yeshwanthpur, Bengaluru, Karnataka",
    type: "Private Unaided",
    domain: "kledental-bgm.edu.in",
  },
  {
    name: "Sri Hasanamba Dental College and Hospital",
    location: "Hassan, Karnataka",
    type: "Private Unaided",
  },
  {
    name: "Maratha Mandal Dental College",
    location: "Belagavi, Karnataka",
    type: "Private Unaided",
    domain: "mmcdentalcollege.org",
  },
  {
    name: "Al-Ameen Dental College",
    location: "Vijayapura, Karnataka",
    type: "Minority",
    domain: "alameenbgp.org",
  },
  {
    name: "Al Badar Dental College and Hospital",
    location: "Kalaburagi, Karnataka",
    type: "Minority",
  },
  {
    name: "Bangalore Institute of Dental Sciences and Hospital",
    location: "Hosur Main Road, Bengaluru, Karnataka",
    type: "Minority",
    domain: "bids.ac.in",
  },
  {
    name: "Vydehi Institute of Dental Sciences and Research Centre",
    location: "Whitefield Road, Bengaluru, Karnataka",
    type: "Minority",
    domain: "vydehi.org",
  },
  {
    name: "Coorg Institute of Dental Sciences",
    location: "Virajpet, Karnataka",
    type: "Minority",
    domain: "coorginstituteofdental.org",
  },
  {
    name: "Oxford Dental College",
    location: "Bommanahalli, Hosur Road, Bengaluru, Karnataka",
    type: "Minority",
    domain: "theoxforddentalcollege.org",
  },
  {
    name: "A.J. Institute of Dental Sciences",
    location: "Mangaluru, Karnataka",
    type: "Minority",
    domain: "ajims.edu.in",
  },
  {
    name: "K.G.F. College of Dental Sciences",
    location: "K.G.F., Karnataka",
    type: "Minority",
  },
  {
    name: "Sri Dharmasthala Manjunatheshwara Dental College",
    location: "Sattur, Dharwad, Karnataka",
    type: "Private/Deemed University",
    domain: "sdmmedicalcollege.org",
  },
  {
    name: "Navodaya Dental College",
    location: "Raichur, Karnataka",
    type: "Minority",
    domain: "navodayadentalcollege.org",
  },
  {
    name: "Sri Rajiv Gandhi Dental College",
    location: "Chola Nagar, Bengaluru, Karnataka",
    type: "Private Unaided",
  },
  {
    name: "Jagadguru Suttur Shivarathreeshwara Dental College",
    location: "Mysuru, Karnataka",
    type: "Private/Deemed University",
    domain: "jssuni.edu.in",
  },
  {
    name: "Raja Rajeshwari Dental College and Hospital",
    location: "Kumbalagodu, Bengaluru, Karnataka",
    type: "Minority",
    domain: "rrdch.org",
  },
  {
    name: "Sharavathi Dental College",
    location: "Shivamogga, Karnataka",
    type: "Private Unaided",
  },
  {
    name: "Manipal College of Dental Sciences, Mangalore",
    location: "Mangaluru, Karnataka",
    type: "Private/Deemed University",
    domain: "manipal.edu",
  },
  {
    name: "Manipal College of Dental Science, Manipal",
    location: "Manipal, Karnataka",
    type: "Private/Deemed University",
    domain: "manipal.edu",
  },
  {
    name: "Sri Jagadguru Murugharajendra Dental College",
    location: "Chitradurga, Karnataka",
    type: "Private/Deemed University",
  },
  {
    name: "Srinivasa Institute of Dental Science",
    location: "Mangaluru, Karnataka",
    type: "Minority",
    domain: "srinivasgroup.com",
  },
  {
    name: "S.B. Patil Institute of Dental Science",
    location: "Bidar, Karnataka",
    type: "Private Unaided",
  },
  {
    name: "Subbaiah Institute of Dental Science",
    location: "Shivamogga, Karnataka",
    type: "Minority",
    domain: "subbaiahmedicalcollege.com",
  },
  {
    name: "Employees State Insurance Corporation Dental College",
    location: "Kalaburagi, Karnataka",
    type: "Government",
  },
];

const colleges: College[] = collegeData.map((college, index) => {
  const slug = slugify(college.name);

  return {
    ...college,
    slug,
    description: `${college.name} is a medical or dental institution. Contact our admission counsellors for guidance about available courses, eligibility requirements and admission procedures.`,
    image: campusImages[index % campusImages.length],
    logo: `https://www.google.com/s2/favicons?domain=${college.domain || "rguhs.ac.in"}&sz=128`,
  };
});

export default function MedicalCollegesPage() {
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
              Explore medical and dental colleges and discover suitable
              admission options based on your preferred location and college
              type.
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
                  Medical & Dental Colleges
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Explore government, private, minority and deemed medical
                  colleges available for admission.
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
                  aria-label="Search colleges"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#2E3281] focus:ring-2 focus:ring-[#2E3281]/10"
                />
              </div>
            </div>
          </div>

          {/* RESULT COUNT */}
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-[#2E3281]">
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
                  key={college.slug}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2E3281]/30 hover:shadow-xl"
                >
                  {/* IMAGE */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={college.image}
                      alt={`${college.name} campus`}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = campusImages[0];
                      }}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

                    {/* COLLEGE TYPE */}
                    <span
                      className={`absolute right-3 top-3 max-w-[90%] rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide ${
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
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src =
                            "https://www.google.com/s2/favicons?domain=rguhs.ac.in&sz=128";
                        }}
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
                We could not find a college matching your search. Try searching
                with a different college name, location or institution type.
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
                Get personalised guidance on medical and dental colleges,
                course options, counselling and admission procedures.
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