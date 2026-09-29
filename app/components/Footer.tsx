'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface CollegeCategory {
  title: string;
  count: string;
  colleges: string[];
}

export default function Footer() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeRegionCategory, setActiveRegionCategory] =
    useState<string | null>(null);

  /* =========================================================
     KARNATAKA / MAIN COLLEGE DIRECTORY
  ========================================================= */

  const collegeCategories: CollegeCategory[] = [
    {
      title: 'MBBS Colleges',
      count: '100+',
      colleges: [
        'Bangalore Medical College and Research Institute',
        'Kempegowda Institute of Medical Sciences',
        'St. John’s Medical College',
        'Mysore Medical College & Research Institute',
        'M. S. Ramaiah Medical College',
        'JSS Medical College',
        'Vydehi Institute of Medical Sciences',
        'Rajarajeswari Medical College and Hospital',
        'Dr. B. R. Ambedkar Medical College',
        'Jawaharlal Nehru Medical College, Belagavi',
        'KLE Academy of Higher Education and Research',
        'Karnataka Institute of Medical Sciences, Hubballi',
        'AJ Institute of Medical Sciences',
        'Father Muller Medical College',
        'SDM College of Medical Sciences and Hospital',
        'Yenepoya Medical College',
        'Manipal College of Medical Sciences',
        'Sapthagiri Institute of Medical Sciences',
        'BGS Global Institute of Medical Sciences',
        'Sri Siddhartha Medical College',
        'Akash Institute of Medical Sciences',
        'East Point College of Medical Sciences',
        'Bangalore Baptist Hospital Medical College',
        'Subbaiah Institute of Medical Sciences',
        'Kanachur Institute of Medical Sciences',
        'Rajarajeshwari Medical College',
        'Navodaya Medical College',
        'Srinivas Institute of Medical Sciences',
        'Shri Atal Bihari Vajpayee Medical College',
        'Oxford Medical College and Research Institute',
      ],
    },

    {
      title: 'Engineering Colleges',
      count: '200+',
      colleges: [
        'RV College of Engineering',
        'BMS College of Engineering',
        'MS Ramaiah Institute of Technology',
        'PES University',
        'Bangalore Institute of Technology',
        'Dayananda Sagar College of Engineering',
        'New Horizon College of Engineering',
        'CMR Institute of Technology',
        'NIE Institute of Technology',
        'University Visvesvaraya College of Engineering',
        'Nitte Meenakshi Institute of Technology',
        'Acharya Institute of Technology',
        'BNM Institute of Technology',
        'Sir M. Visvesvaraya Institute of Technology',
        'RNS Institute of Technology',
        'Global Academy of Technology',
        'Reva University',
        'Christ University',
        'Jain University',
        'Presidency University',
        'Alliance University',
        'CMR University',
        'Dayananda Sagar University',
        'Bangalore Technological Institute',
        'Dr. Ambedkar Institute of Technology',
        'East West Institute of Technology',
        'MVJ College of Engineering',
        'KLE Technological University',
        'New Horizon College of Engineering',
        'Acharya University',
      ],
    },

    {
      title: 'Management Colleges',
      count: '150+',
      colleges: [
        'Indian Institute of Management Bangalore',
        'Christ University',
        'Jain University',
        'Alliance University',
        'PES University',
        'MS Ramaiah Institute of Management',
        'Acharya Institute of Management',
        'Kristu Jayanti College',
        'Xavier Institute of Management and Entrepreneurship',
        'St. Joseph’s Institute of Management',
        'AIMS Institutes',
        'Mount Carmel College',
        'Presidency University',
        'CMR University',
        'Reva University',
        'Dayananda Sagar Business School',
        'ISBR Business School',
        'Indus Business Academy',
        'IFIM Business School',
        'Bangalore Institute of Management Studies',
        'New Horizon College',
        'Acharya Bangalore B-School',
        'Kirloskar Institute of Advanced Management Studies',
        'Xavier Institute of Business Management',
        'T John College',
        'Administrative Management College',
        'SEA College of Science Commerce and Arts',
        'Kristu Jayanti Institute of Management',
        'Garden City University',
        'Presidency College Bangalore',
      ],
    },

    {
      title: 'Nursing Colleges',
      count: '100+',
      colleges: [
        'St. John’s College of Nursing',
        'Vydehi Institute of Nursing',
        'M.S. Ramaiah College of Nursing',
        'Bangalore Baptist College of Nursing',
        'Kempegowda College of Nursing',
        'RajaRajeswari College of Nursing',
        'Sapthagiri College of Nursing',
        'Acharya College of Nursing',
        'Manipal College of Nursing',
        'Father Muller College of Nursing',
        'JSS College of Nursing',
        'Yenepoya College of Nursing',
        'KLE Society’s Institute of Nursing Sciences',
        'SDM College of Nursing Sciences',
        'BGS College of Nursing',
        'Bangalore City College of Nursing',
        'East Point College of Nursing',
        'Dr. B. R. Ambedkar College of Nursing',
        'Narayana Hrudayalaya College of Nursing',
        'HOSMAT College of Nursing',
        'Sri Siddhartha College of Nursing',
        'Nitte Usha Institute of Nursing Sciences',
        'Dayananda Sagar College of Nursing',
        'Oxford College of Nursing',
        'MVJ College of Nursing',
        'Acharya Institute of Health Sciences',
        'Sapthagiri College of Nursing Sciences',
        'Garden City University College of Nursing',
        'East West College of Nursing',
        'Srinivas Institute of Nursing Sciences',
      ],
    },
  ];

  /* =========================================================
     NORTH & EAST INDIA DIRECTORY
     BUTTONS: MBBS / ENGINEERING / MANAGEMENT / NURSING
  ========================================================= */

  const regionalCategories: CollegeCategory[] = [
    {
      title: 'MBBS Colleges',
      count: '200+',
      colleges: [
        /* North India */

        'All India Institute of Medical Sciences, New Delhi',
        'Maulana Azad Medical College, New Delhi',
        'University College of Medical Sciences, Delhi',
        'Lady Hardinge Medical College, New Delhi',
        'Vardhman Mahavir Medical College, New Delhi',
        'Dr. Ram Manohar Lohia Hospital, New Delhi',
        'King George’s Medical University, Lucknow',
        'Sanjay Gandhi Postgraduate Institute of Medical Sciences, Lucknow',
        'Dr. Ram Manohar Lohia Institute of Medical Sciences, Lucknow',
        'Banaras Hindu University, Varanasi',
        'Aligarh Muslim University',
        'Postgraduate Institute of Medical Education and Research, Chandigarh',
        'Government Medical College, Chandigarh',
        'Dayanand Medical College and Hospital, Ludhiana',
        'Christian Medical College, Ludhiana',
        'Government Medical College, Patiala',
        'Government Medical College, Amritsar',
        'All India Institute of Medical Sciences, Rishikesh',
        'Government Medical College, Srinagar',
        'Sher-i-Kashmir Institute of Medical Sciences',
        'Baba Farid University of Health Sciences',
        'Rohilkhand Medical College and Hospital',
        'Era’s Lucknow Medical College and Hospital',
        'Hind Institute of Medical Sciences, Lucknow',
        'Subharti Medical College, Meerut',
        'Santosh Medical College, Ghaziabad',

        /* East India */

        'All India Institute of Medical Sciences, Bhubaneswar',
        'SCB Medical College and Hospital, Cuttack',
        'VSS Institute of Medical Sciences and Research',
        'MKCG Medical College and Hospital',
        'Institute of Medical Sciences and SUM Hospital',
        'Medical College and Hospital, Kolkata',
        'Nil Ratan Sircar Medical College and Hospital',
        'R. G. Kar Medical College and Hospital',
        'Calcutta National Medical College',
        'IPGMER and SSKM Hospital',
        'North Bengal Medical College',
        'Patna Medical College and Hospital',
        'Nalanda Medical College and Hospital',
        'Indira Gandhi Institute of Medical Sciences, Patna',
        'Darbhanga Medical College and Hospital',
        'Rajendra Institute of Medical Sciences, Ranchi',
        'MGM Medical College, Jamshedpur',
        'Government Medical College, Dhanbad',
        'AIIMS Patna',
        'AIIMS Deoghar',
        'AIIMS Kalyani',
        'AIIMS Raipur',
      ],
    },

    {
      title: 'Engineering Colleges',
      count: '250+',
      colleges: [
        /* North India */

        'Indian Institute of Technology Delhi',
        'Delhi Technological University',
        'Netaji Subhas University of Technology',
        'Indraprastha Institute of Information Technology Delhi',
        'Indian Institute of Technology Roorkee',
        'National Institute of Technology Delhi',
        'National Institute of Technology Kurukshetra',
        'Punjab Engineering College, Chandigarh',
        'Thapar Institute of Engineering and Technology',
        'Indian Institute of Technology Jammu',
        'National Institute of Technology Srinagar',
        'Indian Institute of Technology Kanpur',
        'Indian Institute of Technology BHU',
        'Motilal Nehru National Institute of Technology Allahabad',
        'Indian Institute of Technology Ropar',
        'Dr. B. R. Ambedkar National Institute of Technology Jalandhar',
        'Chandigarh University',
        'Lovely Professional University',
        'Amity University Noida',
        'Sharda University',
        'Bennett University',

        /* East India */

        'Indian Institute of Technology Kharagpur',
        'Indian Institute of Technology Bhubaneswar',
        'National Institute of Technology Rourkela',
        'National Institute of Technology Durgapur',
        'Indian Institute of Engineering Science and Technology Shibpur',
        'Jadavpur University',
        'University of Calcutta',
        'Kalyani Government Engineering College',
        'Heritage Institute of Technology Kolkata',
        'Techno India University',
        'KIIT University',
        'Siksha O Anusandhan University',
        'Veer Surendra Sai University of Technology',
        'Ravenshaw University',
        'College of Engineering and Technology Bhubaneswar',
        'Birla Institute of Technology Mesra',
        'National Institute of Technology Jamshedpur',
        'Indian Institute of Technology Patna',
        'National Institute of Technology Patna',
        'KIIT School of Technology',
      ],
    },

    {
      title: 'Management Colleges',
      count: '200+',
      colleges: [
        /* North India */

        'Indian Institute of Management Ahmedabad',
        'Indian Institute of Management Lucknow',
        'Indian Institute of Management Indore',
        'Indian Institute of Management Rohtak',
        'Indian Institute of Management Jammu',
        'Indian Institute of Management Amritsar',
        'Faculty of Management Studies, Delhi',
        'Indian Institute of Foreign Trade, Delhi',
        'Management Development Institute, Gurugram',
        'Indian School of Business, Mohali',
        'Amity Business School, Noida',
        'IMT Ghaziabad',
        'BIMTECH Greater Noida',
        'Sharda University School of Business Studies',
        'Chandigarh University',
        'Lovely Professional University',

        /* East India */

        'Indian Institute of Management Calcutta',
        'Indian Institute of Management Ranchi',
        'Indian Institute of Management Bodh Gaya',
        'Indian Institute of Management Sambalpur',
        'Indian Institute of Management Shillong',
        'Xavier Labour Relations Institute',
        'Xavier University Bhubaneswar',
        'Indian Institute of Social Welfare and Business Management',
        'Goenka College of Commerce and Business Administration',
        'St. Xavier’s University Kolkata',
        'KIIT School of Management',
        'International Management Institute Kolkata',
        'Birla Institute of Management Technology',
        'Tata Institute of Social Sciences Guwahati',
        'Assam University',
        'Tezpur University',
      ],
    },

    {
      title: 'Nursing Colleges',
      count: '150+',
      colleges: [
        /* North India */

        'College of Nursing, AIIMS New Delhi',
        'Lady Hardinge Medical College Nursing',
        'Safdarjung Hospital College of Nursing',
        'RML Hospital College of Nursing',
        'University College of Nursing, Delhi',
        'Postgraduate Institute of Medical Education and Research Nursing',
        'Government College of Nursing Chandigarh',
        'Christian Medical College Ludhiana Nursing',
        'Dayanand Medical College Nursing',
        'King George’s Medical University College of Nursing',
        'SGPGIMS College of Nursing',
        'Banaras Hindu University College of Nursing',
        'Aligarh Muslim University College of Nursing',
        'AIIMS Rishikesh College of Nursing',
        'AIIMS Jammu College of Nursing',
        'AIIMS Bathinda College of Nursing',
        'AIIMS Gorakhpur College of Nursing',
        'AIIMS Rae Bareli College of Nursing',

        /* East India */

        'AIIMS Bhubaneswar College of Nursing',
        'SCB Medical College College of Nursing',
        'Medical College Kolkata College of Nursing',
        'R. G. Kar Medical College Nursing',
        'IPGMER College of Nursing',
        'AIIMS Kalyani College of Nursing',
        'AIIMS Patna College of Nursing',
        'Patna Medical College College of Nursing',
        'Nalanda Medical College College of Nursing',
        'AIIMS Deoghar College of Nursing',
        'Rajendra Institute of Medical Sciences College of Nursing',
        'MGM Medical College College of Nursing',
        'AIIMS Raipur College of Nursing',
        'Government College of Nursing Odisha',
        'Kalinga Institute of Nursing Sciences',
        'Institute of Medical Sciences and SUM Hospital Nursing',
      ],
    },
  ];

  const quickLinks = [
    ['Home', '/'],
    ['Courses', '/courses'],
    ['Services', '/services'],
    ['Colleges', '/colleges'],
    ['Blogs', '/blogs'],
    ['Entrance Exams', '/compare'],
    ['News & Events', '/news-events'],
    ['Contact Us', '/contact'],
  ];

  /* =========================================================
     CLICK HANDLERS
  ========================================================= */

  const handleCategoryClick = (title: string) => {
    setActiveCategory(
      activeCategory === title ? null : title
    );

    setActiveRegionCategory(null);
  };

  const handleRegionCategoryClick = (title: string) => {
    setActiveRegionCategory(
      activeRegionCategory === title ? null : title
    );

    setActiveCategory(null);
  };

  const activeCollegeCategory = collegeCategories.find(
    (category) => category.title === activeCategory
  );

  const activeRegionalCategory = regionalCategories.find(
    (category) => category.title === activeRegionCategory
  );

  const activeList =
    activeCollegeCategory || activeRegionalCategory;

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
              MAIN STREAM BUTTONS
          ================================================= */}

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

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

                    ${
                      isActive
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

                        ${
                          isActive
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

                      ${
                        isActive
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

          </div>

          {/* =================================================
              NORTH & EAST INDIA
          ================================================= */}

          <div className="mt-12">

            <div className="mb-7">

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4b8fc5]">
                Regional Directory
              </span>

              <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                North and East Colleges
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Explore colleges across North and East India by stream.
              </p>

            </div>

            {/* REGIONAL BUTTONS */}

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

              {regionalCategories.map((category) => {

                const isActive =
                  activeRegionCategory === category.title;

                return (
                  <button
                    key={category.title}
                    type="button"
                    onClick={() =>
                      handleRegionCategoryClick(category.title)
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

                      ${
                        isActive
                          ? 'bg-[rgb(50_48_127)] text-white shadow-md'
                          : 'bg-[#e5f4fc] text-[rgb(50_48_127)] hover:bg-[#d4edf9]'
                      }
                    `}
                  >

                    <div>

                      <span className="block text-sm font-bold">
                        {category.title.replace(
                          ' Colleges',
                          ''
                        )}
                      </span>

                      <span
                        className={`
                          mt-1
                          block
                          text-[11px]

                          ${
                            isActive
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

                        ${
                          isActive
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

            </div>

          </div>

          {/* =================================================
              ACTIVE COLLEGE LIST
          ================================================= */}

          {activeList && (

            <div className="mt-6 rounded-2xl bg-[#f4f9fd] p-5 sm:p-6">

              {/* Header */}

              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <h3 className="text-xl font-bold text-[#2e3281]">
                    {activeRegionalCategory
                      ? `North & East ${activeList.title}`
                      : activeList.title}
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

              {/* College Names */}

              <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">

                {activeList.colleges.map((college) => (

                  <Link
                    key={college}
                    href="/colleges"
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
                      {college}
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

            {/* Contact */}

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

            {/* Social */}

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

    </footer>
  );
}