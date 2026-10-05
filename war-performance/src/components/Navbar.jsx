import { useState } from "react"
import { Link } from "react-router-dom"
import warLogo from "../assets/images/warlogomain.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={warLogo} alt="WAR Performance" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Rentals</Link>
          <Link to="/team">Meet the Team</Link>
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

        {/* Mobile Hamburger */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          ☰
        </button>
      </nav>

      {/* Dark overlay behind mobile menu */}
      <div
        className={`menu-overlay ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
      />

      {/* Mobile Side Menu */}
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

          <Link to="/services" onClick={closeMenu}>
            Rentals
          </Link>

          <Link to="/team" onClick={closeMenu}>
            Meet the Team
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