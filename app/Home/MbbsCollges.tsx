'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    ChevronRight,
    ExpandMore,
    School,
} from '@mui/icons-material';

interface College {
    name: string;
    slug: string;
    href: string;
}

interface QuotaBox {
    id: number;
    title: string;
    quotaType: string;
    year: string;
    colleges: College[];
}

// Builds the URL slug from the college name.
// If your listing page uses a different slugify, change it here so the links match.
const slugify = (name: string): string =>
    name
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

// Base routes for the detail pages.
const MEDICAL_BASE = '/medical-colleges';
const DENTAL_BASE = '/medical-colleges';

// Names and types are exactly as in your `collegeData`.
const medicalList = [
    ["Bangalore Medical College and Research Institute", "Government"],
    ["Mysore Medical College and Research Institute", "Government"],
    ["Karnataka Institute of Medical Sciences", "Government"],
    ["Vijayanagar Institute of Medical Sciences", "Government"],
    ["Mandya Institute of Medical Sciences", "Government"],
    ["Belgaum Institute of Medical Sciences", "Government"],
    ["Hassan Institute of Medical Sciences", "Government"],
    ["Shimoga Institute of Medical Sciences", "Government"],
    ["Raichur Institute of Medical Sciences", "Government"],
    ["Bidar Institute of Medical Sciences", "Government"],
    ["Kidwai Cancer Institute", "Government"],
    ["Indira Gandhi Institute of Child Health", "Government"],
    ["Employees State Insurance Corporation Medical College", "Government"],
    ["Jaya Jagadguru Murugharajendra Medical College", "Private"],
    ["M.S. Ramaiah Medical College", "Private University"],
    ["Kempegowda Institute of Medical Sciences", "Private"],
    ["Mahadevappa Rampure Medical College", "Private"],
    ["Adichunchanagiri Institute of Medical Sciences", "Private University"],
    ["K. Venkataramana Gowda Medical College and Hospital", "Private"],
    ["Dr. B.R. Ambedkar Medical College", "Private"],
    ["Shymanuru Shivashankarappa Institute of Medical Sciences", "Private"],
    ["S. Nijalingappa Medical College and Research Centre", "Private"],
    ["Sri Basaveshwara Medical College and Hospital", "Private"],
    ["Al-Ameen Medical College", "Private"],
    ["Father Muller Institute of Medical Education and Research", "Private"],
    ["Vydehi Institute of Medical Science and Research Centre", "Private"],
    ["Sri Dharmasthala Manjunatheshwara Medical College", "Private University"],
    ["M.V.J. Medical College and Research Hospital", "Private"],
    ["Navodaya Medical College", "Private"],
    ["A.J. Institute of Medical Sciences", "Private"],
    ["Kasturba Medical College, Mangalore", "Deemed"],
    ["Kasturba Medical College, Manipal", "Deemed"],
    ["Sanjay Gandhi Institute of Trauma and Orthopaedics", "Government"],
    ["Jagadguru Sri Shivarathreeswara Medical College", "Deemed"],
    ["K.S. Hegde Medical Academy", "Deemed"],
    ["Yenepoya Medical College", "Deemed"],
    ["ESI Medical College, Bangalore", "Government"],
    ["Khaja Bande Navaz Institute of Medical Sciences", "Private University"],
    ["B M Patil Medical College", "Government"],
    ["Sapthagiri Institute of Medical Sciences", "Private University"],
    ["B G S Global Institute of Medical Sciences", "Private"],
    ["Srinivas Institute of Medical Science and Research Centre", "Private University"],
    ["St. Johns Medical College", "Private"],
    ["Dharwad Institute of Mental Health and Neurosciences", "Government"],
    ["Gadag Institute of Medical Science", "Government"],
    ["SDS Tuberculosis Research Centre and Rajiv Gandhi Institute of Chest Diseases", "Government"],
    ["Akash Institute of Medical Sciences and Research Centre", "Private"],
    ["The Oxford Medical College Hospital and Research Centre", "Private"],
    ["Sri Devi Institute of Medical Sciences and Research Centre", "Private"],
    ["Gulbarga Institute of Medical Science", "Government"],
    ["Koppal Institute of Medical Science", "Government"],
    ["Kanachur Institute of Medical Science", "Private"],
    ["Subbaiah Institute of Medical Science", "Private"],
    ["Karwar Institute of Medical Sciences", "Government"],
    ["Kodagu Institute of Medical Sciences", "Government"],
    ["Chamarajanagar Institute of Medical Science", "Government"],
    ["East Point College of Medical Sciences", "Private"],
    ["Shri Atal Bihari Vajpayee Institute of Medical Science", "Government"],
    ["Dr. Chandramma Dayananda Sagar Institute of Medical Education and Research", "Private University"],
    ["Chikkamagaluru Institute of Medical Sciences", "Government"],
    ["Chikkaballapura Institute of Medical Sciences", "Government"],
    ["Haveri Institute of Medical Sciences", "Government"],
    ["Siddaganga Medical College and Research Institute", "Private"],
    ["Sri Chamundeshwari Medical College Hospital and Research Institute", "Private"],
    ["Sri Madhusudan Sai Institute of Medical Sciences and Research", "Private University"],
] as const;

