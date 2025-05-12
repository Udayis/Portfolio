"use client"

import { useState, useEffect } from "react"

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button className={`scroll-to-top ${isVisible ? "" : "hidden"}`} onClick={scrollToTop} aria-label="Scroll to top">
      <i className="bi bi-arrow-up"></i>
    </button>
  )
}

export default ScrollToTop
