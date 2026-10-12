import { BrowserRouter, Routes, Route } from "react-router-dom"

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

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

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