'use client';

import {
  FormatQuote,
  Star,
  School,
} from '@mui/icons-material';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rahul Kumar',
      role: 'MBBS Aspirant',
      college: 'Bangalore',
      text: 'The college predictor helped me understand which medical colleges I could target with my NEET score. The information was easy to understand and very useful.',
    },
    {
      name: 'Ananya Sharma',
      role: 'NEET Student',
      college: 'Mysore',
      text: 'I used the admission information and cutoff details while preparing my college choices. It made the counselling process much easier for me.',
    },
    {
      name: 'Vivek Reddy',
      role: 'Medical Aspirant',
      college: 'Hyderabad',
      text: 'The fee and college information helped my family compare different options before counselling. The website is simple and easy to navigate.',
    },
    {
      name: 'Priya Nair',
      role: 'MBBS Aspirant',
      college: 'Bangalore',
      text: 'The Karnataka medical admission information was very helpful. I especially liked the cutoff and counselling-related details.',
    },
    {
      name: 'Arjun Patel',
      role: 'NEET Aspirant',
      college: 'Mangalore',
      text: 'The detailed college information helped me shortlist colleges based on my score, budget and preferred location.',
    },
  ];

  const scrollingTestimonials = [
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section
      id="testimonials"
      className="w-full overflow-hidden bg-[#f8fcff] py-14 md:py-20"
    >
      <div className="container-responsive mx-auto">

        {/* ================= HEADER ================= */}
        <div className="mb-10 px-4 text-center md:mb-14">

          

          <h2 className="mb-4 text-3xl font-bold text-[#2E3281] sm:text-4xl md:text-5xl">
            What Students Say
          </h2>

          <p className="mx-auto max-w-3xl text-sm leading-7 text-gray-600 sm:text-base md:text-lg">
            Experiences and feedback from students and medical admission
            aspirants.
          </p>
        </div>

        {/* ================= HORIZONTAL SLIDER ================= */}
        <div className="relative w-full overflow-hidden">

          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#f8fcff] to-transparent sm:w-24" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#f8fcff] to-transparent sm:w-24" />

          {/* Scrolling Track */}
          <div className="testimonial-track flex w-max">

            {scrollingTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card mx-2 w-[300px] flex-shrink-0 sm:w-[350px] lg:w-[390px]"
              >
                <div
                  className="
                    group
                    h-full
                    rounded-2xl
                    border
                    border-[#e5f0f7]
                    bg-white
                    p-5
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#b9dff4]
                    hover:shadow-xl
                    sm:p-6
                  "
                >

                  {/* Top */}
                  <div className="mb-4 flex items-center justify-between">

                    {/* Quote */}
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#e3f3fc]
                        text-[#2E3281]
                        transition-all
                        duration-300
                        group-hover:bg-[#2E3281]
                        group-hover:text-white
                      "
                    >
                      <FormatQuote />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          sx={{
                            fontSize: 17,
                            color: '#f4b942',
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review */}
                  <p className="min-h-[120px] text-sm leading-6 text-gray-600">
                    “{testimonial.text}”
                  </p>

                  {/* Student */}
                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      gap-3
                      border-t
                      border-[#e5edf3]
                      pt-4
                    "
                  >

                    {/* Avatar */}
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-[#2E3281]
                        to-[#145da0]
                        font-bold
                        text-white
                      "
                    >
                      {testimonial.name.charAt(0)}
                    </div>

                    {/* Details */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">
                        {testimonial.name}
                      </h4>

                      <p className="text-xs text-gray-500">
                        {testimonial.role} • {testimonial.college}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* ================= ANIMATION ================= */}
      <style jsx>{`
        .testimonial-track {
          animation: testimonialHorizontal 35s linear infinite;
        }

        .testimonial-track:hover {
          animation-play-state: paused;
        }

        @keyframes testimonialHorizontal {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .testimonial-track {
            animation-duration: 30s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}