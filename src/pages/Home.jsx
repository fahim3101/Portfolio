import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Education from '../components/sections/Education'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'
import BuildLogRail from '../components/BuildLogRail'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50)
      }
    }
  }, [location.hash])

  return (
    <>
      <Hero />
      <BuildLogRail>
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </BuildLogRail>
    </>
  )
}
