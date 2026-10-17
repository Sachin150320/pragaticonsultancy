'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import {
    ChevronRight,
    ExpandMore,
    LocalHospital,
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

// Same names + slugs + courses as the `colleges` data on the listing page.
// Keep this in sync with that array so every "View" link resolves.
const collegeList = [
    ["Ramaiah Institute of Nursing Education and Research (RINER)", "ramaiah-institute-of-nursing-education-and-research", "B.Sc Nursing"],
    ["RV College of Nursing", "rv-college-of-nursing", "B.Sc Nursing"],
    ["Dr. B R Ambedkar Institute of Nursing", "dr-br-ambedkar-institute-of-nursing", "B.Sc Nursing / GNM"],
    ["Karnataka College of Nursing", "karnataka-college-of-nursing", "B.Sc Nursing / GNM"],
    ["PES University (PESU)", "pes-university", "B.Sc Nursing / B.Pharmacy"],
    ["East West College of Nursing (EWCN)", "east-west-college-of-nursing", "B.Sc Nursing / GNM"],
    ["The Oxford College of Nursing", "the-oxford-college-of-nursing", "B.Sc Nursing"],
    ["Sapthagiri Institute of Medical Sciences and Research Centre (SIMSRC)", "sapthagiri-institute-of-medical-sciences", "B.Sc Nursing / GNM"],
    ["Rajarajeswari Medical College and Hospital (RRMCH)", "rajarajeswari-medical-college-and-hospital", "B.Sc Nursing"],
    ["VIMS Bangalore", "vims-bangalore", "B.Sc Nursing"],
    ["MVM Group of Institutions", "mvm-group-of-institutions", "B.Sc Nursing / GNM / B.Pharmacy"],
    ["Aakash Group of Institutions", "aakash-group-of-institutions", "B.Sc Nursing / B.Pharmacy"],
    ["RR College of Nursing", "rr-college-of-nursing", "B.Sc Nursing"],
    ["Manjunatha College of Nursing", "manjunatha-college-of-nursing", "B.Sc Nursing"],
    ["Harsha Institutions", "harsha-institutions", "B.Sc Nursing / B.Pharmacy"],
    ["VYMAK Group of Institutions", "vymak-group-of-institutions", "B.Sc Nursing"],
    ["Sapthagiri NPS University", "sapthagiri-nps-university", "B.Sc Nursing"],
    ["East Point Group of Institutions (EPGI)", "east-point-group-of-institutions", "B.Sc Nursing / B.Pharmacy"],
    ["Acharya Institute of Health Sciences (AIHS)", "acharya-institute-of-health-sciences", "B.Sc Nursing"],
    ["Smt. Nagarathnamma College of Nursing (SNCN)", "smt-nagarathnamma-college-of-nursing", "B.Sc Nursing"],
    ["MVJ College of Nursing (MVJCON)", "mvj-college-of-nursing", "B.Sc Nursing"],
    ["Krupanidhi College of Nursing (KCON)", "krupanidhi-college-of-nursing", "B.Sc Nursing / GNM"],
    ["Vydehi Institute of Nursing Sciences and Research Centre", "vydehi-institute-of-nursing-sciences", "B.Sc Nursing"],
    ["SJB College of Nursing", "sjb-college-of-nursing", "B.Sc Nursing"],
    ["Sri Lakshmi College of Nursing", "sri-lakshmi-college-of-nursing", "B.Sc Nursing"],
    ["Spurthy College of Nursing", "spurthy-college-of-nursing", "B.Sc Nursing"],
    ["Little Flower Group of Institutions", "little-flower-group-of-institutions", "B.Sc Nursing"],
    ["M.S. Ramaiah University of Applied Sciences (MSRUAS)", "ms-ramaiah-university-of-applied-sciences", "GNM / B.Pharmacy"],
    ["Padmashree Group of Institutions", "padmashree-group-of-institutions", "GNM"],
    ["Goutham College", "goutham-college", "GNM"],
    ["Krupanidhi Group of Institutions", "krupanidhi-group-of-institutions", "GNM"],
    ["SB Group of Institutions", "sb-group-of-institutions", "GNM"],
    ["Acharya & BM Reddy College of Pharmacy (ABMRCP)", "acharya-bm-reddy-college-of-pharmacy", "B.Pharmacy"],
    ["Dayananda Sagar University (DSU)", "dayananda-sagar-university", "B.Pharmacy"],
    ["The Oxford College of Pharmacy", "the-oxford-college-of-pharmacy", "B.Pharmacy"],
    ["T. John College of Pharmacy", "t-john-college-of-pharmacy", "B.Pharmacy"],
    ["Aditya Group of Institutions", "aditya-group-of-institutions", "B.Pharmacy"],
    ["RR College of Pharmacy (RRCP)", "rr-college-of-pharmacy", "B.Pharmacy"],
    ["Oxbridge Group of Institutions", "oxbridge-group-of-institutions", "B.Pharmacy"],
    ["Vivekananda College of Pharmacy (VCP)", "vivekananda-college-of-pharmacy", "B.Pharmacy"],
    ["Gautham College of Pharmacy (GCP)", "gautham-college-of-pharmacy", "B.Pharmacy"],
    ["Mallige College of Pharmacy", "mallige-college-of-pharmacy", "B.Pharmacy"],
    ["East West College of Pharmacy", "east-west-college-of-pharmacy", "B.Pharmacy"],
    ["Vydehi Institute of Pharmacy (VIP)", "vydehi-institute-of-pharmacy", "B.Pharmacy"],
    ["Nargund College of Pharmacy", "nargund-college-of-pharmacy", "B.Pharmacy"],
    ["Spurthy College of Pharmacy (SCP)", "spurthy-college-of-pharmacy", "B.Pharmacy"],
] as const;

