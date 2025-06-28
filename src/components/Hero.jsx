'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-background.jpg" 
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority
        className="absolute z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-70 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <h4 className="uppercase text-sm tracking-widest text-gray-400">Frontend Developer • UI Engineer</h4>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-4xl font-bold mt-4 text-gray-200 h-12"
        >
          <Typewriter
            words={[
              'Frontend Developer',
              'Vue & Nuxt Specialist',
              'React & Next Developer',
              'Shopify Designer',
              'Remote Freelancer',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </motion.p>

        <p className="mt-4 text-xs md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
          Building responsive, high-performance websites with<br/> Vue, Nuxt, React, Next & Tailwind.<br />
          Clean code. Pixel-perfect UI. Seamless UX.
        </p>
        

        {/* Social Icons */}
        <div className="flex justify-center mt-6 gap-6 text-white text-xl">
          <a href="https://github.com/KinalRami" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <Github size={22} />
          </a>
          <a href="https://linkedin.com/in/kinal-rami" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <Linkedin size={22} />
          </a>
          {/* <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
            <Twitter size={22} />
          </a> */}
        </div>

        <div className="mt-4 text-sm text-gray-400">
          Available for freelance & remote opportunities
          {/* Open to freelance & remote roles */}
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-1 w-10 left-[calc(50%-6px)] md:left-[calc(50%-10px)] transform -translate-x-1/2 z-20 flex flex-col items-center group animate-bounce"
      >
        <span className="text-[10px] md:text-xs [writing-mode:vertical-rl] text-gray-300 group-hover:text-white uppercase tracking-widest">
          Scroll Down
        </span>
        <ArrowDown className="mt-1 h-3 w-3 text-gray-400 group-hover:text-white" />
      </Link>
  </section>
  );
}
