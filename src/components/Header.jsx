'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    // { href: '#resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-zinc-900/80 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/new-logo.png"
            alt="Kinal Rami Logo"
            width={120}
            height={20}
            className="h-auto w-auto text-white"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden  md:flex space-x-6 text-xs uppercase font-medium text-gray-800 dark:text-gray-200">
          {navLinks.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => scrollToSection(href.replace('#', ''))}
              className="transition uppercase cursor-pointer"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 dark:text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-40 flex flex-col items-center justify-center gap-6 text-lg font-semibold text-gray-800 dark:text-white transition-all ">
          {navLinks.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => scrollToSection(href.replace('#', ''))}
              className="transition"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
