function Contact() {
  return (
    <main>
      <section className="page-header">
        <p className="eyebrow">WAR Performance</p>
        <h1>Get In Touch</h1>

        <p>
          Ready to train or have a question? Get in touch with WAR Performance
          and we'll help you find the right training option.
        </p>
      </section>

      <section className="section contact-section">
        <div className="contact-grid">

          <a href="tel:5612995804" className="contact-card">
            <span className="contact-label">Call Us 📞</span>
            <h3>561-299-5804</h3>
            <p>Give us a call to learn more about training and facility access.</p>
            <span className="contact-link">Call WAR →</span>
          </a>

          <a
            href="mailto:sales@warperformancefl.com"
            className="contact-card"
          >
            <span className="contact-label">Email Us 📧</span>
            <h3>sales@warperformancefl.com</h3>
            <p>
              Send us an email with any questions about training, memberships,
              or the facility.
            </p>
            <span className="contact-link">Send Email →</span>
          </a>

          <a
            href="https://www.instagram.com/war_performance_fl/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-label">Follow Us 🤳</span>
            <h3>@war_performance_fl</h3>
            <p>
              Follow WAR Performance on Instagram for training content,
              facility updates, and athlete development.
            </p>
            <span className="contact-link">View Instagram →</span>
          </a>

          <div className="contact-card">
            <span className="contact-label">Visit Us 📍</span>
            <h3>WAR Performance</h3>
            <p>
              5801 Congress Ave
              <br />
              Boca Raton, FL 33487
            </p>

            <a
              className="contact-link"
              href="https://www.google.com/maps/search/?api=1&query=5801+Congress+Ave+Boca+Raton+FL+33487"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions →
            </a>
          </div>

        </div>
      </section>

      <section className="contact-cta">
        <div className="contact-cta-content">
          <p className="eyebrow">Start Training</p>

          <h2>Ready to get to work?</h2>

          <p>
            Explore WAR Performance training options and find the right
            program for your athlete.
          </p>

          <a
            href="https://www.warperformancefl.com"
            target="_blank"
            rel="noreferrer"
            className="contact-signup-button"
          >
            Sign Up Now
          </a>
        </div>
      </section>
    </main>
  )
}

export default Contact