"use client"

import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="vh-100 w-100 d-flex align-items-center justify-content-center">
        <div className="d-flex flex-column align-items-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-4 fs-4 fw-medium text-primary">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
