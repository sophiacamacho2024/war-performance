function About() {
  return (
    <main>
      {/* PAGE HEADER */}
      <section className="page-header">
        <p className="eyebrow">WAR Performance</p>
        <h1>About Us</h1>

        <p>
          More than a place to train. WAR Performance is built to help
          athletes develop their game, understand their performance, and
          reach their potential.
        </p>
      </section>

      {/* WHY TRAIN WITH US */}
      <section className="section about-section">
        <div className="about-heading">
          <p className="eyebrow">The WAR Difference</p>
          <h2>Why Train With Us?</h2>

          <p>
            Every athlete is different. That's why WAR combines experienced
            coaching, individualized development, and performance technology
            to create training that has a purpose.
          </p>
        </div>

        <div className="about-feature-grid">
          <div className="about-feature">
            <span className="card-number"></span>
            <h3>Experienced Coaching</h3>
            <p>
              Train with coaches who bring collegiate, professional, and
              specialized player-development experience to every session.
            </p>
          </div>

          <div className="about-feature">
            <span className="card-number"></span>
            <h3>Individual Development</h3>
            <p>
              Training is built around the athlete. We focus on the skills,
              movements, and areas of development that will make the biggest
              difference in their game.
            </p>
          </div>

          <div className="about-feature">
            <span className="card-number"></span>
            <h3>Train With Purpose</h3>
            <p>
              We combine quality reps with coaching and performance feedback
              so athletes understand not only what they're working on, but why.
            </p>
          </div>
        </div>

        <div className="war-philosophy">
          <h2>
            <span className="war-letter">W</span>ORK.{" "}
            <span className="war-letter">A</span>NALYTICS.{" "}
            <span className="war-letter">R</span>ESULTS.
          </h2>
        </div>
      </section>

      {/* THE FACILITY */}
      <section className="facility-section">
        <div className="facility-content">
          <p className="eyebrow">Built to Develop</p>
          <h2>The Facility</h2>

          <p>
            WAR Performance provides athletes with an indoor training
            environment built for skill development, strength, performance,
            and measurable progress.
          </p>

          <div className="facility-features">
            <div>
              <strong>Indoor Training</strong>
              <span>Dedicated space for year-round development.</span>
            </div>

            <div>
              <strong>Performance Technology</strong>
              <span>
                Data and analytics help athletes better understand their
                performance.
              </span>
            </div>

            <div>
              <strong>Individual & Team Training</strong>
              <span>
                Built for private work, semi-private training, and full-team
                practices.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WAR STORIES */}
      <section className="section stories-section">
        <div className="about-heading">
          <p className="eyebrow">The WAR Community</p>
          <h2>WAR Stories</h2>

          <p>
            The best measure of what we do is the impact it has on our
            athletes and families. Hear from the people who train at WAR.
          </p>
        </div>

        <div className="stories-grid">

          <div className="story-card">
            <span className="story-quote">“</span>

            <p>
              PASTE CUSTOMER TESTIMONIAL OR ATHLETE STORY HERE.
            </p>

            <strong>— CUSTOMER NAME / ATHLETE</strong>
          </div>

          <div className="story-card">
            <span className="story-quote">“</span>

            <p>
              PASTE CUSTOMER TESTIMONIAL OR ATHLETE STORY HERE.
            </p>

            <strong>— CUSTOMER NAME / ATHLETE</strong>
          </div>

          <div className="story-card">
            <span className="story-quote">“</span>

            <p>
              PASTE CUSTOMER TESTIMONIAL OR ATHLETE STORY HERE.
            </p>

            <strong>— CUSTOMER NAME / ATHLETE</strong>
          </div>

        </div>
      </section>
    </main>
  )
}

export default About