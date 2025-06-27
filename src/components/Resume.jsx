"use client";
import { useState } from "react";
import Skills from '@/components/Skills'
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function ResumeTabs() {
  const TABS = [
    { label: "Experience", key: "experience" },
    { label: "Professional Skills", key: "skills" },
    { label: "Education", key: "education" },
    { label: "Contacts", key: "contacts" },
  ];

  const experiences = [
    {
      company: "7Span",
      role: "Software Engineer",
      period: "2021 - 2025",
      description: [
        "Implemented UI/UX design given in Figma and ensured cross-browser compatibility.",
        "Worked with modern web application development processes.",
        "Specialized in website design, determining the structure and design of web pages with reusable code that enhances site performance.",
        "Worked to create tools that enhanced user interaction in any browser.",
      ],
    },
  ];

  const education = [
    {
      title: "SSC",
      institute: "Sahajanand Vidhyalaya (Gujarat State Board)",
      year: "2013",
      score: "95.22",
    },
    {
      title: "HSC",
      institute: "Hiraba High School (Gujarat State Board)",
      year: "2015",
      score: "93.72",
    },
    {
      title: "Master of Science (CA & IT)",
      institute: "K.S. School of Bussiness Management",
      year: "2017 - 2021",
      score: "3.25 GPA",
    },
  ];
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 py-16 px-6 md:px-20" id="resume">
      <div className="text-center mb-12">
        <p className="text-sky-500 font-semibold">3+ YEARS OF EXPERIENCE</p>
        <h2 className="text-4xl font-bold text-gray-100 mt-2">My Resume</h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === tab.key
                ? "bg-sky-500 text-white shadow-lg"
                : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto">
        {activeTab === "experience" && (
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((item, idx) => (
              <div
                key={idx}
                className="bg-zinc-800 rounded-lg p-6 border-l-4 border-sky-500 shadow-lg"
              >
                <p className="text-sm text-sky-400 font-medium">{item.period}</p>
                <h3 className="text-lg font-semibold mt-1">{item.company}</h3>
                <p className="text-sm text-gray-400">{item.role}</p>
                <ul className="text-sm text-gray-300 mt-3 list-disc pl-5 space-y-1">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === "skills" && (
          <div>
            <Skills/>
          </div>
        )}

        {activeTab === "education" && (
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-zinc-800 rounded-lg p-6 border-l-4 border-sky-500 shadow-lg"
              >
                <p className="text-sm text-sky-400 font-medium">{edu.year}</p>
                <h3 className="text-lg font-semibold mt-1">{edu.title}</h3>
                <p className="text-sm text-gray-400">{edu.institute}</p>
                <div className="text-sm text-sky-500 mt-3 font-bold">
                  {edu.score}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "contacts" && (
          <div className="text-gray-300 space-y-4">
            <h3 className="text-xl font-semibold text-sky-400">Contact Details</h3>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-sky-400" /> +91 8128349636
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-sky-400" /> ramikinal0501@gmail.com
            </div>
            {/* <div className="flex items-center gap-3">
              <MapPin size={16} className="text-sky-400" /> Ahmedabad
            </div> */}
          </div>
        )}
      </div>
    </section>
  );
}
