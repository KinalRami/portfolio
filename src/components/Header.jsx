'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

 useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10)
  }
  window.addEventListener('scroll', handleScroll)

  const checkTheme = () => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDarkMode(isDark)
  }

  checkTheme()

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handleThemeChange = (e) => setIsDarkMode(e.matches)
  mediaQuery.addEventListener('change', handleThemeChange)

  document.body.style.overflow = isOpen ? 'hidden' : ''

  return () => {
    window.removeEventListener('scroll', handleScroll)
    mediaQuery.removeEventListener('change', handleThemeChange)
    document.body.style.overflow = ''
  }
}, [isOpen])


  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const navLinks = [
    { href: 'hero', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'features', label: 'Features' },
    { href: 'portfolio', label: 'Portfolio' },
    { href: 'resume', label: 'Resume' },
  ]

  const logoSrc =
    isDarkMode ? '/images/logo.png' : !isDarkMode && scrolled ? '/images/logo_light.png' : '/images/logo.png'

  return (
    <header
      className={`fixed top-0 z-[100] w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-zinc-900 shadow-lg md:backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="md:max-w-7xl md:mx-auto px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src={logoSrc}
            alt="Kinal Rami Logo"
            width={120}
            height={20}
            className="h-auto w-auto object-contain transition-all"
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className={`hidden md:flex space-x-6 text-xs uppercase font-medium transition-colors ${
            isDarkMode
              ? 'text-gray-200'
              : scrolled
              ? 'text-gray-800'
              : 'text-white'
          }`}
        >

          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(href.replace('#', ''))
              }}
              className="transition uppercase cursor-pointer hover:text-blue-500"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className={`md:hidden z-[110] relative focus:outline-none transition-colors ${
            isDarkMode ? 'text-white' : scrolled ? 'text-gray-800' : 'text-white'
          }`}

        >
          {isOpen ? <X size={28} className="mr-2" /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Layer */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99]" />
          <div className="fixed inset-0 z-[100] bg-gray-50 dark:bg-zinc-900 w-full h-full flex flex-col items-center justify-center gap-8 text-gray-900 dark:text-white text-lg font-semibold transition-all duration-300 ease-in-out">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(href.replace('#', ''))
                }}
                className="transition-all hover:text-blue-500"
              >
                {label}
              </a>
            ))}
          </div>
        </>
      )}
    </header>
  )
}

