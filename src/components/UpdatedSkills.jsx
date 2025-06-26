'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Skills() {
    const skillsByCategory = {
        Frontend: [
            { name: 'HTML5', icon: '/icons/html5.svg' },
            { name: 'CSS3', icon: '/icons/css3.svg' },
            { name: 'JavaScript', icon: '/icons/javascript.svg' },
            { name: 'Vue.js', icon: '/icons/vue.svg' },
            { name: 'Nuxt.js', icon: '/icons/nuxt.svg' },
            { name: 'React', icon: '/icons/react.svg' },
            { name: 'Next.js', icon: '/icons/nextjs.svg' },
            { name: 'Sass', icon: '/icons/sass.svg' },
            { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
            { name: 'Material UI', icon: '/icons/materialui.svg' },
        ],
        Tools: [
            { name: 'Git', icon: '/icons/git.svg' },
            { name: 'GitHub', icon: '/icons/github.svg' },
            { name: 'GitLab', icon: '/icons/gitlab.svg' },
            { name: 'VS Code', icon: '/icons/vscode.svg' },
            { name: 'Figma', icon: '/icons/figma.svg' },
            { name: 'Jira', icon: '/icons/jira.svg' },
        ],
        CMS: [
            { name: 'Shopify', icon: '/icons/shopify.svg' },
        ],
    };
  return (
    <section id="skills" className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        {Object.entries(skillsByCategory).map(([category, skills], catIdx) => (
          <div key={catIdx} className="mb-12">
            <p className="text-blue-600 uppercase text-sm mb-4">
              {category}
            </p>
            {/* <h3 className="text-2xl font-semibold mb-6">{category}</h3> */}

            <div className="flex flex-wrap gap-5">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="relative group bg-[#1c1c1c] rounded-xl shadow-md hover:shadow-blue-600/30 hover:scale-105 transition-all p-4 w-[70px] h-[70px] flex items-center justify-center"
                  title={skill.name}
                  >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                  <div className="absolute top-full mt-2 w-max px-2 py-1 text-xs bg-black text-white rounded shadow z-10 opacity-0 group-hover:opacity-100 transition-all">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
