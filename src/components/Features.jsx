'use client';

import {
  Search,
  MonitorSmartphone,
  Lightbulb,
  Users,
  BookOpenCheck,
  GaugeCircle,
} from 'lucide-react';

export default function Features() {
  const services = [
    {
      title: 'Optimizing the user experience',
      description:
        'I make certain that I provide users with the best possible website experience through site optimization as a frontend developer.',
      icon: <GaugeCircle className="h-6 w-6 text-sky-500" />,
    },
    {
      title: 'Responsive web design (RWD)',
      description:
        'It is always my job to test the fluidity of the website so that it is rendered well on a variety of devices and browsers.',
      icon: <MonitorSmartphone className="h-6 w-6 text-sky-500" />,
    },
    {
      title: 'Following SEO best practices',
      description:
        'SEO best practices are a set of tasks designed to help improve a website’s search engine rankings.',
      icon: <Search className="h-6 w-6 text-sky-500" />,
    },
    {
      title: 'Problem Solving',
      description:
        'I mostly worked on solving JS/jQuery issues, which used to be not only of my projects but mostly of other colleagues.',
      icon: <Lightbulb className="h-6 w-6 text-sky-500" />,
    },
    {
      title: 'Team Work',
      description:
        'As a team player I always collaborated with other developers to ensure all elements of websites are consistent.',
      icon: <Users className="h-6 w-6 text-sky-500" />,
    },
    {
      title: 'Willingness to learn',
      description:
        'I have a strong willingness to learn and I grasp new concepts and ideas quickly.',
      icon: <BookOpenCheck className="h-6 w-6 text-sky-500" />,
    },
  ];
  return (
    <section id='features' className="relative before:content-[''] before:block before:h-20 before:-mt-20 before:invisible bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 pt-20 px-6">
      <div className='max-w-6xl mx-auto'>
        <p className="text-sky-500 font-semibold uppercase text-center">Features</p>
      <h2 className="text-4xl font-bold mt-2 mb-8 dark:text-white text-center">What I Do</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-zinc-800 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg text-white font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
      </div>
      <hr className="border-t border-zinc-800 dark:border-zinc-700 mt-12 opacity-30" />
    </section>
  );
}
