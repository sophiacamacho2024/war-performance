
import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Team from "./pages/Team"
import Contact from "./pages/Contact"
import FAQ from "./pages/FAQ"
import ScrollToTop from "./components/ScrollToTop"
import Footer from "./components/Footer"

import "./App.css"

const seoData = {
  "/": {
    title: "Baseball & Softball Training Boca Raton | WAR Performance",
    description:
      "WAR Performance offers baseball and softball training in Boca Raton, FL. Private hitting, pitching and catching lessons, batting cages, facility rentals and performance analytics."
  },
  "/about": {
    title: "About WAR Performance | Baseball & Softball Training",
    description:
      "Learn about WAR Performance, our experienced coaches, advanced training technology and approach to developing baseball and softball athletes in Boca Raton."
  },
  "/services": {
    title: "Batting Cage & Facility Rentals Boca Raton | WAR Performance",
    description:
      "Explore batting cage rentals, facility rentals and baseball and softball training opportunities at WAR Performance in Boca Raton, Florida."
  },
  "/team": {
    title: "Baseball & Softball Coaches Boca Raton | WAR Performance",
    description:
      "Meet the experienced baseball and softball coaches at WAR Performance in Boca Raton. Find specialists in hitting, pitching, catching and player development."
  },
  "/contact": {
    title: "Contact WAR Performance | Boca Raton, FL",
    description:
      "Contact WAR Performance at 5801 Congress Avenue in Boca Raton, FL. Ask about baseball and softball lessons, batting cage rentals and training programs."
  },
  "/faq": {
    title: "Frequently Asked Questions | WAR Performance",
    description:
      "Find answers to common questions about WAR Performance baseball and softball training, lessons, scheduling and facility rentals in Boca Raton."
  }
}

function SEO() {
  const { pathname } = useLocation()

  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/"
    const page = seoData[path]

    if (!page) return

    document.title = page.title

    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute("content", page.description)
    }

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute(
        "href",
        `https://www.warperformancefl.com${path === "/" ? "/" : path}`
      )
    }
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SEO />

      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  )
}

export default App
