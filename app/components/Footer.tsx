'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Phone } from "lucide-react";

interface CollegeCategory {
  title: string;
  count: string;
  href: string;
  colleges: { name: string; slug: string }[];
}

export default function Footer() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  /* =========================================================
     KARNATAKA / MAIN COLLEGE DIRECTORY
     (names + slugs now match the data files of each page)
  ========================================================= */

  const collegeCategories: CollegeCategory[] = [
    {
      title: 'MBBS Colleges',
      count: '100+',
      href: '/medical-colleges',
      colleges: [
        { name: "Bangalore Medical College and Research Institute", slug: "bangalore-medical-college-and-research-institute" },
        { name: "Mysore Medical College and Research Institute", slug: "mysore-medical-college-and-research-institute" },
        { name: "Karnataka Institute of Medical Sciences", slug: "karnataka-institute-of-medical-sciences" },
        { name: "Kempegowda Institute of Medical Sciences", slug: "kempegowda-institute-of-medical-sciences" },
        { name: "M.S. Ramaiah Medical College", slug: "ms-ramaiah-medical-college" },
        { name: "Dr. B.R. Ambedkar Medical College", slug: "dr-br-ambedkar-medical-college" },
        { name: "Vydehi Institute of Medical Science and Research Centre", slug: "vydehi-institute-of-medical-science-and-research-centre" },
        { name: "St. Johns Medical College", slug: "st-johns-medical-college" },
        { name: "Jagadguru Sri Shivarathreeswara Medical College", slug: "jagadguru-sri-shivarathreeswara-medical-college" },
        { name: "Kasturba Medical College, Mangalore", slug: "kasturba-medical-college-mangalore" },
        { name: "Kasturba Medical College, Manipal", slug: "kasturba-medical-college-manipal" },
        { name: "Yenepoya Medical College", slug: "yenepoya-medical-college" },
        { name: "Father Muller Institute of Medical Education and Research", slug: "father-muller-institute-of-medical-education-and-research" },
        { name: "Sri Dharmasthala Manjunatheshwara Medical College", slug: "sri-dharmasthala-manjunatheshwara-medical-college" },
        { name: "A.J. Institute of Medical Sciences", slug: "aj-institute-of-medical-sciences" },
        { name: "Sapthagiri Institute of Medical Sciences", slug: "sapthagiri-institute-of-medical-sciences" },
        { name: "B G S Global Institute of Medical Sciences", slug: "b-g-s-global-institute-of-medical-sciences" },
        { name: "Akash Institute of Medical Sciences and Research Centre", slug: "akash-institute-of-medical-sciences-and-research-centre" },
        { name: "East Point College of Medical Sciences", slug: "east-point-college-of-medical-sciences" },
        { name: "M.V.J. Medical College and Research Hospital", slug: "mvj-medical-college-and-research-hospital" },
        { name: "Navodaya Medical College", slug: "navodaya-medical-college" },
        { name: "Kanachur Institute of Medical Science", slug: "kanachur-institute-of-medical-science" },
        { name: "Subbaiah Institute of Medical Science", slug: "subbaiah-institute-of-medical-science" },
        { name: "Srinivas Institute of Medical Science and Research Centre", slug: "srinivas-institute-of-medical-science-and-research-centre" },
        { name: "The Oxford Medical College Hospital and Research Centre", slug: "the-oxford-medical-college-hospital-and-research-centre" },
        { name: "Shri Atal Bihari Vajpayee Institute of Medical Science", slug: "shri-atal-bihari-vajpayee-institute-of-medical-science" },
        { name: "Adichunchanagiri Institute of Medical Sciences", slug: "adichunchanagiri-institute-of-medical-sciences" },
        { name: "Vijayanagar Institute of Medical Sciences", slug: "vijayanagar-institute-of-medical-sciences" },
        { name: "Siddaganga Medical College and Research Institute", slug: "siddaganga-medical-college-and-research-institute" },
        { name: "Al-Ameen Medical College", slug: "al-ameen-medical-college" },
      ],
    },

    {
      title: 'Engineering Colleges',
      count: '200+',
      href: '/engineering-colleges',
      colleges: [
        { name: "R.V. College of Engineering", slug: "rv-college-of-engineering" },
        { name: "BMS College of Engineering", slug: "bms-college-of-engineering" },
        { name: "M.S. Ramaiah Institute of Technology", slug: "ms-ramaiah-institute-of-technology" },
        { name: "Bangalore Institute of Technology", slug: "bangalore-institute-of-technology" },
        { name: "Dayananda Sagar College of Engineering", slug: "dayananda-sagar-college-of-engineering" },
        { name: "C.M.R. Institute of Technology", slug: "cmr-institute-of-technology" },
        { name: "Acharya Institute of Technology", slug: "acharya-institute-of-technology" },
        { name: "Sir M. Visvesvaraya Institute of Technology", slug: "sir-m-visvesvaraya-institute-of-technology" },
        { name: "RNS Institute of Technology (RNSIT)", slug: "rns-institute-of-technology" },
        { name: "East West Institute of Technology", slug: "east-west-institute-of-technology" },
        { name: "Bangalore Technological Institute", slug: "bangalore-technological-institute" },
        { name: "REVA University", slug: "reva-university" },
        { name: "Presidency University", slug: "presidency-university" },
        { name: "CMR University", slug: "cmr-university" },
        { name: "M.S. Ramaiah University of Applied Sciences", slug: "ms-ramaiah-university-of-applied-sciences" },
        { name: "Alliance College of Engineering & Design, Alliance University", slug: "alliance-college-of-engineering-design" },
        { name: "Atria Institute of Technology", slug: "atria-institute-of-technology" },
        { name: "BMS Institute of Technology & Management", slug: "bms-institute-of-technology-management" },
        { name: "Cambridge Institute of Technology", slug: "cambridge-institute-of-technology" },
        { name: "Dayananda Sagar Academy of Technology & Management", slug: "dayananda-sagar-academy-of-technology-management" },
        { name: "East Point College of Engineering and Technology", slug: "east-point-college-of-engineering-and-technology" },
        { name: "JSS Academy of Technical Education", slug: "jss-academy-of-technical-education" },
        { name: "Raja Rajeswari College of Engineering", slug: "raja-rajeswari-college-of-engineering" },
        { name: "SJB Institute of Technology", slug: "sjb-institute-of-technology" },
        { name: "Sambhram Institute of Technology", slug: "sambhram-institute-of-technology" },
        { name: "Sapthagiri NPS University", slug: "sapthagiri-nps-university" },
        { name: "Sri Krishna Institute of Technology", slug: "sri-krishna-institute-of-technology" },
        { name: "T. John Institute of Technology", slug: "t-john-institute-of-technology" },
        { name: "AMC Engineering College", slug: "amc-engineering-college" },
        { name: "R.V. Institute of Technology and Management", slug: "rv-institute-of-technology-and-management" },
      ],
    },

    {
      title: 'Management Colleges',
      count: '150+',
      href: '/management-colleges',
      colleges: [
        { name: "Indian Institute of Management Bangalore", slug: "indian-institute-of-management-bangalore" },
        { name: "Indian Institute of Management Ahmedabad", slug: "indian-institute-of-management-ahmedabad" },
        { name: "Indian Institute of Management Calcutta", slug: "indian-institute-of-management-calcutta" },
        { name: "Indian Institute of Management Lucknow", slug: "indian-institute-of-management-lucknow" },
        { name: "Indian Institute of Management Kozhikode", slug: "indian-institute-of-management-kozhikode" },
        { name: "Indian Institute of Management Indore", slug: "indian-institute-of-management-indore" },
        { name: "Indian Institute of Management Rohtak", slug: "indian-institute-of-management-rohtak" },
        { name: "Indian Institute of Management Jammu", slug: "indian-institute-of-management-jammu" },
        { name: "Indian Institute of Management Bodh Gaya", slug: "indian-institute-of-management-bodh-gaya" },
        { name: "Indian Institute of Management Ranchi", slug: "indian-institute-of-management-ranchi" },
        { name: "Indian Institute of Management Amritsar", slug: "indian-institute-of-management-amritsar" },
        { name: "Indian Institute of Management Visakhapatnam", slug: "indian-institute-of-management-visakhapatnam" },
        { name: "Indian Institute of Management Shillong", slug: "indian-institute-of-management-shillong" },
        { name: "Indian Institute of Management Udaipur", slug: "indian-institute-of-management-udaipur" },
        { name: "Indian Institute of Management Tiruchirappalli", slug: "indian-institute-of-management-tiruchirappalli" },
        { name: "Christ University", slug: "christ-university" },
        { name: "Mount Carmel College", slug: "mount-carmel-college" },
        { name: "Kristu Jayanti College", slug: "kristu-jayanti-college" },
        { name: "Jain University", slug: "jain-university" },
        { name: "Presidency University", slug: "presidency-university" },
        { name: "Alliance University", slug: "alliance-university" },
        { name: "Acharya Institute of Graduate Studies", slug: "acharya-institute-of-graduate-studies" },
        { name: "REVA University", slug: "reva-university" },
        { name: "Bangalore University", slug: "bangalore-university" },
        { name: "Bangalore Institute of Technology", slug: "bangalore-institute-of-technology" },
        { name: "B.M.S. College of Engineering", slug: "bms-college-of-engineering" },
        { name: "M.S. Ramaiah University of Applied Sciences", slug: "ms-ramaiah-university-of-applied-sciences" },
      ],
    },

    {
      title: 'Nursing Colleges',
      count: '100+',
      href: '/nursing-colleges',
      colleges: [
        { name: "Ramaiah Institute of Nursing Education and Research", slug: "ramaiah-institute-of-nursing-education-and-research" },
        { name: "RV College of Nursing", slug: "rv-college-of-nursing" },
        { name: "Dr. B R Ambedkar Institute of Nursing", slug: "dr-br-ambedkar-institute-of-nursing" },
        { name: "Karnataka College of Nursing", slug: "karnataka-college-of-nursing" },
        { name: "PES University", slug: "pes-university" },
        { name: "East West College of Nursing", slug: "east-west-college-of-nursing" },
        { name: "The Oxford College of Nursing", slug: "the-oxford-college-of-nursing" },
        { name: "Sapthagiri Institute of Medical Sciences and Research Centre", slug: "sapthagiri-institute-of-medical-sciences" },
        { name: "Rajarajeswari Medical College and Hospital", slug: "rajarajeswari-medical-college-and-hospital" },
        { name: "VIMS Bangalore", slug: "vims-bangalore" },
        { name: "MVM Group of Institutions", slug: "mvm-group-of-institutions" },
        { name: "Aakash Group of Institutions", slug: "aakash-group-of-institutions" },
        { name: "RR College of Nursing", slug: "rr-college-of-nursing" },
        { name: "Manjunatha College of Nursing", slug: "manjunatha-college-of-nursing" },
        { name: "Harsha Institutions", slug: "harsha-institutions" },
        { name: "VYMAK Group of Institutions", slug: "vymak-group-of-institutions" },
        { name: "Sapthagiri NPS University", slug: "sapthagiri-nps-university" },
        { name: "East Point Group of Institutions", slug: "east-point-group-of-institutions" },
        { name: "Acharya Institute of Health Sciences", slug: "acharya-institute-of-health-sciences" },
        { name: "Smt. Nagarathnamma College of Nursing", slug: "smt-nagarathnamma-college-of-nursing" },
        { name: "MVJ College of Nursing", slug: "mvj-college-of-nursing" },
        { name: "Krupanidhi College of Nursing", slug: "krupanidhi-college-of-nursing" },
        { name: "Vydehi Institute of Nursing Sciences and Research Centre", slug: "vydehi-institute-of-nursing-sciences" },
        { name: "SJB College of Nursing", slug: "sjb-college-of-nursing" },
        { name: "Sri Lakshmi College of Nursing", slug: "sri-lakshmi-college-of-nursing" },
        { name: "Spurthy College of Nursing", slug: "spurthy-college-of-nursing" },
        { name: "Little Flower Group of Institutions", slug: "little-flower-group-of-institutions" },
        { name: "M.S. Ramaiah University of Applied Sciences", slug: "ms-ramaiah-university-of-applied-sciences" },
        { name: "Padmashree Group of Institutions", slug: "padmashree-group-of-institutions" },
        { name: "Goutham College", slug: "goutham-college" },
      ],
    },
  ];

  /* =========================================================
     NORTH & EAST INDIA CITIES
  ========================================================= */

  const northEastCities = [
    'New Delhi',
    'Assam',
    'Arunachal Pradesh',
    'Meghalaya',
    'Manipur',
    'Mizoram',
    'Tripura',
    'Sikkim',
    'Nagaland',
    'Himachal Pradesh',
    'Punjab',
    'Rajasthan',
    'Uttarakhand',
    'Uttar Pradesh',
    'Madhya Pradesh',
    'Odisha',
    'Karnataka',
    'Andhra Pradesh',
    'Telangana',
    'Maharashtra',
  ];

  /* =========================================================
     QUICK LINKS
  ========================================================= */

  const quickLinks = [
    ['Home', '/'],
    ['Courses', '/courses'],
    ['Services', '/education-services'],
    ['Colleges', '/'],
    ['Blogs', '/blogs'],
    ['Entrance Exams', '/'],
    ['News & Events', '/'],
    ['Contact Us', '/contact'],
  ];

  /* =========================================================
     CLICK HANDLER
  ========================================================= */

  const handleCategoryClick = (title: string) => {
    setActiveCategory(
      activeCategory === title ? null : title
    );
  };

  const activeCollegeCategory = collegeCategories.find(
    (category) => category.title === activeCategory
  );

  const showNorthEast = activeCategory === 'North & East Colleges';

  return (
    <footer className="relative overflow-hidden bg-[#070b19] font-sans text-white">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

      {/* =====================================================
          COLLEGE DIRECTORY
      ===================================================== */}

      <div className="relative border-b border-white/10">

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <div className="mb-7">

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4b8fc5]">
              College Directory
            </span>

            <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
              Top Colleges by Stream
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Explore colleges by your preferred stream.
            </p>

          </div>

          {/* =================================================
              FIVE MAIN BUTTONS
          ================================================= */}

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">

            {/* KARNATAKA COLLEGE CATEGORIES */}

            {collegeCategories.map((category) => {

              const isActive =
                activeCategory === category.title;

              return (
                <button
                  key={category.title}
                  type="button"
                  onClick={() =>
                    handleCategoryClick(category.title)
                  }
                  className={`
                    group
                    flex
                    items-center
                    justify-between
                    gap-4
                    rounded-xl
                    px-5
                    py-4
                    text-left
                    transition-all
                    duration-300

                    ${isActive
                      ? 'bg-[rgb(50_48_127)] text-white shadow-md'
                      : 'bg-[#e5f4fc] text-[rgb(50_48_127)] hover:bg-[#d4edf9]'
                    }
                  `}
                >

                  <div>

                    <span className="block text-sm font-bold">
                      {category.title}
                    </span>

                    <span
                      className={`
                        mt-1
                        block
                        text-[11px]

                        ${isActive
                          ? 'text-blue-100'
                          : 'text-[rgb(75_143_197)]'
                        }
                      `}
                    >
                      {category.count} Institutions
                    </span>

                  </div>

                  <span
                    className={`
                      flex
                      h-8
                      w-8
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-full
                      text-sm
                      font-bold
                      transition-all
                      duration-300

                      ${isActive
                        ? 'bg-white text-[rgb(50_48_127)]'
                        : 'bg-[rgb(50_48_127)] text-white group-hover:bg-[rgb(75_143_197)]'
                      }
                    `}
                  >
                    {isActive ? '−' : '+'}
                  </span>

                </button>
              );
            })}

            {/* =================================================
                NORTH & EAST COLLEGES - 5TH BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() =>
                handleCategoryClick('North & East Colleges')
              }
              className={`
                group
                flex
                items-center
                justify-between
                gap-4
                rounded-xl
                px-5
                py-4
                text-left
                transition-all
                duration-300

                ${showNorthEast
                  ? 'bg-[rgb(50_48_127)] text-white shadow-md'
                  : 'bg-[#e5f4fc] text-[rgb(50_48_127)] hover:bg-[#d4edf9]'
                }
              `}
            >

              <div>

                <span className="block text-sm font-bold">
                  North & East Colleges
                </span>

                <span
                  className={`
                    mt-1
                    block
                    text-[11px]

                    ${showNorthEast
                      ? 'text-blue-100'
                      : 'text-[rgb(75_143_197)]'
                    }
                  `}
                >
                  500+ Institutions
                </span>

              </div>

              <span
                className={`
                  flex
                  h-8
                  w-8
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-sm
                  font-bold
                  transition-all
                  duration-300

                  ${showNorthEast
                    ? 'bg-white text-[rgb(50_48_127)]'
                    : 'bg-[rgb(50_48_127)] text-white group-hover:bg-[rgb(75_143_197)]'
                  }
                `}
              >
                {showNorthEast ? '−' : '+'}
              </span>

            </button>

          </div>

          {/* =================================================
              ACTIVE KARNATAKA COLLEGE LIST
          ================================================= */}

          {activeCollegeCategory && (

            <div className="mt-6 rounded-2xl bg-[#f4f9fd] p-5 sm:p-6">

              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <h3 className="text-xl font-bold text-[#2e3281]">
                    {activeCollegeCategory.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Popular colleges and institutions
                  </p>

                </div>

                <Link
                  href="/colleges"
                  className="
                    text-xs
                    font-bold
                    text-[#2e3281]
                    transition-colors
                    hover:text-[#4b8fc5]
                  "
                >
                  View All Colleges →
                </Link>

              </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">

                {activeCollegeCategory.colleges.map((college) => (

                  <Link
                    key={college.slug}
                    href={`${activeCollegeCategory.href}/${college.slug}`}
                    className="
                      group
                      flex
                      items-start
                      gap-2
                      rounded-lg
                      px-2
                      py-2.5
                      text-sm
                      leading-5
                      text-slate-700
                      transition-all
                      duration-200
                      hover:bg-white
                      hover:text-[#2e3281]
                    "
                  >

                    <span
                      className="
                        mt-1
                        text-xs
                        text-[#4b8fc5]
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>

                    <span className="flex-1">
                      {college.name}
                    </span>

                  </Link>

                ))}

              </div>

            </div>

          )}

          {/* =================================================
              NORTH & EAST CITY LIST
          ================================================= */}

          {showNorthEast && (

            <div className="mt-6 rounded-2xl bg-[#f4f9fd] p-5 sm:p-6">

              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <h3 className="text-xl font-bold text-[#2e3281]">
                    North & East Colleges
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Explore colleges by city across North and East India
                  </p>

                </div>

                <Link
                  href="/colleges"
                  className="
                    text-xs
                    font-bold
                    text-[#2e3281]
                    transition-colors
                    hover:text-[#4b8fc5]
                  "
                >
                  View All Colleges →
                </Link>

              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">

                {northEastCities.map((city) => (

                  <Link
                    key={city}
                    href="/colleges"
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-white
                      px-3
                      py-3
                      text-sm
                      font-medium
                      text-slate-700
                      transition-all
                      duration-200
                      hover:bg-[#2e3281]
                      hover:text-white
                    "
                  >

                    <span
                      className="
                        text-xs
                        text-[#4b8fc5]
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                        group-hover:text-white
                      "
                    >
                      →
                    </span>

                    <span>
                      {city}
                    </span>

                  </Link>

                ))}

              </div>

            </div>

          )}

        </div>

      </div>

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">

          {/* =================================================
              LOGO / ABOUT / SOCIAL
          ================================================= */}

          <div className="lg:col-span-4">

            <Link href="/" className="inline-block">

              <Image
                src="/images/logos/logo.png"
                alt="Pragati Consultancy"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
              />

            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Pragati Consultancy is Karnataka's trusted educational
              partner, helping students navigate admissions into premier
              medical, engineering, management and nursing institutions.
            </p>

            {/* CONTACT */}

            <div className="mt-6 space-y-3">

              <a
                href="tel:08048518464"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-slate-300
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >

                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#4b8fc5]/10
                    text-[#4b8fc5]
                    transition-all
                    duration-200
                    group-hover:bg-[#4b8fc5]
                    group-hover:text-white
                  "
                >
                  ☎
                </span>

                <span>
                  080 - 4851 8464
                </span>

              </a>

              <a
                href="mailto:info@pragaticonsultancy.com"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-slate-300
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >

                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#4b8fc5]/10
                    text-[#4b8fc5]
                    transition-all
                    duration-200
                    group-hover:bg-[#4b8fc5]
                    group-hover:text-white
                  "
                >
                  @
                </span>

                <span className="break-all">
                  info@pragaticonsultancy.com
                </span>

              </a>

            </div>

            {/* SOCIAL */}

            <div className="mt-7">

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Follow Us
              </p>

              <div className="flex items-center gap-2.5">

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/[0.05]
                    text-sm
                    font-bold
                    text-slate-400
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#1877F2]
                    hover:text-white
                  "
                >
                  f
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/[0.05]
                    text-sm
                    font-bold
                    text-slate-400
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#E4405F]
                    hover:text-white
                  "
                >
                  ◎
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/[0.05]
                    text-sm
                    font-bold
                    text-slate-400
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#0A66C2]
                    hover:text-white
                  "
                >
                  in
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/[0.05]
                    text-sm
                    font-bold
                    text-slate-400
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#FF0000]
                    hover:text-white
                  "
                >
                  ▶
                </a>

              </div>

            </div>

          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div className="lg:col-span-3">

            <h3 className="text-lg font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-5">

              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">

                {quickLinks.map(([label, href]) => (

                  <li key={label}>

                    <Link
                      href={href}
                      className="
                        group
                        flex
                        items-center
                        gap-2.5
                        text-sm
                        text-slate-400
                        transition-all
                        duration-200
                        hover:translate-x-1
                        hover:text-white
                      "
                    >

                      <span
                        className="
                          text-[#4b8fc5]
                          transition-transform
                          duration-200
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>

                      <span>
                        {label}
                      </span>

                    </Link>

                  </li>

                ))}

              </ul>

            </div>

          </div>

          {/* =================================================
              CONTACT US
          ================================================= */}

          <div className="lg:col-span-5">

            <h3 className="text-lg font-bold text-white">
              Contact Us
            </h3>

            <div
              className="
                mt-5
                rounded-2xl
                bg-white/[0.035]
                p-6
              "
            >

              {/* OFFICE */}

              <div className="flex gap-4">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#4b8fc5]/10
                    text-lg
                    text-[#4b8fc5]
                  "
                >
                  📍
                </div>

                <div>

                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#4b8fc5]">
                    Our Office
                  </p>

                  <p className="text-sm leading-6 text-slate-300">
                    #17, 1st Floor, Opp. F.M. Silks,
                    3rd Main, 3rd Cross, RMV II Stage,
                    New BEL Road, Bangalore - 560 094
                  </p>

                </div>

              </div>

              <div className="my-5 h-px bg-white/10" />

              {/* PHONE */}

              <a
                href="tel:08048518464"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  text-sm
                  text-slate-300
                  transition-colors
                  hover:text-white
                "
              >

                <div
                  className="
                    flex
                    h-10
                    w-10
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#4b8fc5]/10
                    text-[#4b8fc5]
                  "
                >
                  ☎
                </div>

                <div>

                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Call Us
                  </p>

                  <p className="mt-0.5 font-medium">
                    080 - 4851 8464
                  </p>

                </div>

              </a>

              {/* EMAIL */}

              <a
                href="mailto:info@pragaticonsultancy.com"
                className="
                  group
                  mt-4
                  flex
                  items-center
                  gap-4
                  text-sm
                  text-slate-300
                  transition-colors
                  hover:text-white
                "
              >

                <div
                  className="
                    flex
                    h-10
                    w-10
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#4b8fc5]/10
                    text-[#4b8fc5]
                  "
                >
                  @
                </div>

                <div>

                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Email Us
                  </p>

                  <p className="mt-0.5 break-all font-medium">
                    info@pragaticonsultancy.com
                  </p>

                </div>

              </a>

              {/* MAP */}

              <div className="mt-6">

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    bg-[#4b8fc5]/10
                    px-4
                    py-2.5
                    text-xs
                    font-bold
                    text-[#4b8fc5]
                    transition-all
                    duration-200
                    hover:bg-[#4b8fc5]
                    hover:text-white
                  "
                >
                  View Map & Directions
                  <span>→</span>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          COPYRIGHT
      ===================================================== */}

      <div className="border-t border-white/10 bg-[#050813]">

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-4
            px-4
            py-6
            sm:px-6
            md:flex-row
            lg:px-8
          "
        >

          <p className="text-center text-xs text-slate-500 md:text-left">
            © {new Date().getFullYear()} Pragati Consultancy.
            All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5 text-xs text-slate-500">

            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[#4b8fc5]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[#4b8fc5]"
            >
              Terms of Service
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-[#4b8fc5]"
            >
              Support
            </Link>

          </div>

        </div>

      </div>


      {/* =====================================================
    FLOATING WHATSAPP + CALL BUTTONS
===================================================== */}

      <div className="fixed bottom-5 left-5 right-5 z-[9999] flex items-center justify-between pointer-events-none sm:bottom-6 sm:left-6 sm:right-6">

        {/* WHATSAPP - LEFT */}
        <a
          href="https://wa.me/+919845275134"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="pointer-events-auto group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.35)] ring-4 ring-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_30px_rgba(37,211,102,0.45)] sm:h-14 sm:w-14"
        >
          {/* WhatsApp Icon */}
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-300 group-hover:scale-110"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.87 11.87 0 0 0 12.04 0C5.48 0 .14 5.34.14 11.91c0 2.1.55 4.15 1.6 5.96L.04 24l6.27-1.64a11.88 11.88 0 0 0 5.73 1.46h.01c6.56 0 11.9-5.34 11.9-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.05 21.82h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.9 9.9 0 0 1-1.52-5.3c0-5.49 4.47-9.96 9.96-9.96 2.66 0 5.16 1.04 7.04 2.92a9.92 9.92 0 0 1 2.91 7.05c0 5.49-4.47 9.96-9.96 9.96Zm5.46-7.46c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>

          {/* Online Dot */}
          <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400" />

          {/* Tooltip */}
          <span className="pointer-events-none absolute bottom-full left-0 mb-3 hidden whitespace-nowrap rounded-lg bg-[#070b19] px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100 sm:block">
            Chat on WhatsApp
          </span>
        </a>

        {/* CALL - RIGHT */}
        <a
          href="tel:9620201999"
          aria-label="Call us"
          className="pointer-events-auto group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#2e3281] text-white shadow-[0_8px_25px_rgba(46,50,129,0.35)] ring-4 ring-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_30px_rgba(46,50,129,0.45)] sm:h-14 sm:w-14"
        >
          <Phone
            size={22}
            strokeWidth={2.3}
            className="transition-transform duration-300 group-hover:rotate-12 sm:h-6 sm:w-6"
          />

          {/* Tooltip */}
          <span className="pointer-events-none absolute bottom-full right-0 mb-3 hidden whitespace-nowrap rounded-lg bg-[#070b19] px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100 sm:block">
            Call +919620201999
          </span>
        </a>

      </div>
    </footer>
  );
}
