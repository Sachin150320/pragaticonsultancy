
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
}

interface QuotaBox {
    id: number;
    title: string;
    quotaType: string;
    year: string;
    colleges: College[];
}

export default function NursingCollegeSection(): React.ReactElement {
    const [expandedBox, setExpandedBox] = useState<number | null>(null);
    const [hoveredCollege, setHoveredCollege] = useState<string | null>(null);

    const quotaBoxes: QuotaBox[] = [
        {
            id: 1,
            title: 'B.Sc Nursing',
            quotaType: 'STATE QUOTA',
            year: '2025',
            colleges: [
                // Karnataka
                {
                    name: 'Bangalore Medical College and Research Institute',
                    slug: 'bmcri-bangalore-bsc-nursing',
                },
                {
                    name: 'St. John’s College of Nursing, Bangalore',
                    slug: 'st-johns-college-nursing-bangalore',
                },
                {
                    name: 'Vydehi Institute of Nursing Sciences, Bangalore',
                    slug: 'vydehi-institute-nursing-bangalore',
                },
                {
                    name: 'M.S. Ramaiah College of Nursing, Bangalore',
                    slug: 'ms-ramaiah-college-nursing-bangalore',
                },
                {
                    name: 'Kempegowda College of Nursing, Bangalore',
                    slug: 'kempegowda-college-nursing-bangalore',
                },
                {
                    name: 'Bangalore Baptist Hospital College of Nursing',
                    slug: 'bangalore-baptist-hospital-college-nursing',
                },
                {
                    name: 'Manipal College of Nursing, Manipal',
                    slug: 'manipal-college-nursing',
                },
                {
                    name: 'Father Muller College of Nursing, Mangalore',
                    slug: 'father-muller-college-nursing-mangalore',
                },
                {
                    name: 'AJ Institute of Medical Sciences, Mangalore',
                    slug: 'aj-institute-medical-sciences-nursing-mangalore',
                },

                // Tamil Nadu
                {
                    name: 'Christian Medical College, Vellore',
                    slug: 'cmc-vellore-bsc-nursing',
                },
                {
                    name: 'Sri Ramachandra Institute of Higher Education and Research',
                    slug: 'sri-ramachandra-bsc-nursing',
                },
                {
                    name: 'Madras Medical College, Chennai',
                    slug: 'madras-medical-college-nursing',
                },

                // Maharashtra
                {
                    name: 'Armed Forces Medical College, Pune',
                    slug: 'afmc-pune-nursing',
                },
                {
                    name: 'Tata Memorial Centre, Mumbai',
                    slug: 'tata-memorial-centre-nursing',
                },

                // Kerala
                {
                    name: 'Amrita College of Nursing, Kochi',
                    slug: 'amrita-college-nursing-kochi',
                },
                {
                    name: 'Government College of Nursing, Thiruvananthapuram',
                    slug: 'government-college-nursing-thiruvananthapuram',
                },
            ],
        },

        {
            id: 2,
            title: 'B.Sc Nursing',
            quotaType: 'NATIONAL QUOTA',
            year: '2025',
            colleges: [
                {
                    name: 'All India Institute of Medical Sciences, New Delhi',
                    slug: 'aiims-new-delhi-bsc-nursing',
                },
                {
                    name: 'AIIMS Rishikesh',
                    slug: 'aiims-rishikesh-bsc-nursing',
                },
                {
                    name: 'AIIMS Jodhpur',
                    slug: 'aiims-jodhpur-bsc-nursing',
                },
                {
                    name: 'AIIMS Bhopal',
                    slug: 'aiims-bhopal-bsc-nursing',
                },
                {
                    name: 'AIIMS Bhubaneswar',
                    slug: 'aiims-bhubaneswar-bsc-nursing',
                },
                {
                    name: 'AIIMS Patna',
                    slug: 'aiims-patna-bsc-nursing',
                },
                {
                    name: 'AIIMS Raipur',
                    slug: 'aiims-raipur-bsc-nursing',
                },
                {
                    name: 'Jawaharlal Institute of Postgraduate Medical Education and Research',
                    slug: 'jipmer-puducherry-bsc-nursing',
                },
                {
                    name: 'Postgraduate Institute of Medical Education and Research',
                    slug: 'pgimer-chandigarh-bsc-nursing',
                },
                {
                    name: 'National Institute of Mental Health and Neuro Sciences',
                    slug: 'nimhans-bangalore-nursing',
                },
                {
                    name: 'Christian Medical College, Vellore',
                    slug: 'cmc-vellore-nursing',
                },
                {
                    name: 'Banaras Hindu University, Varanasi',
                    slug: 'bhu-varanasi-nursing',
                },
                {
                    name: 'Aligarh Muslim University, Aligarh',
                    slug: 'amu-aligarh-nursing',
                },
                {
                    name: 'Jamia Hamdard, New Delhi',
                    slug: 'jamia-hamdard-nursing',
                },
            ],
        },

        {
            id: 3,
            title: 'GNM Nursing',
            quotaType: 'STATE QUOTA',
            year: '2025',
            colleges: [
                // Karnataka
                {
                    name: 'Government College of Nursing, Bangalore',
                    slug: 'government-college-nursing-bangalore-gnm',
                },
                {
                    name: 'St. Martha’s Hospital School of Nursing, Bangalore',
                    slug: 'st-marthas-hospital-nursing-bangalore',
                },
                {
                    name: 'Bangalore Baptist Hospital School of Nursing',
                    slug: 'bangalore-baptist-hospital-gnm',
                },
                {
                    name: 'St. John’s Hospital School of Nursing, Bangalore',
                    slug: 'st-johns-hospital-nursing-bangalore-gnm',
                },
                {
                    name: 'Father Muller School of Nursing, Mangalore',
                    slug: 'father-muller-school-nursing-mangalore',
                },
                {
                    name: 'Kasturba Hospital Nursing School, Manipal',
                    slug: 'kasturba-hospital-nursing-school-manipal',
                },

                // Maharashtra
                {
                    name: 'Government College of Nursing, Mumbai',
                    slug: 'government-college-nursing-mumbai-gnm',
                },
                {
                    name: 'Seth GS Medical College Nursing School, Mumbai',
                    slug: 'seth-gs-medical-college-nursing',
                },

                // Tamil Nadu
                {
                    name: 'Government College of Nursing, Chennai',
                    slug: 'government-college-nursing-chennai-gnm',
                },
                {
                    name: 'Madras Medical College Nursing School',
                    slug: 'madras-medical-college-gnm',
                },

                // Kerala
                {
                    name: 'Government College of Nursing, Thiruvananthapuram',
                    slug: 'government-college-nursing-thiruvananthapuram-gnm',
                },
                {
                    name: 'Government College of Nursing, Kozhikode',
                    slug: 'government-college-nursing-kozhikode-gnm',
                },
            ],
        },

        {
            id: 4,
            title: 'M.Sc Nursing',
            quotaType: 'NATIONAL QUOTA',
            year: '2025',
            colleges: [
                {
                    name: 'All India Institute of Medical Sciences, New Delhi',
                    slug: 'aiims-new-delhi-msc-nursing',
                },
                {
                    name: 'AIIMS Rishikesh',
                    slug: 'aiims-rishikesh-msc-nursing',
                },
                {
                    name: 'AIIMS Jodhpur',
                    slug: 'aiims-jodhpur-msc-nursing',
                },
                {
                    name: 'AIIMS Bhopal',
                    slug: 'aiims-bhopal-msc-nursing',
                },
                {
                    name: 'AIIMS Bhubaneswar',
                    slug: 'aiims-bhubaneswar-msc-nursing',
                },
                {
                    name: 'PGIMER Chandigarh',
                    slug: 'pgimer-chandigarh-msc-nursing',
                },
                {
                    name: 'JIPMER Puducherry',
                    slug: 'jipmer-puducherry-msc-nursing',
                },
                {
                    name: 'Christian Medical College, Vellore',
                    slug: 'cmc-vellore-msc-nursing',
                },
                {
                    name: 'Manipal College of Nursing, Manipal',
                    slug: 'manipal-college-nursing-msc',
                },
                {
                    name: 'Amrita College of Nursing, Kochi',
                    slug: 'amrita-college-nursing-msc',
                },
                {
                    name: 'Jamia Hamdard, New Delhi',
                    slug: 'jamia-hamdard-msc-nursing',
                },
                {
                    name: 'Banaras Hindu University, Varanasi',
                    slug: 'bhu-varanasi-msc-nursing',
                },
            ],
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
                                                    href={`/nursing-colleges/${college.slug}`}
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