// Nursing / GNM colleges link to /nursing-colleges, pharmacy-only colleges to /pharmacy-colleges.
// Change these two base paths if your routes are different.
const getHref = (slug: string, course: string): string =>
    /Nursing|GNM/.test(course)
        ? `/nursing-colleges/${slug}`
        : `/pharmacy-colleges/${slug}`;

const toCollege = ([name, slug, course]: readonly [string, string, string]): College => ({
    name,
    slug,
    href: getHref(slug, course),
});

const bscNursingColleges: College[] = collegeList
    .filter(([, , course]) => course.includes('B.Sc Nursing'))
    .map(toCollege);

const gnmNursingColleges: College[] = collegeList
    .filter(([, , course]) => course.includes('GNM'))
    .map(toCollege);

const bPharmacyColleges: College[] = collegeList
    .filter(([, , course]) => course.includes('B.Pharmacy'))
    .map(([name, slug]) => ({
        name,
        slug,
        href: `/pharmacy-colleges/${slug}`,
    }));

const allColleges: College[] = collegeList.map(toCollege);

export default function NursingCollegeSection(): React.ReactElement {
    const [expandedBox, setExpandedBox] = useState<number | null>(null);
    const [hoveredCollege, setHoveredCollege] = useState<string | null>(null);

    const quotaBoxes: QuotaBox[] = [
        {
            id: 1,
            title: 'B.Sc Nursing',
            quotaType: 'STATE QUOTA',
            year: '2025',
            colleges: bscNursingColleges,
        },

        {
            id: 2,
            title: 'GNM Nursing',
            quotaType: 'STATE QUOTA',
            year: '2025',
            colleges: gnmNursingColleges,
        },

        {
            id: 3,
            title: 'B.Pharmacy',
            quotaType: 'STATE QUOTA',
            year: '2025',
            colleges: bPharmacyColleges,
        },

        {
            id: 4,
            title: 'All Colleges',
            quotaType: 'ALL COURSES',
            year: '2025',
            colleges: allColleges,
        },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-[rgb(255 255 255)F] px-5 py-16 sm:px-8 sm:py-20 md:py-24">

            {/* BACKGROUND DECORATION */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <div
                    className="absolute -right-32 -top-32 h-80 w-80 rounded-full opacity-40 blur-3xl"
                    style={{
                        background: 'rgba(96, 165, 250, 0.18)',
                    }}
                />

                <div
                    className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full opacity-40 blur-3xl"
                    style={{
                        background: 'rgba(37, 99, 235, 0.10)',
                    }}
                />

            </div>

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* HEADER */}
                <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">


                    <div className="flex-1">

                        {/* TITLE */}
                        <div className="mb-6 flex items-center gap-4">



                            <div>

                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                                    Top Nursing Colleges
                                </h2>


                            </div>

                        </div>

                        {/* DESCRIPTION */}
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            Explore top nursing colleges across Karnataka and India
                            with course-wise admission, entrance and cutoff information.
                        </p>

                    </div>
                    {/* EXPLORE COLLEGES */}
                   <Link
                href="/nursingcolleges"
                className="explore-colleges-btn"
              >
                <span>Explore Colleges</span>

                <ChevronRight
                  className="explore-colleges-icon"
                  fontSize="small"
                />
              </Link>

                </div>

                {/* NURSING CARDS */}
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
                                    border: '1px solid rgba(37,99,235,0.10)',

                                    transform:
                                        expandedBox === box.id
                                            ? 'translateY(-8px) scale(1.02)'
                                            : 'translateY(0) scale(1)',

                                    boxShadow:
                                        expandedBox === box.id
                                            ? '0 20px 45px rgba(37,99,235,0.18)'
                                            : '0 8px 25px rgba(37,99,235,0.07)',
                                }}
                            >

                                {/* CARD HEADER */}
                                <div
                                    className="relative overflow-hidden p-7 text-white"
                                    style={{
                                        background:
                                            'linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)',
                                    }}
                                >

                                    {/* DECORATIVE CIRCLE */}
                                    <div
                                        className="absolute -right-10 -top-10 h-32 w-32 rounded-full"
                                        style={{
                                            background: 'rgba(255,255,255,0.10)',
                                        }}
                                    />

                                    <div className="relative z-10">

                                        <div className="mb-4 flex items-center justify-between">

                                            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/75">
                                                {box.quotaType}
                                            </span>

                                            <LocalHospital
                                                className="text-white/70 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                                                fontSize="small"
                                            />

                                        </div>

                                        <h3 className="text-[14px] font-black tracking-tight sm:text-2xl">
                                            {box.title}
                                        </h3>

                                    </div>

                                </div>

                                {/* COLLEGES LIST */}
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
                                                    setHoveredCollege(
                                                        `${box.id}-${idx}`
                                                    )
                                                }
                                                onMouseLeave={() =>
                                                    setHoveredCollege(null)
                                                }
                                                className="group/item flex items-center justify-between gap-3 rounded-xl p-3 transition-all duration-300"
                                                style={{
                                                    background:
                                                        hoveredCollege ===
                                                            `${box.id}-${idx}`
                                                            ? '#EFF6FF'
                                                            : '#F8FBFF',

                                                    border:
                                                        hoveredCollege ===
                                                            `${box.id}-${idx}`
                                                            ? '1px solid rgba(37,99,235,0.20)'
                                                            : '1px solid rgba(37,99,235,0.06)',

                                                    transform:
                                                        hoveredCollege ===
                                                            `${box.id}-${idx}`
                                                            ? 'translateX(4px)'
                                                            : 'translateX(0)',
                                                }}
                                            >

                                                {/* COLLEGE NAME */}
                                                <span
                                                    className="line-clamp-1 text-[12px] font-medium transition-colors duration-300"
                                                    style={{
                                                        color:
                                                            hoveredCollege ===
                                                                `${box.id}-${idx}`
                                                                ? '#2563EB'
                                                                : '#475569',
                                                    }}
                                                >
                                                    {college.name}
                                                </span>

                                                {/* COLLEGE LINK */}
                                                <Link
                                                    href={college.href}
                                                    onClick={(e) =>
                                                        e.stopPropagation()
                                                    }
                                                    className="flex-shrink-0 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-bold transition-all duration-300 hover:bg-[#2563EB] hover:text-white"
                                                    style={{
                                                        color: '#2563EB',
                                                        background: '#EFF6FF',
                                                        border:
                                                            '1px solid rgba(37,99,235,0.12)',
                                                    }}
                                                >
                                                    View
                                                </Link>

                                            </div>

                                        ))}

                                    </div>

                                </div>

                                {/* FOOTER */}
                                <div
                                    className="flex items-center justify-center gap-2 border-t px-5 py-4 text-center text-sm font-bold"
                                    style={{
                                        color: '#2563EB',
                                        borderColor:
                                            'rgba(37,99,235,0.08)',
                                        background: '#F8FBFF',
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

            {/* CUSTOM SCROLLBAR */}
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 5px;
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(37, 99, 235, 0.08);
                    border-radius: 10px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(37, 99, 235, 0.25);
                    border-radius: 10px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(37, 99, 235, 0.45);
                }
            `}</style>

        </section>
    );
}