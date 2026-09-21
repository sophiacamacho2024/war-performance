import { Link } from "react-router-dom"
import warLogo from "../assets/images/warlogomain.png"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo">
            <img src={warLogo} alt="WAR Performance" />
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">What We Offer</Link>
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
    </nav>
  )
}

export default Navbar