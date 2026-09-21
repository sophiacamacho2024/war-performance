import mattPhoto from "../assets/images/matt.jpeg"
import joePhoto from "../assets/images/joe.webp"
import tomPhoto from "../assets/images/tom.jpeg"
import drewPhoto from "../assets/images/drew.jpeg"
import haroldPhoto from "../assets/images/harold.jpg"
import tonyPhoto from "../assets/images/tony.jpeg"

function Team() {
  return (
    <main>
      <section className="page-header">
        <p className="eyebrow">WAR Performance</p>
        <h1>Meet the Team</h1>

        <p>
          Experienced coaches. Specialized training. One goal: helping every
          athlete reach their full potential.
        </p>
      </section>

      <section className="section team-section">
        <div className="team-grid">

          {/* MATT CHAMBERLAIN */}
          <div className="team-card">
            <img
              src={mattPhoto}
              alt="Matt Chamberlain"
              className="coach-photo"
            />

            <div className="team-card-content">
              <span className="team-role">
                Hitting • Strength • Team Training
              </span>

              <h3>Matt Chamberlain</h3>

              <p>
                A former professional player and experienced coach, Matt
                specializes in hitting, strength development, and team
                training. His experience makes him a strong fit for serious
                high school, college, and professional athletes looking to
                elevate their game.
              </p>
            </div>
          </div>

          {/* JOE FERRO */}
          <div className="team-card">
            <img
              src={joePhoto}
              alt="Joe Ferro"
              className="coach-photo"
            />

            <div className="team-card-content">
              <span className="team-role">
                Hitting Development
              </span>

              <h3>Joe Ferro</h3>

              <p>
                Joe is an experienced hitting specialist and former college
                player who works with athletes of all ages. His training
                focuses on helping hitters improve their mechanics, offensive
                approach, and overall performance at the plate.
              </p>
            </div>
          </div>

          {/* TOM ELETTO */}
          <div className="team-card">
            <img
              src={tomPhoto}
              alt="Tom Eletto"
              className="coach-photo"
            />

            <div className="team-card-content">
              <span className="team-role">
                Pitching Development
              </span>

              <h3>Tom Eletto</h3>

              <p>
                Tom is a pitching specialist with a college baseball
                background who focuses on mechanics, arm care, and velocity
                development. His training helps pitchers build the tools and
                confidence needed to compete at the next level.
              </p>
            </div>
          </div>

          {/* ANTONIO BROWN */}
          <div className="team-card">
            <img
              src={tonyPhoto}
              alt="Antonio Brown"
              className="coach-photo"
            />

            <div className="team-card-content">
              <span className="team-role">
                Hitting • Speed • Agility
              </span>

              <h3>Antonio Brown</h3>

              <p>
                A Division I player and active professional overseas, Antonio
                brings current playing experience into his training. He
                specializes in hitting, speed, agility, and overall player
                development while creating an energetic environment for
                athletes. Over 100k followers on TikTok and Instagram.
              </p>
            </div>
          </div>

          {/* DREW CLARK */}
          <div className="team-card">
            <img
              src={drewPhoto}
              alt="Drew Clark"
              className="coach-photo"
            />

            <div className="team-card-content">
              <span className="team-role">
                Hitting • Pitching • Strength
              </span>

              <h3>Drew Clark</h3>

              <p>
                Drew brings experience from both junior college and NCAA
                Division II baseball. He works across hitting, pitching,
                strength, and conditioning, making his training especially
                valuable for developing athletes looking to improve their
                complete game.
              </p>
            </div>
          </div>

          {/* HAROLD TREMONT */}
          <div className="team-card">
            <img
              src={haroldPhoto}
              alt="Harold Tremont"
              className="coach-photo"
            />

            <div className="team-card-content">
              <span className="team-role">
                Hitting • Youth Development
              </span>

              <h3>Harold Tremont</h3>

              <p>
                A former professional player with baseball and softball
                experience, Harold specializes in hitting and youth
                development. He works especially well with younger athletes
                and offers coaching in both English and Spanish.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

export default Team