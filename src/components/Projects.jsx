'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'Alike.io – Travel Creator Platform',
      description:
        'Social travel booking marketplace developed with Dubai Tourism. Built and maintained custom UIs, booking portals, and onboarding flows.',
      image: '/images/alike.png',
      tech: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'GraphQL'],
      liveUrl: 'https://www.alike.io',
    },
    {
      title: 'BuildItIndia – B2B Construction Ecosystem',
      description:
        'Handled frontend architecture for a construction procurement platform. Built full modules like product, order, category, and attribute management.',
      image: '/images/builditindia.png',
      tech: ['Vue.js', 'GraphQL', 'REST API', 'Tailwind CSS'],
      liveUrl: 'https://builditindia.com/',
    },
    {
      title: 'PolicyLife – Insurance Comparison Tool',
      description:
        'Created dynamic forms and layouts using Directus CMS to help users compare and purchase insurance. Developed profile, quote, and policy flows.',
      image: '/images/policylife.png',
      tech: ['Nuxt.js', 'Vue.js', 'Directus'],
      liveUrl: 'https://policylife.ca/',
    },
    {
      title: 'Vepaar – WhatsApp Business Tool',
      description:
        'Built a store management interface in the admin panel. Managed user CRUD, CRM workflows, and subscription upgrade flow.',
      image: '/images/vepaar.png',
      tech: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'SCSS'],
      liveUrl: 'https://www.vepaar.com',
    },
    {
      title: '7Span Corporate Site',
      description:
        'Rebuilt the 7Span website using Nuxt 3 and TailwindCSS. Focused on responsive layout, reusable component architecture, and CMS integration.',
      image: '/images/7span.png',
      tech: ['Nuxt 3', 'Tailwind CSS', 'REST API', 'Directus'],
      liveUrl: 'https://7span.com',
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative before:content-[''] before:block before:h-20 before:-mt-20 before:invisible bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 pt-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sky-500 font-semibold uppercase text-center">Visit my portfolio</p>

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 mt-2">
          My Portfolio
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, idx) => (
            <a
              key={idx}
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${p.title}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-800 rounded-2xl p-4 shadow-lg hover:shadow-sky-600/30 transition cursor-pointer group duration-300 flex flex-col justify-between h-full"
              >
                {/* Image */}
                <div className="bg-white rounded-lg overflow-hidden mb-4 h-48">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={400}
                    height={220}
                    className="w-full h-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>

                {/* Tech stack */}
                <p className="text-xs uppercase text-sky-600 tracking-wide mb-2 font-semibold">
                  {p.tech.join(', ')}
                </p>

                {/* Title */}
                <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-sky-600 leading-snug">
                  {p.title}
                </h3>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
      <hr className="border-t border-zinc-800 dark:border-zinc-700 mt-12 opacity-30" />
    </section>
  );
}
