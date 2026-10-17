'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    ChevronRight,
    ExpandMore,
    BusinessCenter,
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

// Same names + slugs + courses as the `colleges` data on the listing page.
// Keep this in sync with that array so every "View" link resolves.
const collegeList = [
    ["Christ University", "christ-university", "BBA / MBA / B.Com / BBA LLB"],
    ["Mount Carmel College", "mount-carmel-college", "BBA / B.Com"],
    ["Kristu Jayanti College", "kristu-jayanti-college", "BBA / MBA / B.Com"],
    ["Jain University", "jain-university", "BBA / MBA / B.Com / BBA LLB"],
    ["Presidency University", "presidency-university", "BBA / MBA / B.Com"],
    ["Alliance University", "alliance-university", "BBA / MBA / B.Com / BBA LLB"],
    ["Acharya Institute of Graduate Studies", "acharya-institute-of-graduate-studies", "BBA / B.Com"],
    ["REVA University", "reva-university", "BBA / MBA / B.Com"],
    ["Bangalore University", "bangalore-university", "MBA"],
    ["Bangalore Institute of Technology", "bangalore-institute-of-technology", "MBA"],
    ["B.M.S. College of Engineering", "bms-college-of-engineering", "MBA"],
    ["M.S. Ramaiah University of Applied Sciences", "ms-ramaiah-university-of-applied-sciences", "MBA / B.Com / BBA LLB"],
    ["Indian Institute of Management Ahmedabad", "indian-institute-of-management-ahmedabad", "MBA"],
    ["Indian Institute of Management Bangalore", "indian-institute-of-management-bangalore", "MBA"],
    ["Indian Institute of Management Calcutta", "indian-institute-of-management-calcutta", "MBA"],
    ["Indian Institute of Management Lucknow", "indian-institute-of-management-lucknow", "MBA"],
    ["Indian Institute of Management Kozhikode", "indian-institute-of-management-kozhikode", "MBA"],
    ["Indian Institute of Management Indore", "indian-institute-of-management-indore", "BBA / MBA"],
    ["Indian Institute of Management Rohtak", "indian-institute-of-management-rohtak", "BBA / MBA"],
    ["Indian Institute of Management Jammu", "indian-institute-of-management-jammu", "BBA / MBA"],
    ["Indian Institute of Management Bodh Gaya", "indian-institute-of-management-bodh-gaya", "BBA / MBA"],
    ["Indian Institute of Management Ranchi", "indian-institute-of-management-ranchi", "BBA / MBA"],
    ["Indian Institute of Management Amritsar", "indian-institute-of-management-amritsar", "BBA / MBA"],
    ["Indian Institute of Management Visakhapatnam", "indian-institute-of-management-visakhapatnam", "MBA"],
    ["Indian Institute of Management Shillong", "indian-institute-of-management-shillong", "MBA"],
    ["Indian Institute of Management Udaipur", "indian-institute-of-management-udaipur", "MBA"],
    ["Indian Institute of Management Tiruchirappalli", "indian-institute-of-management-tiruchirappalli", "MBA"],
] as const;

// Exact course match, so "BBA" does not also pick up "BBA LLB".
const byCourse = (courseName: string): College[] =>
    collegeList
        .filter(([, , course]) =>
            course.split(' / ').includes(courseName)
        )
        .map(([name, slug]) => ({ name, slug }));

const mbaColleges: College[] = byCourse('MBA');
const bbaColleges: College[] = byCourse('BBA');
const bcomColleges: College[] = byCourse('B.Com');
const bbaLlbColleges: College[] = byCourse('BBA LLB');

const quotaBoxes: QuotaBox[] = [
    {
        id: 1,
        title: 'MBA',
        quotaType: 'POSTGRADUATE',
        year: '2025',
        colleges: mbaColleges,
    },
    {
        id: 2,
        title: 'BBA',
        quotaType: 'UNDERGRADUATE',
        year: '2025',
        colleges: bbaColleges,
    },
    {
        id: 3,
        title: 'B.Com',
        quotaType: 'UNDERGRADUATE',
        year: '2025',
        colleges: bcomColleges,
    },
    {
        id: 4,
        title: 'BBA LLB',
        quotaType: 'INTEGRATED',
        year: '2025',
        colleges: bbaLlbColleges,
    },
];

