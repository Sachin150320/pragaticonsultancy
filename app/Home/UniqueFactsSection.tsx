"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

const uniqueFacts = [
    {
        title: "Expert Mentors",
        description:
            "Our Pragati consultancy team has expert mentors who provide valuable guidance and knowledge to students throughout their educational journey.",
        image: "/images/fact-icons/help.png",
        number: "01",
    },
    {
        title: "1500+ Courses",
        description:
            "We offer a vast range of courses and have strong experience working with top colleges and universities across the city.",
        image: "/images/fact-icons/online-course.png",
        number: "02",
    },
    {
        title: "3500+ Colleges",
        description:
            "With 15 years of experience, we have strong associations with reputed colleges and universities across India.",
        image: "/images/fact-icons/graduation-hat.png",
        number: "03",
    },
    {
        title: "Scholarship",
        description:
            "We provide scholarship guidance based on applicable categories and help students understand state and central government scholarship opportunities.",
        image: "/images/fact-icons/graduation-hat.png",
        number: "04",
    },
    {
        title: "Grievance Center",
        description:
            "We have multiple centers across India. Our Bangalore grievance center helps students and parents get detailed assistance and support.",
        image: "/images/fact-icons/help.png",
        number: "05",
    },
    {
        title: "Live Support",
        description:
            "Pragati Consultancy provides live support through chat and customer care assistance for students and parents seeking admission-related information.",
        image: "/images/fact-icons/help.png",
        number: "06",
    },
];

export default function UniqueFactsSection() {
    return (
        <section className="relative overflow-hidden bg-[#f6f9fc] py-10 sm:py-20 lg:py-20">
            {/* Background Decorations */}
            <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#2e3281]/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#4b8fc5]/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl sm:px-8 lg:px-10">
                {/* Section Heading */}


                <div className="flex-1 pb-10 ">





                    <div className=''>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            Facts That Make Us
                        </h2>


                    </div>



                    {/* DESCRIPTION */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Discover the experience, guidance and support that make Pragati
                        Consultancy a trusted partner for students and parents.
                    </p>

                </div>


                {/* <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
          

          <h2 className="text-3xl font-extrabold leading-tight text-[#222] sm:text-4xl lg:text-5xl">
            Facts That Make Us{" "}
            <span className="text-[#2e3281]">Unique</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Discover the experience, guidance and support that make Pragati
            Consultancy a trusted partner for students and parents.
          </p>
        </div> */}

                {/* Cards */}
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {uniqueFacts.map((fact, index) => (
                        <div
                            key={fact.title}
                            className="group [perspective:1200px]"
                        >
                            <div
                                className="
                  relative h-full min-h-[350px] overflow-hidden rounded-[28px]
                  border border-white bg-white p-7
                  shadow-[0_15px_50px_rgba(46,50,129,0.08)]
                  transition-all duration-500
                  [transform-style:preserve-3d]
                  group-hover:-translate-y-3
                  group-hover:[transform:rotateX(2deg)_rotateY(-2deg)]
                  group-hover:shadow-[0_25px_65px_rgba(46,50,129,0.16)]
                "
                            >
                                {/* Number */}
                                <div
                                    className="
                    absolute right-6 top-5 text-5xl font-black
                    text-[#2e3281]/[0.06]
                    transition-all duration-500
                    group-hover:text-[#2e3281]/10
                  "
                                >
                                    {fact.number}
                                </div>

                                {/* Decorative Circle */}
                                <div
                                    className="
                    absolute -right-14 -top-14 h-32 w-32 rounded-full
                    bg-[#e5f4fc]
                    transition-all duration-500
                    group-hover:scale-[1.5]
                    group-hover:bg-[#2e3281]/10
                  "
                                />

                                {/* Icon/Image */}
                                <div
                                    className="
                    relative z-10 mb-7 flex h-20 w-20 items-center justify-center
                    rounded-2xl bg-[#e5f4fc]
                    shadow-[8px_8px_20px_rgba(46,50,129,0.10)]
                    transition-all duration-500
                    [transform:translateZ(25px)]
                    group-hover:rotate-6
                    group-hover:scale-110
                    group-hover:bg-[#2e3281]
                  "
                                >
                                    <Image
                                        src={fact.image}
                                        alt={fact.title}
                                        width={48}
                                        height={48}
                                        className="
                      h-12 w-12 object-contain
                      transition-all duration-500
                      group-hover:brightness-0 group-hover:invert
                    "
                                    />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 [transform:translateZ(20px)]">
                                    <h3 className="mb-4 text-2xl font-bold text-[#222] transition-colors duration-300 group-hover:text-[#2e3281]">
                                        {fact.title}
                                    </h3>

                                    <p className="text-[15px] leading-7 text-gray-600">
                                        {fact.description}
                                    </p>
                                </div>

                                {/* Bottom Action */}
                                

                                {/* Bottom Glow */}
                                <div
                                    className="
                    absolute -bottom-20 left-1/2 h-32 w-32
                    -translate-x-1/2 rounded-full
                    bg-[#4b8fc5]/10 blur-3xl
                    transition-all duration-500
                    group-hover:scale-150
                  "
                                />
                            </div>
                        </div>
                    ))}
                </div>

              
            </div>
        </section>
    );
}