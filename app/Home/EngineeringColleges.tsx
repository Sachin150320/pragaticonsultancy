
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

export default function EngineeringCollegeSection(): React.ReactElement {
    const [expandedBox, setExpandedBox] = useState<number | null>(null);
    const [hoveredCollege, setHoveredCollege] = useState<string | null>(null);

    const quotaBoxes: QuotaBox[] = [
        {
            id: 1,
            title: 'B.E / B.Tech',
            quotaType: 'STATE QUOTA',
            year: '2025',
            colleges: [
                // Karnataka
                {
                    name: 'University Visvesvaraya College of Engineering, Bangalore',
                    slug: 'uvce-bangalore',
                },
                {
                    name: 'Bangalore Institute of Technology',
                    slug: 'bangalore-institute-of-technology',
                },
                {
                    name: 'BMS College of Engineering',
                    slug: 'bms-college-of-engineering',
                },
                {
                    name: 'R.V. College of Engineering',
                    slug: 'rv-college-of-engineering',
                },
                {
                    name: 'PES University, Bangalore',
                    slug: 'pes-university-bangalore',
                },
                {
                    name: 'Dayananda Sagar College of Engineering',
                    slug: 'dayananda-sagar-college-of-engineering',
                },
                {
                    name: 'NITTE Meenakshi Institute of Technology',
                    slug: 'nitte-meenakshi-institute-of-technology',
                },
                {
                    name: 'Bangalore Institute of Technology',
                    slug: 'bangalore-institute-of-technology',
                },
                {
                    name: 'M.S. Ramaiah Institute of Technology',
                    slug: 'ms-ramaiah-institute-of-technology',
                },
                {
                    name: 'New Horizon College of Engineering',
                    slug: 'new-horizon-college-of-engineering',
                },
                {
                    name: 'JSS Academy of Technical Education',
                    slug: 'jss-academy-of-technical-education',
                },
                {
                    name: 'Acharya Institute of Technology',
                    slug: 'acharya-institute-of-technology',
                },
                {
                    name: 'CMR Institute of Technology',
                    slug: 'cmr-institute-of-technology',
                },
                {
                    name: 'NIE Institute of Technology, Mysore',
                    slug: 'nie-institute-of-technology-mysore',
                },
                {
                    name: 'JSS Science and Technology University, Mysore',
                    slug: 'jss-science-and-technology-university-mysore',
                },

                // Maharashtra
                {
                    name: 'College of Engineering Pune',
                    slug: 'college-of-engineering-pune',
                },
                {
                    name: 'Veermata Jijabai Technological Institute, Mumbai',
                    slug: 'vjti-mumbai',
                },
                {
                    name: 'Walchand College of Engineering, Sangli',
                    slug: 'walchand-college-of-engineering-sangli',
                },
                {
                    name: 'COEP Technological University',
                    slug: 'coep-technological-university',
                },

                // Tamil Nadu
                {
                    name: 'College of Engineering, Guindy',
                    slug: 'college-of-engineering-guindy',
                },
                {
                    name: 'Madras Institute of Technology',
                    slug: 'madras-institute-of-technology',
                },
                {
                    name: 'Thiagarajar College of Engineering',
                    slug: 'thiagarajar-college-of-engineering',
                },

                // Telangana
                {
                    name: 'Osmania University College of Engineering',
                    slug: 'osmania-university-college-of-engineering',
                },
                {
                    name: 'University College of Engineering, Hyderabad',
                    slug: 'university-college-of-engineering-hyderabad',
                },

                // Andhra Pradesh
                {
                    name: 'Andhra University College of Engineering',
                    slug: 'andhra-university-college-of-engineering',
                },
                {
                    name: 'JNTU College of Engineering, Hyderabad',
                    slug: 'jntu-college-of-engineering',
                },

                // Kerala
                {
                    name: 'College of Engineering Trivandrum',
                    slug: 'college-of-engineering-trivandrum',
                },
                {
                    name: 'Government Engineering College, Thrissur',
                    slug: 'government-engineering-college-thrissur',
                },

                // Gujarat
                {
                    name: 'Nirma University',
                    slug: 'nirma-university',
                },
                {
                    name: 'Dhirubhai Ambani Institute of Information and Communication Technology',
                    slug: 'daiict',
                },

                // Rajasthan
                {
                    name: 'Malaviya National Institute of Technology Jaipur',
                    slug: 'mnit-jaipur',
                },

                // West Bengal
                {
                    name: 'Jadavpur University',
                    slug: 'jadavpur-university',
                },
                {
                    name: 'Heritage Institute of Technology',
                    slug: 'heritage-institute-of-technology',
                },

                // Delhi
                {
                    name: 'Delhi Technological University',
                    slug: 'delhi-technological-university',
                },
                {
                    name: 'Netaji Subhas University of Technology',
                    slug: 'netaji-subhas-university-of-technology',
                },
            ],
        },

        {
            id: 2,
            title: 'B.E / B.Tech',
            quotaType: 'NATIONAL QUOTA',
            year: '2025',
            colleges: [
                {
                    name: 'Indian Institute of Technology Bombay',
                    slug: 'iit-bombay',
                },
                {
                    name: 'Indian Institute of Technology Delhi',
                    slug: 'iit-delhi',
                },
                {
                    name: 'Indian Institute of Technology Madras',
                    slug: 'iit-madras',
                },
                {
                    name: 'Indian Institute of Technology Kanpur',
                    slug: 'iit-kanpur',
                },
                {
                    name: 'Indian Institute of Technology Kharagpur',
                    slug: 'iit-kharagpur',
                },
                {
                    name: 'Indian Institute of Technology Roorkee',
                    slug: 'iit-roorkee',
                },
                {
                    name: 'Indian Institute of Technology Guwahati',
                    slug: 'iit-guwahati',
                },
                {
                    name: 'Indian Institute of Technology Hyderabad',
                    slug: 'iit-hyderabad',
                },
                {
                    name: 'Indian Institute of Technology Indore',
                    slug: 'iit-indore',
                },
                {
                    name: 'Indian Institute of Technology BHU',
                    slug: 'iit-bhu',
                },
                {
                    name: 'National Institute of Technology Karnataka',
                    slug: 'nit-karnataka',
                },
                {
                    name: 'National Institute of Technology Tiruchirappalli',
                    slug: 'nit-trichy',
                },
                {
                    name: 'National Institute of Technology Warangal',
                    slug: 'nit-warangal',
                },
                {
                    name: 'National Institute of Technology Rourkela',
                    slug: 'nit-rourkela',
                },
                {
                    name: 'National Institute of Technology Surathkal',
                    slug: 'nit-surathkal',
                },
                {
                    name: 'National Institute of Technology Calicut',
                    slug: 'nit-calicut',
                },
                {
                    name: 'National Institute of Technology Durgapur',
                    slug: 'nit-durgapur',
                },
                {
                    name: 'National Institute of Technology Jaipur',
                    slug: 'nit-jaipur',
                },
                {
                    name: 'National Institute of Technology Kurukshetra',
                    slug: 'nit-kurukshetra',
                },
                {
                    name: 'National Institute of Technology Patna',
                    slug: 'nit-patna',
                },
            ],
        },

        {
            id: 3,
            title: 'M.E / M.Tech',
            quotaType: 'STATE QUOTA',
            year: '2025',
            colleges: [
                {
                    name: 'R.V. College of Engineering',
                    slug: 'rv-college-of-engineering',
                },
                {
                    name: 'BMS College of Engineering',
                    slug: 'bms-college-of-engineering',
                },
                {
                    name: 'M.S. Ramaiah Institute of Technology',
                    slug: 'ms-ramaiah-institute-of-technology',
                },
                {
                    name: 'University Visvesvaraya College of Engineering',
                    slug: 'uvce-bangalore',
                },
                {
                    name: 'Bangalore Institute of Technology',
                    slug: 'bangalore-institute-of-technology',
                },
                {
                    name: 'PES University',
                    slug: 'pes-university-bangalore',
                },
                {
                    name: 'Dayananda Sagar College of Engineering',
                    slug: 'dayananda-sagar-college-of-engineering',
                },
                {
                    name: 'NITTE Meenakshi Institute of Technology',
                    slug: 'nitte-meenakshi-institute-of-technology',
                },
                {
                    name: 'JSS Science and Technology University',
                    slug: 'jss-science-and-technology-university-mysore',
                },
                {
                    name: 'NIE Institute of Technology',
                    slug: 'nie-institute-of-technology-mysore',
                },
                {
                    name: 'College of Engineering Pune',
                    slug: 'college-of-engineering-pune',
                },
                {
                    name: 'Jadavpur University',
                    slug: 'jadavpur-university',
                },
                {
                    name: 'Delhi Technological University',
                    slug: 'delhi-technological-university',
                },
            ],
        },

        {
            id: 4,
            title: 'B.Arch',
            quotaType: 'NATIONAL QUOTA',
            year: '2025',
            colleges: [
                {
                    name: 'School of Planning and Architecture, Delhi',
                    slug: 'spa-delhi',
                },
                {
                    name: 'School of Planning and Architecture, Bhopal',
                    slug: 'spa-bhopal',
                },
                {
                    name: 'School of Planning and Architecture, Vijayawada',
                    slug: 'spa-vijayawada',
                },
                {
                    name: 'IIT Roorkee - Architecture',
                    slug: 'iit-roorkee-architecture',
                },
                {
                    name: 'IIT Kharagpur - Architecture',
                    slug: 'iit-kharagpur-architecture',
                },
                {
                    name: 'IIT BHU - Architecture',
                    slug: 'iit-bhu-architecture',
                },
                {
                    name: 'NIT Calicut - Architecture',
                    slug: 'nit-calicut-architecture',
                },
                {
                    name: 'NIT Tiruchirappalli - Architecture',
                    slug: 'nit-trichy-architecture',
                },
                {
                    name: 'NIT Hamirpur - Architecture',
                    slug: 'nit-hamirpur-architecture',
                },
                {
                    name: 'CEPT University',
                    slug: 'cept-university',
                },
            ],
        },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-[rgb(255 255 255)] px-5 py-16 sm:px-8 sm:py-20 md:py-24">

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

                        {/* TITLE */}
                        <div className="mb-6 flex items-center gap-4">



                            <div>

                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                                 Top Engineering Colleges
                                </h2>


                            </div>

                        </div>

                        {/* DESCRIPTION */}
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                           Explore top engineering colleges across Karnataka and India
                            with course-wise admission and cutoff information.
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

                {/* QUOTA CARDS */}
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
                                    className="relative overflow-hidden p-7 text-white"
                                    style={{
                                        background:
                                            'linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)',
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

                                            <School
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
                                                            ? '#E6FFFB'
                                                            : '#F7FCFB',

                                                    border:
                                                        hoveredCollege ===
                                                            `${box.id}-${idx}`
                                                            ? '1px solid rgba(15,118,110,0.20)'
                                                            : '1px solid rgba(15,118,110,0.06)',

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
                                                                ? '#0F766E'
                                                                : '#475569',
                                                    }}
                                                >
                                                    {college.name}
                                                </span>

                                                {/* COLLEGE LINK */}
                                                <Link
                                                    href={`/engineering-colleges/${college.slug}`}
                                                    onClick={(e) =>
                                                        e.stopPropagation()
                                                    }
                                                    className="flex-shrink-0 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-bold transition-all duration-300 hover:text-white"
                                                    style={{
                                                        color: '#0F766E',
                                                        background: '#E6FFFB',
                                                        border:
                                                            '1px solid rgba(15,118,110,0.12)',
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
                                        color: '#0F766E',
                                        borderColor:
                                            'rgba(15,118,110,0.08)',
                                        background: '#F8FCFB',
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
            `}</style>

        </section>
    );
}
