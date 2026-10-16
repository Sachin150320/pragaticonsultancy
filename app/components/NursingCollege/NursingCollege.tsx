
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
    id: 1,
    name: "Ramaiah Institute of Nursing Education and Research (RINER)",
    slug: "ramaiah-institute-of-nursing-education-and-research",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A nursing education institution offering nursing studies and professional healthcare learning opportunities.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=msruas.ac.in&sz=128",
  },
  {
    id: 2,
    name: "RV College of Nursing",
    slug: "rv-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A nursing college focused on nursing education, clinical learning and healthcare professional development.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=rvcn.edu.in&sz=128",
  },
  {
    id: 3,
    name: "Dr. B R Ambedkar Institute of Nursing",
    slug: "dr-br-ambedkar-institute-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing / GNM",
    description:
      "An institution offering nursing education and foundational preparation for professional healthcare careers.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
  },
  {
    id: 4,
    name: "Karnataka College of Nursing",
    slug: "karnataka-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing / GNM",
    description:
      "A nursing college providing nursing education and practical preparation for healthcare services.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
  },
  {
    id: 5,
    name: "PES University (PESU)",
    slug: "pes-university",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing / B.Pharmacy",
    description:
      "A Bengaluru-based university offering professional education across selected academic and technical disciplines.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=pes.edu&sz=128",
  },
  {
    id: 6,
    name: "East West College of Nursing (EWCN)",
    slug: "east-west-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing / GNM",
    description:
      "A nursing education college focused on academic study and clinical preparation for nursing careers.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=eastwestgroup.in&sz=128",
  },
  {
    id: 7,
    name: "The Oxford College of Nursing",
    slug: "the-oxford-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A nursing college providing healthcare education and practical learning in nursing and patient care.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=theoxford.edu&sz=128",
  },
  {
    id: 8,
    name: "Sapthagiri Institute of Medical Sciences and Research Centre (SIMSRC)",
    slug: "sapthagiri-institute-of-medical-sciences",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing / GNM",
    description:
      "A medical and healthcare institution associated with professional education and clinical learning.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=sapthagiri.edu.in&sz=128",
  },
  {
    id: 9,
    name: "Rajarajeswari Medical College and Hospital (RRMCH)",
    slug: "rajarajeswari-medical-college-and-hospital",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A medical education and hospital institution supporting healthcare education and clinical exposure.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=rrmch.org&sz=128",
  },
  {
    id: 10,
    name: "VIMS Bangalore",
    slug: "vims-bangalore",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A healthcare education institution offering learning opportunities in medical and allied healthcare fields.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
  },
  {
    id: 11,
    name: "MVM Group of Institutions",
    slug: "mvm-group-of-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing / GNM / B.Pharmacy",
    description:
      "A group of educational institutions offering professional courses in healthcare and related disciplines.",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
  },
  {
    id: 12,
    name: "Aakash Group of Institutions",
    slug: "aakash-group-of-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing / B.Pharmacy",
    description:
      "An educational group offering professional and healthcare-related study opportunities.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=aakash.ac.in&sz=128",
  },
  {
    id: 13,
    name: "RR College of Nursing",
    slug: "rr-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A nursing college focused on professional nursing education and healthcare skills development.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=rrinstitutions.com&sz=128",
  },
  {
    id: 14,
    name: "Manjunatha College of Nursing",
    slug: "manjunatha-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A nursing education institution providing academic instruction and practical healthcare learning.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
  },
  {
    id: 15,
    name: "Harsha Institutions",
    slug: "harsha-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing / B.Pharmacy",
    description:
      "An educational institution group offering professional courses, including healthcare-related programs.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=harsha.ac.in&sz=128",
  },
  {
    id: 16,
    name: "VYMAK Group of Institutions",
    slug: "vymak-group-of-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "An educational group offering professional education and training in selected disciplines.",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
  },
  {
    id: 17,
    name: "Sapthagiri NPS University",
    slug: "sapthagiri-nps-university",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A higher education institution offering academic programs and professional learning opportunities.",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=sapthagiri.edu.in&sz=128",
  },
  {
    id: 18,
    name: "East Point Group of Institutions (EPGI)",
    slug: "east-point-group-of-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing / B.Pharmacy",
    description:
      "An educational group offering professional and healthcare-related programs in Bengaluru.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain eastpoint.ac.in&sz=128",
  },
  {
    id: 19,
    name: "Acharya Institute of Health Sciences (AIHS)",
    slug: "acharya-institute-of-health-sciences",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "An institution focused on healthcare education and preparation for professional healthcare careers.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=acharya.ac.in&sz=128",
  },
  {
    id: 20,
    name: "Smt. Nagarathnamma College of Nursing (SNCN)",
    slug: "smt-nagarathnamma-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A nursing college providing academic education and clinical preparation for nursing students.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=acharya.ac.in&sz=128",
  },
  {
    id: 21,
    name: "MVJ College of Nursing (MVJCON)",
    slug: "mvj-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A nursing college offering professional education and practical preparation for healthcare careers.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=mvjce.edu.in&sz=128",
  },
  {
    id: 22,
    name: "Krupanidhi College of Nursing (KCON)",
    slug: "krupanidhi-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing / GNM",
    description:
      "A nursing education institution offering professional learning in nursing and patient care.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=krupanidhi.edu.in&sz=128",
  },
  {
    id: 23,
    name: "Vydehi Institute of Nursing Sciences and Research Centre",
    slug: "vydehi-institute-of-nursing-sciences",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A healthcare education institution offering nursing studies and clinical learning opportunities.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=vydehi.org&sz=128",
  },
  {
    id: 24,
    name: "SJB College of Nursing",
    slug: "sjb-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A nursing college providing academic and practical education for aspiring healthcare professionals.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
  },
  {
    id: 25,
    name: "Sri Lakshmi College of Nursing",
    slug: "sri-lakshmi-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "A nursing college focused on nursing education and professional healthcare development.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
  },
  {
    id: 26,
    name: "Spurthy College of Nursing",
    slug: "spurthy-college-of-nursing",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "An institution offering nursing education and professional preparation in healthcare services.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=spurthycollege.com&sz=128",
  },
  {
    id: 27,
    name: "Little Flower Group of Institutions",
    slug: "little-flower-group-of-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Sc Nursing",
    description:
      "An educational group offering professional learning opportunities, including healthcare-related education.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
  },
  {
    id: 28,
    name: "M.S. Ramaiah University of Applied Sciences (MSRUAS)",
    slug: "ms-ramaiah-university-of-applied-sciences",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "GNM / B.Pharmacy",
    description:
      "A university offering professional education across applied sciences and selected healthcare disciplines.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=msruas.ac.in&sz=128",
  },
  {
    id: 29,
    name: "Padmashree Group of Institutions",
    slug: "padmashree-group-of-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "GNM",
    description:
      "An educational group offering professional courses and learning opportunities in selected disciplines.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=padmashree.org&sz=128",
  },
  {
    id: 30,
    name: "Goutham College",
    slug: "goutham-college",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "GNM",
    description:
      "An educational institution offering professional learning opportunities in healthcare-related fields.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
  },
  {
    id: 31,
    name: "Krupanidhi Group of Institutions",
    slug: "krupanidhi-group-of-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "GNM",
    description:
      "An educational group offering professional programs and academic learning opportunities.",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=krupanidhi.edu.in&sz=128",
  },
  {
    id: 32,
    name: "SB Group of Institutions",
    slug: "sb-group-of-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "GNM",
    description:
      "An educational institution group offering professional education and career-focused programs.",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
  },
  {
    id: 33,
    name: "Acharya & BM Reddy College of Pharmacy (ABMRCP)",
    slug: "acharya-bm-reddy-college-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A pharmacy college focused on pharmaceutical education, laboratory learning and professional development.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=acharya.ac.in&sz=128",
  },
  {
    id: 34,
    name: "Dayananda Sagar University (DSU)",
    slug: "dayananda-sagar-university",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A university offering higher education and professional learning across selected academic disciplines.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=dsu.edu.in&sz=128",
  },
  {
    id: 35,
    name: "The Oxford College of Pharmacy",
    slug: "the-oxford-college-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A pharmacy institution offering pharmaceutical education and professional learning in drug sciences.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=theoxford.edu&sz=128",
  },
  {
    id: 36,
    name: "T. John College of Pharmacy",
    slug: "t-john-college-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A pharmacy college providing academic and practical learning in pharmaceutical sciences.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=tjohncollege.com&sz=128",
  },
  {
    id: 37,
    name: "Aditya Group of Institutions",
    slug: "aditya-group-of-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "An educational group offering professional education in selected academic and career-focused fields.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
  },
  {
    id: 38,
    name: "RR College of Pharmacy (RRCP)",
    slug: "rr-college-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A pharmacy college offering pharmaceutical studies and practical learning opportunities.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=rrinstitutions.com&sz=128",
  },
  {
    id: 39,
    name: "Oxbridge Group of Institutions",
    slug: "oxbridge-group-of-institutions",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "An educational group offering professional courses and career-oriented learning opportunities.",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
  },
  {
    id: 40,
    name: "Vivekananda College of Pharmacy (VCP)",
    slug: "vivekananda-college-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A pharmacy college focused on pharmaceutical education and professional skill development.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
  },
  {
    id: 41,
    name: "Gautham College of Pharmacy (GCP)",
    slug: "gautham-college-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A pharmacy college offering academic education in pharmaceutical sciences and related professional areas.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
  },
  {
    id: 42,
    name: "Mallige College of Pharmacy",
    slug: "mallige-college-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A pharmacy institution offering pharmaceutical education and professional learning.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
  },
  {
    id: 43,
    name: "East West College of Pharmacy",
    slug: "east-west-college-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A pharmacy college providing academic and practical education in pharmaceutical sciences.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=eastwestgroup.in&sz=128",
  },
  {
    id: 44,
    name: "Vydehi Institute of Pharmacy (VIP)",
    slug: "vydehi-institute-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "An institution offering pharmacy education and professional learning in pharmaceutical sciences.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=vydehi.org&sz=128",
  },
  {
    id: 45,
    name: "Nargund College of Pharmacy",
    slug: "nargund-college-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A pharmacy college focused on pharmaceutical education and practical professional preparation.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
  },
  {
    id: 46,
    name: "Spurthy College of Pharmacy (SCP)",
    slug: "spurthy-college-of-pharmacy",
    location: "Bengaluru, Karnataka",
    type: "Private",
    course: "B.Pharmacy",
    description:
      "A pharmacy college providing professional education in pharmaceutical sciences and related subjects.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    logo: "https://www.google.com/s2/favicons?domain=spurthycollege.com&sz=128",
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
        college.type.toLowerCase().includes(value) ||
        college.course.toLowerCase().includes(value)
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-white">
      {/* BREADCRUMB */}
      <BreadcrumbBanner
        title="Nursing & Pharmacy Colleges"
        description="Explore nursing, GNM and pharmacy colleges and admission opportunities"
      />

      {/* INTRO */}
      <section className="bg-[#f8f9fc] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#2E3281]/10 px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] text-[#2E3281]">
              <GraduationCap size={16} />
              Healthcare Admissions
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-[#2E3281] sm:text-4xl md:text-5xl">
              Find The Right Nursing & Pharmacy College
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-7 text-slate-600">
              Explore colleges offering B.Sc Nursing, GNM and B.Pharmacy.
              Search for institutions based on course and location.
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
                  Nursing & Pharmacy Education
                </p>

                <h2 className="mt-1 text-2xl font-bold text-[#2E3281] sm:text-3xl">
                  Nursing & Pharmacy Colleges
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Explore B.Sc Nursing, GNM and B.Pharmacy colleges in Bengaluru.
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
                  placeholder="Search college or course..."
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

                    {/* COURSE TAG */}
                    <span className="absolute top-3 left-3 max-w-[calc(100%-24px)] rounded-lg bg-white px-3 py-1.5 text-[10px] font-bold uppercase leading-4 tracking-wide text-[#2E3281] shadow-sm">
                      {college.course.split(" / ").map((course, index) => (
                        <span key={course}>
                          {index > 0 && " / "}
                          {course}
                        </span>
                      ))}
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
                We could not find a college matching your search. Try another
                college name or course.
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
                Need Help Choosing Your College?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                Get guidance on B.Sc Nursing, GNM and B.Pharmacy courses,
                college options, counselling and admission procedures.
              </p>

              <Link
                href="/contact-us"
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
