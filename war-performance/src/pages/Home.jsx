function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">WAR Performance</p>

          <h1>
  <span className="war-letter">W</span>ORK.{" "}
  <span className="war-letter">A</span>NALYTICS.{" "}
  <span className="war-letter">R</span>ESULTS.
  <br />
  Training for Athletes of All Ages
</h1>

          <p className="hero-text">
            Professional coaching, performance training, and athlete development
            built to help you compete at your highest level.
          </p>

          <div className="hero-buttons">
            <a
              className="primary-button"
              href="https://www.warperformancefl.com"
              target="_blank"
              rel="noreferrer"
            >
              Sign Up Now
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section id="services" className="section services-page">
        <div className="page-header">
          <p className="eyebrow">WAR Performance</p>
          <h2>What We Offer</h2>
          <p>
            Training options designed to help athletes build skills, strength,
            speed, and confidence at every stage of development.
          </p>
        </div>

        <div className="service-grid">

          <a
            className="card"
            href="https://book.squareup.com/classes/eg87olbly7nilu/location/LB3JZQVV0F7HB/classes?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
            target="_blank"
            rel="noreferrer"
          >
            <span className="card-number"></span>
            <h3>Semi-Private Training</h3>
            <p>
              Small-group training that gives athletes individualized coaching
              while developing sport-specific skills in a competitive environment.
            </p>
          </a>

          <a
            className="card"
            href="https://book.squareup.com/classes/eg87olbly7nilu/location/LB3JZQVV0F7HB/classes?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
            target="_blank"
            rel="noreferrer"
          >
            <span className="card-number"></span>
            <h3>Strength Training</h3>
            <p>
              Structured performance training focused on building strength,
              power, durability, and total-body athleticism.
            </p>
          </a>

          <a
            className="card"
            href="https://book.squareup.com/classes/eg87olbly7nilu/location/LB3JZQVV0F7HB/classes?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
            target="_blank"
            rel="noreferrer"
          >
            <span className="card-number"></span>
            <h3>Speed & Agility</h3>
            <p>
              Develop acceleration, quickness, footwork, reaction time, and
              change-of-direction skills to move faster and more efficiently.
            </p>
          </a>

          <a
            className="card"
            href="https://www.warperformancefl.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="card-number"></span>
            <h3>One-on-One Training</h3>
            <p>
              Personalized coaching built around the individual athlete's
              specific skills, goals, strengths, and areas for improvement.
            </p>
          </a>

          <a
            className="card"
            href="https://www.warperformancefl.com/rentals"
            target="_blank"
            rel="noreferrer"
          >
            <span className="card-number"></span>
            <h3>Indoor Facility Rentals</h3>
            <p>
              Reserve indoor training space for individual work, extra reps,
              small groups, or full-team practices and training sessions.
            </p>
          </a>

          <a
            className="card"
            href="https://www.warperformancefl.com/packages"
            target="_blank"
            rel="noreferrer"
          >
            <span className="card-number"></span>
            <h3>6-Week Personalized Development Programs</h3>
            <p>
              Focused six-week programs built around an athlete's individual
              goals with structured coaching and progressive development.
            </p>
          </a>

        </div>
      </section>
    </main>
  )
}

export default Home