"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

type MenuChild = {
  label: string;
  href: string;
};

type MenuItem = {
  label: string;
  href?: string;
  children?: MenuChild[];
};

type SearchItem = MenuChild & {
  keywords?: string;
};

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "Why Choose Us", href: "/why-choose-us" },
    ],
  },
  {
    label: "Courses",
    children: [
      { label: "MBBS", href: "/mbbs" },
      { label: "Engineering", href: "/engineering" },
      { label: "Management", href: "/management" },
      { label: "Nursing", href: "/nursing" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Education Services", href: "/education-services" },
    ],
  },
  {
    label: "Colleges",
    children: [
      { label: "Medical Colleges", href: "/medicalcolleges" },
      { label: "Engineering Colleges", href: "/engineeringcolleges" },
      { label: "Management Colleges", href: "/managementcolleges" },
      { label: "Nursing Colleges", href: "/nursingcolleges" },
    ],
  },
  { label: "Blogs", href: "/blogs" },
  {
    label: "Entrance Exams",
    children: [
      { label: "NEET UG", href: "/compare/neet-ug" },
      { label: "NEET PG", href: "/compare/neet-pg" },
      { label: "KEA Counselling", href: "/compare/kea" },
    ],
  },
];

/* ---------------- SITE PAGES ---------------- */
const searchablePages: SearchItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "MBBS", href: "/mbbs", keywords: "medical doctor course college" },
  { label: "Engineering", href: "/engineering", keywords: "engg be btech course college" },
  { label: "Management", href: "/management", keywords: "mba bba bms course college" },
  { label: "Nursing", href: "/nursing", keywords: "bsc nursing gnm anm course college pharmacy" },
  { label: "Education Services", href: "/education-services" },
  { label: "Medical Colleges", href: "/medicalcolleges", keywords: "mbbs medical dental college colleges doctor" },
  { label: "Engineering Colleges", href: "/engineeringcolleges", keywords: "engg engineering college colleges be btech" },
  { label: "Management Colleges", href: "/managementcolleges", keywords: "mba bba management college colleges" },
  { label: "Nursing Colleges", href: "/nursingcolleges", keywords: "nursing college colleges bsc pharmacy" },
  { label: "Blogs", href: "/", keywords: "blog articles news" },
  { label: "NEET UG", href: "/", keywords: "entrance exam mbbs neet" },
  { label: "NEET PG", href: "/", keywords: "entrance exam md ms neet" },
  { label: "KEA Counselling", href: "/compare/kea", keywords: "entrance exam cet counselling engineering" },
  { label: "Contact", href: "/contact", keywords: "contact us phone email enquiry" },
];

