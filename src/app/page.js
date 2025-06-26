import Hero from '@/components/Hero'
import About from '@/components/About'
import NewSkills from '@/components/UpdatedSkills'
// import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="space-y-24 scroll-smooth">
      {/* <section id="home" className="min-h-screen p-6">
        <h1 className="text-4xl font-heading text-blue-600">Home Section</h1>
        <p className="text-gray-600">Welcome to my portfolio!</p>
      </section> */}
      <Hero/>
      <About />
      <NewSkills/>
      {/* <Skills/> */}
      <Projects/>
      <Contact/>
    </div>
  )
}