const dentalList = [
    ["Government Dental College", "Government"],
    ["Bapuji Dental College and Hospital", "Private Unaided"],
    ["College of Dental Sciences", "Private Unaided"],
    ["Academy of Medical Education Dental College", "Private Unaided"],
    ["Dayananda Sagar College of Dental Sciences", "Private Unaided"],
    ["HKE S Nijalingappa Dental College", "Private Unaided"],
    ["Krishnadevaraya College of Dental Sciences", "Private Unaided"],
    ["K. Venkataramana Gowda Dental College", "Private Unaided"],
    ["Dr. M.R. Ambedkar Dental College and Hospital", "Private Unaided"],
    ["M.S. Ramaiah University of Applied Sciences", "Private/Deemed University"],
    ["D.A. Pandu Memorial RV Dental College", "Private Unaided"],
    ["PM Nadagowda Memorial Dental College and Hospital", "Private Unaided"],
    ["Vokkaligara Sangha Dental College and Hospital", "Private Unaided"],
    ["K L E S Institute of Dental Sciences", "Private Unaided"],
    ["Sri Hasanamba Dental College and Hospital", "Private Unaided"],
    ["Maratha Mandal Dental College", "Private Unaided"],
    ["Al-Ameen Dental College", "Minority"],
    ["Al Badar Dental College and Hospital", "Minority"],
    ["Bangalore Institute of Dental Sciences and Hospital", "Minority"],
    ["Vydehi Institute of Dental Sciences and Research Centre", "Minority"],
    ["Coorg Institute of Dental Sciences", "Minority"],
    ["Oxford Dental College", "Minority"],
    ["A.J. Institute of Dental Sciences", "Minority"],
    ["K.G.F. College of Dental Sciences", "Minority"],
    ["Sri Dharmasthala Manjunatheshwara Dental College", "Private/Deemed University"],
    ["Navodaya Dental College", "Minority"],
    ["Sri Rajiv Gandhi Dental College", "Private Unaided"],
    ["Jagadguru Suttur Shivarathreeshwara Dental College", "Private/Deemed University"],
    ["Raja Rajeshwari Dental College and Hospital", "Minority"],
    ["Sharavathi Dental College", "Private Unaided"],
    ["Manipal College of Dental Sciences, Mangalore", "Private/Deemed University"],
    ["Manipal College of Dental Science, Manipal", "Private/Deemed University"],
    ["Sri Jagadguru Murugharajendra Dental College", "Private/Deemed University"],
    ["Srinivasa Institute of Dental Science", "Minority"],
    ["S.B. Patil Institute of Dental Science", "Private Unaided"],
    ["Subbaiah Institute of Dental Science", "Minority"],
    ["Employees State Insurance Corporation Dental College", "Government"],
] as const;

