'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {

  ChevronRight,

} from '@mui/icons-material';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top Bar - Contact Info & Social Media */}
      <div className=" hidden md:block bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-xs md:text-sm">
          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <a href="tel:+919620201999 " className="flex items-center gap-2 hover:text-blue-200 transition">
              <span>📞</span>
              <span> +91 96202 01999 </span>
            </a>
            <a href="mailto:info@pragaticonsultancy.com" className="flex items-center gap-2 hover:text-blue-200 transition">
              <span>✉️</span>
              <span>info@pragaticonsultancy.com</span>
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a href="#facebook" className="hover:text-blue-200 transition" aria-label="Facebook">
              <FacebookIcon fontSize="small" />
            </a>

            <a href="#instagram" className="hover:text-blue-200 transition" aria-label="Instagram">
              <InstagramIcon fontSize="small" />
            </a>

            <a href="#linkedin" className="hover:text-blue-200 transition" aria-label="LinkedIn">
              <LinkedInIcon fontSize="small" />
            </a>

            <a href="#youtube" className="hover:text-blue-200 transition" aria-label="YouTube">
              <YouTubeIcon fontSize="small" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-section border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="relative w-[100px] h-[60px] md:w-[180px] md:h-[50px]">
              <Image
                src="/images/logos/logo.png"
                alt="MBBS in Karnataka Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header-menu hidden lg:flex items-center gap-2 xl:gap-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/courses">Courses</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/colleges">Colleges</NavLink>
            <NavLink href="/blogs">Blogs</NavLink>
            <NavLink href="/compare">Entrance Exams</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </nav>

          {/* Right Side - Search & Sign In */}
          <div className="flex items-center gap-4">
            {/* Search Button */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition text-white" title="Search">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Sign In Button - Desktop */}
            <Link
              href="/colleges"
              className="sign-in-gradient-btn"
            >
              <span>Sign In</span>

              <ChevronRight
                className="sign-in-gradient-icon"
                fontSize="small"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition text-gray-700"
              title="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="lg:hidden bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/courses" onClick={() => setIsOpen(false)}>Courses</MobileNavLink>
            <MobileNavLink href="/services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
            <MobileNavLink href="/colleges" onClick={() => setIsOpen(false)}>Colleges</MobileNavLink>
            <MobileNavLink href="/blogs" onClick={() => setIsOpen(false)}>Blogs</MobileNavLink>
            <MobileNavLink href="/compare" onClick={() => setIsOpen(false)}>Entrance Exams</MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>Contact Us</MobileNavLink>

            {/* Mobile Sign In Button */}
            <Link
              href="/colleges"
              className="sign-in-gradient-btn"
            >
              <span>Sign In</span>

              <ChevronRight
                className="sign-in-gradient-icon"
                fontSize="small"
              />
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

// Desktop Navigation Link Component
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-blue-600 font-medium text-sm py-2 px-3 rounded-lg transition relative group"
    >
      {children}
      <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-blue-600 group-hover:w-[calc(100%-24px)] transition-all duration-300"></span>
    </Link>
  )
}

// Mobile Navigation Link Component
function MobileNavLink({
  href,
  children,
  onClick
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition border-l-4 border-transparent hover:border-blue-600"
    >
      {children}
    </Link>
  )
}
