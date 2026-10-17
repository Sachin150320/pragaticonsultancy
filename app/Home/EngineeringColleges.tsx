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
}

interface QuotaBox {
    id: number;
    title: string;
    quotaType: string;
    year: string;
    colleges: College[];
}

const collegeList = [
    ["Acharya Institute of Technology", "Soladevanahalli, Bengaluru", "Private", "acharya-institute-of-technology"],
    ["Akash Institute of Engineering and Technology", "Devanahalli, Bengaluru Rural", "Private", "akash-institute-of-engineering-and-technology"],
    ["AMC Engineering College", "Bannerghatta Road, Bengaluru", "Private", "amc-engineering-college"],
    ["Atria Institute of Technology", "Hebbal, Bengaluru", "Private", "atria-institute-of-technology"],
    ["Bangalore Institute of Technology", "V. V. Puram, Bengaluru", "Private", "bangalore-institute-of-technology"],
    ["Bangalore Technological Institute", "Chikkanayakanahalli Dinne, Bengaluru", "Private", "bangalore-technological-institute"],
    ["BMS College of Engineering", "Basavanagudi, Bengaluru", "Private", "bms-college-of-engineering"],
    ["BMS Institute of Technology & Management", "Yelahanka, Bengaluru", "Private", "bms-institute-of-technology-management"],
    ["Brindavan College of Engineering", "Yelahanka, Bengaluru", "Private", "brindavan-college-of-engineering"],
    ["C.M.R. Institute of Technology", "Brookefield, Bengaluru", "Private", "cmr-institute-of-technology"],
    ["Cambridge Institute of Technology", "K.R. Puram, Bengaluru", "Private", "cambridge-institute-of-technology"],
    ["Dayananda Sagar Academy of Technology & Management", "Kanakapura Road, Bengaluru", "Private", "dayananda-sagar-academy-of-technology-management"],
    ["Dayananda Sagar College of Engineering", "Kumaraswamy Layout, Bengaluru", "Private", "dayananda-sagar-college-of-engineering"],
    ["East Point College of Engineering and Technology", "Avalahalli, Bengaluru", "Private", "east-point-college-of-engineering-and-technology"],
    ["East West Institute of Technology", "BEL Layout, Bengaluru", "Private", "east-west-institute-of-technology"],
    ["JSS Academy of Technical Education", "Kengeri Main Road, Bengaluru", "Private", "jss-academy-of-technical-education"],
    ["M.S. Engineering College", "Sadahalli, Bengaluru", "Private", "ms-engineering-college"],
    ["M.S. Ramaiah Institute of Technology", "MSR Nagar, Bengaluru", "Private", "ms-ramaiah-institute-of-technology"],
    ["R.V. College of Engineering", "Mysore Road, Bengaluru", "Private", "rv-college-of-engineering"],
    ["R.R. Institute of Technology", "Chikkabanavara, Bengaluru", "Private", "rr-institute-of-technology"],
    ["Raja Rajeswari College of Engineering", "Kumbalgodu, Bengaluru", "Private", "raja-rajeswari-college-of-engineering"],
    ["SJB Institute of Technology", "Kengeri, Bengaluru", "Private", "sjb-institute-of-technology"],
    ["S.E.A. College of Engineering & Technology", "K.R. Puram, Bengaluru", "Private", "sea-college-of-engineering-technology"],
    ["Sambhram Institute of Technology", "Jalahalli East, Bengaluru", "Private", "sambhram-institute-of-technology"],
    ["Sapthagiri NPS University", "Hesaraghatta Main Road, Bengaluru", "University", "sapthagiri-nps-university"],
    ["Sir M. Visvesvaraya Institute of Technology", "Yelahanka, Bengaluru", "Private", "sir-m-visvesvaraya-institute-of-technology"],
    ["Sri Krishna Institute of Technology", "Chikkabanavara, Bengaluru", "Private", "sri-krishna-institute-of-technology"],
    ["Sri Venkateshwara College of Engineering", "KIAL Road, Bengaluru", "Private", "sri-venkateshwara-college-of-engineering"],
    ["T. John Institute of Technology", "Bannerghatta Road, Bengaluru", "Private", "t-john-institute-of-technology"],
    ["REVA University", "Yelahanka, Bengaluru", "University", "reva-university"],
    ["Alliance College of Engineering & Design, Alliance University", "Anekal, Bengaluru", "University", "alliance-college-of-engineering-design"],
    ["Presidency University", "Yelahanka, Bengaluru", "University", "presidency-university"],
    ["CMR University", "Bagalur Chagalatti, Bengaluru", "University", "cmr-university"],
    ["M.S. Ramaiah University of Applied Sciences", "MSR Nagar, Bengaluru", "University", "ms-ramaiah-university-of-applied-sciences"],
    ["R.V. Institute of Technology and Management", "J.P. Nagar, Bengaluru", "Private", "rv-institute-of-technology-and-management"],
    ["BGS College of Engineering and Technology", "Mahalaxmipuram, Bengaluru", "Private", "bgs-college-of-engineering-and-technology"],
    ["Aditya College of Engineering and Technology", "Yelahanka, Bengaluru", "Private", "aditya-college-of-engineering-and-technology"],
    ["CMN Institute of Technology", "Off Magadi Road, Herohalli, Bengaluru", "Private", "cmn-institute-of-technology"],
    ["Ramaiah University College of Engineering", "Jigani, Bengaluru", "University", "ramaiah-university-college-of-engineering"],
    ["RNS Institute of Technology (RNSIT)", "Bengaluru", "Private", "rns-institute-of-technology"],
    ["R.V. University", "Bengaluru", "University", "rv-university"],
    ["BMS University", "Bengaluru", "University", "bms-university"],
] as const;

