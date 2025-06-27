import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="space-y-24 scroll-smooth">
      <Hero/>
      <About />
      <Features/>
      <Projects/>
      <Resume/>
      <Footer/>
    </div>
  )
}
