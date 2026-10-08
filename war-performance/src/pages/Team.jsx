import mattPhoto from "../assets/images/mattheadshot.jpeg"
import joePhoto from "../assets/images/joe.webp"
import tomPhoto from "../assets/images/tomheadshot.jpeg"
import drewPhoto from "../assets/images/drew.jpeg"
import haroldPhoto from "../assets/images/haroldheadshot.jpeg"
import tonyPhoto from "../assets/images/tony.jpeg"
import colePhoto from "../assets/images/coleheadshot.jpeg"
import gregPhoto from "../assets/images/gregheadshot.jpeg"
import colleenPhoto from "../assets/images/colleen.jpeg"

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
          <a
            className="team-card"
            href="https://book.squareup.com/appointments/eg87olbly7nilu/location/LB3JZQVV0F7HB/services/B7D2UHQPBDV7G7VUMX4VZS4W"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={mattPhoto}
              alt="Matt Chamberlain"
              className="coach-photo"
            />

            <div className="team-card-content">
              <span className="team-role">
                Hitting • Strength • Team Training
              </span>

              <h3>Matt Chamberlain (Founder/Owner)</h3>

              <p>
                A former professional player and experienced coach, Matt
                specializes in hitting, strength development, and team
                training. His experience makes him a strong fit for serious
                high school, college, and professional athletes looking to
                elevate their game.
              </p>
            </div>
          </a>

          {/* TOM ELETTO */}
          <a
            className="team-card"
            href="https://book.squareup.com/appointments/eg87olbly7nilu/location/LB3JZQVV0F7HB/services/O7U7QJTKISI442MDGN4TIACH"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={tomPhoto}
              alt="Tom Eletto"
              className="coach-photo"
            />

            <div className="team-card-content">
              <span className="team-role">
                Pitching Development
              </span>

              <h3>Tom Eletto (Founder/Owner)</h3>

              <p>
                Tom is a pitching specialist with a college baseball
                background who focuses on mechanics, arm care, and velocity
                development. His training helps pitchers build the tools and
                confidence needed to compete at the next level.
              </p>
            </div>
          </a>

          {/* DREW CLARK */}
          <a
            className="team-card"
            href="https://book.squareup.com/appointments/eg87olbly7nilu/location/LB3JZQVV0F7HB/services/GKDRISVUFSXG72CJAQJ6SM7G"
            target="_blank"
            rel="noreferrer"
          >
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
          </a>

          {/* COLE BECK */}
          <a
            className="team-card"
            href="https://book.squareup.com/appointments/eg87olbly7nilu/location/LB3JZQVV0F7HB/services/CDLM6E3FGA4OI7QVLYN4M7MB"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={colePhoto}
              alt="Cole Beck"
              className="coach-photo"
            />

            <div className="team-card-content">
              <span className="team-role">
                Hitting • Catching
              </span>

              <h3>Cole Beck</h3>

              <p>
                Cole is an experienced catching and hitting specialist and
                former college player who works with athletes of all ages.
                His training focuses on developing catching fundamentals,
                defensive skills, hitting mechanics, and offensive approach
                to help athletes become more complete players on both sides
                of the ball.
              </p>
            </div>
          </a>

          {/* HAROLD TREMONT */}
          <a
            className="team-card"
            href="https://book.squareup.com/appointments/eg87olbly7nilu/location/LB3JZQVV0F7HB/services/FJH3TPKHKOROXLFCHO37ZP52"
            target="_blank"
            rel="noreferrer"
          >
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
          </a>

          

          {/* GREG SIDORIS */}
          <a
            className="team-card"
            href="PASTE_GREG_BOOKING_LINK_HERE"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={gregPhoto}
              alt="Greg Sidoris"
              className="coach-photo"
            />

            <div className="team-card-content">
              <span className="team-role">
                Youth Development • Hitting • Baseball Development
              </span>

              <h3>Greg Sidoris</h3>

              <p>
                Greg brings more than 25 years of player-development
                experience as the former owner and operator of Cleveland
                Baseball Academy. He has directed hundreds of camps and
                clinics, provided thousands of private lessons, and managed
                travel programs from 7U through 18U. Greg also developed the
                Little Sluggers youth program, now Diamond Rookies, and was
                inducted into the Cleveland Ohio Softball Hall of Fame in
                2018.
              </p>
            </div>
          </a>

          {/* COLLEEN SPADORA */}
          <a
            className="team-card"
            href="PASTE_COLLEEN_BOOKING_LINK_HERE"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={colleenPhoto}
              alt="Colleen Spadora"
              className="coach-photo"
            />

            <div className="team-card-content">
              <span className="team-role">
                Pitching • Softball Development
              </span>

              <h3>Colleen Spadora</h3>

              <p>
                Colleen brings more than 20 years of pitching instruction and
                coaching experience to WAR Performance. She has provided
                private and group pitching lessons since 2002 and has coached
                athletes at the recreational, travel, middle-school, and
                varsity high-school levels. Colleen is passionate about
                developing pitchers of all skill levels and helping each
                athlete reach their full potential.
              </p>
            </div>
          </a>

          {/* JOE FERRO */}
          <a
            className="team-card"
            href="https://book.squareup.com/appointments/eg87olbly7nilu/location/LB3JZQVV0F7HB/services/AE24XOG3HDXJTOTQOGI7EJT5"
            target="_blank"
            rel="noreferrer"
          >
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
          </a>

          {/* ANTONIO BROWN */}
          <a
            className="team-card"
            href="https://book.squareup.com/appointments/eg87olbly7nilu/location/LB3JZQVV0F7HB/services/WLO3VWMAGQTYJR5YXSVADOUE"
            target="_blank"
            rel="noreferrer"
          >
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
                athletes. Over 100k followers on social media.
              </p>
            </div>
          </a>
          
        </div>
      </section>
    </main>
  )
}

export default Team