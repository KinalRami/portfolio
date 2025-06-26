'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useState } from 'react';

const skillsData = {
  frontend: [
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
  tools: [
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'GitHub', icon: '/icons/github.svg' },
    { name: 'GitLab', icon: '/icons/gitlab.svg' },
    { name: 'VS Code', icon: '/icons/vscode.svg' },
    { name: 'Figma', icon: '/icons/figma.svg' },
    { name: 'Jira', icon: '/icons/jira.svg' },
  ],
  cms: [
    { name: 'Shopify', icon: '/icons/shopify.svg' },
    { name: 'GraphQL', icon: '/icons/graphql.svg' },
  ],
};

export default function SkillsSection() {
  const [tab, setTab] = useState('frontend');

  return (
    <section id="skills" className="bbg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Skills
        </h2>

        <Tabs value={tab} onValueChange={setTab} className="w-full">
         <TabsList className="flex justify-center gap-4 bg-[#181818] dark:bg-[#1c1c1c] p-2 rounded-full mb-10 shadow-md">
            <TabsTrigger
              value="frontend"
              className="data-[state=active]:bg-white data-[state=active]:text-black dark:data-[state=active]:bg-zinc-100 dark:data-[state=active]:text-black px-4 py-2 rounded-full text-sm transition-all"
            >
              Frontend
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="data-[state=active]:bg-white data-[state=active]:text-black dark:data-[state=active]:bg-zinc-100 dark:data-[state=active]:text-black px-4 py-2 rounded-full text-sm transition-all"
            >
              Tools
            </TabsTrigger>
            <TabsTrigger
              value="cms"
              className="data-[state=active]:bg-white data-[state=active]:text-black dark:data-[state=active]:bg-zinc-100 dark:data-[state=active]:text-black px-4 py-2 rounded-full text-sm transition-all"
            >
              CMS
            </TabsTrigger>
          </TabsList>

          {Object.entries(skillsData).map(([category, skills]) => (
            <TabsContent
              key={category}
              value={category}
              className="flex flex-wrap justify-center gap-6"
            >
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="relative group bg-[#1c1c1c] rounded-xl shadow-md hover:shadow-orange-500/30 hover:scale-105 transition-all p-4 w-[70px] h-[70px] flex items-center justify-center"
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
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
