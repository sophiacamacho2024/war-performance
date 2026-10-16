
import { Link } from "react-router-dom"
import warLogo from "../assets/images/warlogomain.png"

function Footer() {
  return (
    <footer className="war-footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-column footer-brand">
          <img
            src={warLogo}
            alt="WAR Performance"
            className="footer-logo"
          />

          <h3>
            <span>W</span>ORK.{" "}
            <span>A</span>NALYTICS.{" "}
            <span>R</span>ESULTS.
          </h3>

          <p>
            Developing athletes through professional coaching,
            performance technology, and purposeful training.
          </p>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="footer-column">
          <h3>Contact Us</h3>

          <a href="tel:5612995804">
            (561) 299-5804
          </a>

          <a href="mailto:sales@warperformancefl.com">
            sales@warperformancefl.com
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=5801+Congress+Ave+Boca+Raton+FL+33487"
            target="_blank"
            rel="noopener noreferrer"
          >
            5801 Congress Ave
            <br />
            Boca Raton, FL 33487
          </a>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Explore</h3>

          <Link to="/">Home</Link>
          <Link to="/team">Meet the Team</Link>
          <Link to="/services">Rentals</Link>
          <Link to="/about">WAR Stories</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="footer-column">
          <h3>Follow WAR</h3>

          <a
            href="https://www.instagram.com/war_performance_fl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram @war_performance_fl
          </a>

          <a
            href="https://book.warperformancefl.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-book-button"
          >
            SIGN UP
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Eletto Team LLC.
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
