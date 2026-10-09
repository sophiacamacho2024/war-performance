import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import warLogo from "../assets/images/warlogomain.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const closeMenu = () => {
    setMenuOpen(false)
  }

  // Takes the user to the What We Offer section on the homepage
  const goToServices = () => {
    setMenuOpen(false)

    navigate("/")

    setTimeout(() => {
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={warLogo} alt="WAR Performance" />
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <button
            className="nav-service-link"
            onClick={goToServices}
          >
            Services
          </button>

          <Link to="/services">Rentals</Link>

          <Link to="/team">Meet the Team</Link>

          <Link to="/about">WAR Stories</Link>

          <Link to="/faq">FAQ</Link>

          <Link to="/contact">Contact</Link>
        </div>

        <a
          className="signup-button"
          href="https://www.warperformancefl.com"
          target="_blank"
          rel="noreferrer"
        >
          SIGN UP
        </a>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`menu-overlay ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
      />

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button
          className="close-menu"
          onClick={closeMenu}
          aria-label="Close navigation menu"
        >
          ×
        </button>

        <img
          src={warLogo}
          alt="WAR Performance"
          className="mobile-menu-logo"
        />

        <div className="mobile-nav-links">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <button
            className="mobile-service-link"
            onClick={goToServices}
          >
            Services
          </button>

          <Link to="/services" onClick={closeMenu}>
            Rentals
          </Link>

          <Link to="/team" onClick={closeMenu}>
            Meet the Team
          </Link>

          <Link to="/about" onClick={closeMenu}>
            WAR Stories
          </Link>

          <Link to="/faq" onClick={closeMenu}>
            FAQ
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>

          <a
            className="mobile-signup-button"
            href="https://www.warperformancefl.com"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            SIGN UP
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar