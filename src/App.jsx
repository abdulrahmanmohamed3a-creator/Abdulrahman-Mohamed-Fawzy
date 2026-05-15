import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import ToolsGrid from './components/ToolsGrid'
import Certifications from './components/Certifications'
import Education from './components/Education'

import Languages from './components/Languages'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingSocials from './components/FloatingSocials'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <FloatingSocials />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <ToolsGrid />
        <Certifications />
        <Education />

        <Languages />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
