'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';


export default function Projects() {
  const projects = [
  {
    title: 'Alike.io – Travel Creator Platform',
    description:
      'Social travel booking marketplace developed with Dubai Tourism. Built and maintained custom UIs, booking portals, and onboarding flows.',
    image: '/projects/alikeio.png',
    tech: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'GraphQL'],
    liveUrl: 'https://www.alike.io', 
    repoUrl: null,
  },
  {
    title: 'BuildItIndia – B2B Construction Ecosystem',
    description:
      'Handled frontend architecture for a construction procurement platform. Built full modules like product, order, category, and attribute management.',
    image: '/projects/builditindia.png',
    tech: ['Vue.js', 'GraphQL', 'REST API', 'Tailwind CSS'],
    liveUrl: null,
    repoUrl: null,
  },
  {
    title: 'PolicyLife – Insurance Comparison Tool',
    description:
      'Created dynamic forms and layouts using Directus CMS to help users compare and purchase insurance. Developed profile, quote, and policy flows.',
    image: '/projects/policylife.png',
    tech: ['Nuxt.js', 'Vue.js', 'Directus'],
    liveUrl: null,
    repoUrl: null,
  },
  {
    title: 'Vepaar – WhatsApp Business Tool',
    description:
      'Built a store management interface in the admin panel. Managed user CRUD, CRM workflows, and subscription upgrade flow.',
    image: '/projects/vepaar.png',
    tech: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'SCSS'],
    liveUrl: 'https://www.vepaar.com',
    repoUrl: null,
  },
  {
    title: 'UCSF – Medical Survey Web App',
    description:
      'Survey-based healthcare app for patients and clinics. Designed graphical dashboards, SMS-based survey workflows, and report generators.',
    image: '/projects/ucsf.png',
    tech: ['Vue.js', 'Laravel', 'Tailwind CSS'],
    liveUrl: null,
    repoUrl: null,
  },
  {
    title: 'SPARK – CRM & Inventory System',
    description:
      'Custom CRM to manage milk product orders, inventory, deposits, and delivery trips. Used Quasar and Directus SDK for modular design.',
    image: '/projects/spark-crm.png',
    tech: ['Vue.js', 'Quasar', 'Directus'],
    liveUrl: null,
    repoUrl: null,
  },
  {
    title: '7Span Corporate Site',
    description:
      'Rebuilt the 7Span website using Nuxt 3 and TailwindCSS. Focused on responsive layout, reusable component architecture, and CMS integration.',
    image: '/projects/7span.png',
    tech: ['Nuxt 3', 'Tailwind CSS', 'REST API', 'Directus'],
    liveUrl: 'https://7span.com',
    repoUrl: null,
  },
];

  return (
    <section id="projects" className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1c1c1c] rounded-xl overflow-hidden shadow hover:shadow-sky-500/30 transition"
            >
              <Image src={p.image} alt={p.title} width={400} height={240} className="object-cover w-full h-48" />
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">{p.description}</p>
                <div >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t, i) => (
                      <span key={i} className="text-xs text-grey-300 bg-[#333] px-2 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="View Live">
                        <ExternalLink className="w-5 h-5 hover:text-sky-400 transition" />
                      </a>
                    )}
                    
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
