
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

export default function ManagementCollegeSection(): React.ReactElement {
    const [expandedBox, setExpandedBox] = useState<number | null>(null);
    const [hoveredCollege, setHoveredCollege] = useState<string | null>(null);

    const quotaBoxes: QuotaBox[] = [
        {
            id: 1,
            title: 'MBA',
            quotaType: 'STATE QUOTA',
            year: '2025',
            colleges: [
                // Karnataka
                {
                    name: 'Indian Institute of Management Bangalore',
                    slug: 'iim-bangalore',
                },
                {
                    name: 'Department of Management Studies, IISc Bangalore',
                    slug: 'doms-iisc-bangalore',
                },
                {
                    name: 'Christ University, Bangalore',
                    slug: 'christ-university-bangalore',
                },
                {
                    name: 'Jain University, Bangalore',
                    slug: 'jain-university-bangalore',
                },
                {
                    name: 'Alliance University, Bangalore',
                    slug: 'alliance-university-bangalore',
                },
                {
                    name: 'Xavier Institute of Management and Entrepreneurship',
                    slug: 'xime-bangalore',
                },
                {
                    name: 'TA Pai Management Institute, Manipal',
                    slug: 'tapmi-manipal',
                },
                {
                    name: 'IFIM Business School, Bangalore',
                    slug: 'ifim-business-school-bangalore',
                },
                {
                    name: 'Bangalore University - Department of Management Studies',
                    slug: 'bangalore-university-management-studies',
                },
                {
                    name: 'PES University - Management Studies',
                    slug: 'pes-university-management',
                },

                // Maharashtra
                {
                    name: 'Jamnalal Bajaj Institute of Management Studies, Mumbai',
                    slug: 'jbims-mumbai',
                },
                {
                    name: 'SIBM Pune',
                    slug: 'sibm-pune',
                },
                {
                    name: 'SP Jain Institute of Management and Research',
                    slug: 'spjimr-mumbai',
                },
                {
                    name: 'NMIMS Mumbai',
                    slug: 'nmims-mumbai',
                },

                // Tamil Nadu
                {
                    name: 'Department of Management Studies, IIT Madras',
                    slug: 'doms-iit-madras',
                },
                {
                    name: 'Great Lakes Institute of Management, Chennai',
                    slug: 'great-lakes-institute-management-chennai',
                },

                // Telangana
                {
                    name: 'Indian School of Business, Hyderabad',
                    slug: 'isb-hyderabad',
                },
                {
                    name: 'Institute of Public Enterprise, Hyderabad',
                    slug: 'institute-of-public-enterprise-hyderabad',
                },

                // Delhi
                {
                    name: 'Faculty of Management Studies, Delhi',
                    slug: 'fms-delhi',
                },
                {
                    name: 'Management Development Institute',
                    slug: 'mdi-gurgaon',
                },

                // West Bengal
                {
                    name: 'Indian Institute of Management Calcutta',
                    slug: 'iim-calcutta',
                },
                {
                    name: 'Indian Institute of Social Welfare and Business Management',
                    slug: 'iiswbm-kolkata',
                },

                // Gujarat
                {
                    name: 'Indian Institute of Management Ahmedabad',
                    slug: 'iim-ahmedabad',
                },
                {
                    name: 'Nirma University - Institute of Management',
                    slug: 'nirma-university-management',
                },
            ],
        },

        {
            id: 2,
            title: 'MBA',
            quotaType: 'NATIONAL QUOTA',
            year: '2025',
            colleges: [
                {
                    name: 'Indian Institute of Management Ahmedabad',
                    slug: 'iim-ahmedabad',
                },
                {
                    name: 'Indian Institute of Management Bangalore',
                    slug: 'iim-bangalore',
                },
                {
                    name: 'Indian Institute of Management Calcutta',
                    slug: 'iim-calcutta',
                },
                {
                    name: 'Indian Institute of Management Lucknow',
                    slug: 'iim-lucknow',
                },
                {
                    name: 'Indian Institute of Management Kozhikode',
                    slug: 'iim-kozhikode',
                },
                {
                    name: 'Indian Institute of Management Indore',
                    slug: 'iim-indore',
                },
                {
                    name: 'Indian Institute of Management Mumbai',
                    slug: 'iim-mumbai',
                },
                {
                    name: 'Indian Institute of Management Shillong',
                    slug: 'iim-shillong',
                },
                {
                    name: 'Indian Institute of Management Udaipur',
                    slug: 'iim-udaipur',
                },
                {
                    name: 'Indian Institute of Management Trichy',
                    slug: 'iim-trichy',
                },
                {
                    name: 'Indian Institute of Management Ranchi',
                    slug: 'iim-ranchi',
                },
                {
                    name: 'Indian Institute of Management Raipur',
                    slug: 'iim-raipur',
                },
                {
                    name: 'Indian Institute of Management Rohtak',
                    slug: 'iim-rohtak',
                },
                {
                    name: 'Indian Institute of Management Kashipur',
                    slug: 'iim-kashipur',
                },
                {
                    name: 'Indian Institute of Management Visakhapatnam',
                    slug: 'iim-visakhapatnam',
                },
                {
                    name: 'Indian Institute of Management Nagpur',
                    slug: 'iim-nagpur',
                },
                {
                    name: 'Indian Institute of Management Amritsar',
                    slug: 'iim-amritsar',
                },
                {
                    name: 'Indian Institute of Management Bodh Gaya',
                    slug: 'iim-bodh-gaya',
                },
                {
                    name: 'Indian Institute of Management Jammu',
                    slug: 'iim-jammu',
                },
                {
                    name: 'Indian Institute of Management Sirmaur',
                    slug: 'iim-sirmaur',
                },
            ],
        },

        {
            id: 3,
            title: 'BBA',
            quotaType: 'STATE QUOTA',
            year: '2025',
            colleges: [
                {
                    name: 'Christ University, Bangalore',
                    slug: 'christ-university-bba-bangalore',
                },
                {
                    name: 'Jain University, Bangalore',
                    slug: 'jain-university-bba-bangalore',
                },
                {
                    name: 'Mount Carmel College, Bangalore',
                    slug: 'mount-carmel-college-bangalore',
                },
                {
                    name: 'St. Josephs University, Bangalore',
                    slug: 'st-josephs-university-bangalore',
                },
                {
                    name: 'Kristu Jayanti College, Bangalore',
                    slug: 'kristu-jayanti-college-bangalore',
                },
                {
                    name: 'Symbiosis Centre for Management Studies, Pune',
                    slug: 'scms-pune',
                },
                {
                    name: 'NMIMS Mumbai',
                    slug: 'nmims-bba-mumbai',
                },
                {
                    name: 'Amity University Noida',
                    slug: 'amity-university-noida-bba',
                },
                {
                    name: 'Loyola College, Chennai',
                    slug: 'loyola-college-chennai-bba',
                },
                {
                    name: 'Madras Christian College',
                    slug: 'madras-christian-college-bba',
                },
                {
                    name: 'Presidency College, Bangalore',
                    slug: 'presidency-college-bangalore-bba',
                },
                {
                    name: 'Acharya Bangalore B-School',
                    slug: 'acharya-bangalore-b-school',
                },
                {
                    name: 'International Institute of Business Studies',
                    slug: 'iibs-bangalore',
                },
            ],
        },

        {
            id: 4,
            title: 'PGDM',
            quotaType: 'NATIONAL QUOTA',
            year: '2025',
            colleges: [
                {
                    name: 'SP Jain Institute of Management and Research',
                    slug: 'spjimr-pgdm',
                },
                {
                    name: 'Management Development Institute, Gurgaon',
                    slug: 'mdi-gurgaon-pgdm',
                },
                {
                    name: 'XLRI Xavier School of Management',
                    slug: 'xlri-jamshedpur',
                },
                {
                    name: 'Institute of Management Technology, Ghaziabad',
                    slug: 'imt-ghaziabad',
                },
                {
                    name: 'Great Lakes Institute of Management',
                    slug: 'great-lakes-pgdm',
                },
                {
                    name: 'Xavier Institute of Management, Bhubaneswar',
                    slug: 'ximb-bhubaneswar',
                },
                {
                    name: 'T.A. Pai Management Institute',
                    slug: 'tapmi-pgdm',
                },
                {
                    name: 'FORE School of Management, Delhi',
                    slug: 'fore-school-of-management',
                },
                {
                    name: 'International Management Institute, Delhi',
                    slug: 'imi-delhi',
                },
                {
                    name: 'Goa Institute of Management',
                    slug: 'goa-institute-of-management',
                },
                {
                    name: 'K.J. Somaiya Institute of Management, Mumbai',
                    slug: 'kj-somaiya-institute-management',
                },
                {
                    name: 'MICA Ahmedabad',
                    slug: 'mica-ahmedabad',
                },
            ],
        },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-[#F6F7FC]  px-5 py-16 sm:px-8 sm:py-20 md:py-24">

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

                        {/* TITLE */}
                        <div className="mb-6 flex items-center gap-4">



                            <div>

                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                                    Top Management Colleges
                                </h2>


                            </div>

                        </div>

                        {/* DESCRIPTION */}
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            Explore top management colleges across Karnataka and India
                            with course-wise admission, entrance and cutoff information.
                        </p>

                    </div>








                    {/* EXPLORE COLLEGES */}
                   <Link
                href="/colleges"
                className="explore-colleges-btn"
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
                                    border: '1px solid rgba(146,64,14,0.10)',

                                    transform:
                                        expandedBox === box.id
                                            ? 'translateY(-8px) scale(1.02)'
                                            : 'translateY(0) scale(1)',

                                    boxShadow:
                                        expandedBox === box.id
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

                                    {/* DECORATIVE CIRCLE */}
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
                                                key={idx}
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
                                                            ? '#FFF7ED'
                                                            : '#FFFBF5',

                                                    border:
                                                        hoveredCollege ===
                                                            `${box.id}-${idx}`
                                                            ? '1px solid rgba(146,64,14,0.20)'
                                                            : '1px solid rgba(146,64,14,0.06)',

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
                                                                ? '#92400E'
                                                                : '#475569',
                                                    }}
                                                >
                                                    {college.name}
                                                </span>

                                                {/* COLLEGE LINK */}
                                                <Link
                                                    href={`/management-colleges/${college.slug}`}
                                                    onClick={(e) =>
                                                        e.stopPropagation()
                                                    }
                                                    className="flex-shrink-0 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-bold transition-all duration-300 hover:bg-[#92400E] hover:text-white"
                                                    style={{
                                                        color: '#92400E',
                                                        background: '#FFF7ED',
                                                        border:
                                                            '1px solid rgba(146,64,14,0.12)',
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
                                        color: '#92400E',
                                        borderColor:
                                            'rgba(146,64,14,0.08)',
                                        background: '#FFFCF8',
                                    }}
                                >

                                    <span>
                                        View More
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
            `}</style>

        </section>
    );
}