export default function ManagementCollegeSection(): React.ReactElement {
    const [expandedBox, setExpandedBox] = useState<number | null>(null);
    const [hoveredCollege, setHoveredCollege] = useState<string | null>(null);

    return (
        <section className="relative w-full overflow-hidden bg-[#F6F7FC] px-5 py-16 sm:px-8 sm:py-20 md:py-24">
            {/* BACKGROUND DECORATION */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className="absolute -right-32 -top-32 h-80 w-80 rounded-full opacity-40 blur-3xl"
                    style={{
                        background: 'rgba(217, 119, 6, 0.12)',
                    }}
                />

                <div
                    className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full opacity-40 blur-3xl"
                    style={{
                        background: 'rgba(146, 64, 14, 0.10)',
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* HEADER */}
                <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
                    <div className="flex-1">
                        <h2 className="mb-4 text-3xl font-bold text-blue-900 sm:text-4xl md:text-5xl">
                            Top Management Colleges
                        </h2>

                        <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                            Explore top management colleges across Karnataka and India
                            with course-wise admission, entrance and cutoff information.
                        </p>
                    </div>

                    <Link
                        href="/managementcolleges"
                        className="explore-colleges-btn inline-flex w-fit items-center gap-2 rounded-lg px-5 py-3 font-semibold"
                    >
                        <span>Explore Colleges</span>
                        <ChevronRight
                            className="explore-colleges-icon"
                            fontSize="small"
                        />
                    </Link>
                </div>

                {/* MANAGEMENT CARDS */}
                <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {quotaBoxes.map((box) => {
                        const isExpanded = expandedBox === box.id;

                        return (
                            <div
                                key={box.id}
                                className="group min-w-0"
                                style={{ perspective: '1200px' }}
                            >
                                <div
                                    className="relative overflow-hidden rounded-2xl bg-white transition-all duration-500"
                                    style={{
                                        border: '1px solid rgba(146,64,14,0.10)',
                                        transform: isExpanded
                                            ? 'translateY(-8px) scale(1.02)'
                                            : 'translateY(0) scale(1)',
                                        boxShadow: isExpanded
                                            ? '0 20px 45px rgba(146,64,14,0.18)'
                                            : '0 8px 25px rgba(146,64,14,0.07)',
                                    }}
                                >
                                    {/* CARD HEADER */}
                                    <div
                                        className="relative overflow-hidden p-7 text-white"
                                        style={{
                                            background:
                                                'linear-gradient(135deg, #92400E 0%, #D97706 100%)',
                                        }}
                                    >
                                        <div
                                            className="absolute -right-10 -top-10 h-32 w-32 rounded-full"
                                            style={{
                                                background: 'rgba(255,255,255,0.08)',
                                            }}
                                        />

                                        <div className="relative z-10">
                                            <div className="mb-4 flex items-center justify-between">
                                                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/75">
                                                    {box.quotaType}
                                                </span>

                                                <BusinessCenter
                                                    className="text-white/60 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                                                    fontSize="small"
                                                />
                                            </div>

                                            <h3 className="text-2xl font-black tracking-tight">
                                                {box.title}
                                            </h3>

                                            <p className="mt-1 text-xs text-white/70">
                                                Admission {box.year}
                                            </p>
                                        </div>
                                    </div>

                                    {/* COLLEGES LIST */}
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ${
                                            isExpanded ? 'max-h-[32rem]' : 'max-h-[20rem]'
                                        }`}
                                    >
                                        <div className="custom-scrollbar max-h-96 space-y-2 overflow-y-auto p-3">
                                            {box.colleges.map((college, idx) => {
                                                const collegeKey = `${box.id}-${idx}`;
                                                const isHovered = hoveredCollege === collegeKey;
                                                const collegeHref = `/management-colleges/${college.slug}`;

                                                return (
                                                    <div
                                                        key={collegeKey}
                                                        onMouseEnter={() =>
                                                            setHoveredCollege(collegeKey)
                                                        }
                                                        onMouseLeave={() =>
                                                            setHoveredCollege(null)
                                                        }
                                                        className="flex min-w-0 items-center justify-between gap-3 rounded-xl p-3 transition-all duration-300"
                                                        style={{
                                                            background: isHovered
                                                                ? '#FFF7ED'
                                                                : '#FFFBF5',
                                                            border: isHovered
                                                                ? '1px solid rgba(146,64,14,0.20)'
                                                                : '1px solid rgba(146,64,14,0.06)',
                                                            transform: isHovered
                                                                ? 'translateX(4px)'
                                                                : 'translateX(0)',
                                                        }}
                                                    >
                                                        {/* COLLEGE NAME LINK */}
                                                        <Link
                                                            href={collegeHref}
                                                            title={college.name}
                                                            className="min-w-0 flex-1 break-words text-xs font-medium leading-5 transition-colors duration-300"
                                                            style={{
                                                                color: isHovered
                                                                    ? '#92400E'
                                                                    : '#475569',
                                                            }}
                                                        >
                                                            {college.name}
                                                        </Link>

                                                        {/* VIEW LINK */}
                                                        <Link
                                                            href={collegeHref}
                                                            aria-label={`View ${college.name}`}
                                                            className="flex-shrink-0 whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs font-bold transition-all duration-300 hover:bg-[#92400E] hover:text-white"
                                                            style={{
                                                                color: '#92400E',
                                                                background: '#FFF7ED',
                                                                borderColor:
                                                                    'rgba(146,64,14,0.12)',
                                                            }}
                                                        >
                                                            View
                                                        </Link>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* VIEW MORE BUTTON */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setExpandedBox(isExpanded ? null : box.id)
                                        }
                                        aria-expanded={isExpanded}
                                        className="flex w-full items-center justify-center gap-2 border-t px-5 py-4 text-center text-sm font-bold transition-colors hover:bg-orange-50"
                                        style={{
                                            color: '#92400E',
                                            borderColor: 'rgba(146,64,14,0.08)',
                                            background: '#FFFCF8',
                                        }}
                                    >
                                        <span>
                                            {isExpanded
                                                ? 'View Less'
                                                : `View More (${box.colleges.length})`}
                                        </span>

                                        <ExpandMore
                                            className={`transition-transform duration-500 ${
                                                isExpanded ? 'rotate-180' : ''
                                            }`}
                                            fontSize="small"
                                        />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CUSTOM SCROLLBAR AND BUTTON STYLES */}
            <style jsx global>{`
                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(146, 64, 14, 0.25)
                        rgba(146, 64, 14, 0.08);
                }

                .custom-scrollbar::-webkit-scrollbar {
                    width: 5px;
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(146, 64, 14, 0.08);
                    border-radius: 10px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(146, 64, 14, 0.25);
                    border-radius: 10px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(146, 64, 14, 0.45);
                }

                .explore-colleges-btn {
                    background: #92400e;
                    color: #ffffff;
                    text-decoration: none;
                    transition: background 0.3s ease;
                }

                .explore-colleges-btn:hover {
                    background: #78350f;
                }
            `}</style>
        </section>
    );
}