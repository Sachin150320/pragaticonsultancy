'use client'

import Image from 'next/image'

export default function ClientsSection() {
    const clients = [
        {
            id: 1,
            image: '/images/clients/clients-01.png',
            name: 'Client 01',
        },
        {
            id: 2,
            image: '/images/clients/clients-02.png',
            name: 'Client 02',
        },
        {
            id: 3,
            image: '/images/clients/clients-03.png',
            name: 'Client 03',
        },
        {
            id: 4,
            image: '/images/clients/clients-04.png',
            name: 'Client 04',
        },
        {
            id: 5,
            image: '/images/clients/clients-05.png',
            name: 'Client 05',
        },
        {
            id: 6,
            image: '/images/clients/clients-06.png',
            name: 'Client 06',
        },
        {
            id: 7,
            image: '/images/clients/clients-07.png',
            name: 'Client 07',
        },
        {
            id: 8,
            image: '/images/clients/clients-08.png',
            name: 'Client 08',
        },
    ]

    // Duplicate for seamless infinite scrolling
    const scrollingClients = [...clients, ...clients]

    return (
        <section className="relative   overflow-hidden bg-[#F6F7FC] py-12 md:py-16">
            <div className="container-responsive mx-auto px-4">

                <div className="flex-1 text-center">

               



                        <div className='text-center'>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                                Trusted by Students & Institutions
                            </h2>


                        </div>

               

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Building trusted connections with students, educational
                        institutions and admission partners.
                    </p>

                </div>



                {/* Logo Slider */}
                <div className="relative">

                    {/* Left Fade */}
                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent md:w-28" />

                    {/* Right Fade */}
                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent md:w-28" />

                    {/* Scrolling Container */}
                    <div className="overflow-hidden py-4">
                        <div className="clients-scroll flex w-max items-center gap-5 md:gap-7">

                            {scrollingClients.map((client, index) => (
                                <div
                                    key={`${client.id}-${index}`}
                                    className="
                    group
                    flex
                    h-[110px]
                    w-[190px]
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#e5edf3]
                    bg-white
                    px-6
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#b9dff4]
                    hover:shadow-lg
                    md:h-[85px]
                    md:w-[192px]
                  "
                                >
                                    <div className="relative h-[65px] w-[150px] md:h-[75px] md:w-[175px]">
                                        <Image
                                            src={client.image}
                                            alt={client.name}
                                            fill
                                            sizes="220px"
                                            className="
                        object-contain
                       
                        
                        transition-all
                        duration-300
                        group-hover:grayscale-0
                        group-hover:opacity-100
                      "
                                        />
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="mt-7 text-center">
                    <p className="text-xs text-gray-400 md:text-sm">
                        Trusted partnerships that help students make informed admission
                        decisions.
                    </p>
                </div>
            </div>

            {/* Infinite Scroll Animation */}
            <style jsx>{`
        .clients-scroll {
          animation: clientsScroll 28s linear infinite;
        }

        .clients-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes clientsScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 12px));
          }
        }

        @media (max-width: 768px) {
          .clients-scroll {
            animation-duration: 22s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .clients-scroll {
            animation: none;
          }
        }
      `}</style>
        </section>
    )
}