function Services() {
  return (
    <main>
      <section className="page-header">
        <p className="eyebrow">WAR Performance</p>
        <h1>What We Offer</h1>
        <p>
          Complete athlete development built around performance, strength,
          skill, and confidence.
        </p>
      </section>

      <section className="section services-page">
        <div className="service-grid">

          <div className="card">
            <span className="card-number">01</span>
            <h3>Sport-Specific Training</h3>
            <p>
              Focused training designed around the movements, skills, and
              demands athletes need to perform at a higher level.
            </p>
          </div>

          <div className="card">
            <span className="card-number">02</span>
            <h3>Strength Training</h3>
            <p>
              Build strength, power, durability, and athleticism through
              structured performance training.
            </p>
          </div>

          <div className="card">
            <span className="card-number">03</span>
            <h3>Speed & Agility</h3>
            <p>
              Improve quickness, acceleration, movement efficiency, and
              change-of-direction ability.
            </p>
          </div>

          <div className="card">
            <span className="card-number">04</span>
            <h3>Mental Toughness</h3>
            <p>
              Develop confidence, discipline, focus, and the mental tools
              needed to compete under pressure.
            </p>
          </div>

          <div className="card">
            <span className="card-number">05</span>
            <h3>Indoor Facility Rentals</h3>
            <p>
              Train independently in our indoor facility with cage rental
              options for athletes looking for extra reps.
            </p>
          </div>

          <div className="card">
            <span className="card-number">06</span>
            <h3>Personalized Development</h3>
            <p>
              Long-term development plans built around each athlete's goals,
              needs, and performance.
            </p>
          </div>

        </div>
      </section>

      <section className="membership-section">
        <div className="membership-content">

          <p className="eyebrow">Facility Access</p>
          <h2>Unlimited Off-Peak Pass</h2>

          <div className="price">
            <span>$140</span>
            <small>/ month</small>
          </div>

          <p className="membership-description">
            Train on your schedule with unlimited access during designated
            off-peak hours.
          </p>

          <div className="pass-details">

            <div className="pass-detail">
              <h3>Weekdays</h3>
              <p>Before 1 PM & after 8 PM</p>
            </div>

            <div className="pass-detail">
              <h3>Weekends</h3>
              <p>After 12 PM</p>
            </div>

            <div className="pass-detail">
              <h3>Guest Pass</h3>
              <p>Bring a friend and train together.</p>
            </div>

          </div>

          <p className="rental-comparison">
            Normal cage rentals are $75/hour. Train two or more times per
            month and the unlimited pass can pay for itself.
          </p>

          <a
            className="primary-button"
            href="https://www.warperformancefl.com"
            target="_blank"
            rel="noreferrer"
          >
            Get Started
          </a>

        </div>
      </section>
    </main>
  )
}

export default Services