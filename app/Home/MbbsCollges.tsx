'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    ChevronRight,
    ExpandMore,
    TrendingUp,
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

export default function CutoffSection(): React.ReactElement {
    const [expandedBox, setExpandedBox] = useState<number | null>(null);
    const [hoveredCollege, setHoveredCollege] = useState<string | null>(null);


    const quotaBoxes: QuotaBox[] = [
        {
            id: 1,
            title: 'MBBS',
            quotaType: 'STATE QUOTA',
            year: '2025',
            colleges: [
                // Karnataka
                {
                    name: 'Bangalore Medical College & Research Institute',
                    slug: 'bangalore-medical-college-research-institute',
                },
                {
                    name: 'Mysore Medical College & Research Institute',
                    slug: 'mysore-medical-college-research-institute',
                },
                {
                    name: 'Karnataka Institute of Medical Sciences, Hubballi',
                    slug: 'karnataka-institute-of-medical-sciences-hubballi',
                },
                {
                    name: 'Belagavi Institute of Medical Sciences',
                    slug: 'belagavi-institute-of-medical-sciences',
                },
                {
                    name: 'Mandya Institute of Medical Sciences',
                    slug: 'mandya-institute-of-medical-sciences',
                },
                {
                    name: 'Hassan Institute of Medical Sciences',
                    slug: 'hassan-institute-of-medical-sciences',
                },
                {
                    name: 'Shimoga Institute of Medical Sciences',
                    slug: 'shimoga-institute-of-medical-sciences',
                },
                {
                    name: 'Chikkamagaluru Institute of Medical Sciences',
                    slug: 'chikkamagaluru-institute-of-medical-sciences',
                },
                {
                    name: 'Chitradurga Medical College & Research Institute',
                    slug: 'chitradurga-medical-college-research-institute',
                },
                {
                    name: 'Vijayanagar Institute of Medical Sciences',
                    slug: 'vijayanagar-institute-of-medical-sciences',
                },

                // Maharashtra
                {
                    name: 'Grant Medical College & Sir J.J. Group of Hospitals',
                    slug: 'grant-medical-college-sir-jj-group-of-hospitals',
                },
                {
                    name: 'Seth Gordhandas Sunderdas Medical College',
                    slug: 'seth-gordhandas-sunderdas-medical-college',
                },
                {
                    name: 'B.J. Government Medical College, Pune',
                    slug: 'bj-government-medical-college-pune',
                },
                {
                    name: 'Government Medical College, Nagpur',
                    slug: 'government-medical-college-nagpur',
                },
                {
                    name: 'Government Medical College, Aurangabad',
                    slug: 'government-medical-college-aurangabad',
                },
                {
                    name: 'Government Medical College, Kolhapur',
                    slug: 'government-medical-college-kolhapur',
                },

                // Tamil Nadu
                {
                    name: 'Madras Medical College',
                    slug: 'madras-medical-college',
                },
                {
                    name: 'Stanley Medical College',
                    slug: 'stanley-medical-college',
                },
                {
                    name: 'Government Kilpauk Medical College',
                    slug: 'government-kilpauk-medical-college',
                },
                {
                    name: 'Coimbatore Medical College',
                    slug: 'coimbatore-medical-college',
                },
                {
                    name: 'Madurai Medical College',
                    slug: 'madurai-medical-college',
                },
                {
                    name: 'Tirunelveli Medical College',
                    slug: 'tirunelveli-medical-college',
                },

                // Telangana
                {
                    name: 'Osmania Medical College',
                    slug: 'osmania-medical-college',
                },
                {
                    name: 'Gandhi Medical College, Hyderabad',
                    slug: 'gandhi-medical-college-hyderabad',
                },
                {
                    name: 'Kakatiya Medical College',
                    slug: 'kakatiya-medical-college',
                },

                // Andhra Pradesh
                {
                    name: 'Andhra Medical College',
                    slug: 'andhra-medical-college',
                },
                {
                    name: 'Guntur Medical College',
                    slug: 'guntur-medical-college',
                },
                {
                    name: 'Rangaraya Medical College',
                    slug: 'rangaraya-medical-college',
                },

                // Kerala
                {
                    name: 'Government Medical College, Thiruvananthapuram',
                    slug: 'government-medical-college-thiruvananthapuram',
                },
                {
                    name: 'Government Medical College, Kozhikode',
                    slug: 'government-medical-college-kozhikode',
                },
                {
                    name: 'Government Medical College, Kottayam',
                    slug: 'government-medical-college-kottayam',
                },
                {
                    name: 'Government Medical College, Thrissur',
                    slug: 'government-medical-college-thrissur',
                },

                // Gujarat
                {
                    name: 'B.J. Medical College, Ahmedabad',
                    slug: 'bj-medical-college-ahmedabad',
                },
                {
                    name: 'Government Medical College, Surat',
                    slug: 'government-medical-college-surat',
                },
                {
                    name: 'Government Medical College, Vadodara',
                    slug: 'government-medical-college-vadodara',
                },

                // Rajasthan
                {
                    name: 'Sawai Man Singh Medical College',
                    slug: 'sawai-man-singh-medical-college',
                },
                {
                    name: 'Dr. Sampurnanand Medical College',
                    slug: 'dr-sampurnanand-medical-college',
                },
                {
                    name: 'Ravindra Nath Tagore Medical College',
                    slug: 'ravindra-nath-tagore-medical-college',
                },

                // Uttar Pradesh
                {
                    name: 'King George Medical University',
                    slug: 'king-george-medical-university',
                },
                {
                    name: 'Dr. Ram Manohar Lohia Institute of Medical Sciences',
                    slug: 'dr-ram-manohar-lohia-institute-of-medical-sciences',
                },
                {
                    name: 'Sanjay Gandhi Postgraduate Institute of Medical Sciences',
                    slug: 'sanjay-gandhi-postgraduate-institute-of-medical-sciences',
                },

                // West Bengal
                {
                    name: 'Medical College, Kolkata',
                    slug: 'medical-college-kolkata',
                },
                {
                    name: 'R.G. Kar Medical College & Hospital',
                    slug: 'rg-kar-medical-college-hospital',
                },
                {
                    name: 'Nil Ratan Sircar Medical College',
                    slug: 'nil-ratan-sircar-medical-college',
                },

                // Madhya Pradesh
                {
                    name: 'Gandhi Medical College, Bhopal',
                    slug: 'gandhi-medical-college-bhopal',
                },
                {
                    name: 'Mahatma Gandhi Memorial Medical College, Indore',
                    slug: 'mahatma-gandhi-memorial-medical-college-indore',
                },
                {
                    name: 'Gajra Raja Medical College',
                    slug: 'gajra-raja-medical-college',
                },

                // Odisha
                {
                    name: 'SCB Medical College & Hospital',
                    slug: 'scb-medical-college-hospital',
                },
                {
                    name: 'VIMSAR Burla',
                    slug: 'vimsar-burla',
                },

                // Bihar
                {
                    name: 'Patna Medical College & Hospital',
                    slug: 'patna-medical-college-hospital',
                },
                {
                    name: 'Nalanda Medical College & Hospital',
                    slug: 'nalanda-medical-college-hospital',
                },

                // Punjab
                {
                    name: 'Government Medical College, Amritsar',
                    slug: 'government-medical-college-amritsar',
                },
                {
                    name: 'Government Medical College, Patiala',
                    slug: 'government-medical-college-patiala',
                },

                // Haryana
                {
                    name: 'Pt. B.D. Sharma PGIMS, Rohtak',
                    slug: 'pt-bd-sharma-pgims-rohtak',
                },

                // Delhi
                {
                    name: 'Maulana Azad Medical College',
                    slug: 'maulana-azad-medical-college',
                },
                {
                    name: 'University College of Medical Sciences',
                    slug: 'university-college-of-medical-sciences',
                },

                // Chandigarh
                {
                    name: 'Government Medical College & Hospital, Chandigarh',
                    slug: 'government-medical-college-hospital-chandigarh',
                },
            ],
        },

        {
            id: 2,
            title: 'MD/MS',
            quotaType: 'STATE QUOTA',
            year: '2025',
            colleges: [
                // Karnataka
                {
                    name: 'Bangalore Medical College & Research Institute',
                    slug: 'bangalore-medical-college-research-institute',
                },
                {
                    name: 'Mysore Medical College & Research Institute',
                    slug: 'mysore-medical-college-research-institute',
                },
                {
                    name: 'Karnataka Institute of Medical Sciences',
                    slug: 'karnataka-institute-of-medical-sciences',
                },
                {
                    name: 'Kasturba Medical College, Mangalore',
                    slug: 'kasturba-medical-college-mangalore',
                },
                {
                    name: 'Kasturba Medical College, Manipal',
                    slug: 'kasturba-medical-college-manipal',
                },
                {
                    name: 'Kempegowda Institute of Medical Sciences',
                    slug: 'kempegowda-institute-of-medical-sciences',
                },
                {
                    name: 'Kanachur Institute of Medical Sciences',
                    slug: 'kanachur-institute-of-medical-sciences',
                },
                {
                    name: 'Khaja Bandanawaz Institute of Medical Sciences',
                    slug: 'khaja-bandanawaz-institute-of-medical-sciences',
                },

                // Maharashtra
                {
                    name: 'Grant Medical College & Sir J.J. Group of Hospitals',
                    slug: 'grant-medical-college-sir-jj-group-of-hospitals',
                },
                {
                    name: 'Seth Gordhandas Sunderdas Medical College',
                    slug: 'seth-gordhandas-sunderdas-medical-college',
                },
                {
                    name: 'B.J. Government Medical College, Pune',
                    slug: 'bj-government-medical-college-pune',
                },

                // Tamil Nadu
                {
                    name: 'Madras Medical College',
                    slug: 'madras-medical-college',
                },
                {
                    name: 'Stanley Medical College',
                    slug: 'stanley-medical-college',
                },
                {
                    name: 'Madurai Medical College',
                    slug: 'madurai-medical-college',
                },

                // Telangana
                {
                    name: 'Osmania Medical College',
                    slug: 'osmania-medical-college',
                },
                {
                    name: 'Gandhi Medical College, Hyderabad',
                    slug: 'gandhi-medical-college-hyderabad',
                },

                // Kerala
                {
                    name: 'Government Medical College, Thiruvananthapuram',
                    slug: 'government-medical-college-thiruvananthapuram',
                },
                {
                    name: 'Government Medical College, Kozhikode',
                    slug: 'government-medical-college-kozhikode',
                },

                // Delhi
                {
                    name: 'Maulana Azad Medical College',
                    slug: 'maulana-azad-medical-college',
                },
                {
                    name: 'University College of Medical Sciences',
                    slug: 'university-college-of-medical-sciences',
                },

                // Uttar Pradesh
                {
                    name: 'King George Medical University',
                    slug: 'king-george-medical-university',
                },
                {
                    name: 'Dr. Ram Manohar Lohia Institute of Medical Sciences',
                    slug: 'dr-ram-manohar-lohia-institute-of-medical-sciences',
                },

                // Rajasthan
                {
                    name: 'Sawai Man Singh Medical College',
                    slug: 'sawai-man-singh-medical-college',
                },
                {
                    name: 'Dr. Sampurnanand Medical College',
                    slug: 'dr-sampurnanand-medical-college',
                },

                // Gujarat
                {
                    name: 'B.J. Medical College, Ahmedabad',
                    slug: 'bj-medical-college-ahmedabad',
                },

                // West Bengal
                {
                    name: 'Medical College, Kolkata',
                    slug: 'medical-college-kolkata',
                },
                {
                    name: 'R.G. Kar Medical College & Hospital',
                    slug: 'rg-kar-medical-college-hospital',
                },

                // Madhya Pradesh
                {
                    name: 'Gandhi Medical College, Bhopal',
                    slug: 'gandhi-medical-college-bhopal',
                },
                {
                    name: 'Mahatma Gandhi Memorial Medical College, Indore',
                    slug: 'mahatma-gandhi-memorial-medical-college-indore',
                },
            ],
        },

        {
            id: 3,
            title: 'MBBS',
            quotaType: 'CENTRAL QUOTA',
            year: '2025',
            colleges: [
                // AIIMS
                {
                    name: 'AIIMS New Delhi',
                    slug: 'aiims-new-delhi',
                },
                {
                    name: 'AIIMS Bhopal',
                    slug: 'aiims-bhopal',
                },
                {
                    name: 'AIIMS Bhubaneswar',
                    slug: 'aiims-bhubaneswar',
                },
                {
                    name: 'AIIMS Jodhpur',
                    slug: 'aiims-jodhpur',
                },
                {
                    name: 'AIIMS Patna',
                    slug: 'aiims-patna',
                },
                {
                    name: 'AIIMS Raipur',
                    slug: 'aiims-raipur',
                },
                {
                    name: 'AIIMS Rishikesh',
                    slug: 'aiims-rishikesh',
                },
                {
                    name: 'AIIMS Nagpur',
                    slug: 'aiims-nagpur',
                },
                {
                    name: 'AIIMS Gorakhpur',
                    slug: 'aiims-gorakhpur',
                },
                {
                    name: 'AIIMS Kalyani',
                    slug: 'aiims-kalyani',
                },
                {
                    name: 'AIIMS Bathinda',
                    slug: 'aiims-bathinda',
                },
                {
                    name: 'AIIMS Deoghar',
                    slug: 'aiims-deoghar',
                },
                {
                    name: 'AIIMS Bibinagar',
                    slug: 'aiims-bibinagar',
                },

                // JIPMER
                {
                    name: 'JIPMER Puducherry',
                    slug: 'jipmer-puducherry',
                },
                {
                    name: 'JIPMER Karaikal',
                    slug: 'jipmer-karaikal',
                },

                // Delhi
                {
                    name: 'Maulana Azad Medical College',
                    slug: 'maulana-azad-medical-college',
                },
                {
                    name: 'Lady Hardinge Medical College',
                    slug: 'lady-hardinge-medical-college',
                },
                {
                    name: 'University College of Medical Sciences',
                    slug: 'university-college-of-medical-sciences',
                },

                // Armed Forces / Central Institutions
                {
                    name: 'Armed Forces Medical College, Pune',
                    slug: 'armed-forces-medical-college-pune',
                },

                // Central Universities
                {
                    name: 'Banaras Hindu University - Institute of Medical Sciences',
                    slug: 'bhu-institute-of-medical-sciences',
                },

                // Other Major Institutions
                {
                    name: 'Jawaharlal Nehru Medical College, Aligarh',
                    slug: 'jawaharlal-nehru-medical-college-aligarh',
                },
                {
                    name: 'Institute of Medical Sciences, BHU',
                    slug: 'institute-of-medical-sciences-bhu',
                },
            ],
        },

        {
            id: 4,
            title: 'MD/MS',
            quotaType: 'CENTRAL QUOTA',
            year: '2025',
            colleges: [
                // AIIMS
                {
                    name: 'AIIMS New Delhi',
                    slug: 'aiims-new-delhi',
                },
                {
                    name: 'AIIMS Bhopal',
                    slug: 'aiims-bhopal',
                },
                {
                    name: 'AIIMS Bhubaneswar',
                    slug: 'aiims-bhubaneswar',
                },
                {
                    name: 'AIIMS Jodhpur',
                    slug: 'aiims-jodhpur',
                },
                {
                    name: 'AIIMS Patna',
                    slug: 'aiims-patna',
                },
                {
                    name: 'AIIMS Raipur',
                    slug: 'aiims-raipur',
                },
                {
                    name: 'AIIMS Rishikesh',
                    slug: 'aiims-rishikesh',
                },
                {
                    name: 'AIIMS Nagpur',
                    slug: 'aiims-nagpur',
                },
                {
                    name: 'AIIMS Gorakhpur',
                    slug: 'aiims-gorakhpur',
                },
                {
                    name: 'AIIMS Kalyani',
                    slug: 'aiims-kalyani',
                },
                {
                    name: 'AIIMS Bathinda',
                    slug: 'aiims-bathinda',
                },

                // JIPMER
                {
                    name: 'JIPMER Puducherry',
                    slug: 'jipmer-puducherry',
                },

                // Delhi
                {
                    name: 'Maulana Azad Medical College',
                    slug: 'maulana-azad-medical-college',
                },
                {
                    name: 'Lady Hardinge Medical College',
                    slug: 'lady-hardinge-medical-college',
                },
                {
                    name: 'Vardhman Mahavir Medical College',
                    slug: 'vardhman-mahavir-medical-college',
                },

                // Uttar Pradesh
                {
                    name: 'King George Medical University',
                    slug: 'king-george-medical-university',
                },

                // Maharashtra
                {
                    name: 'Grant Medical College & Sir J.J. Group of Hospitals',
                    slug: 'grant-medical-college-sir-jj-group-of-hospitals',
                },

                // Rajasthan
                {
                    name: 'Sawai Man Singh Medical College',
                    slug: 'sawai-man-singh-medical-college',
                },

                // Karnataka
                {
                    name: 'Bangalore Medical College & Research Institute',
                    slug: 'bangalore-medical-college-research-institute',
                },
                {
                    name: 'Mysore Medical College & Research Institute',
                    slug: 'mysore-medical-college-research-institute',
                },

                // West Bengal
                {
                    name: 'Medical College, Kolkata',
                    slug: 'medical-college-kolkata',
                },

                // Gujarat
                {
                    name: 'B.J. Medical College, Ahmedabad',
                    slug: 'bj-medical-college-ahmedabad',
                },

                // Tamil Nadu
                {
                    name: 'Madras Medical College',
                    slug: 'madras-medical-college',
                },

                // Telangana
                {
                    name: 'Osmania Medical College',
                    slug: 'osmania-medical-college',
                },

                // Kerala
                {
                    name: 'Government Medical College, Thiruvananthapuram',
                    slug: 'government-medical-college-thiruvananthapuram',
                },
            ],
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
                                                key={idx}
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
                                                    href={`/colleges/${college.slug}`}
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