/* ---------------- HELPERS ---------------- */
// Used only for medical/dental colleges, because their data has no slug.
// If your medical pages use a different slug format, change this function.
const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/['’.]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

type CollegeTuple = readonly [name: string, slug: string];

const buildItems = (
  list: readonly CollegeTuple[],
  basePath: string,
  suffix: string,
  keywords: string
): SearchItem[] =>
  list.map(([name, slug]) => ({
    label: `${name} - ${suffix}`,
    href: `${basePath}/${slug}`,
    keywords,
  }));

const buildItemsFromNames = (
  names: readonly string[],
  basePath: string,
  suffix: string,
  keywords: string
): SearchItem[] =>
  names.map((name) => ({
    label: `${name} - ${suffix}`,
    href: `${basePath}/${slugify(name)}`,
    keywords,
  }));

/* ---------------- MANAGEMENT COLLEGES ---------------- */
const managementColleges: CollegeTuple[] = [
  ["Christ University", "christ-university"],
  ["Mount Carmel College", "mount-carmel-college"],
  ["Kristu Jayanti College", "kristu-jayanti-college"],
  ["Jain University", "jain-university"],
  ["Presidency University", "presidency-university"],
  ["Alliance University", "alliance-university"],
  ["Acharya Institute of Graduate Studies", "acharya-institute-of-graduate-studies"],
  ["REVA University", "reva-university"],
  ["Bangalore University", "bangalore-university"],
  ["Bangalore Institute of Technology", "bangalore-institute-of-technology"],
  ["B.M.S. College of Engineering", "bms-college-of-engineering"],
  ["M.S. Ramaiah University of Applied Sciences", "ms-ramaiah-university-of-applied-sciences"],
  ["Indian Institute of Management Ahmedabad", "indian-institute-of-management-ahmedabad"],
  ["Indian Institute of Management Bangalore", "indian-institute-of-management-bangalore"],
  ["Indian Institute of Management Calcutta", "indian-institute-of-management-calcutta"],
  ["Indian Institute of Management Lucknow", "indian-institute-of-management-lucknow"],
  ["Indian Institute of Management Kozhikode", "indian-institute-of-management-kozhikode"],
  ["Indian Institute of Management Indore", "indian-institute-of-management-indore"],
  ["Indian Institute of Management Rohtak", "indian-institute-of-management-rohtak"],
  ["Indian Institute of Management Jammu", "indian-institute-of-management-jammu"],
  ["Indian Institute of Management Bodh Gaya", "indian-institute-of-management-bodh-gaya"],
  ["Indian Institute of Management Ranchi", "indian-institute-of-management-ranchi"],
  ["Indian Institute of Management Amritsar", "indian-institute-of-management-amritsar"],
  ["Indian Institute of Management Visakhapatnam", "indian-institute-of-management-visakhapatnam"],
  ["Indian Institute of Management Shillong", "indian-institute-of-management-shillong"],
  ["Indian Institute of Management Udaipur", "indian-institute-of-management-udaipur"],
  ["Indian Institute of Management Tiruchirappalli", "indian-institute-of-management-tiruchirappalli"],
];

/* ---------------- NURSING / PHARMACY COLLEGES ---------------- */
const nursingColleges: CollegeTuple[] = [
  ["Ramaiah Institute of Nursing Education and Research (RINER)", "ramaiah-institute-of-nursing-education-and-research"],
  ["RV College of Nursing", "rv-college-of-nursing"],
  ["Dr. B R Ambedkar Institute of Nursing", "dr-br-ambedkar-institute-of-nursing"],
  ["Karnataka College of Nursing", "karnataka-college-of-nursing"],
  ["PES University (PESU)", "pes-university"],
  ["East West College of Nursing (EWCN)", "east-west-college-of-nursing"],
  ["The Oxford College of Nursing", "the-oxford-college-of-nursing"],
  ["Sapthagiri Institute of Medical Sciences and Research Centre (SIMSRC)", "sapthagiri-institute-of-medical-sciences"],
  ["Rajarajeswari Medical College and Hospital (RRMCH)", "rajarajeswari-medical-college-and-hospital"],
  ["VIMS Bangalore", "vims-bangalore"],
  ["MVM Group of Institutions", "mvm-group-of-institutions"],
  ["Aakash Group of Institutions", "aakash-group-of-institutions"],
  ["RR College of Nursing", "rr-college-of-nursing"],
  ["Manjunatha College of Nursing", "manjunatha-college-of-nursing"],
  ["Harsha Institutions", "harsha-institutions"],
  ["VYMAK Group of Institutions", "vymak-group-of-institutions"],
  ["Sapthagiri NPS University", "sapthagiri-nps-university"],
  ["East Point Group of Institutions (EPGI)", "east-point-group-of-institutions"],
  ["Acharya Institute of Health Sciences (AIHS)", "acharya-institute-of-health-sciences"],
  ["Smt. Nagarathnamma College of Nursing (SNCN)", "smt-nagarathnamma-college-of-nursing"],
  ["MVJ College of Nursing (MVJCON)", "mvj-college-of-nursing"],
  ["Krupanidhi College of Nursing (KCON)", "krupanidhi-college-of-nursing"],
  ["Vydehi Institute of Nursing Sciences and Research Centre", "vydehi-institute-of-nursing-sciences"],
  ["SJB College of Nursing", "sjb-college-of-nursing"],
  ["Sri Lakshmi College of Nursing", "sri-lakshmi-college-of-nursing"],
  ["Spurthy College of Nursing", "spurthy-college-of-nursing"],
  ["Little Flower Group of Institutions", "little-flower-group-of-institutions"],
  ["M.S. Ramaiah University of Applied Sciences (MSRUAS)", "ms-ramaiah-university-of-applied-sciences"],
  ["Padmashree Group of Institutions", "padmashree-group-of-institutions"],
  ["Goutham College", "goutham-college"],
  ["Krupanidhi Group of Institutions", "krupanidhi-group-of-institutions"],
  ["SB Group of Institutions", "sb-group-of-institutions"],
  ["Acharya & BM Reddy College of Pharmacy (ABMRCP)", "acharya-bm-reddy-college-of-pharmacy"],
  ["Dayananda Sagar University (DSU)", "dayananda-sagar-university"],
  ["The Oxford College of Pharmacy", "the-oxford-college-of-pharmacy"],
  ["T. John College of Pharmacy", "t-john-college-of-pharmacy"],
  ["Aditya Group of Institutions", "aditya-group-of-institutions"],
  ["RR College of Pharmacy (RRCP)", "rr-college-of-pharmacy"],
  ["Oxbridge Group of Institutions", "oxbridge-group-of-institutions"],
  ["Vivekananda College of Pharmacy (VCP)", "vivekananda-college-of-pharmacy"],
  ["Gautham College of Pharmacy (GCP)", "gautham-college-of-pharmacy"],
  ["Mallige College of Pharmacy", "mallige-college-of-pharmacy"],
  ["East West College of Pharmacy", "east-west-college-of-pharmacy"],
  ["Vydehi Institute of Pharmacy (VIP)", "vydehi-institute-of-pharmacy"],
  ["Nargund College of Pharmacy", "nargund-college-of-pharmacy"],
  ["Spurthy College of Pharmacy (SCP)", "spurthy-college-of-pharmacy"],
];

/* ---------------- ENGINEERING COLLEGES ---------------- */
const engineeringColleges: CollegeTuple[] = [
  ["Acharya Institute of Technology", "acharya-institute-of-technology"],
  ["Akash Institute of Engineering and Technology", "akash-institute-of-engineering-and-technology"],
  ["AMC Engineering College", "amc-engineering-college"],
  ["Atria Institute of Technology", "atria-institute-of-technology"],
  ["Bangalore Institute of Technology", "bangalore-institute-of-technology"],
  ["Bangalore Technological Institute", "bangalore-technological-institute"],
  ["BMS College of Engineering", "bms-college-of-engineering"],
  ["BMS Institute of Technology & Management", "bms-institute-of-technology-management"],
  ["Brindavan College of Engineering", "brindavan-college-of-engineering"],
  ["C.M.R. Institute of Technology", "cmr-institute-of-technology"],
  ["Cambridge Institute of Technology", "cambridge-institute-of-technology"],
  ["Dayananda Sagar Academy of Technology & Management", "dayananda-sagar-academy-of-technology-management"],
  ["Dayananda Sagar College of Engineering", "dayananda-sagar-college-of-engineering"],
  ["East Point College of Engineering and Technology", "east-point-college-of-engineering-and-technology"],
  ["East West Institute of Technology", "east-west-institute-of-technology"],
  ["JSS Academy of Technical Education", "jss-academy-of-technical-education"],
  ["M.S. Engineering College", "ms-engineering-college"],
  ["M.S. Ramaiah Institute of Technology", "ms-ramaiah-institute-of-technology"],
  ["R.V. College of Engineering", "rv-college-of-engineering"],
  ["R.R. Institute of Technology", "rr-institute-of-technology"],
  ["Raja Rajeswari College of Engineering", "raja-rajeswari-college-of-engineering"],
  ["SJB Institute of Technology", "sjb-institute-of-technology"],
  ["S.E.A. College of Engineering & Technology", "sea-college-of-engineering-technology"],
  ["Sambhram Institute of Technology", "sambhram-institute-of-technology"],
  ["Sapthagiri NPS University", "sapthagiri-nps-university"],
  ["Sir M. Visvesvaraya Institute of Technology", "sir-m-visvesvaraya-institute-of-technology"],
  ["Sri Krishna Institute of Technology", "sri-krishna-institute-of-technology"],
  ["Sri Venkateshwara College of Engineering", "sri-venkateshwara-college-of-engineering"],
  ["T. John Institute of Technology", "t-john-institute-of-technology"],
  ["REVA University", "reva-university"],
  ["Alliance College of Engineering & Design, Alliance University", "alliance-college-of-engineering-design"],
  ["Presidency University", "presidency-university"],
  ["CMR University", "cmr-university"],
  ["M.S. Ramaiah University of Applied Sciences", "ms-ramaiah-university-of-applied-sciences"],
  ["R.V. Institute of Technology and Management", "rv-institute-of-technology-and-management"],
  ["BGS College of Engineering and Technology", "bgs-college-of-engineering-and-technology"],
  ["Aditya College of Engineering and Technology", "aditya-college-of-engineering-and-technology"],
  ["CMN Institute of Technology", "cmn-institute-of-technology"],
  ["Ramaiah University College of Engineering", "ramaiah-university-college-of-engineering"],
  ["RNS Institute of Technology (RNSIT)", "rns-institute-of-technology"],
  ["R.V. University", "rv-university"],
  ["BMS University", "bms-university"],
];

/* ---------------- MEDICAL COLLEGES ---------------- */
const medicalCollegeNames: string[] = [
  "Bangalore Medical College and Research Institute",
  "Mysore Medical College and Research Institute",
  "Karnataka Institute of Medical Sciences",
  "Vijayanagar Institute of Medical Sciences",
  "Mandya Institute of Medical Sciences",
  "Belgaum Institute of Medical Sciences",
  "Hassan Institute of Medical Sciences",
  "Shimoga Institute of Medical Sciences",
  "Raichur Institute of Medical Sciences",
  "Bidar Institute of Medical Sciences",
  "Kidwai Cancer Institute",
  "Indira Gandhi Institute of Child Health",
  "Employees State Insurance Corporation Medical College",
  "Jaya Jagadguru Murugharajendra Medical College",
  "M.S. Ramaiah Medical College",
  "Kempegowda Institute of Medical Sciences",
  "Mahadevappa Rampure Medical College",
  "Adichunchanagiri Institute of Medical Sciences",
  "K. Venkataramana Gowda Medical College and Hospital",
  "Dr. B.R. Ambedkar Medical College",
  "Shymanuru Shivashankarappa Institute of Medical Sciences",
  "S. Nijalingappa Medical College and Research Centre",
  "Sri Basaveshwara Medical College and Hospital",
  "Al-Ameen Medical College",
  "Father Muller Institute of Medical Education and Research",
  "Vydehi Institute of Medical Science and Research Centre",
  "Sri Dharmasthala Manjunatheshwara Medical College",
  "M.V.J. Medical College and Research Hospital",
  "Navodaya Medical College",
  "A.J. Institute of Medical Sciences",
  "Kasturba Medical College, Mangalore",
  "Kasturba Medical College, Manipal",
  "Sanjay Gandhi Institute of Trauma and Orthopaedics",
  "Jagadguru Sri Shivarathreeswara Medical College",
  "K.S. Hegde Medical Academy",
  "Yenepoya Medical College",
  "ESI Medical College, Bangalore",
  "Khaja Bande Navaz Institute of Medical Sciences",
  "B M Patil Medical College",
  "Sapthagiri Institute of Medical Sciences",
  "B G S Global Institute of Medical Sciences",
  "Srinivas Institute of Medical Science and Research Centre",
  "St. Johns Medical College",
  "Dharwad Institute of Mental Health and Neurosciences",
  "Gadag Institute of Medical Science",
  "SDS Tuberculosis Research Centre and Rajiv Gandhi Institute of Chest Diseases",
  "Akash Institute of Medical Sciences and Research Centre",
  "The Oxford Medical College Hospital and Research Centre",
  "Sri Devi Institute of Medical Sciences and Research Centre",
  "Gulbarga Institute of Medical Science",
  "Koppal Institute of Medical Science",
  "Kanachur Institute of Medical Science",
  "Subbaiah Institute of Medical Science",
  "Karwar Institute of Medical Sciences",
  "Kodagu Institute of Medical Sciences",
  "Chamarajanagar Institute of Medical Science",
  "East Point College of Medical Sciences",
  "Shri Atal Bihari Vajpayee Institute of Medical Science",
  "Dr. Chandramma Dayananda Sagar Institute of Medical Education and Research",
  "Chikkamagaluru Institute of Medical Sciences",
  "Chikkaballapura Institute of Medical Sciences",
  "Haveri Institute of Medical Sciences",
  "Siddaganga Medical College and Research Institute",
  "Sri Chamundeshwari Medical College Hospital and Research Institute",
  "Sri Madhusudan Sai Institute of Medical Sciences and Research",
];

/* ---------------- DENTAL COLLEGES ---------------- */
const dentalCollegeNames: string[] = [
  "Government Dental College",
  "Bapuji Dental College and Hospital",
  "College of Dental Sciences",
  "Academy of Medical Education Dental College",
  "Dayananda Sagar College of Dental Sciences",
  "HKE S Nijalingappa Dental College",
  "Krishnadevaraya College of Dental Sciences",
  "K. Venkataramana Gowda Dental College",
  "Dr. M.R. Ambedkar Dental College and Hospital",
  "M.S. Ramaiah University of Applied Sciences",
  "D.A. Pandu Memorial RV Dental College",
  "PM Nadagowda Memorial Dental College and Hospital",
  "Vokkaligara Sangha Dental College and Hospital",
  "K L E S Institute of Dental Sciences",
  "Sri Hasanamba Dental College and Hospital",
  "Maratha Mandal Dental College",
  "Al-Ameen Dental College",
  "Al Badar Dental College and Hospital",
  "Bangalore Institute of Dental Sciences and Hospital",
  "Vydehi Institute of Dental Sciences and Research Centre",
  "Coorg Institute of Dental Sciences",
  "Oxford Dental College",
  "A.J. Institute of Dental Sciences",
  "K.G.F. College of Dental Sciences",
  "Sri Dharmasthala Manjunatheshwara Dental College",
  "Navodaya Dental College",
  "Sri Rajiv Gandhi Dental College",
  "Jagadguru Suttur Shivarathreeshwara Dental College",
  "Raja Rajeshwari Dental College and Hospital",
  "Sharavathi Dental College",
  "Manipal College of Dental Sciences, Mangalore",
  "Manipal College of Dental Science, Manipal",
  "Sri Jagadguru Murugharajendra Dental College",
  "Srinivasa Institute of Dental Science",
  "S.B. Patil Institute of Dental Science",
  "Subbaiah Institute of Dental Science",
  "Employees State Insurance Corporation Dental College",
];

/* ---------------- ALL COLLEGES FOR SEARCH ----------------
   Route patterns (change if your real routes differ):
   nursing    -> /nursing-colleges/<slug>
   engineering-> /engineering-colleges/<slug>
   management -> /management-colleges/<slug>
   medical    -> /medical-colleges/<slug>
   dental     -> /medical-colleges/<slug>                        */
const collegeSearchItems: SearchItem[] = [
  ...buildItems(
    nursingColleges,
    "/nursing-colleges",
    "Nursing / Pharmacy",
    "nursing pharmacy college colleges bsc gnm bpharm"
  ),
  ...buildItems(
    engineeringColleges,
    "/engineering-colleges",
    "Engineering",
    "engineering engg college colleges be btech"
  ),
  ...buildItems(
    managementColleges,
    "/management-colleges",
    "Management",
    "management mba bba bcom college colleges"
  ),
  ...buildItemsFromNames(
    medicalCollegeNames,
    "/medical-colleges",
    "Medical",
    "medical mbbs college colleges doctor"
  ),
  ...buildItemsFromNames(
    dentalCollegeNames,
    "/medical-colleges",
    "Dental",
    "dental bds dentist college colleges medical"
  ),
];

// Built once (not on every keystroke) and de-duplicated by link
const allSearchablePages: SearchItem[] = [
  ...searchablePages,
  ...collegeSearchItems,
].filter(
  (page, index, pages) =>
    pages.findIndex((item) => item.href === page.href) === index
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const getFilteredPages = (): SearchItem[] => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];

    const words = query.split(/\s+/);

    const scored = allSearchablePages
      .map((page) => {
        const label = page.label.toLowerCase();
        const haystack = `${label} ${(page.keywords || "").toLowerCase()}`;

        // every word typed must match the name or keywords
        if (!words.every((word) => haystack.includes(word))) return null;

        let score = 0;
        if (label.startsWith(query)) score += 3;
        else if (label.includes(query)) score += 2;
        else score += 1; // matched only through keywords

        return { page, score };
      })
      .filter(Boolean) as { page: SearchItem; score: number }[];

    return scored
      .sort((a, b) => b.score - a.score)
      .map((entry) => entry.page)
      .slice(0, 20);
  };

  const filteredPages = getFilteredPages();

  useEffect(() => {
    if (searchOpen) {
      searchRef.current?.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown((current) => current === label ? null : label);
  };

  const openSearchResult = (href: string) => {
    setSearchOpen(false);
    setSearchQuery("");
    closeMobileMenu();
    window.location.href = href;
  };

  const toggleSearch = () => {
    setSearchOpen((previous) => !previous);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* TOP BAR */}
      <div className="hidden md:block bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-xs md:text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919620201999" className="flex items-center gap-2 hover:text-blue-200 transition">
              <span>📞</span>
              <span>+91 96202 01999</span>
            </a>
            <a href="mailto:info@pragaticonsultancy.com" className="flex items-center gap-2 hover:text-blue-200 transition">
              <span>✉️</span>
              <span>info@pragaticonsultancy.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#facebook" aria-label="Facebook" className="hover:text-blue-200 transition"><FacebookIcon fontSize="small" /></a>
            <a href="#instagram" aria-label="Instagram" className="hover:text-blue-200 transition"><InstagramIcon fontSize="small" /></a>
            <a href="#linkedin" aria-label="LinkedIn" className="hover:text-blue-200 transition"><LinkedInIcon fontSize="small" /></a>
            <a href="#youtube" aria-label="YouTube" className="hover:text-blue-200 transition"><YouTubeIcon fontSize="small" /></a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="border-b border-gray-200 header-section">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 md:py-4 flex items-center justify-between gap-2 sm:gap-4">
          {/* LOGO */}
          <Link href="/" onClick={closeMobileMenu} className="flex items-center flex-shrink-0">
            <div className="relative w-[112px] h-[48px] sm:w-[155px] sm:h-[60px] md:w-[180px] md:h-[50px]">
              <Image
                src="/images/logos/logo.png"
                alt="Pragati Educational Consultancy"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {menuItems.map((item) => {
              const hasDropdown = !!item.children?.length;

              if (!hasDropdown) {
                return (
                  <Link
                    key={item.label}
                    href={item.href || "/"}
                    className="relative flex items-center gap-1 px-3 py-2.5 text-[17px] font-medium text-white hover:text-dark rounded-lg transition group whitespace-nowrap"
                  >
                    <span>{item.label}</span>
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                );
              }

              return (
                <div key={item.label} className="relative group">
                  <button
                    type="button"
                    className="relative flex items-center gap-1 px-3 py-2.5 text-[17px] font-medium text-white hover:text-dark rounded-lg transition whitespace-nowrap"
                  >
                    <span>{item.label}</span>
                    <ExpandMoreIcon fontSize="small" className="transition-transform duration-300 group-hover:rotate-180" />
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </button>

                  <div className="absolute top-full left-0 pt-2 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-50">
                    <div className="w-64 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center justify-between gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition border-b border-gray-100 last:border-b-0"
                        >
                          <span>{child.label}</span>
                          <ChevronRightIcon fontSize="small" className="text-gray-400 transition-transform duration-200" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* RIGHT SIDE: SEARCH + GET IN TOUCH + MOBILE MENU */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            {/* RESPONSIVE SEARCH */}
            <div className="relative" ref={searchContainerRef}>
              <button
                type="button"
                onClick={toggleSearch}
                className="flex items-center justify-center p-2 text-gray-100 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                aria-label="Search colleges and pages"
                aria-expanded={searchOpen}
              >
                <SearchIcon />
              </button>

              {searchOpen && (
                <div className="fixed left-3 right-3 top-[82px] sm:absolute sm:left-auto sm:right-0 sm:top-full sm:mt-2 sm:w-[360px] sm:max-w-[calc(100vw-24px)] bg-white border border-gray-200 rounded-xl shadow-xl z-[100] overflow-hidden">
                  <div className="flex items-center gap-2 p-3 border-b border-gray-200">
                    <SearchIcon className="text-gray-400 flex-shrink-0" />

                    <input
                      ref={searchRef}
                      type="search"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" && filteredPages.length > 0) {
                          openSearchResult(filteredPages[0].href);
                        }

                        if (event.key === "Escape") {
                          setSearchOpen(false);
                          setSearchQuery("");
                        }
                      }}
                      placeholder="Search college or course..."
                      className="w-full min-w-0 py-1 outline-none text-sm text-gray-800 placeholder:text-gray-400"
                      aria-label="Search colleges and website pages"
                      autoComplete="off"
                    />

                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="text-gray-500 hover:text-red-600 flex-shrink-0"
                        aria-label="Clear search"
                      >
                        <CloseIcon fontSize="small" />
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="text-gray-500 hover:text-red-600 flex-shrink-0"
                      aria-label="Close search"
                    >
                      <CloseIcon fontSize="small" />
                    </button>
                  </div>

                  <div className="max-h-[min(60vh,400px)] overflow-y-auto overscroll-contain">
                    {!searchQuery.trim() ? (
                      <p className="px-4 py-4 text-sm text-gray-500">
                        Start typing a college or page name.
                      </p>
                    ) : filteredPages.length > 0 ? (
                      filteredPages.map((page) => (
                        <button
                          key={page.href}
                          type="button"
                          onClick={() => openSearchResult(page.href)}
                          className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition border-b border-gray-100 last:border-0"
                        >
                          <span className="min-w-0 break-words">{page.label}</span>
                          <ChevronRightIcon fontSize="small" className="flex-shrink-0" />
                        </button>
                      ))
                    ) : (
                      <p className="px-4 py-4 text-sm text-gray-500">
                        No matching colleges or pages found.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* GET IN TOUCH: SHOWN ONLY ONCE */}
            <Link
              href="/contact"
              className="sign-in-gradient-btn hidden sm:flex items-center gap-1 whitespace-nowrap"
            >
              <span>Contact Us</span>
              <ChevronRightIcon className="sign-in-gradient-icon" fontSize="small" />
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => {
                setIsOpen((previous) => !previous);
                setMobileDropdown(null);
              }}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <CloseIcon />
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 py-3">
              <div className="flex flex-col">
                {menuItems.map((item) => {
                  const hasDropdown = !!item.children?.length;

                  if (!hasDropdown) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href || "/"}
                        onClick={closeMobileMenu}
                        className="flex items-center justify-between px-4 py-3 text-gray-700 font-medium text-sm hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      >
                        <span>{item.label}</span>
                        <ChevronRightIcon fontSize="small" className="text-gray-400" />
                      </Link>
                    );
                  }

                  const isDropdownOpen = mobileDropdown === item.label;

                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-700 font-medium text-sm hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      >
                        <span>{item.label}</span>
                        <ExpandMoreIcon
                          fontSize="small"
                          className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-blue-600" : ""}`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${isDropdownOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        <div className="ml-4 mb-2 border-l-2 border-blue-100">
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={closeMobileMenu}
                              className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition"
                            >
                              <span>{child.label}</span>
                              <ChevronRightIcon fontSize="small" className="text-gray-400" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}