const toCollege = ([name, , , slug]: readonly [string, string, string, string]): College => ({
    name,
    slug,
});

// B.E / B.Tech - State Quota: every college in the list
const stateEngineeringColleges: College[] = collegeList.map(toCollege);

// Universities only (type = "University")
const universityColleges: College[] = collegeList
    .filter(([, , type]) => type === 'University')
    .map(toCollege);

// Private colleges only (type = "Private")
const privateColleges: College[] = collegeList
    .filter(([, , type]) => type === 'Private')
    .map(toCollege);

// M.E / M.Tech - slugs from your old M.E / M.Tech card that exist in collegeList.
// Names and slugs are taken from collegeList, so every link matches.
const mtechSlugs: string[] = [
    'acharya-institute-of-technology',
    'bangalore-institute-of-technology',
    'bms-college-of-engineering',
    'ms-ramaiah-institute-of-technology',
    'rv-college-of-engineering',
    'dayananda-sagar-college-of-engineering',
    'jss-academy-of-technical-education',
    'cmr-institute-of-technology',
    'rns-institute-of-technology',
    'reva-university',
    'presidency-university',
];

const mtechColleges: College[] = collegeList
    .filter(([, , , slug]) => mtechSlugs.includes(slug))
    .map(toCollege);

export default function EngineeringCollegeSection(): React.ReactElement {
    const [expandedBox, setExpandedBox] = useState<number | null>(null);
    const [hoveredCollege, setHoveredCollege] = useState<string | null>(null);

    const quotaBoxes: QuotaBox[] = [
        {
            id: 1,
            title: 'B.E / B.Tech',
            quotaType: 'STATE QUOTA',
            year: '2026',
            colleges: stateEngineeringColleges,
        },
        {
            id: 2,
            title: 'B.E / B.Tech',
            quotaType: 'UNIVERSITIES',
            year: '2026',
            colleges: universityColleges,
        },
        {
            id: 3,
            title: 'M.E / M.Tech',
            quotaType: 'STATE QUOTA',
            year: '2026',
            colleges: mtechColleges,
        },
        {
            id: 4,
            title: 'B.E / B.Tech',
            quotaType: 'PRIVATE COLLEGES',
            year: '2026',
            colleges: privateColleges,
        },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 md:py-24">
            {/* BACKGROUND DECORATION */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className="absolute -right-32 -top-32 h-80 w-80 rounded-full opacity-40 blur-3xl"
                    style={{
                        background: 'rgba(15, 118, 110, 0.12)',
                    }}
                />

                <div
                    className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full opacity-40 blur-3xl"
                    style={{
                        background: 'rgba(20, 184, 166, 0.12)',
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* HEADER */}
                <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
                    <div className="flex-1">
                        <div className="mb-6 flex items-center gap-4">
                            <div>
                                <h2 className="mb-4 text-3xl font-bold text-blue-900 sm:text-4xl md:text-5xl">
                                    Top Engineering Colleges
                                </h2>
                            </div>
                        </div>

                        <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                            Explore top engineering colleges across Karnataka
                            and India with course-wise admission and cutoff
                            information.
                        </p>
                    </div>

                    <Link
                        href="/engineeringcolleges"
                        className="explore-colleges-btn inline-flex items-center justify-center gap-2"
                    >
                        <span>Explore Colleges</span>
                        <ChevronRight
                            className="explore-colleges-icon"
                            fontSize="small"
                        />
                    </Link>
                </div>

                {/* QUOTA CARDS */}
                <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {quotaBoxes.map((box) => (
                        <div
                            key={box.id}
                            className="group min-w-0 cursor-pointer"
                            style={{ perspective: '1200px' }}
                        >
                            <div
                                onClick={() =>
                                    setExpandedBox(
                                        expandedBox === box.id ? null : box.id
                                    )
                                }
                                className="relative h-full overflow-hidden rounded-2xl bg-white transition-all duration-500"
                                style={{
                                    border: '1px solid rgba(15,118,110,0.10)',
                                    transform:
                                        expandedBox === box.id
                                            ? 'translateY(-8px) scale(1.02)'
                                            : 'translateY(0) scale(1)',
                                    boxShadow:
                                        expandedBox === box.id
                                            ? '0 20px 45px rgba(15,118,110,0.18)'
                                            : '0 8px 25px rgba(15,118,110,0.07)',
                                }}
                            >
                                {/* CARD HEADER */}
                                <div
                                    className="relative overflow-hidden p-6 text-white sm:p-7"
                                    style={{
                                        background:
                                            'linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)',
                                    }}
                                >
                                    <div
                                        className="absolute -right-10 -top-10 h-32 w-32 rounded-full"
                                        style={{
                                            background:
                                                'rgba(255,255,255,0.08)',
                                        }}
                                    />

                                    <div className="relative z-10">
                                        <div className="mb-4 flex items-center justify-between gap-2">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/80 sm:text-[11px] sm:tracking-[0.15em]">
                                                {box.quotaType}
                                            </span>

                                            <School
                                                className="text-white/70 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                                                fontSize="small"
                                            />
                                        </div>

                                        <h3 className="text-xl font-black tracking-tight sm:text-2xl">
                                            {box.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* COLLEGES LIST */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ${
                                        expandedBox === box.id
                                            ? 'max-h-[32rem]'
                                            : 'max-h-[20rem]'
                                    }`}
                                >
                                    <div className="custom-scrollbar max-h-[32rem] space-y-2 overflow-y-auto p-3">
                                        {box.colleges.map((college, idx) => {
                                            const collegeKey = `${box.id}-${idx}`;
                                            const isHovered =
                                                hoveredCollege === collegeKey;

                                            return (
                                                <div
                                                    key={`${college.slug}-${idx}`}
                                                    onMouseEnter={() =>
                                                        setHoveredCollege(
                                                            collegeKey
                                                        )
                                                    }
                                                    onMouseLeave={() =>
                                                        setHoveredCollege(null)
                                                    }
                                                    className="group/item flex min-w-0 items-center justify-between gap-2 rounded-xl p-3 transition-all duration-300"
                                                    style={{
                                                        background: isHovered
                                                            ? '#E6FFFB'
                                                            : '#F7FCFB',
                                                        border: isHovered
                                                            ? '1px solid rgba(15,118,110,0.20)'
                                                            : '1px solid rgba(15,118,110,0.06)',
                                                        transform: isHovered
                                                            ? 'translateX(4px)'
                                                            : 'translateX(0)',
                                                    }}
                                                >
                                                    {/* COLLEGE NAME */}
                                                    <Link
                                                        href={`/engineering-colleges/${college.slug}`}
                                                        onClick={(event) =>
                                                            event.stopPropagation()
                                                        }
                                                        title={college.name}
                                                        className="line-clamp-2 min-w-0 flex-1 break-words text-xs font-medium transition-colors duration-300"
                                                        style={{
                                                            color: isHovered
                                                                ? '#0F766E'
                                                                : '#475569',
                                                        }}
                                                    >
                                                        {college.name}
                                                    </Link>

                                                    {/* COLLEGE LINK */}
                                                    <Link
                                                        href={`/engineering-colleges/${college.slug}`}
                                                        onClick={(event) =>
                                                            event.stopPropagation()
                                                        }
                                                        className="flex-shrink-0 whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs font-bold transition-all duration-300 hover:bg-[#0F766E] hover:text-white"
                                                        style={{
                                                            color: '#0F766E',
                                                            background:
                                                                '#E6FFFB',
                                                            borderColor:
                                                                'rgba(15,118,110,0.12)',
                                                        }}
                                                    >
                                                        View
                                                    </Link>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* FOOTER */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setExpandedBox(
                                            expandedBox === box.id
                                                ? null
                                                : box.id
                                        )
                                    }
                                    aria-expanded={expandedBox === box.id}
                                    className="flex w-full items-center justify-center gap-2 border-t px-5 py-4 text-center text-sm font-bold transition-colors hover:bg-[#E6FFFB]"
                                    style={{
                                        color: '#0F766E',
                                        borderColor:
                                            'rgba(15,118,110,0.08)',
                                        background: '#F8FCFB',
                                    }}
                                >
                                    <span>
                                        {expandedBox === box.id
                                            ? 'View Less'
                                            : `View More (${box.colleges.length})`}
                                    </span>

                                    <ExpandMore
                                        className={`transition-transform duration-500 ${
                                            expandedBox === box.id
                                                ? 'rotate-180'
                                                : ''
                                        }`}
                                        fontSize="small"
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CUSTOM SCROLLBAR */}
            <style jsx global>{`
                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(15, 118, 110, 0.35)
                        rgba(15, 118, 110, 0.08);
                }

                .custom-scrollbar::-webkit-scrollbar {
                    width: 5px;
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(15, 118, 110, 0.08);
                    border-radius: 10px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(15, 118, 110, 0.25);
                    border-radius: 10px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(15, 118, 110, 0.45);
                }

                .explore-colleges-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    border-radius: 10px;
                    background: #0f766e;
                    padding: 12px 20px;
                    color: #fff;
                    font-size: 14px;
                    font-weight: 700;
                    transition:
                        background 0.3s ease,
                        transform 0.3s ease;
                }

                .explore-colleges-btn:hover {
                    background: #115e59;
                    transform: translateY(-2px);
                }

                .explore-colleges-icon {
                    transition: transform 0.3s ease;
                }

                .explore-colleges-btn:hover .explore-colleges-icon {
                    transform: translateX(3px);
                }

                @media (max-width: 640px) {
                    .explore-colleges-btn {
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    );
}