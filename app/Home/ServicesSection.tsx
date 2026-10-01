'use client';

import React, { useState } from 'react';

import {
  Explore,
  School,
  LocalHospital,
  Public,
  HealthAndSafety,
  BusinessCenter,
  AttachMoney,
  SupportAgent,
  VerifiedUser,
} from '@mui/icons-material';

export default function WhatWeProvide() {
  const [activeService, setActiveService] = useState<any>(null);

  const services = [
    {
      id: 1,
      title: 'Career & Course Guidance',
      icon: Explore,
      description:
        'Get personalized guidance to choose the right career path and course based on your interests, goals and academic profile.',
    },
    {
      id: 2,
      title: 'College Admission Counselling',
      icon: School,
      description:
        'Get expert assistance in selecting suitable colleges, understanding admission procedures and completing the counselling process.',
    },
    {
      id: 3,
      title: 'MBBS & Medical Admissions',
      icon: LocalHospital,
      description:
        'Complete guidance for MBBS and other medical admissions, including college selection, counselling and admission procedures.',
    },
    {
      id: 4,
      title: 'Study Abroad Consultancy',
      icon: Public,
      description:
        'Guidance for students planning to study abroad, including course selection, university options and admission assistance.',
    },
    {
      id: 5,
      title: 'Allied Health & Nursing Admissions',
      icon: HealthAndSafety,
      description:
        'Explore suitable allied health and nursing courses with guidance on colleges, eligibility, admissions and career opportunities.',
    },
    {
      id: 6,
      title: 'Management & Professional Courses',
      icon: BusinessCenter,
      description:
        'Get guidance for management and professional courses with assistance in selecting the right program and institution.',
    },
    {
      id: 7,
      title: 'Scholarship & Fee Guidance',
      icon: AttachMoney,
      description:
        'Understand course fees, scholarship opportunities and available financial support to plan your education effectively.',
    },
    {
      id: 8,
      title: 'Complete Admission Assistance',
      icon: SupportAgent,
      description:
        'End-to-end admission support from course and college selection to counselling, documentation and final admission.',
    },
  ];

  return (
    <>
      <section className="w-full bg-gray-100 px-4 py-14 sm:px-6 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">

          {/* ================= HEADING ================= */}
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-[#2E3281] sm:text-4xl md:text-5xl">
              What We Provide?
            </h2>

            <p className="text-sm leading-7 text-gray-600 sm:text-base md:text-lg">
              Complete education and admission guidance to help students
              choose the right course, college and career path with confidence.
            </p>
          </div>

          {/* ================= MAIN CONTENT ================= */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

            {/* ================= LEFT SERVICES ================= */}
            <div className="flex items-center justify-center">
              <div
                className="
                  grid
                  w-full
                  max-w-2xl
                  grid-cols-1
                  gap-5
                  sm:grid-cols-2
                  md:grid-cols-3
                "
              >

                {/* Service 1 */}
                <ServiceCard
                  service={services[0]}
                  onClick={() => setActiveService(services[0])}
                />

                {/* Service 2 */}
                <ServiceCard
                  service={services[1]}
                  onClick={() => setActiveService(services[1])}
                />

                {/* Service 3 */}
                <ServiceCard
                  service={services[2]}
                  onClick={() => setActiveService(services[2])}
                />

                {/* Service 4 */}
                <ServiceCard
                  service={services[3]}
                  onClick={() => setActiveService(services[3])}
                />

                {/* ================= CENTER CIRCLE ================= */}
                <div className="hidden items-center justify-center md:flex">
                  <div
                    className="
                      flex
                      h-36
                      w-36
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-br
                      from-[#2E3281]
                      to-[#145da0]
                      shadow-[0_15px_40px_rgba(46,50,129,0.25)]
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:shadow-[0_20px_45px_rgba(46,50,129,0.35)]
                      lg:h-40
                      lg:w-40
                    "
                  >
                    <div className="text-center">
                      <School
                        className="mx-auto mb-2 text-white"
                        sx={{ fontSize: 38 }}
                      />

                      <p className="text-sm font-bold leading-5 text-white lg:text-base">
                        What We
                        <br />
                        Provide
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 5 */}
                <ServiceCard
                  service={services[4]}
                  onClick={() => setActiveService(services[4])}
                />

                {/* Service 6 */}
                <ServiceCard
                  service={services[5]}
                  onClick={() => setActiveService(services[5])}
                />

                {/* Service 7 */}
                <ServiceCard
                  service={services[6]}
                  onClick={() => setActiveService(services[6])}
                />

                {/* Service 8 */}
                <ServiceCard
                  service={services[7]}
                  onClick={() => setActiveService(services[7])}
                />

              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div>
              <div
                className="
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#dcecf6]
                  bg-white
                  shadow-[0_10px_35px_rgba(46,50,129,0.10)]
                "
              >

                {/* ================= IMAGE AREA ================= */}
                <div
                  className="
                    relative
                    flex
                    min-h-[350px]
                    flex-1
                    items-center
                    justify-center
                    overflow-hidden
                    bg-gradient-to-br
                    from-[#e5f4fc]
                    via-[#f4f9fd]
                    to-white
                    p-5
                    sm:p-8
                  "
                >

                  {/* Background Decoration */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-64
                      w-80
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-[#4b8fc5]/10
                      blur-3xl
                    "
                  />

                  {/* Image */}
                  <div className="relative z-10 w-full max-w-md">
                    <img
                      src="/images/banner-2.jpg"
                      alt="Professional admission guidance"
                      className="
                        h-[300px]
                        w-full
                        rounded-2xl
                        object-cover
                        shadow-xl
                        sm:h-[360px]
                      "
                    />

                    {/* Decoration 1 */}
                    <span
                      className="
                        absolute
                        -right-2
                        -top-4
                        animate-pulse
                        text-2xl
                        text-[#4b8fc5]
                      "
                    >
                      ✨
                    </span>

                    {/* Decoration 2 */}
                    <span
                      className="
                        absolute
                        -right-4
                        top-16
                        animate-pulse
                        text-lg
                        text-[#2E3281]
                      "
                    >
                      ✦
                    </span>

                    {/* Decoration 3 */}
                    <span
                      className="
                        absolute
                        -bottom-2
                        -right-3
                        animate-pulse
                        text-xl
                        text-[#4b8fc5]
                      "
                    >
                      ✦
                    </span>
                  </div>
                </div>

                {/* ================= TRUST INDICATORS ================= */}
                <div className="border-t border-[#dcecf6] bg-white p-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-3">

                    {/* Course Guidance */}
                    <TrustItem
                      icon={<School fontSize="small" />}
                      title="Course"
                      subtitle="Guidance"
                    />

                    {/* Expert Counselling */}
                    <TrustItem
                      icon={<VerifiedUser fontSize="small" />}
                      title="Expert"
                      subtitle="Counselling"
                    />

                    {/* Admission Support */}
                    <TrustItem
                      icon={<SupportAgent fontSize="small" />}
                      title="Admission"
                      subtitle="Support"
                    />

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {activeService && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/50
            px-4
            backdrop-blur-sm
          "
          onClick={() => setActiveService(null)}
        >
          <div
            className="
              relative
              w-full
              max-w-md
              rounded-2xl
              bg-white
              p-6
              shadow-2xl
              sm:p-8
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* ================= CLOSE BUTTON ================= */}
            <button
              type="button"
              onClick={() => setActiveService(null)}
              aria-label="Close"
              className="
                absolute
                right-4
                top-4
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-gray-100
                text-xl
                text-gray-600
                transition
                hover:bg-[#2E3281]
                hover:text-white
              "
            >
              ×
            </button>

            {/* ================= ICON ================= */}
            <div
              className="
                mb-5
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-xl
                bg-[#e5f4fc]
                text-[#2E3281]
              "
            >
              {React.createElement(activeService.icon, {
                fontSize: 'large',
              })}
            </div>

            {/* ================= TITLE ================= */}
            <h3 className="mb-3 pr-8 text-xl font-bold text-[#2E3281]">
              {activeService.title}
            </h3>

            {/* ================= DESCRIPTION ================= */}
            <p className="text-sm leading-7 text-gray-600">
              {activeService.description}
            </p>

            {/* ================= CLOSE ================= */}
            <button
              type="button"
              onClick={() => setActiveService(null)}
              className="
                mt-6
                rounded-full
                bg-gradient-to-r
                from-[#2E3281]
                to-[#145da0]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-lg
              "
            >
              Close
            </button>

          </div>
        </div>
      )}
    </>
  );
}


/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  service,
  onClick,
}: {
  service: any;
  onClick: () => void;
}) {
  const Icon = service.icon;

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
      className="
        group
        cursor-pointer
        rounded-2xl
        border
        border-[#dcecf6]
        bg-white
        p-4
        shadow-[0_4px_20px_rgba(46,50,129,0.06)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#4b8fc5]
        hover:shadow-[0_12px_30px_rgba(46,50,129,0.12)]
        sm:p-5
      "
    >

      {/* Icon */}
      <div
        className="
          mb-3
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-[#e5f4fc]
          text-[#2E3281]
          transition-all
          duration-300
          group-hover:bg-[#2E3281]
          group-hover:text-white
        "
      >
        <Icon fontSize="medium" />
      </div>

      {/* Title */}
      <h3 className="text-sm font-bold leading-5 text-gray-900">
        {service.title}
      </h3>

    </div>
  );
}


/* =========================================================
   TRUST ITEM
========================================================= */

function TrustItem({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className="
        group
        flex
        cursor-pointer
        flex-col
        items-center
        text-center
        transition-transform
        duration-300
        hover:-translate-y-1
      "
    >

      {/* Icon */}
      <div
        className="
          mb-2
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-[#e5f4fc]
          text-[#2E3281]
          transition-all
          duration-300
          group-hover:bg-[#2E3281]
          group-hover:text-white
        "
      >
        {icon}
      </div>

      {/* Text */}
      <p
        className="
          text-[10px]
          font-bold
          leading-4
          text-gray-900
          sm:text-xs
          md:text-sm
        "
      >
        {title}
        <br />
        {subtitle}
      </p>

    </div>
  );
}