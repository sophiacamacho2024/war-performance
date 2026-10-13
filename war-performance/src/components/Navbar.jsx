
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import warLogo from "../assets/images/warlogomain.png"

function PhoneIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L9.05 10.9a16 16 0 0 0 4.05 4.05l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const closeMenu = () => {
    setMenuOpen(false)
  }

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
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <button
            className="nav-service-link"
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
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="nav-actions">
          <a
            href="tel:5612995804"
            className="nav-phone-button"
            aria-label="Call WAR Performance"
            title="Call WAR Performance"
          >
            <PhoneIcon />
          </a>

          <a
            className="signup-button"
            href="https://www.warperformancefl.com"
            target="_blank"
            rel="noreferrer"
          >
            SIGN UP
          </a>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
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

        {/* PHONE AND CLOSE BUTTON */}
        <div className="mobile-menu-actions">
          <a
            href="tel:5612995804"
            className="mobile-menu-phone"
            aria-label="Call WAR Performance"
            title="Call WAR Performance"
            onClick={closeMenu}
          >
            <PhoneIcon />
          </a>

          <button
            className="close-menu"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            ×
          </button>
        </div>

        {/* MOBILE LOGO */}
        <img
          src={warLogo}
          alt="WAR Performance"
          className="mobile-menu-logo"
        />

        {/* MOBILE NAVIGATION */}
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
