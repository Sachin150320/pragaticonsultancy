'use client';

import { useState } from 'react';
import { ExpandMore } from '@mui/icons-material';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is the eligibility criteria for MBBS admission?',
      answer:
        'You must have completed 12th with Physics, Chemistry, and Biology. Additionally, you need to appear in NEET exam and secure a minimum qualifying score.',
    },
    {
      question: 'How can I use the college predictor?',
      answer:
        'Enter your NEET score, category, and domicile state in our predictor tool. It will show you colleges where you may have chances of admission based on previous cutoffs.',
    },
    {
      question: 'What are the fee structures for government colleges?',
      answer:
        'Government medical college fees vary by state, category and course. Please check the latest official fee information before making admission decisions.',
    },
    {
      question: 'When is the counselling process conducted?',
      answer:
        'NEET counselling is typically conducted after the NEET results are announced. The exact schedule may vary each year and should be checked through the relevant counselling authority.',
    },
    {
      question: 'Can I get admission to multiple colleges?',
      answer:
        'During counselling, you can select multiple colleges as preferences. However, admission is allotted according to the counselling rules and seat availability.',
    },
    {
      question: 'What documents are required for counselling?',
      answer:
        'Commonly required documents include the NEET scorecard, 12th marks sheet, identity proof, category certificate if applicable, domicile certificate and other documents specified by the counselling authority.',
    },
    {
      question: 'What is the difference between government and private medical colleges?',
      answer:
        'Government and private medical colleges differ in fees, seat availability, admission quotas and other regulations. Always check the latest official information before making a decision.',
    },
    {
      question: 'What is NEET counselling?',
      answer:
        'NEET counselling is the centralized admission process through which eligible candidates can participate in seat allocation for medical colleges based on their NEET results, preferences and applicable rules.',
    },
    {
      question: 'How are medical college cut-offs decided?',
      answer:
        'Cut-offs can vary based on factors such as NEET rank, category, college, course, number of applicants, available seats and the counselling round.',
    },
    {
      question: 'Can I change my college preference during counselling?',
      answer:
        'Preference changes may be possible during specified counselling stages. The exact rules and deadlines depend on the counselling authority for that admission cycle.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full bg-white px-4 py-14 sm:px-6 md:px-8 md:py-20"
    >
      <div className="container-responsive mx-auto">

        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <h2 className="mb-4 text-3xl font-bold text-[#2E3281] sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="text-sm leading-7 text-gray-600 sm:text-base md:text-lg">
            Get answers to common questions about MBBS admission,
            counselling, fees, eligibility and college selection.
          </p>
        </div>

        {/* 2 Column FAQ */}
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

            {/* Left Column - 1 to 5 */}
            <div className="space-y-5">
              {faqs.slice(0, 5).map((faq, index) => (
                <div
                  key={index}
                  className={`
                    overflow-hidden rounded-2xl border bg-white
                    transition-all duration-300
                    ${
                      openIndex === index
                        ? 'border-[#b9dff4] shadow-lg shadow-[#2e3281]/5'
                        : 'border-gray-100 shadow-sm hover:border-[#cce7f7] hover:shadow-md'
                    }
                  `}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-5 sm:py-5"
                    aria-expanded={openIndex === index}
                  >
                    <span className="flex min-w-0 items-start gap-3">

                      {/* Number */}
                      <span
                        className={`
                          flex h-8 w-8 flex-shrink-0
                          items-center justify-center
                          rounded-lg text-sm font-bold
                          ${
                            openIndex === index
                              ? 'bg-[#2E3281] text-white'
                              : 'bg-[#e5f4fc] text-[#2E3281]'
                          }
                        `}
                      >
                        {index + 1}
                      </span>

                      {/* Question */}
                      <span className="pt-1 text-sm font-bold leading-6 text-gray-800">
                        {faq.question}
                      </span>
                    </span>

                    <ExpandMore
                      className={`
                        flex-shrink-0 transition-transform duration-300
                        ${
                          openIndex === index
                            ? 'rotate-180 text-[#2E3281]'
                            : 'text-gray-400'
                        }
                      `}
                    />
                  </button>

                  {/* Answer */}
                  {openIndex === index && (
                    <div className="border-t border-[#e5edf3] bg-[#f8fcff] px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
                      <p className="pl-11 text-sm leading-6 text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column - 6 to 10 */}
            <div className="space-y-5">
              {faqs.slice(5, 10).map((faq, index) => {
                const actualIndex = index + 5;

                return (
                  <div
                    key={actualIndex}
                    className={`
                      overflow-hidden rounded-2xl border bg-white
                      transition-all duration-300
                      ${
                        openIndex === actualIndex
                          ? 'border-[#b9dff4] shadow-lg shadow-[#2e3281]/5'
                          : 'border-gray-100 shadow-sm hover:border-[#cce7f7] hover:shadow-md'
                      }
                    `}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(actualIndex)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-5 sm:py-5"
                      aria-expanded={openIndex === actualIndex}
                    >
                      <span className="flex min-w-0 items-start gap-3">

                        {/* Number */}
                        <span
                          className={`
                            flex h-8 w-8 flex-shrink-0
                            items-center justify-center
                            rounded-lg text-sm font-bold
                            ${
                              openIndex === actualIndex
                                ? 'bg-[#2E3281] text-white'
                                : 'bg-[#e5f4fc] text-[#2E3281]'
                            }
                          `}
                        >
                          {actualIndex + 1}
                        </span>

                        {/* Question */}
                        <span className="pt-1 text-sm font-bold leading-6 text-gray-800">
                          {faq.question}
                        </span>
                      </span>

                      <ExpandMore
                        className={`
                          flex-shrink-0 transition-transform duration-300
                          ${
                            openIndex === actualIndex
                              ? 'rotate-180 text-[#2E3281]'
                              : 'text-gray-400'
                          }
                        `}
                      />
                    </button>

                    {/* Answer */}
                    {openIndex === actualIndex && (
                      <div className="border-t border-[#e5edf3] bg-[#f8fcff] px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
                        <p className="pl-11 text-sm leading-6 text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}