import { Navigate, Route, Routes, useLocation, useNavigationType } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { EASE } from './lib/motion'
import { useScrollRestoration } from './lib/scrollRestoration'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

export default function App() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const reduceMotion = useReducedMotion()

  // Back/forward returns you to the exact spot you left; new pages start at the top.
  useScrollRestoration()

  /*
   * Animating a POP is what makes back-navigation feel broken. Restoring scroll
   * moves the outgoing page off-screen while it is still fading, which reads as
   * a flash of bare background. So back/forward swaps instantly — which is what
   * a native browser does and what people expect — and the transition is kept
   * for going *into* a page, where there is nothing to restore.
   */
  const isPop = navigationType === 'POP'
  const instant = isPop || reduceMotion

  return (
    <div className="flex min-h-screen flex-col bg-paper transition-colors duration-300 dark:bg-paper-d">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:border focus:border-border focus:bg-surface focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-ink dark:focus:border-border-d dark:focus:bg-surface-d dark:focus:text-ink-d"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" className="flex-1">
        {/*
          popLayout, not wait: `wait` unmounts the old page before mounting the
          new one, which leaves a frame or two where the viewport is empty — a
          raw black/white flash on every navigation. popLayout lifts the exiting
          page out of flow and cross-fades, so the two overlap and the frame is
          never empty. It also stops the footer from jumping.
        */}
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={location.pathname}
            initial={instant ? false : { opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.42, ease: EASE },
            }}
            exit={{
              opacity: 0,
              y: reduceMotion ? 0 : -6,
              transition: { duration: instant ? 0 : 0.2, ease: EASE },
            }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              {/* Nothing lives at any other address — send it home rather than
                  leaving Home rendered under a URL that doesn't exist. */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}