'use client'

import { ChevronUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Contact() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 px-6">
      {/* Bottom bar */}
      <div className="flex flex-col justify-center items-center text-xs py-6 text-gray-500">
        <Link href="/" className="mb-2">
          <Image
            src="/images/logo.png"
            alt="Kinal Rami Logo"
            width={120}
            height={20}
            className="w-auto"
          />
        </Link>
        <p>© {new Date().getFullYear()} All rights reserved by Kinal Rami.</p>
      </div>

      {/* Scroll to Top Arrow */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-zinc-700 hover:bg-zinc-800 text-white shadow-lg transition"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </footer>
  )
}

