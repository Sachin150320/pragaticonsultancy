
'use client'

import { useEffect, useState } from 'react'
import {
  ExpandMore,
  FormatQuote,
  Star,
  School,
} from '@mui/icons-material'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is the eligibility criteria for MBBS admission?',
      answer:
        'You must have completed 12th with Physics, Chemistry, and Biology. Additionally, you need to appear in NEET exam and secure a minimum qualifying score.',
    },
    {
      question: 'How can I use the college predictor?',
      answer:
        'Enter your NEET score, category, and domicile state in our predictor tool. It will show you all colleges where you have chances of admission based on previous cutoffs.',
    },
    {
      question: 'What are the fee structures for government colleges?',
      answer:
        'Government medical colleges in Karnataka charge around ₹8,000-20,000 per year for tuition fees. Private colleges charge between ₹1,50,000 to ₹3,00,000 per year.',
    },
    {
      question: 'When is the counseling process conducted?',
      answer:
        'NEET counseling is typically conducted after the NEET results are announced. State-level counseling starts around July-August every year.',
    },
    {
      question: 'Can I get admission to multiple colleges?',
      answer:
        'During counseling, you can choose multiple colleges as options. However, you can secure admission to only one college during each round of counseling.',
    },
    {
      question: 'What documents are required for counseling?',
      answer:
        'You need NEET scorecard, 12th marks sheet, caste certificate (if applicable), domicile certificate, and other identity proofs during counseling registration.',
    },
  ]

  const testimonials = [
    {
      name: 'Rahul Kumar',
      role: 'MBBS Aspirant',
      college: 'Bangalore',
      text: 'The college predictor helped me understand which medical colleges I could target with my NEET score. The information was easy to understand and very useful.',
    },
    {
      name: 'Ananya Sharma',
      role: 'NEET 2026 Student',
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
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Duplicate testimonials for seamless scrolling
  const scrollingTestimonials = [...testimonials, ...testimonials]

  return (
    <section
      id="faq"
      className="relative overflow-hidden  py-14 md:py-20 lg:py-24"
    >
      <div className="container-responsive mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10  md:mb-14">

          <div className="flex-1">

            {/* TITLE */}
            <div className="mb-6 flex items-center gap-4">



              <div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                  Frequently Asked Questions
                </h2>


              </div>

            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Get answers to common questions about MBBS admission and hear from
              students who have gone through the admission journey.
            </p>

          </div>


        </div>

        {/* Main Grid */}
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* ================= FAQ LEFT ================= */}
          <div>
            <div className="mb-5">
              <h3 className="text-2xl font-bold text-[#1f2937]">
                Common Questions
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Everything you need to know about medical admission.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${openIndex === index
                      ? 'border-[#b9dff4] shadow-lg shadow-[#2e3281]/5'
                      : 'border-gray-100 shadow-sm hover:border-[#cce7f7] hover:shadow-md'
                    }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                  >
                    <span className="flex items-start gap-4">
                      <span
                        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-sm font-bold ${openIndex === index
                            ? 'bg-[#2e3281] text-white'
                            : 'bg-[#e5f4fc] text-[#2e3281]'
                          }`}
                      >
                        {index + 1}
                      </span>

                      <span className="pt-1 text-sm font-bold text-gray-800 md:text-base">
                        {faq.question}
                      </span>
                    </span>

                    <ExpandMore
                      className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index
                          ? 'rotate-180 text-[#2e3281]'
                          : 'text-gray-400'
                        }`}
                    />
                  </button>

                  {openIndex === index && (
                    <div className="border-t border-[#e5edf3] bg-[#f8fcff] px-5 pb-5 pt-4 md:px-6">
                      <p className="pl-12 text-sm leading-7 text-gray-600 md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ================= TESTIMONIAL RIGHT ================= */}
          <div className="lg:sticky lg:top-24">
            <div className="mb-5">
              <h3 className="text-2xl font-bold text-[#1f2937]">
                What Students Say
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Experiences from medical admission aspirants.
              </p>
            </div>

            {/* Testimonial Window */}
            <div className="relative h-[600px] overflow-hidden rounded-3xl border border-[#dcecf7] bg-white p-4 shadow-xl shadow-[#2e3281]/5">
              {/* Top Fade */}
              <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-20 bg-gradient-to-b from-white to-transparent" />

              {/* Bottom Fade */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-20 bg-gradient-to-t from-white to-transparent" />

              <div className="testimonial-scroll space-y-4">
                {scrollingTestimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#e5f0f7] bg-[#f8fcff] p-5 transition hover:border-[#b9dff4] hover:shadow-md"
                  >
                    {/* Quote */}
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e3f3fc] text-[#2e3281]">
                        <FormatQuote />
                      </div>

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
                    <p className="text-sm leading-6 text-gray-600">
                      “{testimonial.text}”
                    </p>

                    {/* Student */}
                    <div className="mt-5 flex items-center gap-3 border-t border-[#e5edf3] pt-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2e3281] font-bold text-white">
                        {testimonial.name.charAt(0)}
                      </div>

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
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scrolling Animation */}
      <style jsx>{`
        .testimonial-scroll {
          animation: testimonialScroll 35s linear infinite;
        }

        .testimonial-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes testimonialScroll {
          0% {
            transform: translateY(0);
          }

          100% {
            transform: translateY(-50%);
          }
        }

        @media (max-width: 1023px) {
          .testimonial-scroll {
            animation-duration: 45s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
