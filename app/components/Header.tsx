
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

type MenuItem = {
  label: string;
  href?: string;
  children?: {
    label: string;
    href: string;
  }[];
};

const menuItems: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "About Us",
    children: [
      {
        label: "About Us",
        href: "/aboutUs",
      },
      {
        label: "Why Choose Us",
        href: "/why-choose-us",
      },
    ],
  },

  {
    label: "Courses",
    children: [
      {
        label: "MBBS",
        href: "/courses/mbbs",
      },
      {
        label: "BDS",
        href: "/courses/bds",
      },
      {
        label: "Nursing",
        href: "/courses/nursing",
      },
      {
        label: "Pharmacy",
        href: "/courses/pharmacy",
      },
    ],
  },

  {
    label: "Services",
    children: [
      {
        label: "Education Services",
        href: "education-services",
      },
     
    ],
  },

  {
    label: "Colleges",
    children: [
      {
        label: "Medical Colleges",
        href: "/colleges/medical",
      },
      {
        label: "Engineering Colleges",
        href: "Engineering Colleges",
      },
      {
        label: "Management Colleges",
        href: "Management Colleges",
      },
      {
        label: "Nursing Colleges",
        href: "Nursing Colleges",
      },
    ],
  },

  {
    label: "Blogs",
    href: "/blogs",
  },
  // {
  //   label: "Updates",
  //   href: "/updates",
  // },

  {
    label: "Entrance Exams",
    children: [
      {
        label: "NEET UG",
        href: "/compare/neet-ug",
      },
      {
        label: "NEET PG",
        href: "/compare/neet-pg",
      },
      {
        label: "KEA Counselling",
        href: "/compare/kea",
      },
    ],
  },

];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown((current) =>
      current === label ? null : label
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      {/* =====================================================
          TOP BAR
      ===================================================== */}
      <div className="hidden md:block bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-xs md:text-sm">

          <div className="flex items-center gap-6">

            <a
              href="tel:+919620201999"
              className="flex items-center gap-2 hover:text-blue-200 transition"
            >
              <span>📞</span>
              <span>+91 96202 01999</span>
            </a>

            <a
              href="mailto:info@pragaticonsultancy.com"
              className="flex items-center gap-2 hover:text-blue-200 transition"
            >
              <span>✉️</span>
              <span>info@pragaticonsultancy.com</span>
            </a>

          </div>

          <div className="flex items-center gap-4">

            <a
              href="#facebook"
              aria-label="Facebook"
              className="hover:text-blue-200 transition"
            >
              <FacebookIcon fontSize="small" />
            </a>

            <a
              href="#instagram"
              aria-label="Instagram"
              className="hover:text-blue-200 transition"
            >
              <InstagramIcon fontSize="small" />
            </a>

            <a
              href="#linkedin"
              aria-label="LinkedIn"
              className="hover:text-blue-200 transition"
            >
              <LinkedInIcon fontSize="small" />
            </a>

            <a
              href="#youtube"
              aria-label="YouTube"
              className="hover:text-blue-200 transition"
            >
              <YouTubeIcon fontSize="small" />
            </a>

          </div>

        </div>
      </div>


      {/* =====================================================
          MAIN HEADER
      ===================================================== */}
      <div className="border-b border-gray-200 header-section">

        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between gap-4">

          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex items-center flex-shrink-0"
          >
            <div className="relative w-[105px] h-[55px] sm:w-[130px] sm:h-[55px] md:w-[180px] md:h-[50px]">

              <Image
                src="/images/logos/logo.png"
                alt="Pragati Educational Consultancy"
                fill
                priority
                className="object-contain"
              />

            </div>
          </Link>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">

            {menuItems.map((item) => {

              const hasDropdown =
                item.children && item.children.length > 0;

              /* NORMAL MENU */
              if (!hasDropdown) {
                return (
                  <Link
                    key={item.label}
                    href={item.href || "#"}
                    className="
                      relative
                      flex
                      items-center
                      gap-1
                      px-3
                      py-2.5
                      text-[17px]
                      font-medium
                      text-white
                      hover:text-dark
                      rounded-lg
                      transition
                      group
                      whitespace-nowrap
                    "
                  >

                    <span>{item.label}</span>

                    <span
                      className="
                        absolute
                        bottom-0
                        left-3
                        right-3
                        h-0.5
                        bg-dark
                        scale-x-0
                        group-hover:scale-x-100
                        transition-transform
                        duration-300
                        origin-left
                      "
                    />

                  </Link>
                );
              }


              /* DROPDOWN MENU */
              return (
                <div
                  key={item.label}
                  className="relative group"
                >

                  {/* MENU TITLE */}
                  <button
                    type="button"
                    className="
                      relative
                      flex
                      items-center
                      gap-1
                      px-3
                      py-2.5
                      text-[17px]
                      font-medium
                      text-white
                      hover:text-dark
                      rounded-lg
                      transition
                      whitespace-nowrap
                    "
                  >

                    <span>{item.label}</span>

                    <ExpandMoreIcon
                      fontSize="small"
                      className="
                        transition-transform
                        duration-300
                        group-hover:rotate-180
                      "
                    />

                    <span
                      className="
                        absolute
                        bottom-0
                        left-3
                        right-3
                        h-0.5
                        bg-blue-600
                        scale-x-0
                        group-hover:scale-x-100
                        transition-transform
                        duration-300
                        origin-left
                      "
                    />

                  </button>


                  {/* DROPDOWN */}
                  <div
                    className="
                      absolute
                      top-full
                      left-0
                      pt-2
                      invisible
                      opacity-0
                      translate-y-2
                      group-hover:visible
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      transition-all
                      duration-200
                      z-50
                    "
                  >

                    <div
                      className="
                        w-64
                        bg-white
                        border
                        border-gray-100
                        rounded-xl
                        shadow-xl
                        overflow-hidden
                      "
                    >

                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="
                            flex
                            items-center
                            justify-between
                            gap-3
                            px-4
                            py-3
                            text-sm
                            text-gray-700
                            hover:bg-blue-50
                            hover:text-blue-600
                            transition
                            border-b
                            border-gray-100
                            last:border-b-0
                          "
                        >

                          <span>{child.label}</span>

                          <ChevronRightIcon
                            fontSize="small"
                            className="
                              text-gray-400
                              transition-transform
                              duration-200
                              group-hover:text-blue-600
                            "
                          />

                        </Link>
                      ))}

                    </div>

                  </div>

                </div>
              );
            })}

          </nav>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}
          <div className="flex items-center gap-2 flex-shrink-0">

            {/* SEARCH */}
            <button
              type="button"
              className="
                hidden
                sm:flex
                p-2
                text-white
                hover:text-blue-600
                hover:bg-blue-50
                rounded-lg
                transition
              "
              aria-label="Search"
            >

              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0a7 7 0 0114 0z"
                />
              </svg>

            </button>


            {/* SIGN IN */}
            <Link
              href="/contact"
              className="
                sign-in-gradient-btn
                hidden
                sm:flex
                items-center
                gap-1
              "
            >

              <span>Get In Touch</span>

              <ChevronRightIcon
                className="sign-in-gradient-icon"
                fontSize="small"
              />

            </Link>


            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => {
                setIsOpen(!isOpen);
                setMobileDropdown(null);
              }}
              className="
                lg:hidden
                p-2
                text-gray-700
                hover:text-blue-600
                hover:bg-blue-50
                rounded-lg
                transition
              "
              aria-label="Toggle Menu"
            >

              {isOpen ? (
                <CloseIcon />
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}

            </button>

          </div>

        </div>


        {/* ===================================================
            MOBILE NAVIGATION
        =================================================== */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">

            <nav className="max-w-7xl mx-auto px-4 py-3">

              <div className="flex flex-col">

                {menuItems.map((item) => {

                  const hasDropdown =
                    item.children && item.children.length > 0;

                  /* NORMAL MOBILE LINK */
                  if (!hasDropdown) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href || "#"}
                        onClick={closeMobileMenu}
                        className="
                          flex
                          items-center
                          justify-between
                          px-4
                          py-3
                          text-gray-700
                          font-medium
                          text-sm
                          hover:text-blue-600
                          hover:bg-blue-50
                          rounded-lg
                          transition
                        "
                      >

                        <span>{item.label}</span>

                        <ChevronRightIcon
                          fontSize="small"
                          className="text-gray-400"
                        />

                      </Link>
                    );
                  }


                  /* MOBILE DROPDOWN */
                  const isDropdownOpen =
                    mobileDropdown === item.label;

                  return (
                    <div key={item.label}>

                      <button
                        type="button"
                        onClick={() =>
                          toggleMobileDropdown(item.label)
                        }
                        className="
                          w-full
                          flex
                          items-center
                          justify-between
                          px-4
                          py-3
                          text-gray-700
                          font-medium
                          text-sm
                          hover:text-blue-600
                          hover:bg-blue-50
                          rounded-lg
                          transition
                        "
                      >

                        <span>{item.label}</span>

                        <ExpandMoreIcon
                          fontSize="small"
                          className={`
                            transition-transform
                            duration-300
                            ${
                              isDropdownOpen
                                ? "rotate-180 text-blue-600"
                                : ""
                            }
                          `}
                        />

                      </button>


                      {/* CHILDREN */}
                      <div
                        className={`
                          overflow-hidden
                          transition-all
                          duration-300
                          ${
                            isDropdownOpen
                              ? "max-h-[500px] opacity-100"
                              : "max-h-0 opacity-0"
                          }
                        `}
                      >

                        <div className="ml-4 mb-2 border-l-2 border-blue-100">

                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={closeMobileMenu}
                              className="
                                flex
                                items-center
                                justify-between
                                px-4
                                py-2.5
                                text-sm
                                text-gray-600
                                hover:text-blue-600
                                hover:bg-blue-50
                                transition
                              "
                            >

                              <span>{child.label}</span>

                              <ChevronRightIcon
                                fontSize="small"
                                className="text-gray-400"
                              />

                            </Link>
                          ))}

                        </div>

                      </div>

                    </div>
                  );
                })}


                {/* MOBILE SIGN IN */}
                <div className="pt-3 mt-2 border-t border-gray-100">

                  <Link
                    href="/colleges"
                    onClick={closeMobileMenu}
                    className="
                      sign-in-gradient-btn
                      flex
                      items-center
                      justify-center
                      gap-1
                      w-full
                    "
                  >

                    <span>Sign In</span>

                    <ChevronRightIcon
                      className="sign-in-gradient-icon"
                      fontSize="small"
                    />

                  </Link>

                </div>

              </div>

            </nav>

          </div>
        )}

      </div>

    </header>
  );
}
