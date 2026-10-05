import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Education from '../components/sections/Education'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'
import BuildLogRail from '../components/BuildLogRail'

export default function Home() {
  const { hash } = useLocation()
  const reduceMotion = useReducedMotion()

  // Deep links like /#skills need a beat to land after the route settles.
  useEffect(() => {
    if (!hash) return
    const id = requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      })
    })
    return () => cancelAnimationFrame(id)
  }, [hash, reduceMotion])

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