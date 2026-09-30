
'use client';


import { ArrowRight, GraduationCap, Globe2, BookOpen, Sparkles } from 'lucide-react';

export default function WelcomeSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6f9fc] py-20 sm:py-24 lg:py-10">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#4b8fc5]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#2e3281]/10 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#4b8fc5]/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-10">

            {/* Small Heading */}



            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#4b8fc5]" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#4b8fc5]">
                Welcome to
              </span>

            </div>

            {/* Main Heading */}


<h2 className="mb-4 text-3xl font-bold text-[#2E3281] sm:text-4xl md:text-5xl">
           PRAGATI  CONSULTANCY
          </h2>


           

            {/* Description */}

            <div className="mt-7 space-y-5">

              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Pragati Consultancy Services is an innovative
                <strong className="font-semibold text-[#2e3281]">
                  {' '}Education Consultants in Bangalore
                </strong>
                {' '}providing solutions to students for pursuing their
                Under Graduate and Post Graduate studies at universities,
                colleges and schools in India and overseas.
              </p>

              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                We are passionate about making sure students opt for the
                right solution for their educational needs — whether it be
                consultancy, direct admission to an educational institution,
                fees management, etc.
              </p>

              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Because our services are individually designed to meet your
                exact specifications, you will not have to compromise your
                initial vision.
              </p>

            </div>

            {/* Action Buttons */}

           

          </div>

          {/* =================================================
              RIGHT 3D VISUAL
          ================================================= */}

          <div className="relative flex min-h-[520px] items-center justify-center">

            {/* =================================================
                3D ROTATING RINGS
            ================================================= */}

            <div className="absolute h-[360px] w-[360px] rounded-full border border-[#4b8fc5]/20 [transform:rotateX(65deg)_rotateZ(15deg)] animate-[spin_18s_linear_infinite] sm:h-[430px] sm:w-[430px]" />

            <div className="absolute h-[300px] w-[300px] rounded-full border border-dashed border-[#2e3281]/20 [transform:rotateX(65deg)_rotateZ(-20deg)] animate-[spin_14s_linear_infinite_reverse] sm:h-[370px] sm:w-[370px]" />

            <div className="absolute h-[250px] w-[250px] rounded-full border border-[#4b8fc5]/10 [transform:rotateY(65deg)] animate-[spin_20s_linear_infinite] sm:h-[320px] sm:w-[320px]" />

            {/* =================================================
                GLOW
            ================================================= */}

            <div className="absolute h-72 w-72 rounded-full bg-[#4b8fc5]/10 blur-3xl sm:h-96 sm:w-96" />

            {/* =================================================
                3D MAIN CARD
            ================================================= */}

            <div
              className="
                relative
                z-10
                flex
                h-[310px]
                w-[280px]
                items-center
                justify-center
                rounded-[35px]
                border
                border-white
                bg-white/80
                shadow-[0_30px_80px_rgba(46,50,129,0.18)]
                backdrop-blur-xl
                [transform:perspective(1000px)_rotateY(-8deg)_rotateX(5deg)]
                transition-all
                duration-700
                hover:[transform:perspective(1000px)_rotateY(0deg)_rotateX(0deg)_translateY(-10px)]
                sm:h-[350px]
                sm:w-[320px]
              "
            >

              {/* Card Top Glow */}

              <div className="absolute left-1/2 top-0 h-24 w-40 -translate-x-1/2 rounded-full bg-[#4b8fc5]/20 blur-3xl" />

              {/* Graduation Icon */}

              <div
                className="
                  relative
                  flex
                  h-28
                  w-28
                  items-center
                  justify-center
                  rounded-[30px]
                  bg-gradient-to-br
                  from-[#2e3281]
                  to-[#4b8fc5]
                  text-white
                  shadow-2xl
                  shadow-[#2e3281]/30
                  [transform:translateZ(60px)]
                  animate-[float_4s_ease-in-out_infinite]
                "
              >
                <GraduationCap
                  size={62}
                  strokeWidth={1.5}
                />

                {/* Spark */}

                <span className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#4b8fc5] shadow-lg">
                  <Sparkles size={16} />
                </span>

              </div>

              {/* Card Text */}

              <div className="absolute bottom-8 left-0 right-0 text-center">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4b8fc5]">
                  Your Future
                </p>

                <h3 className="mt-2 text-xl font-extrabold text-[#2e3281]">
                  Starts Here
                </h3>

              </div>

            </div>

            {/* =================================================
                FLOATING CARD 1
            ================================================= */}

            <div
              className="
                absolute
                left-0
                top-24
                z-20
                hidden
                rounded-2xl
                border
                border-white
                bg-white/90
                p-4
                shadow-xl
                backdrop-blur-xl
                [transform:translateZ(50px)]
                animate-[float_5s_ease-in-out_infinite]
                sm:block
              "
            >

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e5f4fc] text-[#4b8fc5]">
                  <BookOpen size={21} />
                </div>

                <div>

                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Education
                  </p>

                  <p className="text-sm font-bold text-[#2e3281]">
                    Right Guidance
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                FLOATING CARD 2
            ================================================= */}

            <div
              className="
                absolute
                bottom-24
                right-0
                z-20
                hidden
                rounded-2xl
                border
                border-white
                bg-white/90
                p-4
                shadow-xl
                backdrop-blur-xl
                animate-[float_4.5s_ease-in-out_infinite_reverse]
                sm:block
              "
            >

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef0ff] text-[#2e3281]">
                  <Globe2 size={21} />
                </div>

                <div>

                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Opportunities
                  </p>

                  <p className="text-sm font-bold text-[#2e3281]">
                    India & Overseas
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                FLOATING DOTS
            ================================================= */}

            <span className="absolute left-[12%] top-[45%] h-3 w-3 rounded-full bg-[#4b8fc5] shadow-lg shadow-[#4b8fc5]/40 animate-pulse" />

            <span className="absolute right-[12%] top-[30%] h-2 w-2 rounded-full bg-[#2e3281] animate-pulse" />

            <span className="absolute bottom-[18%] left-[20%] h-2.5 w-2.5 rounded-full bg-[#4b8fc5] animate-pulse" />

          </div>

        </div>

        {/* =====================================================
            BOTTOM FEATURE STRIP
        ===================================================== */}

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* FEATURE 1 */}

          <div
            className="
              group
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#e5f4fc] text-[#4b8fc5] transition-all duration-300 group-hover:bg-[#4b8fc5] group-hover:text-white">
                <GraduationCap size={23} />
              </div>

              <div>

                <h3 className="text-sm font-bold text-[#2e3281]">
                  UG & PG Guidance
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Find the right academic path
                </p>

              </div>

            </div>

          </div>

          {/* FEATURE 2 */}

          <div
            className="
              group
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#e5f4fc] text-[#4b8fc5] transition-all duration-300 group-hover:bg-[#4b8fc5] group-hover:text-white">
                <BookOpen size={23} />
              </div>

              <div>

                <h3 className="text-sm font-bold text-[#2e3281]">
                  Admission Support
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Personalized admission assistance
                </p>

              </div>

            </div>

          </div>

          {/* FEATURE 3 */}

          <div
            className="
              group
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#e5f4fc] text-[#4b8fc5] transition-all duration-300 group-hover:bg-[#4b8fc5] group-hover:text-white">
                <Globe2 size={23} />
              </div>

              <div>

                <h3 className="text-sm font-bold text-[#2e3281]">
                  India & Overseas
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Opportunities across destinations
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          CUSTOM 3D ANIMATION
      ===================================================== */}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateZ(60px);
          }

          50% {
            transform: translateY(-14px) translateZ(60px);
          }
        }
      `}</style>

    </section>
  );
}
