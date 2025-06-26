'use client'

import { Mail, Phone, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image';

export default function Contact() {
  return (
    <footer id='contact' className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-zinc-300 pt-12 px-6">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 border-b border-zinc-700">
  
  {/* Developer Info  */}
  <div className="order-2 md:order-1">
    {/* <h2 className="text-xl font-bold text-white mb-2">Kinal Rami</h2> */}

    <Link href="/" className=" text-blue-600 tracking-wide">
    <Image
                src="/images/new-logo.png"
                alt="Kinal Rami Logo"
                width={120}
                height={10}
                className=" w-auto text-white"
              />
          {/* Kinal<span className="text-zinc-800 dark:text-white">Rami</span> */}
    </Link>
    <p className="text-sm text-zinc-400 md:max-w-sm">
      Frontend Developer passionate about creating beautiful,
      functional, and user-friendly web experiences.
    </p>
    <div className="flex gap-4 mt-4">
      <Link href="https://github.com/" target="_blank" className="hover:text-white">
        <Github size={22} />
      </Link>
      <Link href="https://linkedin.com/" target="_blank" className="hover:text-white">
        <Linkedin size={22} />
      </Link>
    </div>
  </div>

  {/* Get in Touch  */}
  <div className="order-1 md:order-2 md:ml-auto text-left md:text-right">
    <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
    <div className="flex items-center gap-3 mb-2 md:justify-end">
      <Mail className="text-blue-400" size={20} />
      <span className="text-sm">ramikinal0501@gmail.com</span>
    </div>
    <div className="flex items-center gap-3 md:justify-end">
      <Phone className="text-green-400" size={20} />
      <span className="text-sm">+91 9876543210</span>
    </div>
  </div>
</div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs py-6 text-zinc-500">
        <p>
          Made with <span className="text-red-500">♥</span> by <span className="text-purple-400 font-medium">Kinal</span>
        </p>
        <p>© {new Date().getFullYear()} All rights reserved by Kinal Rami.</p>
      </div>
    </footer>
  )
}
