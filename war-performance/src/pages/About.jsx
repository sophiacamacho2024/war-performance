
import trackmanPhoto from "../assets/images/trackman.jpeg"
import hittraxPhoto from "../assets/images/hittrax.jpeg"
import blastPhoto from "../assets/images/blast.webp"
import coachesPhoto from "../assets/images/theguys.jpeg"

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

        <div className="about-split-layout">
          {/* COACHES PHOTO - LEFT */}
          <div className="about-coaches-photo">
            <img
              src={coachesPhoto}
              alt="WAR Performance coaching team"
            />
          </div>

          {/* FEATURE CARDS - RIGHT */}
          <div className="about-feature-stack">
            <div className="about-feature">
              <h3>Experienced Coaching</h3>

              <p>
                Train with coaches who bring collegiate, professional, and
                specialized player-development experience to every session.
              </p>
            </div>

            <div className="about-feature">
              <h3>Individual Development</h3>

              <p>
                Training is built around the athlete. We focus on the skills,
                movements, and areas of development that will make the biggest
                difference in their game.
              </p>
            </div>

            <div className="about-feature">
              <h3>Train With Purpose</h3>

              <p>
                We combine quality reps with coaching and performance feedback
                so athletes understand not only what they're working on, but why.
              </p>
            </div>
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
          <h2>Facility Performance Technology</h2>

          <p>
            At WAR Performance, we combine professional coaching with
            advanced technology to help athletes understand their
            performance, identify areas for improvement, and track
            their development.
          </p>

          <div className="facility-features">
            {/* TRACKMAN */}
            <a
              className="technology-card"
              href="https://www.trackman.com/baseball/Portable-B1/what-we-track"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={trackmanPhoto}
                alt="TrackMan performance technology"
                className="technology-card-image"
              />

              <div className="technology-card-content">
                <h3>TrackMan</h3>

                <p>
                  TrackMan uses advanced radar technology to measure
                  pitching and hitting performance, including pitch
                  velocity, spin rate, movement, exit velocity, and
                  launch angle.
                </p>

                <p>
                  These insights help athletes and coaches make
                  data-driven adjustments and monitor measurable progress.
                </p>

                <span className="technology-link">
                  Learn More →
                </span>
              </div>
            </a>

            {/* HITTRAX */}
            <a
              className="technology-card"
              href="https://www.hittrax.com/applications/baseball-softball-training/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={hittraxPhoto}
                alt="HitTrax hitting technology"
                className="technology-card-image"
              />

              <div className="technology-card-content">
                <h3>HitTrax</h3>

                <p>
                  HitTrax provides real-time hitting analytics,
                  measuring exit velocity, launch angle, distance,
                  and simulated ball-flight results.
                </p>

                <p>
                  Athletes can review their performance, compete
                  in game-like training environments, and track
                  improvements through detailed hitting reports.
                </p>

                <span className="technology-link">
                  Learn More →
                </span>
              </div>
            </a>

            {/* BLAST MOTION */}
            <a
              className="technology-card"
              href="https://blastmotion.com/products/baseball/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={blastPhoto}
                alt="Blast Motion swing analysis technology"
                className="technology-card-image"
              />

              <div className="technology-card-content">
                <h3>Blast Motion</h3>

                <p>
                  Blast Motion uses a bat-mounted sensor to analyze
                  swing mechanics, capturing metrics such as bat
                  speed, attack angle, swing path, and time to contact.
                </p>

                <p>
                  With instant feedback, video analysis, and
                  performance tracking, athletes can develop more
                  efficient, powerful, and consistent swings.
                </p>

                <span className="technology-link">
                  Learn More →
                </span>
              </div>
            </a>
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
              "Every coach James has worked with has been absolutely wonderful.
              They are knowledgeable, kind, encouraging, patient, and genuinely
              invested in helping him become a better baseball player."
            </p>

            <strong>— J. Y. / Athlete's Parent</strong>
          </div>

          <div className="story-card">
            <span className="story-quote">“</span>

            <p>
              "I would tell another athlete considering the program that it
              is definitely worth it if they are serious about getting better."
            </p>

            <strong>— A. T. / Athlete</strong>
          </div>

          <div className="story-card">
            <span className="story-quote">“</span>

            <p>
              "I've watched both (of my) boys grow in their skills, confidence,
              discipline, and love for the game. The coaches know how to
              challenge them while still encouraging them, and my boys
              genuinely look forward to being there and getting to work."
            </p>

            <strong>— J. E. / Athlete's Parent</strong>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
