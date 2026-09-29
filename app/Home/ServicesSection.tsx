'use client';

import React, { useState } from 'react';

import {
  Shield,
  HealthAndSafety,
  AttachMoney,
  NotificationsActive,
  VerifiedUser,
  TrendingDown,
  Lightbulb,
  LocalHospital,
  Info,
  CallReceived,
} from '@mui/icons-material';

export default function WhatWeProvide() {
  const [activeService, setActiveService] = useState<any>(null);

  const services = [
    {
      id: 1,
      title: 'Bonds & Service Rules',
      icon: Shield,
      description: 'Complete information about bonds and service rules.',
    },
    {
      id: 2,
      title: 'Broad & Super Speciality Info',
      icon: HealthAndSafety,
      description: 'Detailed speciality information for all colleges.',
    },
    {
      id: 3,
      title: 'Updated Fees Structure',
      icon: AttachMoney,
      description: 'Latest fee details and payment information.',
    },
    {
      id: 4,
      title: 'Karnataka State Counselling Notifications',
      icon: NotificationsActive,
      description:
        'Stay updated with the latest KEA counselling notifications.',
    },
    {
      id: 5,
      title: 'Accreditations and Affiliations',
      icon: VerifiedUser,
      description: 'Verified college credentials and affiliations.',
    },
    {
      id: 6,
      title: 'Category Wise Cut-off',
      icon: TrendingDown,
      description: 'Category-specific cutoff analysis and trends.',
    },
    {
      id: 7,
      title: 'Most Accurate Counselling Predictor',
      icon: Lightbulb,
      description:
        'Useful guidance for college selection and counselling.',
    },
    {
      id: 8,
      title: 'Hospital Patient Flow Details',
      icon: LocalHospital,
      description:
        'Information about college hospital facilities and patient flow.',
    },
  ];

  return (
    <>
      <section className="w-full bg-white px-4 py-14 sm:px-6 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-[#2E3281] sm:text-4xl md:text-5xl">
              What We Provide?
            </h2>

            <p className="text-sm leading-7 text-gray-600 sm:text-base md:text-lg">
              Karnataka-focused admission support — college details,
              KEA counselling notifications, predictor, cut-offs,
              fees, bonds and more.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

            {/* ================= LEFT ================= */}
            <div className="flex items-center justify-center">
              <div className="grid w-full max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">

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

                {/* Center Circle */}
                <div className="hidden items-center justify-center md:flex">
                  <div
                    className="
                      flex h-36 w-36
                      items-center justify-center
                      rounded-full
                      bg-gradient-to-br
                      from-[#2E3281]
                      to-[#145da0]
                      shadow-[0_15px_40px_rgba(46,50,129,0.25)]
                      transition-all duration-300
                      hover:scale-105
                      hover:shadow-[0_20px_45px_rgba(46,50,129,0.35)]
                      lg:h-40 lg:w-40
                    "
                  >
                    <div className="text-center">
                      <Lightbulb
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

            {/* ================= RIGHT ================= */}
            <div>
              <div
                className="
                  flex h-full flex-col
                  overflow-hidden
                  rounded-3xl
                  border border-[#dcecf6]
                  bg-white
                  shadow-[0_10px_35px_rgba(46,50,129,0.10)]
                "
              >

                {/* Image Area */}
                <div
                  className="
                    relative
                    flex min-h-[350px]
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

                    {/* Decorations */}
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

                {/* Trust Indicators */}
                <div className="border-t border-[#dcecf6] bg-white p-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-3">

                    {/* Trusted */}
                    <TrustItem
                      icon={<Shield fontSize="small" />}
                      title="Trusted"
                      subtitle="Information"
                    />

                    {/* Expert */}
                    <TrustItem
                      icon={<Info fontSize="small" />}
                      title="Expert"
                      subtitle="Guidance"
                    />

                    {/* Support */}
                    <TrustItem
                      icon={<CallReceived fontSize="small" />}
                      title="End-to-End"
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

            {/* Close */}
            <button
              type="button"
              onClick={() => setActiveService(null)}
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

            {/* Icon */}
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

            {/* Title */}
            <h3 className="mb-3 pr-8 text-xl font-bold text-[#2E3281]">
              {activeService.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-7 text-gray-600">
              {activeService.description}
            </p>

            {/* Close */}
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

      <p className="text-[10px] font-bold leading-4 text-gray-900 sm:text-xs md:text-sm">
        {title}
        <br />
        {subtitle}
      </p>
    </div>
  );
}