const toMedicalCollege = ([name]: readonly [string, string]): College => {
    const slug = slugify(name);
    return { name, slug, href: `${MEDICAL_BASE}/${slug}` };
};

const toDentalCollege = ([name]: readonly [string, string]): College => {
    const slug = slugify(name);
    return { name, slug, href: `${DENTAL_BASE}/${slug}` };
};

const allMedicalColleges: College[] = medicalList.map(toMedicalCollege);

const governmentMedicalColleges: College[] = medicalList
    .filter(([, type]) => type === 'Government')
    .map(toMedicalCollege);

const privateMedicalColleges: College[] = medicalList
    .filter(([, type]) => type !== 'Government')
    .map(toMedicalCollege);

const dentalColleges: College[] = dentalList.map(toDentalCollege);

export default function CutoffSection(): React.ReactElement {
    const [expandedBox, setExpandedBox] = useState<number | null>(null);
    const [hoveredCollege, setHoveredCollege] = useState<string | null>(null);

    const quotaBoxes: QuotaBox[] = [
        {
            id: 1,
            title: 'MBBS',
            quotaType: 'ALL MEDICAL',
            year: '2025',
            colleges: allMedicalColleges,
        },
        {
            id: 2,
            title: 'MBBS',
            quotaType: 'GOVERNMENT',
            year: '2025',
            colleges: governmentMedicalColleges,
        },
        {
            id: 3,
            title: 'MBBS',
            quotaType: 'PRIVATE & DEEMED',
            year: '2025',
            colleges: privateMedicalColleges,
        },
        {
            id: 4,
            title: 'BDS',
            quotaType: 'DENTAL',
            year: '2025',
            colleges: dentalColleges,
        },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-[#F6F7FC] px-5 py-16 sm:px-8 sm:py-20 md:py-24">

            {/* =========================
          BACKGROUND DECORATION
      ========================== */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <div
                    className="absolute -right-32 -top-32 h-80 w-80 rounded-full opacity-40 blur-3xl"
                    style={{
                        background: 'rgba(46, 50, 129, 0.10)',
                    }}
                />

                <div
                    className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full opacity-40 blur-3xl"
                    style={{
                        background: 'rgba(75, 80, 165, 0.10)',
                    }}
                />

            </div>

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* =========================
            HEADER
        ========================== */}
                <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">

                    <div className="flex-1">

                        {/* TITLE */}
                        <div className="mb-6 flex items-center gap-4">



                            <div>

                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                                    Top MBBS Colleges
                                </h2>


                            </div>

                        </div>

                        {/* DESCRIPTION */}
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            Explore top-rated MBBS colleges in Karnataka
                        </p>

                    </div>

                    {/* EXPLORE COLLEGES */}
                   <Link
                href="/medicalcolleges"
                className="explore-colleges-btn"
              >
                <span>Explore Colleges</span>

                <ChevronRight
                  className="explore-colleges-icon"
                  fontSize="small"
                />
              </Link>

                </div>

                {/* =========================
            QUOTA CARDS
        ========================== */}
                <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

                    {quotaBoxes.map((box) => (

                        <div
                            key={box.id}
                            className="group cursor-pointer"
                            style={{
                                perspective: '1200px',
                            }}
                        >

                            <div
                                onClick={() =>
                                    setExpandedBox(
                                        expandedBox === box.id ? null : box.id
                                    )
                                }
                                className="relative h-full overflow-hidden rounded-2xl bg-white transition-all duration-500"
                                style={{
                                    border: '1px solid rgba(46,50,129,0.10)',

                                    transform:
                                        expandedBox === box.id
                                            ? 'translateY(-8px) scale(1.02)'
                                            : 'translateY(0) scale(1)',

                                    boxShadow:
                                        expandedBox === box.id
                                            ? '0 20px 45px rgba(46,50,129,0.18)'
                                            : '0 8px 25px rgba(46,50,129,0.07)',
                                }}
                            >

                                {/* =========================
                    CARD HEADER
                ========================== */}
                                <div
                                    className="relative overflow-hidden p-7 text-white"
                                    style={{
                                        background:
                                            'linear-gradient(135deg, #2E3281 0%, #4B50A5 100%)',
                                    }}
                                >

                                    {/* DECORATIVE CIRCLE */}
                                    <div
                                        className="absolute -right-10 -top-10 h-32 w-32 rounded-full"
                                        style={{
                                            background: 'rgba(255,255,255,0.07)',
                                        }}
                                    />

                                    <div className="relative z-10">

                                        <div className="mb-4 flex items-center justify-between">

                                            <div>

                                                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/70">
                                                    {box.quotaType}
                                                </span>



                                            </div>

                                            <School
                                                className="text-white/60 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                                                fontSize="small"
                                            />

                                        </div>

                                        <h3 className="text-4xl font-black tracking-tight font-size-[14px]">
                                            {box.title}
                                        </h3>

                                    </div>

                                </div>

                                {/* =========================
                    COLLEGES LIST
                ========================== */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ${expandedBox === box.id
                                            ? 'max-h-96'
                                            : 'max-h-[20rem]'
                                        }`}
                                >

                                    <div className="custom-scrollbar max-h-96 space-y-2 overflow-y-auto p-3">

                                        {box.colleges.map((college, idx) => (

                                            <div
                                                key={`${college.slug}-${idx}`}
                                                onMouseEnter={() =>
                                                    setHoveredCollege(`${box.id}-${idx}`)
                                                }
                                                onMouseLeave={() =>
                                                    setHoveredCollege(null)
                                                }
                                                className="group/item flex items-center justify-between gap-3 rounded-xl p-3 transition-all duration-300"
                                                style={{
                                                    background:
                                                        hoveredCollege === `${box.id}-${idx}`
                                                            ? '#F1F2FB'
                                                            : '#F8F8FC',

                                                    border:
                                                        hoveredCollege === `${box.id}-${idx}`
                                                            ? '1px solid rgba(46,50,129,0.20)'
                                                            : '1px solid rgba(46,50,129,0.06)',

                                                    transform:
                                                        hoveredCollege === `${box.id}-${idx}`
                                                            ? 'translateX(4px)'
                                                            : 'translateX(0)',
                                                }}
                                            >

                                                {/* COLLEGE NAME */}
                                                <span
                                                    title={college.name}
                                                    className="line-clamp-1 text-[12px] font-medium transition-colors duration-300"
                                                    style={{
                                                        color:
                                                            hoveredCollege === `${box.id}-${idx}`
                                                                ? '#2E3281'
                                                                : '#555A70',
                                                    }}
                                                >
                                                    {college.name}
                                                </span>

                                                {/* COLLEGE LINK */}
                                                <Link
                                                    href={college.href}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="flex-shrink-0 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-bold transition-all duration-300 hover:bg-[#2E3281] hover:text-white"
                                                    style={{
                                                        color: '#2E3281',
                                                        background: '#E8E9FA',
                                                        border:
                                                            '1px solid rgba(46,50,129,0.12)',
                                                    }}
                                                >
                                                    View
                                                </Link>

                                            </div>

                                        ))}

                                    </div>

                                </div>

                                {/* =========================
                    FOOTER
                ========================== */}
                                <div
                                    className="flex items-center justify-center gap-2 border-t px-5 py-4 text-center text-sm font-bold"
                                    style={{
                                        color: '#2E3281',
                                        borderColor: 'rgba(46,50,129,0.08)',
                                        background: '#FAFAFD',
                                    }}
                                >

                                    <span>
                                        View More ({box.colleges.length})
                                    </span>

                                    <ExpandMore
                                        className={`transition-transform duration-500 ${expandedBox === box.id
                                                ? 'rotate-180'
                                                : ''
                                            }`}
                                        fontSize="small"
                                    />

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            {/* =========================
          CUSTOM SCROLLBAR
      ========================== */}
            <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(46, 50, 129, 0.08);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(46, 50, 129, 0.25);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(46, 50, 129, 0.45);
        }
      `}</style>

        </section>
    );
}