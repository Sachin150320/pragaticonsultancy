"use client";

import { FormEvent, useState } from "react";
import BreadcrumbBanner from "@/app/Components/BreadcrumbBanner";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Breadcrumb */}
      <BreadcrumbBanner
        title="Contact Us"
        description="PRAGATI CONSULTANCY SERVICES"
      />

      <section className="relative overflow-hidden bg-[#f6f9fc] py-16 sm:py-20 lg:py-24">
        {/* Background Decorations */}
        <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#2e3281]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-40 h-96 w-96 rounded-full bg-[#4b8fc5]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* =========================
              TOP HEADING
          ========================== */}

                    <div className="flex-1 mb-10">

                        {/* TITLE */}
                        <div className="mb-2 flex items-center gap-4">



                            <div>

                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                                    Let's Start Your  Education Journey
                                </h2>


                            </div>

                        </div>

                        {/* DESCRIPTION */}
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            Have questions about admissions, colleges, courses or
              scholarships? Our experienced team is ready to guide students
              and parents with the right information.
                        </p>

                    </div>

  {/* <div className="relative z-20 -mt-1 grid gap-5 pt-8 sm:grid-cols-3">

            <QuickCard
              icon={<PhoneIcon />}
              title="Call Us Directly"
              text="080 - 4851 8464"
              href="tel:08048518464"
            />

            <QuickCard
              icon={<MailIcon />}
              title="Email Us"
              text="info@pragaticonsultancy.com"
              href="mailto:info@pragaticonsultancy.com"
            />

            <QuickCard
              icon={<ClockIcon />}
              title="Working Hours"
              text="Monday - Friday · 9am - 6pm"
            />
          </div> */}

          {/* <div className="mb-14 max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#2e3281]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#2e3281]">
                Get In Touch
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              
              <span className="block text-[#2e3281]">
                Education Journey
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Have questions about admissions, colleges, courses or
              scholarships? Our experienced team is ready to guide students
              and parents with the right information.
            </p>
          </div> */}

          {/* =========================
              MAIN CONTACT AREA
          ========================== */}
          <div className="grid gap-8 lg:grid-cols-12">

            {/* =========================
                LEFT CONTACT PANEL
            ========================== */}
            <div className="relative overflow-hidden rounded-[32px] bg-[#2e3281] p-7 text-white shadow-[0_25px_70px_rgba(46,50,129,0.22)] sm:p-9 lg:col-span-5 lg:p-10">

              {/* Decorative circles */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />

              <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#4b8fc5]/30 blur-2xl" />

              <div className="relative z-10">

                {/* Small heading */}
                <div className="mb-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                    <MessageIcon />
                  </div>

                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
                    Contact Information
                  </p>

                </div>

                <div className="mb-9 h-px bg-white/15" />

                {/* Address */}
                <ContactItem
                  icon={<HomeIcon />}
                  title="Visit Our Office"
                >
                  <p className="text-sm leading-6 text-white/70">
                    #17, 1st Floor, Opp. F.M.Silks
                    <br />
                    3rd Main, 3rd Cross, RMV II Stage,
                    <br />
                    New BEL Road, Bangalore - 560 094.
                  </p>
                </ContactItem>

                {/* Phone */}
                <ContactItem
                  icon={<PhoneIcon />}
                  title="Call Us"
                >
                  <a
                    href="tel:08048518464"
                    className="text-base font-semibold text-white transition-colors hover:text-[#8fd3ff]"
                  >
                    080 - 4851 8464
                  </a>

                  <p className="mt-1 text-sm text-white/60">
                    Mon to Fri · 9am to 6pm
                  </p>
                </ContactItem>

                {/* Email */}
                <ContactItem
                  icon={<MailIcon />}
                  title="Email Us"
                  last
                >
                  <a
                    href="mailto:info@pragaticonsultancy.com"
                    className="break-all text-sm font-semibold text-white transition-colors hover:text-[#8fd3ff]"
                  >
                    info@pragaticonsultancy.com
                  </a>

                  <p className="mt-1 text-sm text-white/60">
                    Send us your query anytime
                  </p>
                </ContactItem>

                {/* Bottom badge */}
                <div className="mt-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#2e3281]">
                    <SupportIcon />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Need admission guidance?
                    </p>

                    <p className="mt-1 text-xs text-white/60">
                      Our experts are here to help.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================
                RIGHT FORM
            ========================== */}
            <div className="relative rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-9 lg:col-span-7 lg:p-11">

              {/* Top decoration */}
              <div className="absolute right-8 top-8 hidden h-20 w-20 rounded-full bg-[#e5f4fc] sm:block" />

              <div className="relative z-10">

                <div className="mb-9">
                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#2e3281]">
                    Send Us A Message
                  </p>

                  <h3 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                    How Can We Help?
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                    Fill in the details below and our team will get back to
                    you with the right guidance.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  id="contactForm"
                  className="space-y-6"
                >
                  {/* Name + Email */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <ModernInput
                      id="name"
                      name="name"
                      label="Your Name"
                      placeholder="Enter your name"
                      type="text"
                    />

                    <ModernInput
                      id="email"
                      name="email"
                      label="Email Address"
                      placeholder="Enter email address"
                      type="email"
                    />
                  </div>
                   <div className="grid gap-6 md:grid-cols-2">
                    <ModernInput
                      id="number"
                      name="number"
                      label="Phone Number"
                      placeholder="Enter your number"
                      type="number"
                    />

                    <ModernInput
                    id="subject"
                    name="subject"
                    label="Subject"
                    placeholder="What would you like to know?"
                    type="text"
                  />
                  </div>


             
                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Your Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Write your message here..."
                      className="
                        w-full resize-none rounded-2xl
                        border border-slate-200
                        bg-slate-50
                        px-5 py-4
                        text-sm text-slate-900
                        outline-none
                        transition-all duration-300
                        placeholder:text-slate-400
                        focus:border-[#2e3281]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#2e3281]/10
                      "
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-xs leading-5 text-slate-400">
                      Your information is kept private and used only to
                      respond to your enquiry.
                    </p>

                    <button
                      type="submit"
                      className="
                        group inline-flex h-14 shrink-0
                        items-center justify-center gap-3
                        rounded-2xl bg-[#2e3281]
                        px-7 text-sm font-bold text-white
                        shadow-lg shadow-[#2e3281]/20
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:bg-[#25286d]
                        hover:shadow-xl
                      "
                    >
                      Send Message

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowIcon />
                      </span>
                    </button>
                  </div>

                  {submitted && (
                    <div className="flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-semibold text-green-700">
                      <CheckIcon />
                      Thank you for contacting us. Our team will get back to
                      you shortly.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* =========================
              QUICK CONTACT CARDS
          ========================== */}
        

          {/* =========================
              MAP
          ========================== */}
          <div className="mt-16">
            <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#2e3281]">
                  Find Us
                </p>

                <h3 className="text-3xl font-extrabold text-slate-900">
                  Visit Our Office
                </h3>
              </div>

              <p className="text-sm text-slate-500">
                New BEL Road, Bangalore
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="overflow-hidden rounded-[24px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31096.027480186214!2d77.567932!3d13.035453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe64ca81667b65056!2sPragati%20Consultancy%20-%20MBA%2C%20BCA%2C%20BBA%2C%20Law%20%26%20Engineering%20Admissions%20Bangalore!5e0!3m2!1sen!2sin!4v1570686861566!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pragati Consultancy Services Location"
                  className="grayscale-[20%] transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================
   MODERN INPUT
========================================================= */

function ModernInput({
  id,
  name,
  label,
  placeholder,
  type,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="
          h-14 w-full rounded-2xl
          border border-slate-200
          bg-slate-50
          px-5
          text-sm text-slate-900
          outline-none
          transition-all duration-300
          placeholder:text-slate-400
          focus:border-[#2e3281]
          focus:bg-white
          focus:ring-4
          focus:ring-[#2e3281]/10
        "
      />
    </div>
  );
}

/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({
  icon,
  title,
  children,
  last = false,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div className={`flex gap-4 ${last ? "" : "mb-8"}`}>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#8fd3ff]">
        {icon}
      </div>

      <div className="min-w-0">
        <h4 className="mb-2 text-sm font-bold text-white">
          {title}
        </h4>

        {children}
      </div>
    </div>
  );
}

/* =========================================================
   QUICK CARD
========================================================= */

function QuickCard({
  icon,
  title,
  text,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e5f4fc] text-[#2e3281] transition-all duration-300 group-hover:bg-[#2e3281] group-hover:text-white">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">
          {title}
        </p>

        <p className="truncate text-sm font-bold text-slate-800 transition-colors group-hover:text-[#2e3281]">
          {text}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="
          group flex items-center gap-4
          rounded-2xl border border-slate-200
          bg-white p-5
          shadow-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:border-[#2e3281]/20
          hover:shadow-xl
        "
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className="
        group flex items-center gap-4
        rounded-2xl border border-slate-200
        bg-white p-5
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#2e3281]/20
        hover:shadow-xl
      "
    >
      {content}
    </div>
  );
}

/* =========================================================
   SVG ICONS
========================================================= */

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V21h13V9.5" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.62a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.28-1.28a2 2 0 0 1 2.11-.45c.84.31 1.72.53 2.62.65A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.5 9.5 0 0 1-4-.9L3 21l1.9-4.2A8.2 8.2 0 0 1 3 11.5 8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5Z" />
      <path d="M8 11h.01" />
      <path d="M12 11h.01" />
      <path d="M16 11h.01" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14.5a4.5 4.5 0 0 0 7 0" />
      <path d="M9 9h.01" />
      <path d="M15 9h.01" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}